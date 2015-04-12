
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

    public partial class MeetingAttendeeForm : PrefixedContext
    {
        public MeetingAttendeeForm(string idPrefix) : base(idPrefix) {}
    
        public IntegerEditor MeetingId { get { return ById<IntegerEditor>("MeetingId"); } }
        public IntegerEditor ContactId { get { return ById<IntegerEditor>("ContactId"); } }
        public IntegerEditor AttendeeTypeId { get { return ById<IntegerEditor>("AttendeeTypeId"); } }
        public IntegerEditor AttendanceStatusId { get { return ById<IntegerEditor>("AttendanceStatusId"); } }
        public StringEditor IsActive { get { return ById<StringEditor>("IsActive"); } }
    }
}

