
namespace Serene.Organization {
    export interface BusinessUnitsRow {
        UnitId?: number;
        Name?: string;
        ParentUnitId?: number;
        ParentUnitName?: string;
        ParentUnitParentUnitId?: number;
    }

    export namespace BusinessUnitsRow {
        export const idProperty = 'UnitId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Organization.BusinessUnits';

        export namespace Fields {
            export declare const UnitId;
            export declare const Name;
            export declare const ParentUnitId;
            export declare const ParentUnitName: string;
            export declare const ParentUnitParentUnitId: string;
        }

        ['UnitId', 'Name', 'ParentUnitId', 'ParentUnitName', 'ParentUnitParentUnitId'].forEach(x => (<any>Fields)[x] = x);
    }
}

