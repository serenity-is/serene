import { ServiceRequest } from "@serenity-is/corelib/q";

export interface UserRoleListRequest extends ServiceRequest {
    UserID?: number;
}