namespace Serene.Northwind {

    @Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
    @Serenity.Decorators.element("<div/>")
    export class NotesEditor extends Serenity.TemplatedWidget<any>
        implements Serenity.IGetEditValue, Serenity.ISetEditValue {

        private isDirty: boolean;
        private items: NoteRow[];

        constructor(div: JQuery) {
            super(div);

            new Serenity.Toolbar(this.byId('Toolbar'), {
                buttons: [{
                    title: 'Add Note',
                    cssClass: 'add-button',
                    onClick: e => {
                        e.preventDefault();
                        this.addClick();
                    }
                }]
            });
        }

        protected getTemplate() {
            return "<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>";
        }

        protected updateContent() {
            var noteList = this.byId('NoteList');
            noteList.children().remove();
            if (ss.isValue(this.items)) {
                var index = 0;
                for (var t1 = 0; t1 < this.items.length; t1++) {
                    var item = this.items[t1];
                    var li = $('<li/>');
                    $('<div/>').addClass('note-text').html(ss.coalesce(item.Text, '')).appendTo(li);

                    $('<a/>').attr('href', '#').addClass('note-date')
                        .text(item.InsertUserDisplayName + ' - ' +
                            Q.formatDate(Q.parseISODateTime(item.InsertDate), 'dd/MM/yyyy HH:mm'))
                        .data('index', index).appendTo(li).click((e) => this.editClick(e));

                    $('<a/>').attr('href', '#').addClass('note-delete')
                        .attr('title', 'delete note').data('index', index)
                        .appendTo(li).click((e) => this.deleteClick(e));

                    li.appendTo(noteList);
                    index++;
                }
            }
        }

        protected addClick() {
            var dlg = new NoteDialog();
            dlg.set_dialogTitle('Add Note');
            dlg.okClick = () => {
                var text = Q.trimToNull(dlg.get_text());
                if (text == null) {
                    return;
                }

                this.items = this.items || [];
                Q.insert(this.items, 0, {
                    Text: text,
                    InsertUserDisplayName: Authorization.userDefinition.DisplayName,
                    InsertDate: Q.formatISODateTimeUTC(new Date())
                });

                this.updateContent();
                dlg.dialogClose();
                this.set_isDirty(true);
                this.onChange && this.onChange();
            };
            dlg.dialogOpen();
        }

        protected editClick(e) {
            e.preventDefault();
            var index = $(e.target).data('index');
            var old = this.items[index];
            var dlg = new NoteDialog();
            dlg.set_dialogTitle('Edit Note');
            dlg.set_text(old.Text);
            dlg.okClick = () => {
                var text = Q.trimToNull(dlg.get_text());
                if (!text) {
                    return;
                }

                this.items[index].Text = text;
                this.updateContent();
                dlg.dialogClose();
                this.set_isDirty(true);
                this.onChange && this.onChange();
            };
            dlg.dialogOpen();
        }

        public deleteClick(e) {
            e.preventDefault();
            var index = $(e.target).data('index');
            Q.confirm('Delete this note?', () => {
                this.items.splice(index, 1);
                this.updateContent();
                this.set_isDirty(true);
                this.onChange && this.onChange();
            });
        }

        public get_value() {
            return this.items;
        }

        public set_value(value) {
            this.items = value || [];
            this.set_isDirty(false);
            this.updateContent();
        }

        public getEditValue(prop: Serenity.PropertyItem, target) {
            target[prop.name] = this.get_value();
        }

        public setEditValue(source, prop: Serenity.PropertyItem) {
            this.set_value(ss.cast(source[prop.name], Array));
        }

        public get_isDirty(): boolean {
            return this.isDirty;
        }

        public set_isDirty(value): void {
            this.isDirty = value;
        }

        public onChange: () => void;
    }
}