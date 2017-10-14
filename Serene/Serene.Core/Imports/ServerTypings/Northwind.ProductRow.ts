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
        export const idProperty = 'ProductID';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'Northwind.Product';
        export const lookupKey = 'Northwind.Product';

        export function getLookup(): Q.Lookup<ProductRow> {
            return Q.getLookup<ProductRow>('Northwind.Product');
        }

        export namespace Fields {
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
            export declare const SupplierCompanyName: string;
            export declare const SupplierContactName: string;
            export declare const SupplierContactTitle: string;
            export declare const SupplierAddress: string;
            export declare const SupplierCity: string;
            export declare const SupplierRegion: string;
            export declare const SupplierPostalCode: string;
            export declare const SupplierCountry: string;
            export declare const SupplierPhone: string;
            export declare const SupplierFax: string;
            export declare const SupplierHomePage: string;
            export declare const CategoryName: string;
            export declare const CategoryDescription: string;
            export declare const CategoryPicture: string;
        }

        [
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
            'ReorderLevel', 
            'SupplierCompanyName', 
            'SupplierContactName', 
            'SupplierContactTitle', 
            'SupplierAddress', 
            'SupplierCity', 
            'SupplierRegion', 
            'SupplierPostalCode', 
            'SupplierCountry', 
            'SupplierPhone', 
            'SupplierFax', 
            'SupplierHomePage', 
            'CategoryName', 
            'CategoryDescription', 
            'CategoryPicture'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
