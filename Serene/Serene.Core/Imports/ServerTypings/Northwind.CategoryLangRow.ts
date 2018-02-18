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

        export declare const enum Fields {
            Id = "Id",
            CategoryId = "CategoryId",
            LanguageId = "LanguageId",
            CategoryName = "CategoryName",
            Description = "Description"
        }
    }
}
