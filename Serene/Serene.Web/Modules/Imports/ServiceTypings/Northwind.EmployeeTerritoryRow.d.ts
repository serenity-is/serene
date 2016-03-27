declare namespace Serene.Northwind {
    interface EmployeeTerritoryRow {
        EmployeeID: number;
        TerritoryID: string;
        EmployeeLastName: string;
        EmployeeFirstName: string;
        EmployeeTitle: string;
        EmployeeTitleOfCourtesy: string;
        EmployeeBirthDate: string;
        EmployeeHireDate: string;
        EmployeeAddress: string;
        EmployeeCity: string;
        EmployeeRegion: string;
        EmployeePostalCode: string;
        EmployeeCountry: string;
        EmployeeHomePhone: string;
        EmployeeExtension: string;
        EmployeePhoto: number[];
        EmployeeNotes: string;
        EmployeeReportsTo: number;
        EmployeePhotoPath: string;
        TerritoryTerritoryDescription: string;
        TerritoryRegionID: number;
    }
    namespace EmployeeTerritoryRow {
        const IdProperty: string;
        const NameProperty: string;
        const LocalTextPrefix: string;
        namespace Fields {
            const EmployeeID: "EmployeeID";
            const TerritoryID: "TerritoryID";
            const EmployeeLastName: "EmployeeLastName";
            const EmployeeFirstName: "EmployeeFirstName";
            const EmployeeTitle: "EmployeeTitle";
            const EmployeeTitleOfCourtesy: "EmployeeTitleOfCourtesy";
            const EmployeeBirthDate: "EmployeeBirthDate";
            const EmployeeHireDate: "EmployeeHireDate";
            const EmployeeAddress: "EmployeeAddress";
            const EmployeeCity: "EmployeeCity";
            const EmployeeRegion: "EmployeeRegion";
            const EmployeePostalCode: "EmployeePostalCode";
            const EmployeeCountry: "EmployeeCountry";
            const EmployeeHomePhone: "EmployeeHomePhone";
            const EmployeeExtension: "EmployeeExtension";
            const EmployeePhoto: "EmployeePhoto";
            const EmployeeNotes: "EmployeeNotes";
            const EmployeeReportsTo: "EmployeeReportsTo";
            const EmployeePhotoPath: "EmployeePhotoPath";
            const TerritoryTerritoryDescription: "TerritoryTerritoryDescription";
            const TerritoryRegionID: "TerritoryRegionID";
        }
    }
}
