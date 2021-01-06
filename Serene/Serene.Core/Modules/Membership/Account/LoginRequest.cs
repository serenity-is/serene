using Serenity.ComponentModel;
using Serenity.Services;

namespace Serene.Membership
{
    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow), CheckNames = true)]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("default username is 'admin'")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder("default password for 'admin' is 'serenity'"), Required(true)]
        public string Password { get; set; }
    }
}