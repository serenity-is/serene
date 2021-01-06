namespace Serene.BasicSamples {

    @Serenity.Decorators.registerClass()
    export class StaticTextBlockDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey() { return StaticTextBlockForm.formKey; }

        protected form = new StaticTextBlockForm(this.idPrefix);

        constructor() {
            super();

            this.dialogTitle = "A form with static text blocks";
        }

        /**
         * Here we override loadInitialEntity method to set value for "DisplayFieldValue" field.
         * If this was an EntityDialog, your field value would be originating from server side entity.
         */
        protected loadInitialEntity() {
            this.propertyGrid.load({
                DisplayFieldValue: 'This content comes from <b>the value</b> of <em>DisplayFieldValue</em> field.'
            });
        }

        protected getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.width = 650;
            return opt;
        }
    }
}