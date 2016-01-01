
namespace Serene.Membership
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Membership.ResetPassword")]
    public class ResetPasswordForm
    {
        [PasswordEditor, Required(true), DisplayName("New Password")]
        public String NewPassword { get; set; }
        [PasswordEditor, Required(true), DisplayName("Confirm Password")]
        public String ConfirmPassword { get; set; }
    }
}