namespace Serene.Northwind {
    export namespace EmployeeTerritoryService {
        export const baseUrl = 'Northwind/EmployeeTerritory';

        export declare function Create(request: Serenity.SaveRequest<EmployeeTerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<EmployeeTerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeTerritoryRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeTerritoryRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const Create: 'Northwind/EmployeeTerritory/Create';
            export declare const Update: 'Northwind/EmployeeTerritory/Update';
            export declare const Delete: 'Northwind/EmployeeTerritory/Delete';
            export declare const Retrieve: 'Northwind/EmployeeTerritory/Retrieve';
            export declare const List: 'Northwind/EmployeeTerritory/List';
        }

        ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(x => {
            (<any>EmployeeTerritoryService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}

