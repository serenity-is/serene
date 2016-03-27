declare namespace Serene.Northwind {
    interface EmployeeRow {
        EmployeeID: number;
        LastName: string;
        FirstName: string;
        FullName: string;
        Title: string;
        TitleOfCourtesy: string;
        BirthDate: string;
        HireDate: string;
        Address: string;
        City: string;
        Region: string;
        PostalCode: string;
        Country: string;
        HomePhone: string;
        Extension: string;
        Photo: number[];
        Notes: string;
        ReportsTo: number;
        PhotoPath: string;
        ReportsToFullName: string;
        ReportsToLastName: string;
        ReportsToFirstName: string;
        ReportsToTitle: string;
        ReportsToTitleOfCourtesy: string;
        ReportsToBirthDate: string;
        ReportsToHireDate: string;
        ReportsToAddress: string;
        ReportsToCity: string;
        ReportsToRegion: string;
        ReportsToPostalCode: string;
        ReportsToCountry: string;
        ReportsToHomePhone: string;
        ReportsToExtension: string;
        ReportsToPhoto: number[];
        ReportsToNotes: string;
        ReportsToReportsTo: number;
        ReportsToPhotoPath: string;
        Gender: Gender;
    }
    namespace EmployeeRow {
        const IdProperty: string;
        const NameProperty: string;
        const LocalTextPrefix: string;
        const LookupKey: string;
        namespace Fields {
            const EmployeeID: "EmployeeID";
            const LastName: "LastName";
            const FirstName: "FirstName";
            const FullName: "FullName";
            const Title: "Title";
            const TitleOfCourtesy: "TitleOfCourtesy";
            const BirthDate: "BirthDate";
            const HireDate: "HireDate";
            const Address: "Address";
            const City: "City";
            const Region: "Region";
            const PostalCode: "PostalCode";
            const Country: "Country";
            const HomePhone: "HomePhone";
            const Extension: "Extension";
            const Photo: "Photo";
            const Notes: "Notes";
            const ReportsTo: "ReportsTo";
            const PhotoPath: "PhotoPath";
            const ReportsToFullName: "ReportsToFullName";
            const ReportsToLastName: "ReportsToLastName";
            const ReportsToFirstName: "ReportsToFirstName";
            const ReportsToTitle: "ReportsToTitle";
            const ReportsToTitleOfCourtesy: "ReportsToTitleOfCourtesy";
            const ReportsToBirthDate: "ReportsToBirthDate";
            const ReportsToHireDate: "ReportsToHireDate";
            const ReportsToAddress: "ReportsToAddress";
            const ReportsToCity: "ReportsToCity";
            const ReportsToRegion: "ReportsToRegion";
            const ReportsToPostalCode: "ReportsToPostalCode";
            const ReportsToCountry: "ReportsToCountry";
            const ReportsToHomePhone: "ReportsToHomePhone";
            const ReportsToExtension: "ReportsToExtension";
            const ReportsToPhoto: "ReportsToPhoto";
            const ReportsToNotes: "ReportsToNotes";
            const ReportsToReportsTo: "ReportsToReportsTo";
            const ReportsToPhotoPath: "ReportsToPhotoPath";
            const Gender: "Gender";
        }
    }
}
