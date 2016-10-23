
namespace Serene.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;

    [FormScript("Membership.Login")]
    [BasedOnRow(typeof(Administration.Entities.UserRow))]
    public class LoginRequest : ServiceRequest
    {
        [Placeholder("default username is 'admin'")]
        public string Username { get; set; }
        [PasswordEditor, Placeholder("default password for admin user is 'serenity'"), Required(true)]
        public string Password { get; set; }
    }
}