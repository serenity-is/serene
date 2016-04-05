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
    public partial class RoleForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "Administration.Role";

        public RoleForm(string idPrefix) : base(idPrefix) {}

        public StringEditor RoleName { [InlineCode("{this}.w('RoleName', Serenity.CodeGeneration.ExternalType)")] get; private set; }
    }
}

