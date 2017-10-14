namespace Serene.Administration {
    export namespace UserRoleService {
        export const baseUrl = 'Administration/UserRole';

        export declare function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const Update: string;
            export declare const List: string;
        }

        [
            'Update', 
            'List'
        ].forEach(x => {
            (<any>UserRoleService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}
