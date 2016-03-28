namespace Serene.Administration {
    export interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace UserRow {
        export const idProperty = 'UserId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Username';
        export const localTextPrefix = 'Administration.User';

        export namespace Fields {
            export declare const UserId: 'UserId';
            export declare const Username: 'Username';
            export declare const Source: 'Source';
            export declare const PasswordHash: 'PasswordHash';
            export declare const PasswordSalt: 'PasswordSalt';
            export declare const DisplayName: 'DisplayName';
            export declare const Email: 'Email';
            export declare const LastDirectoryUpdate: 'LastDirectoryUpdate';
            export declare const IsActive: 'IsActive';
            export declare const Password: 'Password';
            export declare const PasswordConfirm: 'PasswordConfirm';
            export declare const InsertUserId: 'InsertUserId';
            export declare const InsertDate: 'InsertDate';
            export declare const UpdateUserId: 'UpdateUserId';
            export declare const UpdateDate: 'UpdateDate';
        }

        ['UserId', 'Username', 'Source', 'PasswordHash', 'PasswordSalt', 'DisplayName', 'Email', 'LastDirectoryUpdate', 'IsActive', 'Password', 'PasswordConfirm', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

