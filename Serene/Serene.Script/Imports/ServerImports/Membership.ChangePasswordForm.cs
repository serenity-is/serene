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
    public partial class ChangePasswordForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Membership.ChangePassword";

        public ChangePasswordForm(string idPrefix) : base(idPrefix) {}

        public PasswordEditor OldPassword { [InlineCode("{this}.w('OldPassword', Serenity.PasswordEditor)")] get; private set; }
        public PasswordEditor NewPassword { [InlineCode("{this}.w('NewPassword', Serenity.PasswordEditor)")] get; private set; }
        public PasswordEditor ConfirmPassword { [InlineCode("{this}.w('ConfirmPassword', Serenity.PasswordEditor)")] get; private set; }
    }
}

