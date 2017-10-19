namespace Serene.ServiceTesting {
    export class FakeAjax {
        private oldAjax: any;
        private handlers: {};

        constructor() {
            this.oldAjax = $.ajax;

            var self = this;
            this.handlers = {};
            ($ as any).ajax = (settings: JQueryAjaxSettings) => {

                var url = settings.url;
                var handler = self.handlers[url];

                if (!handler) {
                    throw new Error("No fake handler registered for ajax URL: " + url + ", request: " +
                        JSON.stringify(settings, null, "    "));
                }

                var xhr = <JQueryXHR>{
                    fail: function () {
                    }
                };

                var result = handler(settings);
                settings.success(result, '200', xhr);

                return xhr;
            };
        }

        addServiceHandler<TRequest>(service: string, handler: (settings: Serenity.ServiceOptions<TRequest>) => any) {
            this.handlers[Q.resolveUrl(service)] = handler;
        }

        dispose() {
            $.ajax = this.oldAjax;
        }
    }
}