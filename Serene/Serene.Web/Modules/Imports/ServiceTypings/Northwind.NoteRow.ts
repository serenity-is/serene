namespace Serene.Northwind
{
    export interface NoteRow
    {
        NoteId: number;
        EntityType: string;
        EntityId: number;
        Text: string;
        InsertUserId: number;
        InsertDate: string;
        InsertUserDisplayName: string;
    }

    export namespace NoteRow
    {
        export const IdProperty = "NoteId";
        export const NameProperty = "EntityType";
        export const LocalTextPrefix = "Northwind.Note";

        export namespace Fields
        {
            export declare const NoteId: "NoteId";
            export declare const EntityType: "EntityType";
            export declare const EntityId: "EntityId";
            export declare const Text: "Text";
            export declare const InsertUserId: "InsertUserId";
            export declare const InsertDate: "InsertDate";
            export declare const InsertUserDisplayName: "InsertUserDisplayName";
        }

        ["NoteId","EntityType","EntityId","Text","InsertUserId","InsertDate","InsertUserDisplayName"].forEach(x => (<any>Fields)[x] = x);
    }
}

