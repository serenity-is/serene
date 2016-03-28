namespace Serene.Administration {
    export interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number
        Module?: string
        Submodule?: string
        Permissions?: string[]
    }
}

