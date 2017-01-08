namespace Serene.Northwind {
    export interface CustomerRepresentativesRow {
        RepresentativeId?: number;
        CustomerId?: number;
        EmployeeId?: number;
    }

    export namespace CustomerRepresentativesRow {
        export const idProperty = 'RepresentativeId';
        export const localTextPrefix = 'CustomerRepresentatives';

        export namespace Fields {
            export declare const RepresentativeId: string;
            export declare const CustomerId: string;
            export declare const EmployeeId: string;
        }

        ['RepresentativeId', 'CustomerId', 'EmployeeId'].forEach(x => (<any>Fields)[x] = x);
    }
}

