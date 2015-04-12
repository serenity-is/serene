
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

    public partial class MeetingAttendeeTypeForm : PrefixedContext
    {
        public MeetingAttendeeTypeForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor Name { get { return ById<StringEditor>("Name"); } }
        public BooleanEditor IsActive { get { return ById<BooleanEditor>("IsActive"); } }
    }
}

