using Serenity.ComponentModel;
using System;

namespace Serene.Membership
{
    [FormScript("Membership.SignUp")]
    public class SignUpForm
    {
        [Required(true), Placeholder("Full name")]
        public String DisplayName { get; set; }
        [EmailEditor, Required(true), Placeholder("Email")]
        public String Email { get; set; }
        [EmailEditor, Required(true), Placeholder("Confirm email")]
        public String ConfirmEmail { get; set; }
        [PasswordEditor, Required(true), Placeholder("Password")]
        public String Password { get; set; }
        [PasswordEditor, Required(true), Placeholder("Confirm password")]
        public String ConfirmPassword { get; set; }
    }
}
