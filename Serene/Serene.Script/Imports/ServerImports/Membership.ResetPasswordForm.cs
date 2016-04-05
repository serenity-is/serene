using jQueryApi;
using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace Serene.Membership
{
    public partial class ResetPasswordForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Membership.ResetPassword";

        public ResetPasswordForm(string idPrefix) : base(idPrefix) {}

        public PasswordEditor NewPassword { [InlineCode("{this}.w('NewPassword', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public PasswordEditor ConfirmPassword { [InlineCode("{this}.w('ConfirmPassword', Serenity.CodeGeneration.ExternalType)")] get; private set; }
    }
}

