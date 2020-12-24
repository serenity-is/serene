using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Serene.Northwind.Entities
{
    [ConnectionKey("Northwind"), Module("Northwind"), TableName("Territories")]
    [DisplayName("Territories"), InstanceName("Territory")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    [LookupScript]
    public sealed class TerritoryRow : Row<TerritoryRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("ID"), Identity, IdProperty]
        public Int32? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [DisplayName("Territory ID"), Size(20), PrimaryKey, NotNull, QuickSearch, Updatable(false), NameProperty]
        public String TerritoryID
        {
            get => fields.TerritoryID[this];
            set => fields.TerritoryID[this] = value;
        }

        [DisplayName("Territory Description"), Size(50), NotNull, QuickSearch, LookupInclude]
        public String TerritoryDescription
        {
            get => fields.TerritoryDescription[this];
            set => fields.TerritoryDescription[this] = value;
        }

        [DisplayName("Region"), NotNull, ForeignKey(typeof(RegionRow)), LeftJoin("jRegion")]
        public Int32? RegionID
        {
            get => fields.RegionID[this];
            set => fields.RegionID[this] = value;
        }

        [Origin("jRegion"), DisplayName("Region"), QuickSearch, LookupInclude]
        public String RegionDescription
        {
            get => fields.RegionDescription[this];
            set => fields.RegionDescription[this] = value;
        }
        public TerritoryRow()
        {
        }

        public TerritoryRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ID;
            public StringField TerritoryID;
            public StringField TerritoryDescription;
            public Int32Field RegionID;

            public StringField RegionDescription;
        }
    }
}