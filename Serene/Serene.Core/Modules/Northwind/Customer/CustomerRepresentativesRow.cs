
namespace Serene.Northwind.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Northwind"), Module("Northwind"), TableName("CustomerRepresentatives")]
    [DisplayName("CustomerRepresentatives"), InstanceName("CustomerRepresentatives")]
    [ReadPermission(PermissionKeys.Customer.View)]
    [ModifyPermission(PermissionKeys.Customer.View)]
    public sealed class CustomerRepresentativesRow : Row, IIdRow
    {
        [DisplayName("Representative Id"), Column("RepresentativeID"), Identity]
        public Int32? RepresentativeId
        {
            get { return Fields.RepresentativeId[this]; }
            set { Fields.RepresentativeId[this] = value; }
        }

        [DisplayName("Customer Id"), Column("CustomerID"), NotNull]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Employee Id"), Column("EmployeeID"), NotNull]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.RepresentativeId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomerRepresentativesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RepresentativeId;
            public Int32Field CustomerId;
            public Int32Field EmployeeId;
        }
    }
}