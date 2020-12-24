using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serene.Northwind.Entities
{
    [ConnectionKey("Northwind"), Module("Northwind"), TableName("Customers")]
    [DisplayName("Customers"), InstanceName("Customer")]
    [ReadPermission(PermissionKeys.Customer.View)]
    [ModifyPermission(PermissionKeys.Customer.Modify)]
    [DeletePermission(PermissionKeys.Customer.Delete)]
    [LeftJoin("cd", "CustomerDetails", "cd.[ID] = T0.[ID]", RowType = typeof(CustomerDetailsRow), TitlePrefix = "")]
    [UpdatableExtension("cd", typeof(CustomerDetailsRow), CascadeDelete = true)]
    [LookupScript(typeof(Lookups.CustomerLookup))]
    public sealed class CustomerRow : Row<CustomerRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("ID"), Identity, IdProperty]
        public Int32? ID
        {
            get => fields.ID[this];
            set => fields.ID[this] = value;
        }

        [DisplayName("Customer Id"), Size(5), PrimaryKey, NotNull, QuickSearch, Updatable(false), LookupInclude]
        public String CustomerID
        {
            get => fields.CustomerID[this];
            set => fields.CustomerID[this] = value;
        }

        [DisplayName("Company Name"), Size(40), NotNull, QuickSearch, LookupInclude, NameProperty]
        public String CompanyName
        {
            get => fields.CompanyName[this];
            set => fields.CompanyName[this] = value;
        }

        [DisplayName("Contact Name"), Size(30), QuickSearch]
        public String ContactName
        {
            get => fields.ContactName[this];
            set => fields.ContactName[this] = value;
        }

        [DisplayName("Contact Title"), Size(30)]
        public String ContactTitle
        {
            get => fields.ContactTitle[this];
            set => fields.ContactTitle[this] = value;
        }

        [DisplayName("Address"), Size(60)]
        public String Address
        {
            get => fields.Address[this];
            set => fields.Address[this] = value;
        }

        [DisplayName("City"), Size(15), LookupEditor(typeof(Lookups.CustomerCityLookup), CascadeFrom = "Country", AutoComplete = true)]
        public String City
        {
            get => fields.City[this];
            set => fields.City[this] = value;
        }

        [DisplayName("Region"), Size(15)]
        public String Region
        {
            get => fields.Region[this];
            set => fields.Region[this] = value;
        }

        [DisplayName("Postal Code"), Size(10)]
        public String PostalCode
        {
            get => fields.PostalCode[this];
            set => fields.PostalCode[this] = value;
        }

        [DisplayName("Country"), Size(15), LookupEditor(typeof(Lookups.CustomerCountryLookup), AutoComplete = true)]
        public String Country
        {
            get => fields.Country[this];
            set => fields.Country[this] = value;
        }

        [DisplayName("Phone"), Size(24)]
        public String Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }

        [DisplayName("Fax"), Size(24)]
        public String Fax
        {
            get => fields.Fax[this];
            set => fields.Fax[this] = value;
        }

        [Origin("cd")]
        public DateTime? LastContactDate
        {
            get => fields.LastContactDate[this];
            set => fields.LastContactDate[this] = value;
        }

        [Origin("cd"), LookupEditor(typeof(EmployeeRow))]
        public Int32? LastContactedBy
        {
            get => fields.LastContactedBy[this];
            set => fields.LastContactedBy[this] = value;
        }

        [Origin("cd"), EmailEditor]
        public String Email
        {
            get => fields.Email[this];
            set => fields.Email[this] = value;
        }

        [Origin("cd"), DefaultValue(false)]
        public Boolean? SendBulletin
        {
            get => fields.SendBulletin[this];
            set => fields.SendBulletin[this] = value;
        }

        [NotesEditor, NotMapped]
        public List<NoteRow> NoteList
        {
            get => fields.NoteList[this];
            set => fields.NoteList[this] = value;
        }
        
        [DisplayName("Representatives"), LookupEditor(typeof(EmployeeRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(CustomerRepresentativesRow), "CustomerId", "EmployeeId")]
        [MinSelectLevel(SelectLevel.Details), QuickFilter(CssClass = "hidden-xs")]
        public List<Int32> Representatives
        {
            get => fields.Representatives[this];
            set => fields.Representatives[this] = value;
        }
        public CustomerRow()
        {
        }

        public CustomerRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ID;
            public StringField CustomerID;
            public StringField CompanyName;
            public StringField ContactName;
            public StringField ContactTitle;
            public StringField Address;
            public StringField City;
            public StringField Region;
            public StringField PostalCode;
            public StringField Country;
            public StringField Phone;
            public StringField Fax;
            public RowListField<NoteRow> NoteList;
            public ListField<Int32> Representatives;
            public DateTimeField LastContactDate;
            public Int32Field LastContactedBy;
            public StringField Email;
            public BooleanField SendBulletin;
        }
    }
}