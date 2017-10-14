namespace Serene.Administration {
    export interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
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
            export declare const Granted: string;
            export declare const Username: string;
            export declare const User: string;
        }

        [
            'UserPermissionId', 
            'UserId', 
            'PermissionKey', 
            'Granted', 
            'Username', 
            'User'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}
