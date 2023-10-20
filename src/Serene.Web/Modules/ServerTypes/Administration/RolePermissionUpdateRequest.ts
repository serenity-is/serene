import { ServiceRequest } from "@serenity-is/corelib";

export interface RolePermissionUpdateRequest extends ServiceRequest {
    RoleID?: number;
    Module?: string;
    Submodule?: string;
    Permissions?: string[];
}