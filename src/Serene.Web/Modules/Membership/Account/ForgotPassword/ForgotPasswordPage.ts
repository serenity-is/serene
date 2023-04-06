import { ForgotPasswordForm, ForgotPasswordRequest } from "@/ServerTypes/Membership";
import { Texts } from "@/ServerTypes/Texts";
import { PropertyPanel } from "@serenity-is/corelib";
import { htmlEncode, information, resolveUrl, serviceCall } from "@serenity-is/corelib/q";

$(function () {
    new ForgotPasswordPanel($('#ForgotPasswordPanel'));
});

export class ForgotPasswordPanel extends PropertyPanel<ForgotPasswordRequest, any> {

    protected getFormKey() { return ForgotPasswordForm.formKey; }

    constructor(container: JQuery) {
        super(container);

        this.byId('SubmitButton').click(e => {
            e.preventDefault();

            if (!this.validateForm())
                return;

            var request = this.getSaveEntity();
            serviceCall({
                url: resolveUrl('~/Account/ForgotPassword'),
                request: request,
                onSuccess: response => {
                    information(Texts.Forms.Membership.ForgotPassword.SuccessMessage, () => {
                        window.location.href = resolveUrl('~/');
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
    <h5 class="text-center mb-4">${htmlEncode(Texts.Forms.Membership.ForgotPassword.FormTitle)}</h5>
    <p class="text-center">${htmlEncode(Texts.Forms.Membership.ForgotPassword.FormInfo)}</p>
    <form id="~_Form" action="">
        <div id="~_PropertyGrid"></div>
        <button id="~_SubmitButton" type="submit" class="btn btn-primary mx-8 w-100">
            ${htmlEncode(Texts.Forms.Membership.ForgotPassword.SubmitButton)}
        </button>
    </form>
</div>`;
    }
}