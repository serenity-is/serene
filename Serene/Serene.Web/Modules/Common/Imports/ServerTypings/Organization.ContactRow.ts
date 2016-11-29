﻿namespace Serene.Organization {
    export interface ContactRow {
        ContactId?: number;
        Title?: string;
        FirstName?: string;
        LastName?: string;
        Email?: string;
        IdentityNo?: string;
        UserId?: number;
        UserUsername?: string;
        UserDisplayName?: string;
        UserEmail?: string;
        UserSource?: string;
        UserPasswordHash?: string;
        UserPasswordSalt?: string;
        UserLastDirectoryUpdate?: string;
        UserUserImage?: string;
        UserInsertDate?: string;
        UserInsertUserId?: number;
        UserUpdateDate?: string;
        UserUpdateUserId?: number;
        UserIsActive?: number;
    }

    export namespace ContactRow {
        export const idProperty = 'ContactId';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Organization.Contact';

        export namespace Fields {
            export declare const ContactId: string;
            export declare const Title: string;
            export declare const FirstName: string;
            export declare const LastName: string;
            export declare const Email: string;
            export declare const IdentityNo: string;
            export declare const UserId: string;
            export declare const UserUsername: string;
            export declare const UserDisplayName: string;
            export declare const UserEmail: string;
            export declare const UserSource: string;
            export declare const UserPasswordHash: string;
            export declare const UserPasswordSalt: string;
            export declare const UserLastDirectoryUpdate: string;
            export declare const UserUserImage: string;
            export declare const UserInsertDate: string;
            export declare const UserInsertUserId: string;
            export declare const UserUpdateDate: string;
            export declare const UserUpdateUserId: string;
            export declare const UserIsActive: string;
        }

        ['ContactId', 'Title', 'FirstName', 'LastName', 'Email', 'IdentityNo', 'UserId', 'UserUsername', 'UserDisplayName', 'UserEmail', 'UserSource', 'UserPasswordHash', 'UserPasswordSalt', 'UserLastDirectoryUpdate', 'UserUserImage', 'UserInsertDate', 'UserInsertUserId', 'UserUpdateDate', 'UserUpdateUserId', 'UserIsActive'].forEach(x => (<any>Fields)[x] = x);
    }
}

