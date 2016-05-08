namespace Serene.Membership {

    @Serenity.Decorators.registerClass()
    export class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {

        protected getFormKey() { return SignUpForm.formKey; }

        private form: SignUpForm;

        constructor(container: JQuery) {
            super(container);

            this.form = new SignUpForm(this.idPrefix);

            this.form.ConfirmEmail.addValidationRule(this.uniqueName, e => {
                if (this.form.ConfirmEmail.value !== this.form.Email.value) {
                    return Q.text('Validation.EmailConfirm');
                }
            });

            this.form.ConfirmPassword.addValidationRule(this.uniqueName, e => {
                if (this.form.ConfirmPassword.value !== this.form.Password.value) {
                    return Q.text('Validation.PasswordConfirm');
                }
            });

            this.byId('SubmitButton').click(e => {
                e.preventDefault();

                if (!this.validateForm()) {
                    return;
                }

                Q.serviceCall({
                    url: Q.resolveUrl('~/Account/SignUp'),
                    request: {
                        DisplayName: this.form.DisplayName.value,
                        Email: this.form.Email.value,
                        Password: this.form.Password.value
                    },
                    onSuccess: response => {
                        Q.information(Q.text('Forms.Membership.SignUp.Success'), () => {
                            window.location.href = Q.resolveUrl('~/');
                        });
                    }
                });

            });
        }
    }
}