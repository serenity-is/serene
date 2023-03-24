import { ServiceRequest } from "@serenity-is/corelib/q";

export interface RolePermissionListRequest extends ServiceRequest {
    RoleID?: number;
    Module?: string;
    Submodule?: string;
}