namespace Serene.Membership {

    @Serenity.Decorators.registerClass()
    export class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {

        protected getFormKey() { return ChangePasswordForm.formKey; }

        private form: ChangePasswordForm;

        constructor(container: JQuery) {
            super(container);

            this.form = new ChangePasswordForm(this.idPrefix);

            this.form.NewPassword.addValidationRule(this.uniqueName, e => {
                if (this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
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
                Q.serviceCall({
                    url: Q.resolveUrl('~/Account/ChangePassword'),
                    request: request,
                    onSuccess: response => {
                        Q.information(Q.text('Forms.Membership.ChangePassword.Success'), () => {
                            window.location.href = Q.resolveUrl('~/');
                        });
                    }
                });
            });
        }

        getTemplate() {
            return `<div class="s-Panel">
    <h3 class="page-title mb-4 text-center">${Q.text("Forms.Membership.ChangePassword.FormTitle")}</h3>
    <form id="~_Form" action="">
        <div id="~_PropertyGrid"></div>
        <div class="px-field mt-4">
            <button id="~_SubmitButton" type="submit" class="btn btn-primary w-100">
                ${Q.text("Forms.Membership.ChangePassword.SubmitButton")}
            </button>
        </div>
    </form>
</div>`;
        }
    }
}