declare namespace Serene.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID: number;
        Roles: number[];
    }
}
