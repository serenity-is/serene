using Serenity.ComponentModel;
using Serenity.Services;
using System;
using System.ComponentModel;

namespace Serene.Membership
{
    [FormScript("Membership.ResetPassword")]
    public class ResetPasswordRequest : ServiceRequest
    {
        [Ignore]
        public String Token { get; set; }
        [PasswordEditor, Required(true), DisplayName("New Password")]
        public String NewPassword { get; set; }
        [PasswordEditor, Required(true), DisplayName("Confirm Password")]
        public String ConfirmPassword { get; set; }
    }
}