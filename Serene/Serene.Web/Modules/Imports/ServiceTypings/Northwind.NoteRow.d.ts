declare namespace Serene.Northwind {
    interface NoteRow {
        NoteId: number;
        EntityType: string;
        EntityId: number;
        Text: string;
        InsertUserId: number;
        InsertDate: string;
        InsertUserDisplayName: string;
    }
    namespace NoteRow {
        const IdProperty: string;
        const NameProperty: string;
        const LocalTextPrefix: string;
        namespace Fields {
            const NoteId: "NoteId";
            const EntityType: "EntityType";
            const EntityId: "EntityId";
            const Text: "Text";
            const InsertUserId: "InsertUserId";
            const InsertDate: "InsertDate";
            const InsertUserDisplayName: "InsertUserDisplayName";
        }
    }
}
