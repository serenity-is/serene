declare namespace Serene.Administration {
    interface UserRoleRow {
        UserRoleId: number;
        UserId: number;
        RoleId: number;
        Username: string;
        User: string;
    }
    namespace UserRoleRow {
        const IdProperty: string;
        const LocalTextPrefix: string;
        namespace Fields {
            const UserRoleId: "UserRoleId";
            const UserId: "UserId";
            const RoleId: "RoleId";
            const Username: "Username";
            const User: "User";
        }
    }
}
