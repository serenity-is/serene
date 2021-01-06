namespace Serene.Northwind {
    export interface CustomerRepresentativesRow {
        RepresentativeId?: number;
        CustomerId?: number;
        EmployeeId?: number;
    }

    export namespace CustomerRepresentativesRow {
        export const idProperty = 'RepresentativeId';
        export const localTextPrefix = 'Northwind.CustomerRepresentatives';
        export const deletePermission = 'Northwind:Customer:View';
        export const insertPermission = 'Northwind:Customer:View';
        export const readPermission = 'Northwind:Customer:View';
        export const updatePermission = 'Northwind:Customer:View';

        export declare const enum Fields {
            RepresentativeId = "RepresentativeId",
            CustomerId = "CustomerId",
            EmployeeId = "EmployeeId"
        }
    }
}
