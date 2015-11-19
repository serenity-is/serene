
namespace Serene.Membership
{
    using Serenity.Services;
    using System;

    public class ForgotPasswordRequest : ServiceRequest
    {
        public String Email { get; set; }
    }
}