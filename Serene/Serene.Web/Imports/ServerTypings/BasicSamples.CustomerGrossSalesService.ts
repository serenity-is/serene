namespace Serene.BasicSamples {
    export namespace CustomerGrossSalesService {
        export const baseUrl = 'BasicSamples/CustomerGrossSales';

        export declare function List(request: CustomerGrossSalesListRequest, onSuccess?: (response: Serenity.ListResponse<Northwind.CustomerGrossSalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            List = "BasicSamples/CustomerGrossSales/List"
        }

        [
            'List'
        ].forEach(x => {
            (<any>CustomerGrossSalesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

