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

        export namespace Fields {
            export declare const UserRoleId: 'UserRoleId';
            export declare const UserId: 'UserId';
            export declare const RoleId: 'RoleId';
            export declare const Username: 'Username';
            export declare const User: 'User';
        }

        ['UserRoleId', 'UserId', 'RoleId', 'Username', 'User'].forEach(x => (<any>Fields)[x] = x);
    }
}

