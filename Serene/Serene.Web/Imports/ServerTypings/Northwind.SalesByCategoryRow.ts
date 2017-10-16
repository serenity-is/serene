namespace Serene.Northwind {
    export interface SalesByCategoryRow {
        CategoryId?: number;
        CategoryName?: string;
        ProductName?: string;
        ProductSales?: number;
    }

    export namespace SalesByCategoryRow {
        export const nameProperty = 'CategoryName';
        export const localTextPrefix = 'Northwind.SalesByCategory';

        export namespace Fields {
            export declare const CategoryId: string;
            export declare const CategoryName: string;
            export declare const ProductName: string;
            export declare const ProductSales: string;
        }

        [
            'CategoryId', 
            'CategoryName', 
            'ProductName', 
            'ProductSales'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

