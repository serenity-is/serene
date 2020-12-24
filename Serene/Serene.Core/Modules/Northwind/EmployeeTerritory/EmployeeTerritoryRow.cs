using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Serene.Northwind.Entities
{
    [ConnectionKey("Northwind"), Module("Northwind"), TableName("EmployeeTerritories")]
    [DisplayName("EmployeeTerritories"), InstanceName("EmployeeTerritories")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class EmployeeTerritoryRow : Row<EmployeeTerritoryRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Employee Id"), PrimaryKey, ForeignKey("Employees", "EmployeeID"), LeftJoin("jEmployee"), IdProperty]
        public Int32? EmployeeID
        {
            get => fields.EmployeeID[this];
            set => fields.EmployeeID[this] = value;
        }

        [DisplayName("Territory Id"), Size(20), PrimaryKey, ForeignKey("Territories", "TerritoryID"), LeftJoin("jTerritory"), QuickSearch, NameProperty]
        public String TerritoryID
        {
            get => fields.TerritoryID[this];
            set => fields.TerritoryID[this] = value;
        }

        [DisplayName("Employee Last Name"), Expression("jEmployee.[LastName]")]
        public String EmployeeLastName
        {
            get => fields.EmployeeLastName[this];
            set => fields.EmployeeLastName[this] = value;
        }

        [DisplayName("Employee First Name"), Expression("jEmployee.[FirstName]")]
        public String EmployeeFirstName
        {
            get => fields.EmployeeFirstName[this];
            set => fields.EmployeeFirstName[this] = value;
        }

        [DisplayName("Employee Title"), Expression("jEmployee.[Title]")]
        public String EmployeeTitle
        {
            get => fields.EmployeeTitle[this];
            set => fields.EmployeeTitle[this] = value;
        }

        [DisplayName("Employee Title Of Courtesy"), Expression("jEmployee.TitleOfCourtesy")]
        public String EmployeeTitleOfCourtesy
        {
            get => fields.EmployeeTitleOfCourtesy[this];
            set => fields.EmployeeTitleOfCourtesy[this] = value;
        }

        [DisplayName("Employee Birth Date"), Expression("jEmployee.[BirthDate]")]
        public DateTime? EmployeeBirthDate
        {
            get => fields.EmployeeBirthDate[this];
            set => fields.EmployeeBirthDate[this] = value;
        }

        [DisplayName("Employee Hire Date"), Expression("jEmployee.[HireDate]")]
        public DateTime? EmployeeHireDate
        {
            get => fields.EmployeeHireDate[this];
            set => fields.EmployeeHireDate[this] = value;
        }

        [DisplayName("Employee Address"), Expression("jEmployee.[Address]")]
        public String EmployeeAddress
        {
            get => fields.EmployeeAddress[this];
            set => fields.EmployeeAddress[this] = value;
        }

        [DisplayName("Employee City"), Expression("jEmployee.[City]")]
        public String EmployeeCity
        {
            get => fields.EmployeeCity[this];
            set => fields.EmployeeCity[this] = value;
        }

        [DisplayName("Employee Region"), Expression("jEmployee.[Region]")]
        public String EmployeeRegion
        {
            get => fields.EmployeeRegion[this];
            set => fields.EmployeeRegion[this] = value;
        }

        [DisplayName("Employee Postal Code"), Expression("jEmployee.[PostalCode]")]
        public String EmployeePostalCode
        {
            get => fields.EmployeePostalCode[this];
            set => fields.EmployeePostalCode[this] = value;
        }

        [DisplayName("Employee Country"), Expression("jEmployee.[Country]")]
        public String EmployeeCountry
        {
            get => fields.EmployeeCountry[this];
            set => fields.EmployeeCountry[this] = value;
        }

        [DisplayName("Employee Home Phone"), Expression("jEmployee.[HomePhone]")]
        public String EmployeeHomePhone
        {
            get => fields.EmployeeHomePhone[this];
            set => fields.EmployeeHomePhone[this] = value;
        }

        [DisplayName("Employee Extension"), Expression("jEmployee.[Extension]")]
        public String EmployeeExtension
        {
            get => fields.EmployeeExtension[this];
            set => fields.EmployeeExtension[this] = value;
        }

        [DisplayName("Employee Photo"), Expression("jEmployee.[Photo]")]
        public Stream EmployeePhoto
        {
            get => fields.EmployeePhoto[this];
            set => fields.EmployeePhoto[this] = value;
        }

        [DisplayName("Employee Notes"), Expression("jEmployee.[Notes]")]
        public String EmployeeNotes
        {
            get => fields.EmployeeNotes[this];
            set => fields.EmployeeNotes[this] = value;
        }

        [DisplayName("Employee Reports To"), Expression("jEmployee.[ReportsTo]")]
        public Int32? EmployeeReportsTo
        {
            get => fields.EmployeeReportsTo[this];
            set => fields.EmployeeReportsTo[this] = value;
        }

        [DisplayName("Employee Photo Path"), Expression("jEmployee.[PhotoPath]")]
        public String EmployeePhotoPath
        {
            get => fields.EmployeePhotoPath[this];
            set => fields.EmployeePhotoPath[this] = value;
        }

        [DisplayName("Territory Territory Description"), Expression("jTerritory.[TerritoryDescription]")]
        public String TerritoryTerritoryDescription
        {
            get => fields.TerritoryTerritoryDescription[this];
            set => fields.TerritoryTerritoryDescription[this] = value;
        }

        [DisplayName("Territory Region Id"), Expression("jTerritory.[RegionID]")]
        public Int32? TerritoryRegionID
        {
            get => fields.TerritoryRegionID[this];
            set => fields.TerritoryRegionID[this] = value;
        }
        public EmployeeTerritoryRow()
        {
        }

        public EmployeeTerritoryRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EmployeeID;
            public StringField TerritoryID;

            public StringField EmployeeLastName;
            public StringField EmployeeFirstName;
            public StringField EmployeeTitle;
            public StringField EmployeeTitleOfCourtesy;
            public DateTimeField EmployeeBirthDate;
            public DateTimeField EmployeeHireDate;
            public StringField EmployeeAddress;
            public StringField EmployeeCity;
            public StringField EmployeeRegion;
            public StringField EmployeePostalCode;
            public StringField EmployeeCountry;
            public StringField EmployeeHomePhone;
            public StringField EmployeeExtension;
            public StreamField EmployeePhoto;
            public StringField EmployeeNotes;
            public Int32Field EmployeeReportsTo;
            public StringField EmployeePhotoPath;


            public StringField TerritoryTerritoryDescription;
            public Int32Field TerritoryRegionID;
        }
    }
}