namespace Serene.Administration {
    export interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }

    export namespace RolePermissionRow {
        export const idProperty = 'RolePermissionId';
        export const nameProperty = 'PermissionKey';
        export const localTextPrefix = 'Administration.RolePermission';

        export namespace Fields {
            export declare const RolePermissionId: 'RolePermissionId';
            export declare const RoleId: 'RoleId';
            export declare const PermissionKey: 'PermissionKey';
            export declare const RoleRoleName: 'RoleRoleName';
        }

        ['RolePermissionId', 'RoleId', 'PermissionKey', 'RoleRoleName'].forEach(x => (<any>Fields)[x] = x);
    }
}

