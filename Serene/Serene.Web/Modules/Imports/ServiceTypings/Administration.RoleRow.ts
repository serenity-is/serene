namespace Serene.Administration
{
    export interface RoleRow
    {
        RoleId: number;
        RoleName: string;
    }

    export namespace RoleRow
    {
        export const IdProperty = "RoleId";
        export const NameProperty = "RoleName";
        export const LocalTextPrefix = "Administration.Role";
        export const LookupKey = "Administration.Role";

        export namespace Fields
        {
            export declare const RoleId: "RoleId";
            export declare const RoleName: "RoleName";
        }

        ["RoleId","RoleName"].forEach(x => (<any>Fields)[x] = x);
    }
}

