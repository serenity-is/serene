namespace Serene.BasicSamples {
    export namespace VSGalleryQAService {
        export const baseUrl = 'BasicSamples/VSGalleryQA';

        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VSGalleryQAThread>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const List: string;
        }

        ['List'].forEach(x => {
            (<any>VSGalleryQAService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}

