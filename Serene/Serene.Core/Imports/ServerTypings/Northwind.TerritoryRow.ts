namespace Serene.Northwind {
    export interface TerritoryRow {
        ID?: number;
        TerritoryID?: string;
        TerritoryDescription?: string;
        RegionID?: number;
        RegionDescription?: string;
    }

    export namespace TerritoryRow {
        export const idProperty = 'ID';
        export const nameProperty = 'TerritoryID';
        export const localTextPrefix = 'Northwind.Territory';
        export const lookupKey = 'Northwind.Territory';

        export function getLookup(): Q.Lookup<TerritoryRow> {
            return Q.getLookup<TerritoryRow>('Northwind.Territory');
        }

        export declare const enum Fields {
            ID = "ID",
            TerritoryID = "TerritoryID",
            TerritoryDescription = "TerritoryDescription",
            RegionID = "RegionID",
            RegionDescription = "RegionDescription"
        }
    }
}
