
namespace Serene.Membership
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class SignupForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Membership.Signup";
    
        public SignupForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor Username { get { return ById<StringEditor>("Username"); } }
        public StringEditor Firstname { get { return ById<StringEditor>("Firstname"); } }
        public StringEditor Surname { get { return ById<StringEditor>("Surname"); } }
        public EmailEditor Email { get { return ById<EmailEditor>("Email"); } }
        public EmailEditor ConfirmEmail { get { return ById<EmailEditor>("ConfirmEmail"); } }
        public PasswordEditor Password { get { return ById<PasswordEditor>("Password"); } }
        public PasswordEditor ConfirmPassword { get { return ById<PasswordEditor>("ConfirmPassword"); } }
    }
}

