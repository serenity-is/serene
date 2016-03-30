
namespace Serene.Administration
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Runtime.CompilerServices;

    public partial class RoleForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Administration.Role";
    
        public RoleForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor RoleName { [InlineCode("{this}.w('RoleName', Serenity.StringEditor)")] get; private set; }
    }
}

