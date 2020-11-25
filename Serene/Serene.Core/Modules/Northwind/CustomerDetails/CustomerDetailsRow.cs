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
    public sealed class CustomerDetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), PrimaryKey]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Last Contact Date")]
        public DateTime? LastContactDate
        {
            get { return Fields.LastContactDate[this]; }
            set { Fields.LastContactDate[this] = value; }
        }

        [DisplayName("Last Contacted By"), ForeignKey("Employees", "EmployeeID"), LeftJoin("jLastContactedBy"), TextualField("LastContactedByLastName")]
        public Int32? LastContactedBy
        {
            get { return Fields.LastContactedBy[this]; }
            set { Fields.LastContactedBy[this] = value; }
        }

        [DisplayName("Email"), Size(100), QuickSearch]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Send Bulletin"), NotNull]
        public Boolean? SendBulletin
        {
            get { return Fields.SendBulletin[this]; }
            set { Fields.SendBulletin[this] = value; }
        }

        [DisplayName("Last Contacted By Last Name"), Expression("jLastContactedBy.[LastName]")]
        public String LastContactedByLastName
        {
            get { return Fields.LastContactedByLastName[this]; }
            set { Fields.LastContactedByLastName[this] = value; }
        }

        [DisplayName("Last Contacted By First Name"), Expression("jLastContactedBy.[FirstName]")]
        public String LastContactedByFirstName
        {
            get { return Fields.LastContactedByFirstName[this]; }
            set { Fields.LastContactedByFirstName[this] = value; }
        }

        [DisplayName("Last Contacted By Title"), Expression("jLastContactedBy.[Title]")]
        public String LastContactedByTitle
        {
            get { return Fields.LastContactedByTitle[this]; }
            set { Fields.LastContactedByTitle[this] = value; }
        }

        [DisplayName("Last Contacted By Title Of Courtesy"), Expression("jLastContactedBy.[TitleOfCourtesy]")]
        public String LastContactedByTitleOfCourtesy
        {
            get { return Fields.LastContactedByTitleOfCourtesy[this]; }
            set { Fields.LastContactedByTitleOfCourtesy[this] = value; }
        }

        [DisplayName("Last Contacted By Birth Date"), Expression("jLastContactedBy.[BirthDate]")]
        public DateTime? LastContactedByBirthDate
        {
            get { return Fields.LastContactedByBirthDate[this]; }
            set { Fields.LastContactedByBirthDate[this] = value; }
        }

        [DisplayName("Last Contacted By Hire Date"), Expression("jLastContactedBy.[HireDate]")]
        public DateTime? LastContactedByHireDate
        {
            get { return Fields.LastContactedByHireDate[this]; }
            set { Fields.LastContactedByHireDate[this] = value; }
        }

        [DisplayName("Last Contacted By Address"), Expression("jLastContactedBy.[Address]")]
        public String LastContactedByAddress
        {
            get { return Fields.LastContactedByAddress[this]; }
            set { Fields.LastContactedByAddress[this] = value; }
        }

        [DisplayName("Last Contacted By City"), Expression("jLastContactedBy.[City]")]
        public String LastContactedByCity
        {
            get { return Fields.LastContactedByCity[this]; }
            set { Fields.LastContactedByCity[this] = value; }
        }

        [DisplayName("Last Contacted By Region"), Expression("jLastContactedBy.[Region]")]
        public String LastContactedByRegion
        {
            get { return Fields.LastContactedByRegion[this]; }
            set { Fields.LastContactedByRegion[this] = value; }
        }

        [DisplayName("Last Contacted By Postal Code"), Expression("jLastContactedBy.[PostalCode]")]
        public String LastContactedByPostalCode
        {
            get { return Fields.LastContactedByPostalCode[this]; }
            set { Fields.LastContactedByPostalCode[this] = value; }
        }

        [DisplayName("Last Contacted By Country"), Expression("jLastContactedBy.[Country]")]
        public String LastContactedByCountry
        {
            get { return Fields.LastContactedByCountry[this]; }
            set { Fields.LastContactedByCountry[this] = value; }
        }

        [DisplayName("Last Contacted By Home Phone"), Expression("jLastContactedBy.[HomePhone]")]
        public String LastContactedByHomePhone
        {
            get { return Fields.LastContactedByHomePhone[this]; }
            set { Fields.LastContactedByHomePhone[this] = value; }
        }

        [DisplayName("Last Contacted By Extension"), Expression("jLastContactedBy.[Extension]")]
        public String LastContactedByExtension
        {
            get { return Fields.LastContactedByExtension[this]; }
            set { Fields.LastContactedByExtension[this] = value; }
        }

        [DisplayName("Last Contacted By Photo"), Expression("jLastContactedBy.[Photo]")]
        public Stream LastContactedByPhoto
        {
            get { return Fields.LastContactedByPhoto[this]; }
            set { Fields.LastContactedByPhoto[this] = value; }
        }

        [DisplayName("Last Contacted By Notes"), Expression("jLastContactedBy.[Notes]")]
        public String LastContactedByNotes
        {
            get { return Fields.LastContactedByNotes[this]; }
            set { Fields.LastContactedByNotes[this] = value; }
        }

        [DisplayName("Last Contacted By Reports To"), Expression("jLastContactedBy.[ReportsTo]")]
        public Int32? LastContactedByReportsTo
        {
            get { return Fields.LastContactedByReportsTo[this]; }
            set { Fields.LastContactedByReportsTo[this] = value; }
        }

        [DisplayName("Last Contacted By Photo Path"), Expression("jLastContactedBy.[PhotoPath]")]
        public String LastContactedByPhotoPath
        {
            get { return Fields.LastContactedByPhotoPath[this]; }
            set { Fields.LastContactedByPhotoPath[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Email; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomerDetailsRow()
            : base(Fields)
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