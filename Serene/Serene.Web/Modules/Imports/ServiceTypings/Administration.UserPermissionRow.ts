namespace Serene.Administration
{
    export interface UserPermissionRow
    {
        UserPermissionId: number;
        UserId: number;
        PermissionKey: string;
        Grant: boolean;
        Username: string;
        User: string;
    }

    export namespace UserPermissionRow
    {
        export const IdProperty = "UserPermissionId";
        export const NameProperty = "PermissionKey";
        export const LocalTextPrefix = "Administration.UserPermission";

        export namespace Fields
        {
            export declare const UserPermissionId: "UserPermissionId";
            export declare const UserId: "UserId";
            export declare const PermissionKey: "PermissionKey";
            export declare const Grant: "Grant";
            export declare const Username: "Username";
            export declare const User: "User";
        }

        ["UserPermissionId","UserId","PermissionKey","Grant","Username","User"].forEach(x => (<any>Fields)[x] = x);
    }
}

