using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serenity.ComponentModel
{
    public partial class HtmlBasicContentEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serenity.HtmlBasicContentEditor";

        public HtmlBasicContentEditorAttribute()
            : base(Key)
        {
        }

        public Int32 Cols
        {
            get { return GetOption<Int32>("cols"); }
            set { SetOption("cols", value); }
        }

        public Int32 Rows
        {
            get { return GetOption<Int32>("rows"); }
            set { SetOption("rows", value); }
        }
    }
}

