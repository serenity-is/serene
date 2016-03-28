namespace Serene.Northwind {
    export interface CategoryRow {
        CategoryID?: number;
        CategoryName?: string;
        Description?: string;
        Picture?: number[];
    }

    export namespace CategoryRow {
        export const idProperty = 'CategoryID';
        export const nameProperty = 'CategoryName';
        export const localTextPrefix = 'Northwind.Category';
        export const lookupKey = 'Northwind.Category';

        export function lookup() {
            return Q.getLookup('Northwind.Category');
        }

        export namespace Fields {
            export declare const CategoryID: 'CategoryID';
            export declare const CategoryName: 'CategoryName';
            export declare const Description: 'Description';
            export declare const Picture: 'Picture';
        }

        ['CategoryID', 'CategoryName', 'Description', 'Picture'].forEach(x => (<any>Fields)[x] = x);
    }
}

