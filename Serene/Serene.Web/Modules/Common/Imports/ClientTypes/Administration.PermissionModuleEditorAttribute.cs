using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serene.Administration
{
    public partial class PermissionModuleEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene.Administration.PermissionModuleEditor";

        public PermissionModuleEditorAttribute()
            : base(Key)
        {
        }
    }
}

