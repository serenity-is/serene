namespace Serene.Administration {
    export interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }

    export namespace LanguageRow {
        export const idProperty = 'Id';
        export const nameProperty = 'LanguageName';
        export const localTextPrefix = 'Administration.Language';
        export const lookupKey = 'Administration.Language';

        export function lookup() {
            return Q.getLookup('Administration.Language');
        }

        export namespace Fields {
            export declare const Id: 'Id';
            export declare const LanguageId: 'LanguageId';
            export declare const LanguageName: 'LanguageName';
        }

        ['Id', 'LanguageId', 'LanguageName'].forEach(x => (<any>Fields)[x] = x);
    }
}

