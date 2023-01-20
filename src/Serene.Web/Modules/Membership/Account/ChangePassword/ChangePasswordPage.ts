import { ChangePasswordForm, ChangePasswordRequest } from "@/ServerTypes/Membership";
import { Texts } from "@/ServerTypes/Texts";
import { PropertyPanel } from "@serenity-is/corelib";
import { format, information, resolveUrl, serviceCall, localText, htmlEncode } from "@serenity-is/corelib/q";

$(function () {
    new ChangePasswordPanel($('#ChangePasswordPanel'));
});

class ChangePasswordPanel extends PropertyPanel<ChangePasswordRequest, any> {

    protected getFormKey() { return ChangePasswordForm.formKey; }

    private form: ChangePasswordForm;

    constructor(container: JQuery) {
        super(container);

        this.form = new ChangePasswordForm(this.idPrefix);
        this.form.NewPassword.addValidationRule(this.uniqueName, e => {
            if (this.form.ConfirmPassword.value.length < 7) {
                return format(Texts.Validation.MinRequiredPasswordLength, 7);
            }
        });

        this.form.ConfirmPassword.addValidationRule(this.uniqueName, e => {
            if (this.form.ConfirmPassword.value !== this.form.NewPassword.value) {
                return localText('Validation.PasswordConfirm');
            }
        });

        this.byId('SubmitButton').click(e => {
            e.preventDefault();

            if (!this.validateForm())
                return;

            var request = this.getSaveEntity();
            serviceCall({
                url: resolveUrl('~/Account/ChangePassword'),
                request: request,
                onSuccess: () => {
                    information(Texts.Forms.Membership.ChangePassword.Success, () => {
                        window.location.href = resolveUrl('~/');
                    });
                }
            });
        });
    }

    getTemplate() {
        return `<div class="s-Panel">
<h3 class="page-title mb-4 text-center">${htmlEncode(localText("Forms.Membership.ChangePassword.FormTitle"))}</h3>
<form id="~_Form" action="">
    <div id="~_PropertyGrid"></div>
    <div class="px-field mt-4">
        <button id="~_SubmitButton" type="submit" class="btn btn-primary w-100">
            ${htmlEncode(Texts.Forms.Membership.ChangePassword.SubmitButton)}
        </button>
    </div>
</form>
</div>`;
    }
}