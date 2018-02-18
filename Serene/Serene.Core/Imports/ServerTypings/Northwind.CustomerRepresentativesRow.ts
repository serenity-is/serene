namespace Serene.Northwind {
    export interface CustomerRepresentativesRow {
        RepresentativeId?: number;
        CustomerId?: number;
        EmployeeId?: number;
    }

    export namespace CustomerRepresentativesRow {
        export const idProperty = 'RepresentativeId';
        export const localTextPrefix = 'Northwind.CustomerRepresentatives';

        export declare const enum Fields {
            RepresentativeId = "RepresentativeId",
            CustomerId = "CustomerId",
            EmployeeId = "EmployeeId"
        }
    }
}
