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
        export const localTextPrefix = 'BasicSamples.GrossSales';

        export namespace Fields {
            export declare const CustomerId: string;
            export declare const ContactName: string;
            export declare const ProductId: string;
            export declare const ProductName: string;
            export declare const GrossAmount: string;
        }

        ['CustomerId', 'ContactName', 'ProductId', 'ProductName', 'GrossAmount'].forEach(x => (<any>Fields)[x] = x);
    }
}
