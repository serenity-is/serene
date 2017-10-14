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
            export declare const RolePermissionId: string;
            export declare const RoleId: string;
            export declare const PermissionKey: string;
            export declare const RoleRoleName: string;
        }

        [
            'RolePermissionId', 
            'RoleId', 
            'PermissionKey', 
            'RoleRoleName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
