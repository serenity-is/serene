
namespace Serene.Membership
{
    using Serenity.Services;
    using System;

    public class ResetPasswordRequest : ServiceRequest
    {
        public String Token { get; set; }
        public String NewPassword { get; set; }
        public String ConfirmPassword { get; set; }
    }
}