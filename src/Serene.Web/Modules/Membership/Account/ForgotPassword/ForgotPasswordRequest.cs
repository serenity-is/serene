using Serenity.ComponentModel;
using Serenity.Services;
using System;
using System.ComponentModel;

namespace Serene.Membership
{
    [FormScript("Membership.ForgotPassword")]
    public class ForgotPasswordRequest : ServiceRequest
    {
        [Required(true), EmailAddressEditor, DisplayName("E-mail Address"), Placeholder("e-mail")]
        public String Email { get; set; }
    }
}