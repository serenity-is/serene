declare namespace Serene.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID: number;
        Module: string;
        Submodule: string;
    }
}
