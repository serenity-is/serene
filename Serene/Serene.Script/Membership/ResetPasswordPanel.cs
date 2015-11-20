
namespace Serene.Membership
{
    using jQueryApi;
    using Serenity;
    using System.Html;

    [Panel, FormKey("Membership.ResetPassword")]
    public class ResetPasswordPanel : PropertyPanel<ResetPasswordRequest>
    {
        private ResetPasswordForm form;

        public ResetPasswordPanel(jQueryObject container)
            : base(container)
        {
            form = new ResetPasswordForm(this.IdPrefix);

            form.NewPassword.AddValidationRule(this.UniqueName, e =>
            {
                if (form.ConfirmPassword.Value.Length < 7)
                    return string.Format(Q.Text("Validation.MinRequiredPasswordLength"), 7);

                return null;
            });

            form.ConfirmPassword.AddValidationRule(this.UniqueName, e =>
            {
                if (form.ConfirmPassword.Value != form.NewPassword.Value)
                    return Q.Text("Validation.PasswordConfirm");

                return null;
            });

            this.ById("SubmitButton").Click((s, e) =>
            {
                e.PreventDefault();

                if (!ValidateForm())
                    return;

                var request = GetSaveEntity();
                request.Token = this.ById("Token").GetValue();
                Q.ServiceCall(new ServiceCallOptions
                {
                    Url = Q.ResolveUrl("~/Account/ResetPassword"),
                    Request = request,
                    OnSuccess = response =>
                    {
                        Q.Information(Q.Text("Forms.Membership.ResetPassword.Success"), () =>
                        {
                            Window.Location.Href = Q.ResolveUrl("~/Account/Login");
                        }, new ConfirmOptions());
                    }
                });
            });
        }
    }
}