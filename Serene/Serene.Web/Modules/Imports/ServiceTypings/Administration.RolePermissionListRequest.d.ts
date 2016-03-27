declare namespace Serene.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID: number;
        Module: string;
        Submodule: string;
    }
}
