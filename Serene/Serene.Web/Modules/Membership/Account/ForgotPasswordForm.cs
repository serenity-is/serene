
namespace Serene.Membership
{
    using Serenity.ComponentModel;
    using Serenity.Services;
    using System;
    using System.ComponentModel;

    [FormScript("Membership.ForgotPassword")]
    [BasedOnRow(typeof(Administration.Entities.UserRow))]
    public class ForgotPasswordForm
    {
        [Required(true), EmailEditor, DisplayName("E-mail Address")]
        public String Email { get; set; }
    }
}