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
        export const idProperty = 'ProductLogID';
        export const localTextPrefix = 'Northwind.ProductLog';

        export namespace Fields {
            export declare const ProductLogID: string;
            export declare const OperationType: string;
            export declare const ChangingUserId: string;
            export declare const ValidFrom: string;
            export declare const ValidUntil: string;
            export declare const ProductID: string;
            export declare const ProductName: string;
            export declare const ProductImage: string;
            export declare const Discontinued: string;
            export declare const SupplierID: string;
            export declare const CategoryID: string;
            export declare const QuantityPerUnit: string;
            export declare const UnitPrice: string;
            export declare const UnitsInStock: string;
            export declare const UnitsOnOrder: string;
            export declare const ReorderLevel: string;
        }

        [
            'ProductLogID', 
            'OperationType', 
            'ChangingUserId', 
            'ValidFrom', 
            'ValidUntil', 
            'ProductID', 
            'ProductName', 
            'ProductImage', 
            'Discontinued', 
            'SupplierID', 
            'CategoryID', 
            'QuantityPerUnit', 
            'UnitPrice', 
            'UnitsInStock', 
            'UnitsOnOrder', 
            'ReorderLevel'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
