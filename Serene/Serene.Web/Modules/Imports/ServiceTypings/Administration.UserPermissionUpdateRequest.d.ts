declare namespace Serene.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID: number;
        Module: string;
        Submodule: string;
        Permissions: UserPermissionRow[];
    }
}
