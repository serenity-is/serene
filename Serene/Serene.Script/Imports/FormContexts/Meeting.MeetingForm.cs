
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

    public partial class MeetingForm : PrefixedContext
    {
        public MeetingForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor MeetingGuid { get { return ById<StringEditor>("MeetingGuid"); } }
        public StringEditor MeetingName { get { return ById<StringEditor>("MeetingName"); } }
        public IntegerEditor MeetingTypeId { get { return ById<IntegerEditor>("MeetingTypeId"); } }
        public DateEditor StartDate { get { return ById<DateEditor>("StartDate"); } }
        public DateEditor EndDate { get { return ById<DateEditor>("EndDate"); } }
        public IntegerEditor InsertUserId { get { return ById<IntegerEditor>("InsertUserId"); } }
        public IntegerEditor InsertDate { get { return ById<IntegerEditor>("InsertDate"); } }
        public StringEditor IsActive { get { return ById<StringEditor>("IsActive"); } }
        public IntegerEditor UpdateUserId { get { return ById<IntegerEditor>("UpdateUserId"); } }
        public IntegerEditor UpdateDate { get { return ById<IntegerEditor>("UpdateDate"); } }
        public IntegerEditor LocationId { get { return ById<IntegerEditor>("LocationId"); } }
        public IntegerEditor OrganizationId { get { return ById<IntegerEditor>("OrganizationId"); } }
        public IntegerEditor OrganizerContactId { get { return ById<IntegerEditor>("OrganizerContactId"); } }
        public IntegerEditor ReporterContactId { get { return ById<IntegerEditor>("ReporterContactId"); } }
    }
}

