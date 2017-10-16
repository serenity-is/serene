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

        export namespace Fields {
            export declare const UserPreferenceId: string;
            export declare const UserId: string;
            export declare const PreferenceType: string;
            export declare const Name: string;
            export declare const Value: string;
        }

        [
            'UserPreferenceId', 
            'UserId', 
            'PreferenceType', 
            'Name', 
            'Value'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

