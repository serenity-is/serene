namespace Serene.Organization {
    export interface BusinessUnitRow {
        UnitId?: number;
        Name?: string;
        ParentUnitId?: number;
        ParentUnitName?: string;
        ParentUnitParentUnitId?: number;
    }

    export namespace BusinessUnitRow {
        export const idProperty = 'UnitId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Organization.BusinessUnit';
        export const lookupKey = 'Organization.BusinessUnit';

        export function getLookup(): Q.Lookup<BusinessUnitRow> {
            return Q.getLookup<BusinessUnitRow>('Organization.BusinessUnit');
        }

        export namespace Fields {
            export declare const UnitId: string;
            export declare const Name: string;
            export declare const ParentUnitId: string;
            export declare const ParentUnitName: string;
            export declare const ParentUnitParentUnitId: string;
        }

        [
            'UnitId', 
            'Name', 
            'ParentUnitId', 
            'ParentUnitName', 
            'ParentUnitParentUnitId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
