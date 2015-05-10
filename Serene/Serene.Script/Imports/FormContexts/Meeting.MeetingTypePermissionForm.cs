
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

    public partial class MeetingTypePermissionForm : PrefixedContext
    {
        public MeetingTypePermissionForm(string idPrefix) : base(idPrefix) {}
    
        public IntegerEditor MeetingTypeId { get { return ById<IntegerEditor>("MeetingTypeId"); } }
        public IntegerEditor UserId { get { return ById<IntegerEditor>("UserId"); } }
    }
}

