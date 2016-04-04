using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serene.Northwind
{
    public partial class MyBoldFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "Serene.Northwind.MyBoldFormatter";

        public MyBoldFormatterAttribute()
            : base(Key)
        {
        }
    }
}

