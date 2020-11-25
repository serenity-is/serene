using Serenity;
using Serenity.Abstractions;

namespace Serene.Administration
{
    public class AuthorizationService : IAuthorizationService
    {
        public bool IsLoggedIn
        {
            get { return !string.IsNullOrEmpty(Username); }
        }

        public string Username
        {
            get { return WebSecurityHelper.HttpContextUsername; }
        }
    }
}