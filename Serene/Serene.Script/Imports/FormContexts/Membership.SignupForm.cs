
namespace Serene.Membership
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class SignUpForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Membership.SignUp";
    
        public SignUpForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor DisplayName { get { return ById<StringEditor>("DisplayName"); } }
        public EmailEditor Email { get { return ById<EmailEditor>("Email"); } }
        public EmailEditor ConfirmEmail { get { return ById<EmailEditor>("ConfirmEmail"); } }
        public PasswordEditor Password { get { return ById<PasswordEditor>("Password"); } }
        public PasswordEditor ConfirmPassword { get { return ById<PasswordEditor>("ConfirmPassword"); } }
    }
}

