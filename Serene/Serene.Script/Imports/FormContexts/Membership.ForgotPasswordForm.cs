
namespace Serene.Membership
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Runtime.CompilerServices;

    public partial class ForgotPasswordForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Membership.ForgotPassword";
    
        public ForgotPasswordForm(string idPrefix) : base(idPrefix) {}
    
        public EmailEditor Email { [InlineCode("{this}.w('Email', Serenity.EmailEditor)")] get; private set; }
    }
}

