namespace Serene.Common {
    export interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }

    export namespace UserPreferenceRow {
        export const idProperty = 'UserPreferenceId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Common.UserPreference';
        export const deletePermission = '';
        export const insertPermission = '';
        export const readPermission = '';
        export const updatePermission = '';

        export declare const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}

