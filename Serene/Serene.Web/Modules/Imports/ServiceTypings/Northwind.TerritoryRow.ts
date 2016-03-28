namespace Serene.Northwind {
    export interface TerritoryRow {
        ID?: number;
        TerritoryID?: string;
        TerritoryDescription?: string;
        RegionID?: number;
        RegionDescription?: string;
    }

    export namespace TerritoryRow {
        export const idProperty = "ID";
        export const nameProperty = "TerritoryID";
        export const localTextPrefix = "Northwind.Territory";
        export const lookupKey = "Northwind.Territory";

        export function lookup() {
            return Q.getLookup("Northwind.Territory");
        }

        export namespace Fields {
            export declare const ID: "ID";
            export declare const TerritoryID: "TerritoryID";
            export declare const TerritoryDescription: "TerritoryDescription";
            export declare const RegionID: "RegionID";
            export declare const RegionDescription: "RegionDescription";
        }

        ["ID","TerritoryID","TerritoryDescription","RegionID","RegionDescription"].forEach(x => (<any>Fields)[x] = x);
    }
}

