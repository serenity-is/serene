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
            export declare const CategoryId: 'CategoryId';
            export declare const CategoryName: 'CategoryName';
            export declare const ProductName: 'ProductName';
            export declare const ProductSales: 'ProductSales';
        }

        ['CategoryId', 'CategoryName', 'ProductName', 'ProductSales'].forEach(x => (<any>Fields)[x] = x);
    }
}

