using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serene.Northwind
{
    public partial class MyDummyEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene.Northwind.MyDummyEditor";

        public MyDummyEditorAttribute()
            : base(Key)
        {
        }
    }
}

