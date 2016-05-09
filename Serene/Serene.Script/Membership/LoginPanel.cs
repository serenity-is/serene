
namespace Serene.Membership
{
    using jQueryApi;
    using Serenity;
    using System.Html;
    using System.Runtime.CompilerServices;

    [Imported, FormKey("Membership.Login")]
    public class LoginPanel : PropertyPanel<LoginRequest>
    {
        public LoginPanel(jQueryObject container)
            : base(container)
        {
            this.ById("LoginButton").Click((s, e) =>
            {
                e.PreventDefault();

                if (!ValidateForm())
                    return;

                var request = GetSaveEntity();
                Q.ServiceCall(new ServiceCallOptions
                {
                    Url = Q.ResolveUrl("~/Account/Login"),
                    Request = request,
                    OnSuccess = response =>
                    {
                        var q = Q.Externals.ParseQueryString();
                        var r = q["returnUrl"] ?? q["ReturnUrl"];
                        if (!string.IsNullOrEmpty(r))
                            Window.Location.Href = r;
                        else
                            Window.Location.Href = Q.ResolveUrl("~/");
                    }
                });

            });
        }
    }
}