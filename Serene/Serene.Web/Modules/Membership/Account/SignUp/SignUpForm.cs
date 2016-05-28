
namespace Serene.Membership
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Membership.SignUp")]
    public class SignUpForm
    {
        [Required(true)]
        public String DisplayName { get; set; }
        [EmailEditor, Required(true)]
        public String Email { get; set; }
        [EmailEditor, Required(true)]
        public String ConfirmEmail { get; set; }
        [PasswordEditor, Required(true)]
        public String Password { get; set; }
        [PasswordEditor, Required(true)]
        public String ConfirmPassword { get; set; }
    }
}
