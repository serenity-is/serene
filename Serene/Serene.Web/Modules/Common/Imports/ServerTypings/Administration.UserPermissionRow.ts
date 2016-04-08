namespace Serene.Administration {
    export interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Grant?: boolean;
        Username?: string;
        User?: string;
    }

    export namespace UserPermissionRow {
        export const idProperty = 'UserPermissionId';
        export const nameProperty = 'PermissionKey';
        export const localTextPrefix = 'Administration.UserPermission';

        export namespace Fields {
            export declare const UserPermissionId: string;
            export declare const UserId: string;
            export declare const PermissionKey: string;
            export declare const Grant: string;
            export declare const Username: string;
            export declare const User: string;
        }

        ['UserPermissionId', 'UserId', 'PermissionKey', 'Grant', 'Username', 'User'].forEach(x => (<any>Fields)[x] = x);
    }
}

