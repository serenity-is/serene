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
            export declare const Id: string;
            export declare const CategoryId: string;
            export declare const LanguageId: string;
            export declare const CategoryName: string;
            export declare const Description: string;
        }

        [
            'Id', 
            'CategoryId', 
            'LanguageId', 
            'CategoryName', 
            'Description'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}

