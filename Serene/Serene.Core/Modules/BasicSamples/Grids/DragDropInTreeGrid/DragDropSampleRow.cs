using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;


namespace Serene.BasicSamples.Entities
{
    [ConnectionKey("Northwind"), Module("Northwind"), TableName("DragDropSample")]
    [DisplayName("Tree Items"), InstanceName("Tree Item")]
    [ReadPermission(Northwind.PermissionKeys.General)]
    [ModifyPermission(Northwind.PermissionKeys.General)]
    public sealed class DragDropSampleRow : Row<DragDropSampleRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Parent Id")]
        public Int32? ParentId
        {
            get => fields.ParentId[this];
            set => fields.ParentId[this] = value;
        }

        [DisplayName("Title"), Size(100), NotNull, QuickSearch, NameProperty]
        public String Title
        {
            get => fields.Title[this];
            set => fields.Title[this] = value;
        }
        public DragDropSampleRow()
        {
        }

        public DragDropSampleRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ParentId;
            public StringField Title;
        }
    }
}