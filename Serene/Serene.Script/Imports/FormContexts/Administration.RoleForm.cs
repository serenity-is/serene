
namespace Serene.Administration
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;
    using Serene.Northwind;

    public partial class RoleForm : PrefixedContext
    {
        public RoleForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor RoleName { get { return ById<StringEditor>("RoleName"); } }
    }
}

