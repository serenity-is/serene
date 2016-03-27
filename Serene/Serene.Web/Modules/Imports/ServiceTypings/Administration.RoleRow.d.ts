declare namespace Serene.Administration {
    interface RoleRow {
        RoleId: number;
        RoleName: string;
    }
    namespace RoleRow {
        const IdProperty: string;
        const NameProperty: string;
        const LocalTextPrefix: string;
        const LookupKey: string;
        namespace Fields {
            const RoleId: "RoleId";
            const RoleName: "RoleName";
        }
    }
}
