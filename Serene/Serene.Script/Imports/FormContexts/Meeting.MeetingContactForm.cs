
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

    public partial class MeetingContactForm : PrefixedContext
    {
        public MeetingContactForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor DisplayName { get { return ById<StringEditor>("DisplayName"); } }
        public StringEditor Email { get { return ById<StringEditor>("Email"); } }
        public StringEditor IsActive { get { return ById<StringEditor>("IsActive"); } }
        public StringEditor Title { get { return ById<StringEditor>("Title"); } }
        public StringEditor Firstname { get { return ById<StringEditor>("Firstname"); } }
        public StringEditor Lastname { get { return ById<StringEditor>("Lastname"); } }
    }
}

