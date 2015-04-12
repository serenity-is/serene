
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

    public partial class MeetingDecisionForm : PrefixedContext
    {
        public MeetingDecisionForm(string idPrefix) : base(idPrefix) {}
    
        public IntegerEditor MeetingId { get { return ById<IntegerEditor>("MeetingId"); } }
        public IntegerEditor ResolutionStatusId { get { return ById<IntegerEditor>("ResolutionStatusId"); } }
        public IntegerEditor DisplayOrder { get { return ById<IntegerEditor>("DisplayOrder"); } }
        public StringEditor IsActive { get { return ById<StringEditor>("IsActive"); } }
        public IntegerEditor MeetingAgendaId { get { return ById<IntegerEditor>("MeetingAgendaId"); } }
        public StringEditor Description { get { return ById<StringEditor>("Description"); } }
        public IntegerEditor ImageFileId { get { return ById<IntegerEditor>("ImageFileId"); } }
        public IntegerEditor ResponsibleContactId { get { return ById<IntegerEditor>("ResponsibleContactId"); } }
        public DateEditor DueDate { get { return ById<DateEditor>("DueDate"); } }
    }
}

