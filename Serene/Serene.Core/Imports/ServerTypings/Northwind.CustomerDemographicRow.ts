namespace Serene.Northwind {
    export interface CustomerDemographicRow {
        ID?: number;
        CustomerTypeID?: string;
        CustomerDesc?: string;
    }

    export namespace CustomerDemographicRow {
        export const idProperty = 'ID';
        export const nameProperty = 'CustomerTypeID';
        export const localTextPrefix = 'Northwind.CustomerDemographic';
        export const deletePermission = 'Northwind:General';
        export const insertPermission = 'Northwind:General';
        export const readPermission = 'Northwind:General';
        export const updatePermission = 'Northwind:General';

        export declare const enum Fields {
            ID = "ID",
            CustomerTypeID = "CustomerTypeID",
            CustomerDesc = "CustomerDesc"
        }
    }
}
