
namespace Serene.Membership
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Membership.SignUp")]
    public class SignUpForm
    {
        [DisplayName("Full Name"), Required(true)]
        public String DisplayName { get; set; }
        [DisplayName("E-mail"), EmailEditor, Required(true)]
        public String Email { get; set; }
        [DisplayName("Confirm Email"), EmailEditor, Required(true)]
        public String ConfirmEmail { get; set; }
        [DisplayName("Password"), PasswordEditor, Required(true)]
        public String Password { get; set; }
        [DisplayName("Confirm Password"), PasswordEditor, Required(true)]
        public String ConfirmPassword { get; set; }
    }
}