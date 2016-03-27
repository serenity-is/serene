declare namespace Serene.Administration {
    interface LanguageRow {
        Id: number;
        LanguageId: string;
        LanguageName: string;
    }
    namespace LanguageRow {
        const IdProperty: string;
        const NameProperty: string;
        const LocalTextPrefix: string;
        const LookupKey: string;
        namespace Fields {
            const Id: "Id";
            const LanguageId: "LanguageId";
            const LanguageName: "LanguageName";
        }
    }
}
