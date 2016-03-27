declare namespace Serene.Administration {
    interface UserRow {
        UserId: number;
        Username: string;
        Source: string;
        PasswordHash: string;
        PasswordSalt: string;
        DisplayName: string;
        Email: string;
        LastDirectoryUpdate: string;
        IsActive: number;
        Password: string;
        PasswordConfirm: string;
        InsertUserId: number;
        InsertDate: string;
        UpdateUserId: number;
        UpdateDate: string;
    }
    namespace UserRow {
        const IdProperty: string;
        const IsActiveProperty: string;
        const NameProperty: string;
        const LocalTextPrefix: string;
        namespace Fields {
            const UserId: "UserId";
            const Username: "Username";
            const Source: "Source";
            const PasswordHash: "PasswordHash";
            const PasswordSalt: "PasswordSalt";
            const DisplayName: "DisplayName";
            const Email: "Email";
            const LastDirectoryUpdate: "LastDirectoryUpdate";
            const IsActive: "IsActive";
            const Password: "Password";
            const PasswordConfirm: "PasswordConfirm";
            const InsertUserId: "InsertUserId";
            const InsertDate: "InsertDate";
            const UpdateUserId: "UpdateUserId";
            const UpdateDate: "UpdateDate";
        }
    }
}
