using Serenity.ComponentModel;
using System;

namespace Serene.BasicSamples
{
    public partial class InlineImageFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "Serene.BasicSamples.InlineImageFormatter";

        public InlineImageFormatterAttribute()
            : base(Key)
        {
        }

        public String FileProperty
        {
            get { return GetOption<String>("fileProperty"); }
            set { SetOption("fileProperty", value); }
        }

        public Boolean Thumb
        {
            get { return GetOption<Boolean>("thumb"); }
            set { SetOption("thumb", value); }
        }
    }
}

