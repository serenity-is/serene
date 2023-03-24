import { UserRoleUpdateRequest } from "./UserRoleUpdateRequest";
import { SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib/q";
import { UserRoleListRequest } from "./UserRoleListRequest";
import { UserRoleListResponse } from "./UserRoleListResponse";

export namespace UserRoleService {
    export const baseUrl = 'Administration/UserRole';

    export declare function Update(request: UserRoleUpdateRequest, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;
    export declare function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: ServiceOptions<any>): JQueryXHR;

    export const Methods = {
        Update: "Administration/UserRole/Update",
        List: "Administration/UserRole/List"
    } as const;

    [
        'Update', 
        'List'
    ].forEach(x => {
        (<any>UserRoleService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}