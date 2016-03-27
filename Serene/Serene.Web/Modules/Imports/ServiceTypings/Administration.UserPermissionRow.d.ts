declare namespace Serene.Administration {
    interface UserPermissionRow {
        UserPermissionId: number;
        UserId: number;
        PermissionKey: string;
        Grant: boolean;
        Username: string;
        User: string;
    }
    namespace UserPermissionRow {
        const IdProperty: string;
        const NameProperty: string;
        const LocalTextPrefix: string;
        namespace Fields {
            const UserPermissionId: "UserPermissionId";
            const UserId: "UserId";
            const PermissionKey: "PermissionKey";
            const Grant: "Grant";
            const Username: "Username";
            const User: "User";
        }
    }
}
