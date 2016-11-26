

namespace Serene.Organization.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Business Units"), InstanceName("Business Unit"), TwoLevelCached]
    [ReadPermission(Administration.PermissionKeys.Security)]
    [ModifyPermission(Administration.PermissionKeys.Security)]
    [LookupScript("Organization.BusinessUnit", Permission = "?")]
    public sealed class BusinessUnitRow : Row, IIdRow, INameRow
    {
        [DisplayName("Unit Id"), Identity]
        public Int32? UnitId
        {
            get { return Fields.UnitId[this]; }
            set { Fields.UnitId[this] = value; }
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Parent Unit"), ForeignKey("BusinessUnits", "UnitId"), LeftJoin("jParentUnit"), TextualField("ParentUnitName")]
        [LookupInclude, BusinessUnitEditor]
        public Int32? ParentUnitId
        {
            get { return Fields.ParentUnitId[this]; }
            set { Fields.ParentUnitId[this] = value; }
        }

        [DisplayName("Parent Unit Name"), Expression("jParentUnit.[Name]")]
        public String ParentUnitName
        {
            get { return Fields.ParentUnitName[this]; }
            set { Fields.ParentUnitName[this] = value; }
        }

        [DisplayName("Parent Unit Parent Unit Id"), Expression("jParentUnit.[ParentUnitId]")]
        public Int32? ParentUnitParentUnitId
        {
            get { return Fields.ParentUnitParentUnitId[this]; }
            set { Fields.ParentUnitParentUnitId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UnitId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BusinessUnitRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UnitId;
            public StringField Name;
            public Int32Field ParentUnitId;

            public StringField ParentUnitName;
            public Int32Field ParentUnitParentUnitId;

            public RowFields()
                : base("BusinessUnits")
            {
                LocalTextPrefix = "Organization.BusinessUnit";
            }
        }
    }
}