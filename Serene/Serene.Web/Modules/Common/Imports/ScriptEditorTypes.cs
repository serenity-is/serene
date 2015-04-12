
using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serene.Administration
{
    public partial class PermissionCheckEditorAttribute : CustomEditorAttribute
    {
        public PermissionCheckEditorAttribute()
            : base("Serene.Administration.PermissionCheckEditor")
        {
        }
    }

    public partial class PermissionModuleEditorAttribute : CustomEditorAttribute
    {
        public PermissionModuleEditorAttribute()
            : base("Serene.Administration.PermissionModuleEditor")
        {
        }
    }

    public partial class RoleCheckEditorAttribute : CustomEditorAttribute
    {
        public RoleCheckEditorAttribute()
            : base("Serene.Administration.RoleCheckEditor")
        {
        }
    }
}

namespace Serene.Common
{
    public partial class LanguageSelectionAttribute : CustomEditorAttribute
    {
        public LanguageSelectionAttribute()
            : base("Serene.Common.LanguageSelection")
        {
        }
    }
}

namespace Serene.Northwind
{
    public partial class PhoneEditorAttribute : CustomEditorAttribute
    {
        public PhoneEditorAttribute()
            : base("Serene.Northwind.PhoneEditor")
        {
        }
    
        public Boolean Multiple
        {
            get { return GetOption<Boolean>("multiple"); }
            set { SetOption("multiple", value); }
        }
    }
}

