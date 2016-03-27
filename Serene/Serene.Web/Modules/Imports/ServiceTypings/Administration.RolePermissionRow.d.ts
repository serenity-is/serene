declare namespace Serene.Administration {
    interface RolePermissionRow {
        RolePermissionId: number;
        RoleId: number;
        PermissionKey: string;
        RoleRoleName: string;
    }
    namespace RolePermissionRow {
        const IdProperty: string;
        const NameProperty: string;
        const LocalTextPrefix: string;
        namespace Fields {
            const RolePermissionId: "RolePermissionId";
            const RoleId: "RoleId";
            const PermissionKey: "PermissionKey";
            const RoleRoleName: "RoleRoleName";
        }
    }
}
