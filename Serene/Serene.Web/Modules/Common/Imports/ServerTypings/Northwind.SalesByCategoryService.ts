namespace Serene.Northwind {
    export namespace SalesByCategoryService {
        export const baseUrl = 'Northwind/SalesByCategory';

        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesByCategoryRow>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const List: string;
        }

        ['List'].forEach(x => {
            (<any>SalesByCategoryService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}

