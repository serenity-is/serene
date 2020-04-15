namespace Serene.Administration {
    export interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }

    export namespace UserRoleRow {
        export const idProperty = 'UserRoleId';
        export const localTextPrefix = 'Administration.UserRole';
        export const deletePermission = 'Administration:Security';
        export const insertPermission = 'Administration:Security';
        export const readPermission = 'Administration:Security';
        export const updatePermission = 'Administration:Security';

        export declare const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}

