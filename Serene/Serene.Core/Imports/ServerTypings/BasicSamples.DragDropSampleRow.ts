namespace Serene.BasicSamples {
    export interface DragDropSampleRow {
        Id?: number;
        ParentId?: number;
        Title?: string;
    }

    export namespace DragDropSampleRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'Northwind.DragDropSample';
        export const deletePermission = 'Northwind:General';
        export const insertPermission = 'Northwind:General';
        export const readPermission = 'Northwind:General';
        export const updatePermission = 'Northwind:General';

        export declare const enum Fields {
            Id = "Id",
            ParentId = "ParentId",
            Title = "Title"
        }
    }
}
