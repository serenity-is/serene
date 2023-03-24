import { ServiceRequest } from "@serenity-is/corelib/q";
import { UserPermissionRow } from "./UserPermissionRow";

export interface UserPermissionUpdateRequest extends ServiceRequest {
    UserID?: number;
    Module?: string;
    Submodule?: string;
    Permissions?: UserPermissionRow[];
}