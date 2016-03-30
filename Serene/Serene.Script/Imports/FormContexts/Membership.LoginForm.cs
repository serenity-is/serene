
namespace Serene.Membership
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Runtime.CompilerServices;

    public partial class LoginForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Membership.Login";
    
        public LoginForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor Username { [InlineCode("{this}.w('Username', Serenity.StringEditor)")] get; private set; }
        public PasswordEditor Password { [InlineCode("{this}.w('Password', Serenity.PasswordEditor)")] get; private set; }
    }
}

