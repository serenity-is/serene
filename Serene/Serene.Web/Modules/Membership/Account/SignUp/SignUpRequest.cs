
namespace Serene.Membership
{
    using Serenity.Services;
    using System;

    public class SignupRequest : ServiceRequest
    {
        public String Username { get; set; }
        public String Email { get; set; }
        public String Password { get; set; }
    }
}