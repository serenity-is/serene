using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serene.Membership
{
    public partial class ResetPasswordPanelAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene.Membership.ResetPasswordPanel";

        public ResetPasswordPanelAttribute()
            : base(Key)
        {
        }
    }
}

