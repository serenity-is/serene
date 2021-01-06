namespace Serene.Membership {

    @Serenity.Decorators.registerClass()
    export class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {

        protected getFormKey() { return ForgotPasswordForm.formKey; }

        private form: ForgotPasswordForm;

        constructor(container: JQuery) {
            super(container);

            this.form = new ForgotPasswordForm(this.idPrefix);

            this.byId('SubmitButton').click(e => {
                e.preventDefault();

                if (!this.validateForm()) {
                    return;
                }

                var request = this.getSaveEntity();
                Q.serviceCall({
                    url: Q.resolveUrl('~/Account/ForgotPassword'),
                    request: request,
                    onSuccess: response => {
                        Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), () => {
                            window.location.href = Q.resolveUrl('~/');
                        });
                    }
                });
            });
        }
    }
}