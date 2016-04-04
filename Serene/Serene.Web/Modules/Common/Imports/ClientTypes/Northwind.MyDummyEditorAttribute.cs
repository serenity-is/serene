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

        public double Option0
        {
            get { return GetOption<double>("option0"); }
            set { SetOption("option0", value); }
        }

        public string Option2
        {
            get { return GetOption<string>("option2"); }
            set { SetOption("option2", value); }
        }

        public string Option3
        {
            get { return GetOption<string>("option3"); }
            set { SetOption("option3", value); }
        }

        public object Option1
        {
            get { return GetOption<string>("option1"); }
            set { SetOption("option1", value); }
        }
    }
}

