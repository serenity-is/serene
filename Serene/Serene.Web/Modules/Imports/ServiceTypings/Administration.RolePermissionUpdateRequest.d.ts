declare namespace Serene.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID: number;
        Module: string;
        Submodule: string;
        Permissions: string[];
    }
}
