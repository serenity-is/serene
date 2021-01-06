namespace Serene.BasicSamples {

    @Serenity.Decorators.registerClass()
    export class HardcodedValuesDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey() { return HardcodedValuesForm.formKey; }

        protected form = new HardcodedValuesForm(this.idPrefix);

        constructor() {
            super();

            this.dialogTitle = "Please select some value";

            this.form.SomeValue.changeSelect2(e => {
                Q.notifySuccess("You selected item with key: " + this.form.SomeValue.value);
            });
        }
    }
}