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

        export function getLookup(): Q.Lookup<CategoryRow> {
            return Q.getLookup<CategoryRow>('Northwind.Category');
        }

        export declare const enum Fields {
            CategoryID = "CategoryID",
            CategoryName = "CategoryName",
            Description = "Description",
            Picture = "Picture"
        }
    }
}
