namespace Serene.Administration {

    @Serenity.Decorators.registerClass()
    export class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty() { return "Key"; }
        protected getLocalTextPrefix() { return "Administration.Translation"; }
        protected getService() { return TranslationService.baseUrl; }

        private hasChanges: boolean;
        private searchText: string;
        private sourceLanguage: Serenity.LookupEditor; 
        private targetLanguage: Serenity.LookupEditor;
        private targetLanguageKey: string;

        constructor(container: JQuery) {
            super(container);

            this.element.on('keyup.' + this.uniqueName + ' change.' + this.uniqueName,
                'input.custom-text', e =>
            {
                var value = Q.trimToNull($(e.target).val());
                if (value === '') {
                    value = null;
                }
                this.view.getItemById($(e.target).data('key')).CustomText = value;
                this.hasChanges = true;
            });
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number): any {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented()) {
                return;
            }

            let item = this.itemAt(row);
            let done: () => void;

            if ($(e.target).hasClass('source-text')) {
                e.preventDefault();
                
                done = () => {
                    item.CustomText = item.SourceText;
                    this.view.updateItem(item.Key, item);
                    this.hasChanges = true;
                };

                if (Q.isTrimmedEmpty(item.CustomText) ||
                    (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                    done();
                    return;
                }

                Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                return;
            }

            if ($(e.target).hasClass('target-text')) {
                e.preventDefault();

                done = () => {
                    item.CustomText = item.TargetText;
                    this.view.updateItem(item.Key, item);
                    this.hasChanges = true;
                };

                if (Q.isTrimmedEmpty(item.CustomText) ||
                    (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                    done();
                    return;
                }

                Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                return;
            }
        }

        protected getColumns(): Slick.Column[] {

            var columns: Slick.Column[] = [];
            columns.push({ field: 'Key', width: 300, sortable: false });

            columns.push({
                field: 'SourceText',
                width: 300,
                sortable: false,
                format: ctx => {
                    return Q.outerHtml($('<a/>')
                        .addClass('source-text')
                        .text(ctx.value || ''));
                }
            });

            columns.push({
                field: 'CustomText',
                width: 300,
                sortable: false,
                format: ctx => Q.outerHtml($('<input/>')
                    .addClass('custom-text')
                    .attr('value', ctx.value)
                    .attr('type', 'text')
                    .attr('data-key', ctx.item.Key))
            });

            columns.push({
                field: 'TargetText',
                width: 300,
                sortable: false,
                format: ctx => Q.outerHtml($('<a/>')
                    .addClass('target-text')
                    .text(ctx.value || ''))
            });

            return columns;
        }

        protected createToolbarExtensions(): void {
            super.createToolbarExtensions();

            let opt: Serenity.LookupEditorOptions = {
                lookupKey: 'Administration.Language'
            };

            this.sourceLanguage = Serenity.Widget.create({
                type: Serenity.LookupEditor,
                element: el => el.appendTo(this.toolbar.element).attr('placeholder', '--- ' +
                    Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'),
                options: opt
            });

            this.sourceLanguage.changeSelect2(e => {
                if (this.hasChanges) {
                    this.saveChanges(this.targetLanguageKey).then(() => this.refresh());
                }
                else {
                    this.refresh();
                }
            });

            this.targetLanguage = Serenity.Widget.create({
                type: Serenity.LookupEditor,
                element: el => el.appendTo(this.toolbar.element).attr('placeholder', '--- ' +
                    Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'),
                options: opt
            });

            this.targetLanguage.changeSelect2(e => {
                if (this.hasChanges) {
                    this.saveChanges(this.targetLanguageKey).then(() => this.refresh());
                }
                else {
                    this.refresh();
                }
            });
        }

        protected saveChanges(language: string): RSVP.Promise<any> {
            var translations: { [key: string]: string } = {};
            for (let item of this.getItems()) {
                translations[item.Key] = item.CustomText;
            }

            return RSVP.resolve(TranslationService.Update({
                TargetLanguageID: language,
                Translations: translations
            })).then(() => {
                this.hasChanges = false;
                language = Q.trimToNull(language) || 'invariant';
                Q.notifySuccess('User translations in "' + language +
                    '" language are saved to "user.texts.' +
                    language + '.json" ' + 'file under "~/App_Data/texts/"', '');
            });
        }

        protected onViewSubmit(): boolean {
            var request = this.view.params;
            request.SourceLanguageID = this.sourceLanguage.value;
            this.targetLanguageKey = this.targetLanguage.value || '';
            request.TargetLanguageID = this.targetLanguageKey;
            this.hasChanges = false;
            return super.onViewSubmit();
        }
    
        protected getButtons(): Serenity.ToolButton[] {
            return [{
                title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                onClick: e => this.saveChanges(this.targetLanguageKey).then(() => this.refresh()),
                cssClass: 'apply-changes-button'
            }];
        }

        protected createQuickSearchInput() {
            Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element,
                (field, searchText) => {
                    this.searchText = searchText;
                    this.view.setItems(this.view.getItems(), true);
                });
        }

        protected onViewFilter(item: TranslationItem) {
            if (!super.onViewFilter(item)) {
                return false;
            }

            if (!this.searchText) {
                return true;
            }

            var sd = Select2.util.stripDiacritics;
            var searching = sd(this.searchText).toLowerCase();

            function match(str: string) {
                if (!str)
                    return false;

                return str.toLowerCase().indexOf(searching) >= 0;
            }

            return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                match(item.TargetText) || match(item.CustomText);
        }

        protected usePager() {
            return false;
        }
    }
}