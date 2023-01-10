using Serenity.ComponentModel;
using System;

namespace Serene.Membership
{
    [FormScript("Membership.SignUp")]
    public class SignUpForm
    {
        [Required(true), Placeholder("full name")]
        public String DisplayName { get; set; }
        [EmailAddressEditor, Required(true), Placeholder("e-mail")]
        public String Email { get; set; }
        [EmailAddressEditor, Required(true), Placeholder("confirm email")]
        public String ConfirmEmail { get; set; }
        [PasswordEditor, Required(true), Placeholder("password")]
        public String Password { get; set; }
        [PasswordEditor, Required(true), Placeholder("confirm password")]
        public String ConfirmPassword { get; set; }
    }
}
