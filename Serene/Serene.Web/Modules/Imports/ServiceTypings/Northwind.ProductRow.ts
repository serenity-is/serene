namespace Serene.Northwind {
    export interface ProductRow {
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
        SupplierCompanyName?: string;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierCity?: string;
        SupplierRegion?: string;
        SupplierPostalCode?: string;
        SupplierCountry?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierHomePage?: string;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryPicture?: number[];
    }

    export namespace ProductRow {
        export const idProperty = "ProductID";
        export const nameProperty = "ProductName";
        export const localTextPrefix = "Northwind.Product";
        export const lookupKey = "Northwind.Product";

        export function lookup() {
            return Q.getLookup("Northwind.Product");
        }

        export namespace Fields {
            export declare const ProductID: "ProductID";
            export declare const ProductName: "ProductName";
            export declare const ProductImage: "ProductImage";
            export declare const Discontinued: "Discontinued";
            export declare const SupplierID: "SupplierID";
            export declare const CategoryID: "CategoryID";
            export declare const QuantityPerUnit: "QuantityPerUnit";
            export declare const UnitPrice: "UnitPrice";
            export declare const UnitsInStock: "UnitsInStock";
            export declare const UnitsOnOrder: "UnitsOnOrder";
            export declare const ReorderLevel: "ReorderLevel";
            export declare const SupplierCompanyName: "SupplierCompanyName";
            export declare const SupplierContactName: "SupplierContactName";
            export declare const SupplierContactTitle: "SupplierContactTitle";
            export declare const SupplierAddress: "SupplierAddress";
            export declare const SupplierCity: "SupplierCity";
            export declare const SupplierRegion: "SupplierRegion";
            export declare const SupplierPostalCode: "SupplierPostalCode";
            export declare const SupplierCountry: "SupplierCountry";
            export declare const SupplierPhone: "SupplierPhone";
            export declare const SupplierFax: "SupplierFax";
            export declare const SupplierHomePage: "SupplierHomePage";
            export declare const CategoryName: "CategoryName";
            export declare const CategoryDescription: "CategoryDescription";
            export declare const CategoryPicture: "CategoryPicture";
        }

        ["ProductID","ProductName","ProductImage","Discontinued","SupplierID","CategoryID","QuantityPerUnit","UnitPrice","UnitsInStock","UnitsOnOrder","ReorderLevel","SupplierCompanyName","SupplierContactName","SupplierContactTitle","SupplierAddress","SupplierCity","SupplierRegion","SupplierPostalCode","SupplierCountry","SupplierPhone","SupplierFax","SupplierHomePage","CategoryName","CategoryDescription","CategoryPicture"].forEach(x => (<any>Fields)[x] = x);
    }
}

