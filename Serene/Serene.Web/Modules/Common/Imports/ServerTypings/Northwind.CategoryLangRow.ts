namespace Serene.Northwind {
    export interface CategoryLangRow {
        Id?: number;
        CategoryId?: number;
        LanguageId?: number;
        CategoryName?: string;
        Description?: string;
    }

    export namespace CategoryLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CategoryName';
        export const localTextPrefix = 'Northwind.CategoryLang';

        export namespace Fields {
            export declare const Id: 'Id';
            export declare const CategoryId: 'CategoryId';
            export declare const LanguageId: 'LanguageId';
            export declare const CategoryName: 'CategoryName';
            export declare const Description: 'Description';
        }

        ['Id', 'CategoryId', 'LanguageId', 'CategoryName', 'Description'].forEach(x => (<any>Fields)[x] = x);
    }
}

