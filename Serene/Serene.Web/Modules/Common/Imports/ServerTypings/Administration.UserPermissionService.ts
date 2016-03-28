namespace Serene.Administration {
    export namespace UserPermissionService {
        export const baseUrl = 'Administration/UserPermission';

        export declare function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const Update: 'Administration/UserPermission/Update';
            export declare const List: 'Administration/UserPermission/List';
            export declare const ListRolePermissions: 'Administration/UserPermission/ListRolePermissions';
            export declare const ListPermissionKeys: 'Administration/UserPermission/ListPermissionKeys';
        }

        ['Update', 'List', 'ListRolePermissions', 'ListPermissionKeys'].forEach(x => {
            (<any>UserPermissionService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}

