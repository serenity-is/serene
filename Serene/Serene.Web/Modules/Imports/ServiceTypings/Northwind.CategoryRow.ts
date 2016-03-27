namespace Serene.Northwind
{
    export interface CategoryRow
    {
        CategoryID: number;
        CategoryName: string;
        Description: string;
        Picture: number[];
    }

    export namespace CategoryRow
    {
        export const IdProperty = "CategoryID";
        export const NameProperty = "CategoryName";
        export const LocalTextPrefix = "Northwind.Category";
        export const LookupKey = "Northwind.Category";

        export namespace Fields
        {
            export declare const CategoryID: "CategoryID";
            export declare const CategoryName: "CategoryName";
            export declare const Description: "Description";
            export declare const Picture: "Picture";
        }

        ["CategoryID","CategoryName","Description","Picture"].forEach(x => (<any>Fields)[x] = x);
    }
}

