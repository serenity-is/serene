namespace Serene.Northwind {
    export namespace CustomerCustomerDemoService {
        export const baseUrl = 'Northwind/CustomerCustomerDemo';

        export declare function Create(request: Serenity.SaveRequest<CustomerCustomerDemoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CustomerCustomerDemoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerCustomerDemoRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerCustomerDemoRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const Create: 'Northwind/CustomerCustomerDemo/Create';
            export declare const Update: 'Northwind/CustomerCustomerDemo/Update';
            export declare const Delete: 'Northwind/CustomerCustomerDemo/Delete';
            export declare const Retrieve: 'Northwind/CustomerCustomerDemo/Retrieve';
            export declare const List: 'Northwind/CustomerCustomerDemo/List';
        }

        ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(x => {
            (<any>CustomerCustomerDemoService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}

