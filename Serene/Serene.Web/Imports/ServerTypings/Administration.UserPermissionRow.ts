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

        export declare const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}

