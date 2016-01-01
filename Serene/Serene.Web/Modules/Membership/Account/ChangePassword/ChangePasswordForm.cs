
namespace Serene.Membership
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Membership.ChangePassword")]
    public class ChangePasswordForm
    {
        [PasswordEditor, Required(true), DisplayName("Current Password")]
        public String OldPassword { get; set; }
        [PasswordEditor, Required(true), DisplayName("New Password")]
        public String NewPassword { get; set; }
        [PasswordEditor, Required(true), DisplayName("Confirm Password")]
        public String ConfirmPassword { get; set; }
    }
}