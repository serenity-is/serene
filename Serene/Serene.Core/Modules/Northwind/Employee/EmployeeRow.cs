using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Serene.Northwind.Entities
{
    [ConnectionKey("Northwind"), Module("Northwind"), TableName("Employees")]
    [DisplayName("Employees"), InstanceName("Employee")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    [LookupScript]
    public sealed class EmployeeRow : Row<EmployeeRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Employee Id"), Identity, IdProperty]
        public Int32? EmployeeID
        {
            get => fields.EmployeeID[this];
            set => fields.EmployeeID[this] = value;
        }

        [DisplayName("Last Name"), Size(20), NotNull]
        public String LastName
        {
            get => fields.LastName[this];
            set => fields.LastName[this] = value;
        }

        [DisplayName("First Name"), Size(10), NotNull]
        public String FirstName
        {
            get => fields.FirstName[this];
            set => fields.FirstName[this] = value;
        }

        [DisplayName("FullName"), QuickSearch]
        [Expression("CONCAT(T0.[FirstName], CONCAT(' ', T0.[LastName]))")]
        [Expression("(T0.FirstName || ' ' || T0.LastName)", Dialect = "Sqlite"), NameProperty]
        public String FullName
        {
            get => fields.FullName[this];
            set => fields.FullName[this] = value;
        }

        [DisplayName("Gender"), Expression("(CASE WHEN T0.[TitleOfCourtesy] LIKE '%s%' THEN 2 WHEN T0.[TitleOfCourtesy] LIKE '%Mr%' THEN 1 END)")]
        public Gender? Gender
        {
            get => fields.Gender[this];
            set => fields.Gender[this] = value;
        } 

        [DisplayName("Title"), Size(30)]
        public String Title
        {
            get => fields.Title[this];
            set => fields.Title[this] = value;
        }

        [DisplayName("Title Of Courtesy"), Size(25)]
        public String TitleOfCourtesy
        {
            get => fields.TitleOfCourtesy[this];
            set => fields.TitleOfCourtesy[this] = value;
        }

        [DisplayName("Birth Date")]
        public DateTime? BirthDate
        {
            get => fields.BirthDate[this];
            set => fields.BirthDate[this] = value;
        }

        [DisplayName("Hire Date")]
        public DateTime? HireDate
        {
            get => fields.HireDate[this];
            set => fields.HireDate[this] = value;
        }

        [DisplayName("Address"), Size(60)]
        public String Address
        {
            get => fields.Address[this];
            set => fields.Address[this] = value;
        }

        [DisplayName("City"), Size(15)]
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

        [DisplayName("Country"), Size(15)]
        public String Country
        {
            get => fields.Country[this];
            set => fields.Country[this] = value;
        }

        [DisplayName("Home Phone"), Size(24)]
        public String HomePhone
        {
            get => fields.HomePhone[this];
            set => fields.HomePhone[this] = value;
        }

        [DisplayName("Extension"), Size(4)]
        public String Extension
        {
            get => fields.Extension[this];
            set => fields.Extension[this] = value;
        }

        [DisplayName("Photo")]
        public Stream Photo
        {
            get => fields.Photo[this];
            set => fields.Photo[this] = value;
        }

        [DisplayName("Notes")]
        public String Notes
        {
            get => fields.Notes[this];
            set => fields.Notes[this] = value;
        }

        [DisplayName("Reports To"), ForeignKey(typeof(EmployeeRow)), LeftJoin("jReportsTo")]
        public Int32? ReportsTo
        {
            get => fields.ReportsTo[this];
            set => fields.ReportsTo[this] = value;
        }

        [DisplayName("Photo Path"), Size(255)]
        public String PhotoPath
        {
            get => fields.PhotoPath[this];
            set => fields.PhotoPath[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToLastName
        {
            get => fields.ReportsToLastName[this];
            set => fields.ReportsToLastName[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToFirstName
        {
            get => fields.ReportsToFirstName[this];
            set => fields.ReportsToFirstName[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToFullName
        {
            get => fields.ReportsToFullName[this];
            set => fields.ReportsToFullName[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToTitle
        {
            get => fields.ReportsToTitle[this];
            set => fields.ReportsToTitle[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToTitleOfCourtesy
        {
            get => fields.ReportsToTitleOfCourtesy[this];
            set => fields.ReportsToTitleOfCourtesy[this] = value;
        }

        [Origin("jReportsTo")]
        public DateTime? ReportsToBirthDate
        {
            get => fields.ReportsToBirthDate[this];
            set => fields.ReportsToBirthDate[this] = value;
        }

        [Origin("jReportsTo")]
        public DateTime? ReportsToHireDate
        {
            get => fields.ReportsToHireDate[this];
            set => fields.ReportsToHireDate[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToAddress
        {
            get => fields.ReportsToAddress[this];
            set => fields.ReportsToAddress[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToCity
        {
            get => fields.ReportsToCity[this];
            set => fields.ReportsToCity[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToRegion
        {
            get => fields.ReportsToRegion[this];
            set => fields.ReportsToRegion[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToPostalCode
        {
            get => fields.ReportsToPostalCode[this];
            set => fields.ReportsToPostalCode[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToCountry
        {
            get => fields.ReportsToCountry[this];
            set => fields.ReportsToCountry[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToHomePhone
        {
            get => fields.ReportsToHomePhone[this];
            set => fields.ReportsToHomePhone[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToExtension
        {
            get => fields.ReportsToExtension[this];
            set => fields.ReportsToExtension[this] = value;
        }

        [Origin("jReportsTo")]
        public Stream ReportsToPhoto
        {
            get => fields.ReportsToPhoto[this];
            set => fields.ReportsToPhoto[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToNotes
        {
            get => fields.ReportsToNotes[this];
            set => fields.ReportsToNotes[this] = value;
        }

        [Origin("jReportsTo")]
        public Int32? ReportsToReportsTo
        {
            get => fields.ReportsToReportsTo[this];
            set => fields.ReportsToReportsTo[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToPhotoPath
        {
            get => fields.ReportsToPhotoPath[this];
            set => fields.ReportsToPhotoPath[this] = value;
        }
        public EmployeeRow()
        {
        }

        public EmployeeRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EmployeeID;
            public StringField LastName;
            public StringField FirstName;
            public StringField FullName;
            public StringField Title;
            public StringField TitleOfCourtesy;
            public DateTimeField BirthDate;
            public DateTimeField HireDate;
            public StringField Address;
            public StringField City;
            public StringField Region;
            public StringField PostalCode;
            public StringField Country;
            public StringField HomePhone;
            public StringField Extension;
            public StreamField Photo;
            public StringField Notes;
            public Int32Field ReportsTo;
            public StringField PhotoPath;

            public StringField ReportsToFullName;
            public StringField ReportsToLastName;
            public StringField ReportsToFirstName;
            public StringField ReportsToTitle;
            public StringField ReportsToTitleOfCourtesy;
            public DateTimeField ReportsToBirthDate;
            public DateTimeField ReportsToHireDate;
            public StringField ReportsToAddress;
            public StringField ReportsToCity;
            public StringField ReportsToRegion;
            public StringField ReportsToPostalCode;
            public StringField ReportsToCountry;
            public StringField ReportsToHomePhone;
            public StringField ReportsToExtension;
            public StreamField ReportsToPhoto;
            public StringField ReportsToNotes;
            public Int32Field ReportsToReportsTo;
            public StringField ReportsToPhotoPath;

            public EnumField<Gender> Gender;
        }
    }
}