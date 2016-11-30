

namespace Serene.BasicSamples.Entities
{
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Northwind"), DisplayName("Tree Items"), InstanceName("Tree Item"), TwoLevelCached]
    [ReadPermission(Northwind.PermissionKeys.General)]
    [ModifyPermission(Northwind.PermissionKeys.General)]
    public sealed class DragDropSampleRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Parent Id")]
        public Int32? ParentId
        {
            get { return Fields.ParentId[this]; }
            set { Fields.ParentId[this] = value; }
        }

        [DisplayName("Title"), Size(100), NotNull, QuickSearch]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Title; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DragDropSampleRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ParentId;
            public StringField Title;

            public RowFields()
                : base("DragDropSample")
            {
                LocalTextPrefix = "BasicSamples.DragDropSample";
            }
        }
    }
}