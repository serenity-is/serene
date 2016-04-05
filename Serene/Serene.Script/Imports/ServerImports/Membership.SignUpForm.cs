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

        public StringEditor DisplayName { [InlineCode("{this}.w('DisplayName', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public EmailEditor Email { [InlineCode("{this}.w('Email', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public EmailEditor ConfirmEmail { [InlineCode("{this}.w('ConfirmEmail', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public PasswordEditor Password { [InlineCode("{this}.w('Password', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public PasswordEditor ConfirmPassword { [InlineCode("{this}.w('ConfirmPassword', Serenity.CodeGeneration.ExternalType)")] get; private set; }
    }
}

