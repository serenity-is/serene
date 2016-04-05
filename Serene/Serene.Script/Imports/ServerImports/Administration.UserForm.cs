using jQueryApi;
using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace Serene.Administration
{
    public partial class UserForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Administration.User";

        public UserForm(string idPrefix) : base(idPrefix) {}

        public StringEditor Username { [InlineCode("{this}.w('Username', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor DisplayName { [InlineCode("{this}.w('DisplayName', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public EmailEditor Email { [InlineCode("{this}.w('Email', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public PasswordEditor Password { [InlineCode("{this}.w('Password', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public PasswordEditor PasswordConfirm { [InlineCode("{this}.w('PasswordConfirm', Serenity.CodeGeneration.ExternalType)")] get; private set; }
        public StringEditor Source { [InlineCode("{this}.w('Source', Serenity.CodeGeneration.ExternalType)")] get; private set; }
    }
}

