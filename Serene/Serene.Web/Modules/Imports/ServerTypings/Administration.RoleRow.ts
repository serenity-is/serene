namespace Serene.Administration {
    export interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }

    export namespace RoleRow {
        export const idProperty = 'RoleId';
        export const nameProperty = 'RoleName';
        export const localTextPrefix = 'Administration.Role';
        export const lookupKey = 'Administration.Role';

        export function lookup() {
            return Q.getLookup('Administration.Role');
        }

        export namespace Fields {
            export declare const RoleId: 'RoleId';
            export declare const RoleName: 'RoleName';
        }

        ['RoleId', 'RoleName'].forEach(x => (<any>Fields)[x] = x);
    }
}

