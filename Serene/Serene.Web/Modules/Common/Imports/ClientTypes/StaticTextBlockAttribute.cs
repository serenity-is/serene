using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serene
{
    public partial class StaticTextBlockAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene.StaticTextBlock";

        public StaticTextBlockAttribute()
            : base(Key)
        {
        }

        public Boolean HideLabel
        {
            get { return GetOption<Boolean>("hideLabel"); }
            set { SetOption("hideLabel", value); }
        }

        public Boolean IsHtml
        {
            get { return GetOption<Boolean>("isHtml"); }
            set { SetOption("isHtml", value); }
        }

        public Boolean IsLocalText
        {
            get { return GetOption<Boolean>("isLocalText"); }
            set { SetOption("isLocalText", value); }
        }

        public String Text
        {
            get { return GetOption<String>("text"); }
            set { SetOption("text", value); }
        }
    }
}

