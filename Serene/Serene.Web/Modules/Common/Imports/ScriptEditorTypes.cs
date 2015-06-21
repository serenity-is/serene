
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
        public const string Key = "Serene.Administration.PermissionCheckEditor";
    
        public PermissionCheckEditorAttribute()
            : base(Key)
        {
        }
    }

    public partial class PermissionModuleEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene.Administration.PermissionModuleEditor";
    
        public PermissionModuleEditorAttribute()
            : base(Key)
        {
        }
    }

    public partial class RoleCheckEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene.Administration.RoleCheckEditor";
    
        public RoleCheckEditorAttribute()
            : base(Key)
        {
        }
    }
}

namespace Serene.Common
{
    public partial class LanguageSelectionAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene.Common.LanguageSelection";
    
        public LanguageSelectionAttribute()
            : base(Key)
        {
        }
    }
}

namespace Serene.Northwind
{
    public partial class PhoneEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene.Northwind.PhoneEditor";
    
        public PhoneEditorAttribute()
            : base(Key)
        {
        }
    
        public Boolean Multiple
        {
            get { return GetOption<Boolean>("multiple"); }
            set { SetOption("multiple", value); }
        }
    }
}

