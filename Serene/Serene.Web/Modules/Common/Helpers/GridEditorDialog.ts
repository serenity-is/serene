namespace Serene.Common {

    @Serenity.Decorators.registerClass()
    export class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty() { return "__id"; }

        public onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>,
            callback: (response: Serenity.SaveResponse) => void) => void;

        public onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>,
            callback: (response: Serenity.DeleteResponse) => void) => void;

        protected destroy() {
            this.onSave = null;
            this.onDelete = null;
            super.destroy();
        }

        protected updateInterface() {
            super.updateInterface();

            // apply changes button doesn't work properly with in-memory grids yet
            if (this.applyChangesButton) {
                this.applyChangesButton.hide();
            }
        }

        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>,
            callback: (response: Serenity.SaveResponse) => void): void {
            this.onSave && this.onSave(options, callback);
        }

        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>,
            callback: (response: Serenity.DeleteResponse) => void): void {
            this.onDelete && this.onDelete(options, callback);
        }
    }
}