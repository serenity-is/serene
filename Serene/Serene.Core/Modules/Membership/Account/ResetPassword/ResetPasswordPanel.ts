namespace Serene.Membership {

    @Serenity.Decorators.registerClass()
    export class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {

        protected getFormKey() { return ResetPasswordForm.formKey; }

        private form: ResetPasswordForm;

        constructor(container: JQuery) {
            super(container);

            this.form = new ResetPasswordForm(this.idPrefix);

            this.form.NewPassword.addValidationRule(this.uniqueName, e => {
                if (this.form.NewPassword.value.length < 7) {
                    return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                }
            });

            this.form.ConfirmPassword.addValidationRule(this.uniqueName, e => {
                if (this.form.ConfirmPassword.value !== this.form.NewPassword.value) {
                    return Q.text('Validation.PasswordConfirm');
                }
            });

            this.byId('SubmitButton').click(e => {
                e.preventDefault();

                if (!this.validateForm()) {
                    return;
                }

                var request = this.getSaveEntity();
                request.Token = this.byId('Token').val();
                Q.serviceCall({
                    url: Q.resolveUrl('~/Account/ResetPassword'),
                    request: request,
                    onSuccess: response => {
                        Q.information(Q.text('Forms.Membership.ResetPassword.Success'), () => {
                            window.location.href = Q.resolveUrl('~/Account/Login');
                        });
                    }
                });

            });
        }
    }
}