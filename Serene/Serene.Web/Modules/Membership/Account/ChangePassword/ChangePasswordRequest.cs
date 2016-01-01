
namespace Serene.Membership
{
    using Serenity.Services;
    using System;

    public class ChangePasswordRequest : ServiceRequest
    {
        public String OldPassword { get; set; }
        public String NewPassword { get; set; }
        public String ConfirmPassword { get; set; }
    }
}