namespace Serene.Administration {
    export namespace UserRoleService {
        export const baseUrl = 'Administration/UserRole';

        export declare function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }

        [
            'Update', 
            'List'
        ].forEach(x => {
            (<any>UserRoleService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
