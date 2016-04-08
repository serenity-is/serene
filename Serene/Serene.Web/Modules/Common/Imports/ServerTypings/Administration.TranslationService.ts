namespace Serene.Administration {
    export namespace TranslationService {
        export const baseUrl = 'Administration/Translation';

        export declare function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Serenity.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const List: string;
            export declare const Update: string;
        }

        ['List', 'Update'].forEach(x => {
            (<any>TranslationService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}

