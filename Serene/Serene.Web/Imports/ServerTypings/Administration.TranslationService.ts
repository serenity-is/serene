namespace Serene.Administration {
    export namespace TranslationService {
        export const baseUrl = 'Administration/Translation';

        export declare function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }

        [
            'List', 
            'Update'
        ].forEach(x => {
            (<any>TranslationService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

