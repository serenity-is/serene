namespace Serene.Northwind
{
    export interface CustomerRepresentativesRow
    {
        RepresentativeId: number;
        CustomerId: number;
        EmployeeId: number;
    }

    export namespace CustomerRepresentativesRow
    {
        export const IdProperty = "RepresentativeId";
        export const LocalTextPrefix = "CustomerRepresentatives";

        export namespace Fields
        {
            export declare const RepresentativeId: "RepresentativeId";
            export declare const CustomerId: "CustomerId";
            export declare const EmployeeId: "EmployeeId";
        }

        ["RepresentativeId","CustomerId","EmployeeId"].forEach(x => (<any>Fields)[x] = x);
    }
}

