namespace Serene.Northwind {
    export namespace SalesByCategoryService {
        export const baseUrl = 'Northwind/SalesByCategory';

        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesByCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            List = "Northwind/SalesByCategory/List"
        }

        [
            'List'
        ].forEach(x => {
            (<any>SalesByCategoryService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
