namespace Serene.BasicSamples {
    export namespace VSGalleryQAService {
        export const baseUrl = 'BasicSamples/VSGalleryQA';

        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VSGalleryQAThread>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            List = "BasicSamples/VSGalleryQA/List"
        }

        [
            'List'
        ].forEach(x => {
            (<any>VSGalleryQAService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

