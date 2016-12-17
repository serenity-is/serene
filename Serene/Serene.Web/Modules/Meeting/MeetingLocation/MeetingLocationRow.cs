

namespace Serene.Meeting.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Meeting Locations"), InstanceName("Meeting Location"), TwoLevelCached]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.Management)]
    [LookupScript("Meeting.MeetingLocation")]
    public sealed class MeetingLocationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Location Id"), Identity]
        public Int32? LocationId
        {
            get { return Fields.LocationId[this]; }
            set { Fields.LocationId[this] = value; }
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch, Width(350)]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Address"), Size(300)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Latitude"), NotNull]
        public Double? Latitude
        {
            get { return Fields.Latitude[this]; }
            set { Fields.Latitude[this] = value; }
        }

        [DisplayName("Longitude"), NotNull]
        public Double? Longitude
        {
            get { return Fields.Longitude[this]; }
            set { Fields.Longitude[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.LocationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MeetingLocationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field LocationId;
            public StringField Name;
            public StringField Address;
            public DoubleField Latitude;
            public DoubleField Longitude;

            public RowFields()
                : base("MeetingLocations")
            {
                LocalTextPrefix = "Meeting.MeetingLocation";
            }
        }
    }
}