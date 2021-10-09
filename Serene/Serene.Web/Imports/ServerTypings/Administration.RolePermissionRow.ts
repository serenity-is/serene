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
        export const deletePermission = 'Administration:Security';
        export const insertPermission = 'Administration:Security';
        export const readPermission = 'Administration:Security';
        export const updatePermission = 'Administration:Security';

        export declare const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
