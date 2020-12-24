using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;


namespace Serene.Northwind.Entities
{
    [ConnectionKey("Northwind"), Module("Northwind"), TableName("CustomerDetails")]
    [DisplayName("CustomerDetails"), InstanceName("CustomerDetails")]
    [ReadPermission("Northwind:General")]
    [ModifyPermission("Northwind:General")]
    public sealed class CustomerDetailsRow : Row<CustomerDetailsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), PrimaryKey, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Last Contact Date")]
        public DateTime? LastContactDate
        {
            get => fields.LastContactDate[this];
            set => fields.LastContactDate[this] = value;
        }

        [DisplayName("Last Contacted By"), ForeignKey("Employees", "EmployeeID"), LeftJoin("jLastContactedBy"), TextualField("LastContactedByLastName")]
        public Int32? LastContactedBy
        {
            get => fields.LastContactedBy[this];
            set => fields.LastContactedBy[this] = value;
        }

        [DisplayName("Email"), Size(100), QuickSearch, NameProperty]
        public String Email
        {
            get => fields.Email[this];
            set => fields.Email[this] = value;
        }

        [DisplayName("Send Bulletin"), NotNull]
        public Boolean? SendBulletin
        {
            get => fields.SendBulletin[this];
            set => fields.SendBulletin[this] = value;
        }

        [DisplayName("Last Contacted By Last Name"), Expression("jLastContactedBy.[LastName]")]
        public String LastContactedByLastName
        {
            get => fields.LastContactedByLastName[this];
            set => fields.LastContactedByLastName[this] = value;
        }

        [DisplayName("Last Contacted By First Name"), Expression("jLastContactedBy.[FirstName]")]
        public String LastContactedByFirstName
        {
            get => fields.LastContactedByFirstName[this];
            set => fields.LastContactedByFirstName[this] = value;
        }

        [DisplayName("Last Contacted By Title"), Expression("jLastContactedBy.[Title]")]
        public String LastContactedByTitle
        {
            get => fields.LastContactedByTitle[this];
            set => fields.LastContactedByTitle[this] = value;
        }

        [DisplayName("Last Contacted By Title Of Courtesy"), Expression("jLastContactedBy.[TitleOfCourtesy]")]
        public String LastContactedByTitleOfCourtesy
        {
            get => fields.LastContactedByTitleOfCourtesy[this];
            set => fields.LastContactedByTitleOfCourtesy[this] = value;
        }

        [DisplayName("Last Contacted By Birth Date"), Expression("jLastContactedBy.[BirthDate]")]
        public DateTime? LastContactedByBirthDate
        {
            get => fields.LastContactedByBirthDate[this];
            set => fields.LastContactedByBirthDate[this] = value;
        }

        [DisplayName("Last Contacted By Hire Date"), Expression("jLastContactedBy.[HireDate]")]
        public DateTime? LastContactedByHireDate
        {
            get => fields.LastContactedByHireDate[this];
            set => fields.LastContactedByHireDate[this] = value;
        }

        [DisplayName("Last Contacted By Address"), Expression("jLastContactedBy.[Address]")]
        public String LastContactedByAddress
        {
            get => fields.LastContactedByAddress[this];
            set => fields.LastContactedByAddress[this] = value;
        }

        [DisplayName("Last Contacted By City"), Expression("jLastContactedBy.[City]")]
        public String LastContactedByCity
        {
            get => fields.LastContactedByCity[this];
            set => fields.LastContactedByCity[this] = value;
        }

        [DisplayName("Last Contacted By Region"), Expression("jLastContactedBy.[Region]")]
        public String LastContactedByRegion
        {
            get => fields.LastContactedByRegion[this];
            set => fields.LastContactedByRegion[this] = value;
        }

        [DisplayName("Last Contacted By Postal Code"), Expression("jLastContactedBy.[PostalCode]")]
        public String LastContactedByPostalCode
        {
            get => fields.LastContactedByPostalCode[this];
            set => fields.LastContactedByPostalCode[this] = value;
        }

        [DisplayName("Last Contacted By Country"), Expression("jLastContactedBy.[Country]")]
        public String LastContactedByCountry
        {
            get => fields.LastContactedByCountry[this];
            set => fields.LastContactedByCountry[this] = value;
        }

        [DisplayName("Last Contacted By Home Phone"), Expression("jLastContactedBy.[HomePhone]")]
        public String LastContactedByHomePhone
        {
            get => fields.LastContactedByHomePhone[this];
            set => fields.LastContactedByHomePhone[this] = value;
        }

        [DisplayName("Last Contacted By Extension"), Expression("jLastContactedBy.[Extension]")]
        public String LastContactedByExtension
        {
            get => fields.LastContactedByExtension[this];
            set => fields.LastContactedByExtension[this] = value;
        }

        [DisplayName("Last Contacted By Photo"), Expression("jLastContactedBy.[Photo]")]
        public Stream LastContactedByPhoto
        {
            get => fields.LastContactedByPhoto[this];
            set => fields.LastContactedByPhoto[this] = value;
        }

        [DisplayName("Last Contacted By Notes"), Expression("jLastContactedBy.[Notes]")]
        public String LastContactedByNotes
        {
            get => fields.LastContactedByNotes[this];
            set => fields.LastContactedByNotes[this] = value;
        }

        [DisplayName("Last Contacted By Reports To"), Expression("jLastContactedBy.[ReportsTo]")]
        public Int32? LastContactedByReportsTo
        {
            get => fields.LastContactedByReportsTo[this];
            set => fields.LastContactedByReportsTo[this] = value;
        }

        [DisplayName("Last Contacted By Photo Path"), Expression("jLastContactedBy.[PhotoPath]")]
        public String LastContactedByPhotoPath
        {
            get => fields.LastContactedByPhotoPath[this];
            set => fields.LastContactedByPhotoPath[this] = value;
        }
        public CustomerDetailsRow()
        {
        }

        public CustomerDetailsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DateTimeField LastContactDate;
            public Int32Field LastContactedBy;
            public StringField Email;
            public BooleanField SendBulletin;

            public StringField LastContactedByLastName;
            public StringField LastContactedByFirstName;
            public StringField LastContactedByTitle;
            public StringField LastContactedByTitleOfCourtesy;
            public DateTimeField LastContactedByBirthDate;
            public DateTimeField LastContactedByHireDate;
            public StringField LastContactedByAddress;
            public StringField LastContactedByCity;
            public StringField LastContactedByRegion;
            public StringField LastContactedByPostalCode;
            public StringField LastContactedByCountry;
            public StringField LastContactedByHomePhone;
            public StringField LastContactedByExtension;
            public StreamField LastContactedByPhoto;
            public StringField LastContactedByNotes;
            public Int32Field LastContactedByReportsTo;
            public StringField LastContactedByPhotoPath;
        }
    }
}