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
            export declare const UserRoleId: string;
            export declare const UserId: string;
            export declare const RoleId: string;
            export declare const Username: string;
            export declare const User: string;
        }

        ['UserRoleId', 'UserId', 'RoleId', 'Username', 'User'].forEach(x => (<any>Fields)[x] = x);
    }
}

