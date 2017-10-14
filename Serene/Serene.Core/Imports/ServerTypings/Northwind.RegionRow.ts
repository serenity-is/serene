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

        export namespace Fields {
            export declare const RegionID: string;
            export declare const RegionDescription: string;
        }

        [
            'RegionID', 
            'RegionDescription'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
