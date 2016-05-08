
namespace Serene.Membership
{
    using jQueryApi;
    using Serenity;
    using System.Html;
    using System.Runtime.CompilerServices;

    [Imported, Panel, FormKey("Membership.SignUp")]
    public class SignUpPanel : PropertyPanel<SignUpRequest>
    {
        private SignUpForm form;

        public SignUpPanel(jQueryObject container)
            : base(container)
        {
            form = new SignUpForm(this.IdPrefix);

            form.ConfirmPassword.AddValidationRule(this.uniqueName, e =>
            {
                if (form.ConfirmPassword.Value != form.Password.Value)
                    return Q.Text("Validation.PasswordConfirm");

                return null;
            });

            form.ConfirmEmail.AddValidationRule(this.uniqueName, e =>
            {
                if (form.ConfirmEmail.Value != form.Email.Value)
                    return Q.Text("Validation.EmailConfirm");

                return null;
            });

            this.ById("SubmitButton").Click((s, e) =>
            {
                e.PreventDefault();

                if (!ValidateForm())
                    return;

                Q.ServiceCall(new ServiceCallOptions
                {
                    Url = Q.ResolveUrl("~/Account/SignUp"),
                    Request = new SignUpRequest
                    {
                        DisplayName = form.DisplayName.Value,
                        Email = form.Email.Value,
                        Password = form.Password.Value
                    },
                    OnSuccess = response =>
                    {
                        Q.Information(Q.Text("Forms.Membership.SignUp.Success"), () =>
                        {
                            Window.Location.Href = Q.ResolveUrl("~/");
                        }, new ConfirmOptions());
                    }
                });
            });
        }
    }
}