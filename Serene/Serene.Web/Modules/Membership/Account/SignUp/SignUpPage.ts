import { SignUpForm, SignUpRequest } from "@/ServerTypes/Membership";
import { Texts } from "@/ServerTypes/Texts";
import { PropertyPanel } from "@serenity-is/corelib";
import { information, resolveUrl, serviceCall, text } from "@serenity-is/corelib/q";
import { SignUpResponse } from "@/ServerTypes/Membership/SignUpResponse";

$(function () {
    new SignUpPanel($('#SignUpPanel'));
});

class SignUpPanel extends PropertyPanel<SignUpRequest, any> {

    protected getFormKey() { return SignUpForm.formKey; }

    private form: SignUpForm;

    constructor(container: JQuery) {
        super(container);

        this.form = new SignUpForm(this.idPrefix);

        this.form.ConfirmEmail.addValidationRule(this.uniqueName, e => {
            if (this.form.ConfirmEmail.value !== this.form.Email.value) {
                return Texts.Validation.EmailConfirm;
            }
        });

        this.form.ConfirmPassword.addValidationRule(this.uniqueName, e => {
            if (this.form.ConfirmPassword.value !== this.form.Password.value) {
                return text('Validation.PasswordConfirm');
            }
        });

        this.byId('SubmitButton').click(e => {
            e.preventDefault();

            if (!this.validateForm()) {
                return;
            }

            serviceCall({
                url: resolveUrl('~/Account/SignUp'),
                request: {
                    DisplayName: this.form.DisplayName.value,
                    Email: this.form.Email.value,
                    Password: this.form.Password.value
                },
                onSuccess: (response: SignUpResponse) => {
                    if (response.DemoActivationLink) {
                        information("You would normally receive an e-mail with instructions to active your account now.\n\n" +
                            "But as this is a DEMO, you'll be redirected to the activation page automatically. ", () => {
                            window.location.href = resolveUrl(response.DemoActivationLink);
                        });

                        return;
                    }

                    information(Texts.Forms.Membership.SignUp.Success, () => {
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

        <h5 class="text-center my-4">${Texts.Forms.Membership.SignUp.FormTitle}</h5>
        <p class="text-center">${Texts.Forms.Membership.SignUp.FormInfo}</p>

        <form id="~_Form" action="">
            <div id="~_PropertyGrid"></div>
            <div class="px-field">
                <button id="~_SubmitButton" type="submit" class="btn btn-primary my-4 w-100">
                    ${Texts.Forms.Membership.SignUp.SubmitButton}
                </button>
            </div>
        </form>
    </div>`;
    }
}
