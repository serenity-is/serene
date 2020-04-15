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
        export const deletePermission = 'Northwind:General';
        export const insertPermission = 'Northwind:General';
        export const readPermission = 'Northwind:General';
        export const updatePermission = 'Northwind:General';

        export declare const enum Fields {
            CategoryId = "CategoryId",
            CategoryName = "CategoryName",
            ProductName = "ProductName",
            ProductSales = "ProductSales"
        }
    }
}

