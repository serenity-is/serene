namespace Serene.Northwind {
    export interface ProductLogRow {
        ProductLogID?: number;
        OperationType?: Serenity.CaptureOperationType;
        ChangingUserId?: number;
        ValidFrom?: string;
        ValidUntil?: string;
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
    }

    export namespace ProductLogRow {
        export const idProperty = "ProductLogID";
        export const localTextPrefix = "Northwind.ProductLog";

        export namespace Fields {
            export declare const ProductLogID: "ProductLogID";
            export declare const OperationType: "OperationType";
            export declare const ChangingUserId: "ChangingUserId";
            export declare const ValidFrom: "ValidFrom";
            export declare const ValidUntil: "ValidUntil";
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
        }

        ["ProductLogID","OperationType","ChangingUserId","ValidFrom","ValidUntil","ProductID","ProductName","ProductImage","Discontinued","SupplierID","CategoryID","QuantityPerUnit","UnitPrice","UnitsInStock","UnitsOnOrder","ReorderLevel"].forEach(x => (<any>Fields)[x] = x);
    }
}

