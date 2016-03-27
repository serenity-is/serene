namespace Serene.Northwind
{
    export interface RegionRow
    {
        RegionID: number;
        RegionDescription: string;
    }

    export namespace RegionRow
    {
        export const IdProperty = "RegionID";
        export const NameProperty = "RegionDescription";
        export const LocalTextPrefix = "Northwind.Region";
        export const LookupKey = "Northwind.Region";

        export namespace Fields
        {
            export declare const RegionID: "RegionID";
            export declare const RegionDescription: "RegionDescription";
        }

        ["RegionID","RegionDescription"].forEach(x => (<any>Fields)[x] = x);
    }
}

