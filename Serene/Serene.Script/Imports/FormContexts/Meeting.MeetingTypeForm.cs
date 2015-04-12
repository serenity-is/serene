
namespace Serene.Meeting
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;
    using Serene.Northwind;

    public partial class MeetingTypeForm : PrefixedContext
    {
        public MeetingTypeForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor Name { get { return ById<StringEditor>("Name"); } }
        public StringEditor IsActive { get { return ById<StringEditor>("IsActive"); } }
    }
}

