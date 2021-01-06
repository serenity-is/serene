namespace Serene.BasicSamples {
    export namespace ProductExcelImportService {
        export const baseUrl = 'BasicSamples/ProductExcelImport';

        export declare function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            ExcelImport = "BasicSamples/ProductExcelImport/ExcelImport"
        }

        [
            'ExcelImport'
        ].forEach(x => {
            (<any>ProductExcelImportService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
