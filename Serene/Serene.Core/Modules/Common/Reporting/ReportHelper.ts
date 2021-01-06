namespace Serene.Common {

    export interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: { [key: string]: any }
        target?: string;
    }

    export interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }

    export namespace ReportHelper {

        export function createToolButton(options: ReportButtonOptions): Serenity.ToolButton {
            return {
                title: Q.coalesce(options.title, 'Report'),
                cssClass: Q.coalesce(options.cssClass, 'print-button'),
                icon: options.icon,
                onClick: () => {
                    ReportHelper.execute(options);
                }
            };
        }

        export function execute(options: ReportExecuteOptions) {
            var opt = options.getParams ? options.getParams() : options.params;

            Q.postToUrl({
                url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                params: {
                    key: options.reportKey,
                    ext: Q.coalesce(options.extension, 'pdf'),
                    opt: opt ? $.toJSON(opt) : ''
                },
                target: Q.coalesce(options.target, '_blank')
            });
        }
    }
}