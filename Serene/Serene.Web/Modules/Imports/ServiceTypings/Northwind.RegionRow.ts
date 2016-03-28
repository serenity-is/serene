namespace Serene.Northwind {
    export interface RegionRow {
        RegionID?: number;
        RegionDescription?: string;
    }

    export namespace RegionRow {
        export const idProperty = "RegionID";
        export const nameProperty = "RegionDescription";
        export const localTextPrefix = "Northwind.Region";
        export const lookupKey = "Northwind.Region";

        export function lookup() {
            return Q.getLookup("Northwind.Region");
        }

        export namespace Fields {
            export declare const RegionID: "RegionID";
            export declare const RegionDescription: "RegionDescription";
        }

        ["RegionID","RegionDescription"].forEach(x => (<any>Fields)[x] = x);
    }
}

