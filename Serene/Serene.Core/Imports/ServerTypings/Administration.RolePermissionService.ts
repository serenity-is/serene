namespace Serene.Administration {
    export namespace RolePermissionService {
        export const baseUrl = 'Administration/RolePermission';

        export declare function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const Update: string;
            export declare const List: string;
        }

        [
            'Update', 
            'List'
        ].forEach(x => {
            (<any>RolePermissionService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}
