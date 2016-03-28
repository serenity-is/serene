namespace Serene.Northwind {
    export namespace ProductService {
        export const baseUrl = 'Northwind/Product';

        export declare function Create(request: Serenity.SaveWithLocalizationRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveWithLocalizationRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function RetrieveLocalization(request: Serenity.RetrieveLocalizationRequest, onSuccess?: (response: Serenity.RetrieveLocalizationResponse<ProductRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const Create: 'Northwind/Product/Create';
            export declare const Update: 'Northwind/Product/Update';
            export declare const Delete: 'Northwind/Product/Delete';
            export declare const Retrieve: 'Northwind/Product/Retrieve';
            export declare const RetrieveLocalization: 'Northwind/Product/RetrieveLocalization';
            export declare const List: 'Northwind/Product/List';
        }

        ['Create', 'Update', 'Delete', 'Retrieve', 'RetrieveLocalization', 'List'].forEach(x => {
            (<any>ProductService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}

