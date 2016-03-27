namespace Serene.Northwind
{
    export interface EmployeeTerritoryRow
    {
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

    export namespace EmployeeTerritoryRow
    {
        export const IdProperty = "EmployeeID";
        export const NameProperty = "TerritoryID";
        export const LocalTextPrefix = "Northwind.EmployeeTerritory";

        export namespace Fields
        {
            export declare const EmployeeID: "EmployeeID";
            export declare const TerritoryID: "TerritoryID";
            export declare const EmployeeLastName: "EmployeeLastName";
            export declare const EmployeeFirstName: "EmployeeFirstName";
            export declare const EmployeeTitle: "EmployeeTitle";
            export declare const EmployeeTitleOfCourtesy: "EmployeeTitleOfCourtesy";
            export declare const EmployeeBirthDate: "EmployeeBirthDate";
            export declare const EmployeeHireDate: "EmployeeHireDate";
            export declare const EmployeeAddress: "EmployeeAddress";
            export declare const EmployeeCity: "EmployeeCity";
            export declare const EmployeeRegion: "EmployeeRegion";
            export declare const EmployeePostalCode: "EmployeePostalCode";
            export declare const EmployeeCountry: "EmployeeCountry";
            export declare const EmployeeHomePhone: "EmployeeHomePhone";
            export declare const EmployeeExtension: "EmployeeExtension";
            export declare const EmployeePhoto: "EmployeePhoto";
            export declare const EmployeeNotes: "EmployeeNotes";
            export declare const EmployeeReportsTo: "EmployeeReportsTo";
            export declare const EmployeePhotoPath: "EmployeePhotoPath";
            export declare const TerritoryTerritoryDescription: "TerritoryTerritoryDescription";
            export declare const TerritoryRegionID: "TerritoryRegionID";
        }

        ["EmployeeID","TerritoryID","EmployeeLastName","EmployeeFirstName","EmployeeTitle","EmployeeTitleOfCourtesy","EmployeeBirthDate","EmployeeHireDate","EmployeeAddress","EmployeeCity","EmployeeRegion","EmployeePostalCode","EmployeeCountry","EmployeeHomePhone","EmployeeExtension","EmployeePhoto","EmployeeNotes","EmployeeReportsTo","EmployeePhotoPath","TerritoryTerritoryDescription","TerritoryRegionID"].forEach(x => (<any>Fields)[x] = x);
    }
}

