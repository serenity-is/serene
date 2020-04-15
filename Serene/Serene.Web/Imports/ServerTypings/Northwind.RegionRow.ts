namespace Serene.Northwind {
    export interface RegionRow {
        RegionID?: number;
        RegionDescription?: string;
    }

    export namespace RegionRow {
        export const idProperty = 'RegionID';
        export const nameProperty = 'RegionDescription';
        export const localTextPrefix = 'Northwind.Region';
        export const lookupKey = 'Northwind.Region';

        export function getLookup(): Q.Lookup<RegionRow> {
            return Q.getLookup<RegionRow>('Northwind.Region');
        }
        export const deletePermission = 'Northwind:General';
        export const insertPermission = 'Northwind:General';
        export const readPermission = 'Northwind:General';
        export const updatePermission = 'Northwind:General';

        export declare const enum Fields {
            RegionID = "RegionID",
            RegionDescription = "RegionDescription"
        }
    }
}

