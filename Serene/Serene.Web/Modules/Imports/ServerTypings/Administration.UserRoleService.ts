namespace Serene.Administration {
    export namespace UserRoleService {
        export const baseUrl = 'Administration/UserRole';

        export declare function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const Update: 'Administration/UserRole/Update';
            export declare const List: 'Administration/UserRole/List';
        }

        ['Update', 'List'].forEach(x => {
            (<any>UserRoleService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}

