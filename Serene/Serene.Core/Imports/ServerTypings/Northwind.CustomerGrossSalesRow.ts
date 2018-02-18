namespace Serene.Northwind {
    export interface CustomerGrossSalesRow {
        CustomerId?: string;
        ContactName?: string;
        ProductId?: number;
        ProductName?: string;
        GrossAmount?: number;
    }

    export namespace CustomerGrossSalesRow {
        export const nameProperty = 'ContactName';
        export const localTextPrefix = 'Northwind.CustomerGrossSales';

        export declare const enum Fields {
            CustomerId = "CustomerId",
            ContactName = "ContactName",
            ProductId = "ProductId",
            ProductName = "ProductName",
            GrossAmount = "GrossAmount"
        }
    }
}
