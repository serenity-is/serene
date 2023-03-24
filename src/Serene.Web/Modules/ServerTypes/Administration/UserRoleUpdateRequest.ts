import { ServiceRequest } from "@serenity-is/corelib/q";

export interface UserRoleUpdateRequest extends ServiceRequest {
    UserID?: number;
    Roles?: number[];
}