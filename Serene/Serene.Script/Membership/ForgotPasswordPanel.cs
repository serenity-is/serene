
namespace Serene.Membership
{
    using jQueryApi;
    using Serenity;
    using System.Html;

    [Panel, FormKey("Membership.ForgotPassword")]
    public class ForgotPasswordPanel : PropertyPanel<ForgotPasswordRequest>
    {
        public ForgotPasswordPanel(jQueryObject container)
            : base(container)
        {
            this.ById("SubmitButton").Click((s, e) =>
            {
                e.PreventDefault();

                if (!ValidateForm())
                    return;

                var request = GetSaveEntity();
                Q.ServiceCall(new ServiceCallOptions
                {
                    Url = Q.ResolveUrl("~/Account/ForgotPassword"),
                    Request = request,
                    OnSuccess = response =>
                    {
                        Q.Information(Q.Text("Forms.Membership.ForgotPassword.Success"), () =>
                        {
                            Window.Location.Href = Q.ResolveUrl("~/");
                        }, new ConfirmOptions());
                    }
                });
            });
        }
    }
}