namespace Serene.Administration {
    export namespace RolePermissionService {
        export const baseUrl = 'Administration/RolePermission';

        export declare function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const Update: 'Administration/RolePermission/Update';
            export declare const List: 'Administration/RolePermission/List';
        }

        ['Update', 'List'].forEach(x => {
            (<any>RolePermissionService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}

