
namespace Serene.Membership
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Membership.SignUp")]
    public class SignUpForm
    {
        [DisplayName("Forms.Membership.SignUp.DisplayName"), Required(true)]
        public String DisplayName { get; set; }
        [DisplayName("Forms.Membership.SignUp.Email"), EmailEditor, Required(true)]
        public String Email { get; set; }
        [DisplayName("Forms.Membership.SignUp.ConfirmEmail"), EmailEditor, Required(true)]
        public String ConfirmEmail { get; set; }
        [DisplayName("Forms.Membership.SignUp.Password"), PasswordEditor, Required(true)]
        public String Password { get; set; }
        [DisplayName("Forms.Membership.SignUp.ConfirmPassword"), PasswordEditor, Required(true)]
        public String ConfirmPassword { get; set; }
    }
}