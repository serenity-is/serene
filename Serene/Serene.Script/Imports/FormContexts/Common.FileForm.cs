
namespace Serene.Common
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;
    using Serene.Northwind;

    public partial class FileForm : PrefixedContext
    {
        public FileForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor Filename { get { return ById<StringEditor>("Filename"); } }
        public StringEditor OriginalName { get { return ById<StringEditor>("OriginalName"); } }
        public IntegerEditor Size { get { return ById<IntegerEditor>("Size"); } }
        public BooleanEditor IsImage { get { return ById<BooleanEditor>("IsImage"); } }
        public StringEditor IsActive { get { return ById<StringEditor>("IsActive"); } }
        public StringEditor Metadata { get { return ById<StringEditor>("Metadata"); } }
        public StringEditor MimeType { get { return ById<StringEditor>("MimeType"); } }
        public StringEditor OwnerTable { get { return ById<StringEditor>("OwnerTable"); } }
        public StringEditor OwnerId { get { return ById<StringEditor>("OwnerId"); } }
        public StringEditor Title { get { return ById<StringEditor>("Title"); } }
    }
}

