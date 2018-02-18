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

        export declare const enum Fields {
            CategoryId = "CategoryId",
            CategoryName = "CategoryName",
            ProductName = "ProductName",
            ProductSales = "ProductSales"
        }
    }
}
