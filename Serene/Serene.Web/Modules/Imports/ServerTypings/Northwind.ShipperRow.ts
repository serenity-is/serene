namespace Serene.Northwind {
    export interface ShipperRow {
        ShipperID?: number;
        CompanyName?: string;
        Phone?: string;
    }

    export namespace ShipperRow {
        export const idProperty = 'ShipperID';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'Northwind.Shipper';
        export const lookupKey = 'Northwind.Shipper';

        export function lookup() {
            return Q.getLookup('Northwind.Shipper');
        }

        export namespace Fields {
            export declare const ShipperID: 'ShipperID';
            export declare const CompanyName: 'CompanyName';
            export declare const Phone: 'Phone';
        }

        ['ShipperID', 'CompanyName', 'Phone'].forEach(x => (<any>Fields)[x] = x);
    }
}

