
namespace Serene.Membership
{
    using jQueryApi;
    using Serenity;
    using System.Html;

    [Panel, FormKey("Membership.ChangePassword")]
    public class ChangePasswordPanel : PropertyPanel<object>
    {
        private ChangePasswordForm form;

        public ChangePasswordPanel(jQueryObject container)
            : base(container)
        {
            form = new ChangePasswordForm(this.IdPrefix);

            form.NewPassword.AddValidationRule(this.UniqueName, e =>
            {
                if (form.ConfirmPassword.Value.Length < 7)
                    return string.Format(Q.Text("Validation.MinRequiredPasswordLength"), 7);

                return null;
            });

            form.ConfirmPassword.AddValidationRule(this.UniqueName, e =>
            {
                if (form.ConfirmPassword.Value != form.NewPassword.Value)
                    return Q.Text("Validation.PasswordConfirmMismatch");

                return null;
            });

            this.ById("SubmitButton").Click((s, e) =>
            {
                e.PreventDefault();

                if (!ValidateForm())
                    return;

                var request = GetSaveEntity();
                Q.ServiceCall(new ServiceCallOptions
                {
                    Url = Q.ResolveUrl("~/Account/ChangePassword"),
                    Request = request.As<ServiceRequest>(),
                    OnSuccess = response =>
                    {
                        Q.Information(Q.Text("Forms.Membership.ChangePassword.Success"), () =>
                        {
                            Window.Location.Href = Q.ResolveUrl("~/");
                        }, new ConfirmOptions());
                    }
                });
            });
        }
    }
}