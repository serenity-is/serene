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
        [PasswordEditor, Required(true), DisplayName("New Password"), Placeholder("password")]
        public String NewPassword { get; set; }
        [PasswordEditor, Required(true), DisplayName("Confirm Password"), Placeholder("confirm password")]
        public String ConfirmPassword { get; set; }
    }
}