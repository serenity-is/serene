
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

    public partial class MeetingAgendaForm : PrefixedContext
    {
        public MeetingAgendaForm(string idPrefix) : base(idPrefix) {}
    
        public IntegerEditor AgendaTypeId { get { return ById<IntegerEditor>("AgendaTypeId"); } }
        public IntegerEditor MeetingId { get { return ById<IntegerEditor>("MeetingId"); } }
        public IntegerEditor DisplayOrder { get { return ById<IntegerEditor>("DisplayOrder"); } }
        public StringEditor IsActive { get { return ById<StringEditor>("IsActive"); } }
        public IntegerEditor RequestedByContactId { get { return ById<IntegerEditor>("RequestedByContactId"); } }
        public StringEditor Tags { get { return ById<StringEditor>("Tags"); } }
        public StringEditor Title { get { return ById<StringEditor>("Title"); } }
        public StringEditor Description { get { return ById<StringEditor>("Description"); } }
        public IntegerEditor ImageFileId { get { return ById<IntegerEditor>("ImageFileId"); } }
    }
}

