namespace Serene.Northwind
{
    export interface ShipperRow
    {
        ShipperID: number;
        CompanyName: string;
        Phone: string;
    }

    export namespace ShipperRow
    {
        export const IdProperty = "ShipperID";
        export const NameProperty = "CompanyName";
        export const LocalTextPrefix = "Northwind.Shipper";
        export const LookupKey = "Northwind.Shipper";

        export namespace Fields
        {
            export declare const ShipperID: "ShipperID";
            export declare const CompanyName: "CompanyName";
            export declare const Phone: "Phone";
        }

        ["ShipperID","CompanyName","Phone"].forEach(x => (<any>Fields)[x] = x);
    }
}

