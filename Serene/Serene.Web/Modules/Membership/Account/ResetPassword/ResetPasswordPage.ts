import { ResetPasswordForm, ResetPasswordRequest } from "@/ServerTypes/Membership";
import { Texts } from "@/ServerTypes/Texts";
import { PropertyPanel } from "@serenity-is/corelib";
import { format, information, resolveUrl, serviceCall, text } from "@serenity-is/corelib/q";

$(function () {
    new ResetPasswordPanel($('#ResetPasswordPanel'));
});

export class ResetPasswordPanel extends PropertyPanel<ResetPasswordRequest, any> {

    protected getFormKey() { return ResetPasswordForm.formKey; }

    private form: ResetPasswordForm;

    constructor(container: JQuery) {
        super(container);

        this.form = new ResetPasswordForm(this.idPrefix);

        this.form.NewPassword.addValidationRule(this.uniqueName, e => {
            if (this.form.NewPassword.value.length < 7) {
                return format(Texts.Validation.MinRequiredPasswordLength, 7);
            }
        });

        this.form.ConfirmPassword.addValidationRule(this.uniqueName, e => {
            if (this.form.ConfirmPassword.value !== this.form.NewPassword.value) {
                return text('Validation.PasswordConfirm');
            }
        });

        this.byId('SubmitButton').click(e => {
            e.preventDefault();

            if (!this.validateForm())
                return;

            var request = this.getSaveEntity();
            request.Token = this.byId('Token').val();
            serviceCall({
                url: resolveUrl('~/Account/ResetPassword'),
                request: request,
                onSuccess: () => {
                    information(Texts.Forms.Membership.ResetPassword.Success, () => {
                        window.location.href = resolveUrl('~/Account/Login');
                    });
                }
            });
        });
    }

    getTemplate() {
        return `<h2 class="text-center p-4">
    <img src="${resolveUrl("~/Content/site/images/serenity-logo-w-128.png")}"
        class="rounded-circle p-1" style="background-color: var(--s-sidebar-band-bg)"
        width="50" height="50" /> Serene
</h2>

<div class="s-Panel p-4">
    <h5 class="text-center mb-4">${Texts.Forms.Membership.ResetPassword.FormTitle}</h5>
    <form id="~_Form" action="">
        <div id="~_PropertyGrid"></div>
        <button id="~_SubmitButton" type="submit" class="btn btn-primary mx-8 w-100">
            ${Texts.Forms.Membership.ResetPassword.SubmitButton}
        </button>
        <input type="hidden" id="~_Token" value="${(document.getElementById('ResetPasswordToken') as HTMLInputElement).value}" />
    </form>
</div>`;
    }
}