namespace Serene.Northwind {
    export namespace CustomerDemographicService {
        export const baseUrl = 'Northwind/CustomerDemographic';

        export declare function Create(request: Serenity.SaveRequest<CustomerDemographicRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CustomerDemographicRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerDemographicRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerDemographicRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const Create: 'Northwind/CustomerDemographic/Create';
            export declare const Update: 'Northwind/CustomerDemographic/Update';
            export declare const Delete: 'Northwind/CustomerDemographic/Delete';
            export declare const Retrieve: 'Northwind/CustomerDemographic/Retrieve';
            export declare const List: 'Northwind/CustomerDemographic/List';
        }

        ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(x => {
            (<any>CustomerDemographicService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}

