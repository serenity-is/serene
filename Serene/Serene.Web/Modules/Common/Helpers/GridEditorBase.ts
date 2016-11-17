﻿namespace Serene.Common {

    @Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue])
    @Serenity.Decorators.editor()
    @Serenity.Decorators.element("<div/>")
    export class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any>
        implements Serenity.IGetEditValue, Serenity.ISetEditValue {

        protected getIdProperty() { return "__id"; }

        private nextId = 1;

        constructor(container: JQuery) {
            super(container);
        }

        protected id(entity: TEntity) {
            return (entity as any)[this.getIdProperty()];
        }

        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void) {
            var request = opt.request as Serenity.SaveRequest<TEntity>;
            var row = Q.deepClone(request.Entity);

            var id = this.id(row);
            if (id == null) {
                (row as any)[this.getIdProperty()] = "`" + this.nextId++;
            }

            if (!this.validateEntity(row, id)) {
                return;
            }

            var items = this.view.getItems().slice();
            if (id == null) {
                items.push(row);
            }
            else {
                var index = Q.indexOf(items, x => this.id(x) === id);
                items[index] = Q.deepClone({} as TEntity, items[index], row);
            }

            this.setEntities(items);
            callback({});
        }

        protected deleteEntity(id: number) {
            this.view.deleteItem(id);
            return true;
        }

        protected validateEntity(row: TEntity, id: number) {
            return true;
        }

        protected setEntities(items: TEntity[]) {
            this.view.setItems(items, true);
        }

        protected getNewEntity(): TEntity {
            return {} as TEntity;
        }

        protected getButtons(): Serenity.ToolButton[] {
            return [{
                title: this.getAddButtonCaption(),
                cssClass: 'add-button',
                onClick: () => {
                    this.createEntityDialog(this.getItemType(), dlg => {
                        var dialog = dlg as GridEditorDialog<TEntity>;
                        dialog.onSave = (opt, callback) => this.save(opt, callback);
                        dialog.loadEntityAndOpenDialog(this.getNewEntity());
                    });
                }
            }];
        }

        protected editItem(entityOrId: any): void {

            var id = entityOrId;
            var item = this.view.getItemById(id);
            this.createEntityDialog(this.getItemType(), dlg => {
                var dialog = dlg as GridEditorDialog<TEntity>;
                dialog.onDelete = (opt, callback) => {
                    if (!this.deleteEntity(id)) {
                        return;
                    }
                    callback({});
                };

                dialog.onSave = (opt, callback) => this.save(opt, callback);
                dialog.loadEntityAndOpenDialog(item);
            });;
        }

        public getEditValue(property, target) {
            target[property.name] = this.value;
        }

        public setEditValue(source, property) {
            this.value = source[property.name];
        }

        public get value(): TEntity[] {
            var p = this.getIdProperty();
            return this.view.getItems().map(x => {
                var y = Q.deepClone(x);
                var id = y[p];
                if (id && id.toString().charAt(0) == '`')
                    delete y[p];
                return y;
            });
        }

        public set value(value: TEntity[]) {
            var p = this.getIdProperty();
            this.view.setItems((value || []).map(x => {
                var y = Q.deepClone(x);
                if ((y as any)[p] == null)
                    (y as any)[p] = "`" + this.nextId++;
                return y;
            }), true);
        }

        protected getGridCanLoad() {
            return false;
        }

        protected usePager() {
            return false;
        }

        protected getInitialTitle() {
            return null;
        }

        protected createQuickSearchInput() {
        }
    }
}