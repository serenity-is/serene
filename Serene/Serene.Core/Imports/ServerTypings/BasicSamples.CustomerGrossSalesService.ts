namespace Serene.BasicSamples {
    export namespace CustomerGrossSalesService {
        export const baseUrl = 'BasicSamples/CustomerGrossSales';

        export declare function List(request: CustomerGrossSalesListRequest, onSuccess?: (response: Serenity.ListResponse<Northwind.CustomerGrossSalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const List: string;
        }

        ['List'].forEach(x => {
            (<any>CustomerGrossSalesService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}
