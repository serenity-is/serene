namespace Serene.Administration {
    export interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
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
        export const lookupKey = 'Administration.User';

        export function getLookup(): Q.Lookup<UserRow> {
            return Q.getLookup<UserRow>('Administration.User');
        }

        export namespace Fields {
            export declare const UserId: string;
            export declare const Username: string;
            export declare const Source: string;
            export declare const PasswordHash: string;
            export declare const PasswordSalt: string;
            export declare const DisplayName: string;
            export declare const Email: string;
            export declare const UserImage: string;
            export declare const LastDirectoryUpdate: string;
            export declare const IsActive: string;
            export declare const Password: string;
            export declare const PasswordConfirm: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDate: string;
        }

        [
            'UserId', 
            'Username', 
            'Source', 
            'PasswordHash', 
            'PasswordSalt', 
            'DisplayName', 
            'Email', 
            'UserImage', 
            'LastDirectoryUpdate', 
            'IsActive', 
            'Password', 
            'PasswordConfirm', 
            'InsertUserId', 
            'InsertDate', 
            'UpdateUserId', 
            'UpdateDate'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

