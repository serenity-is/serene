namespace Serene.Northwind {
    export interface ProductLangRow {
        Id?: number;
        ProductId?: number;
        LanguageId?: number;
        ProductName?: string;
    }

    export namespace ProductLangRow {
        export const idProperty = "Id";
        export const nameProperty = "ProductName";
        export const localTextPrefix = "Northwind.ProductLang";

        export namespace Fields {
            export declare const Id: "Id";
            export declare const ProductId: "ProductId";
            export declare const LanguageId: "LanguageId";
            export declare const ProductName: "ProductName";
        }

        ["Id","ProductId","LanguageId","ProductName"].forEach(x => (<any>Fields)[x] = x);
    }
}

