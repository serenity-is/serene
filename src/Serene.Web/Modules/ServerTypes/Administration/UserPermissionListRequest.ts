import { ServiceRequest } from "@serenity-is/corelib/q";

export interface UserPermissionListRequest extends ServiceRequest {
    UserID?: number;
    Module?: string;
    Submodule?: string;
}