namespace Serene.Administration {
    export interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number
        Module?: string
        Submodule?: string
        Permissions?: UserPermissionRow[]
    }
}

