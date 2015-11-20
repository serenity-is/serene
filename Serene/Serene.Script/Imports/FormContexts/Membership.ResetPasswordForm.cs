
namespace Serene.Membership
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class ResetPasswordForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Membership.ResetPassword";
    
        public ResetPasswordForm(string idPrefix) : base(idPrefix) {}
    
        public PasswordEditor NewPassword { get { return ById<PasswordEditor>("NewPassword"); } }
        public PasswordEditor ConfirmPassword { get { return ById<PasswordEditor>("ConfirmPassword"); } }
    }
}

