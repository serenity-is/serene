namespace Serene.Administration
{
    export interface LanguageRow
    {
        Id: number;
        LanguageId: string;
        LanguageName: string;
    }

    export namespace LanguageRow
    {
        export const IdProperty = "Id";
        export const NameProperty = "LanguageName";
        export const LocalTextPrefix = "Administration.Language";
        export const LookupKey = "Administration.Language";

        export namespace Fields
        {
            export declare const Id: "Id";
            export declare const LanguageId: "LanguageId";
            export declare const LanguageName: "LanguageName";
        }

        ["Id","LanguageId","LanguageName"].forEach(x => (<any>Fields)[x] = x);
    }
}

