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
    public partial class SignUpForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Membership.SignUp";

        public SignUpForm(string idPrefix) : base(idPrefix) {}

        public StringEditor DisplayName { [InlineCode("{this}.w('DisplayName', Serenity.StringEditor)")] get; private set; }
        public EmailEditor Email { [InlineCode("{this}.w('Email', Serenity.EmailEditor)")] get; private set; }
        public EmailEditor ConfirmEmail { [InlineCode("{this}.w('ConfirmEmail', Serenity.EmailEditor)")] get; private set; }
        public PasswordEditor Password { [InlineCode("{this}.w('Password', Serenity.PasswordEditor)")] get; private set; }
        public PasswordEditor ConfirmPassword { [InlineCode("{this}.w('ConfirmPassword', Serenity.PasswordEditor)")] get; private set; }
    }
}

