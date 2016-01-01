
namespace Serene.Membership
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Membership.Signup")]
    public class SignupForm
    {
        [DisplayName("Username"), Required(true)]
        public String Username { get; set; }
        [DisplayName("Firstname"), Required(true)]
        public String Firstname { get; set; }
        [DisplayName("Surname"), Required(true)]
        public String Surname { get; set; }
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