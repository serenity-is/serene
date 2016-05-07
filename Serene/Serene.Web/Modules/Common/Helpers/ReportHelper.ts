namespace Serene.Common {

    export interface ReportButtonOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
        download?: boolean;
        reportKey: string;
        extension?: string;
        getParams?: () => any;
        target?: string;
    }

    export namespace ReportHelper {

        export function createToolButton(options: ReportButtonOptions): Serenity.ToolButton {
            return {
                title: Q.coalesce(options.title, 'Report'),
                cssClass: Q.coalesce(options.cssClass, 'print-button'),
                icon: options.icon,
                onClick: () => {
                    Q.postToUrl({
                        url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                        params: {
                            key: options.reportKey,
                            ext: Q.coalesce(options.extension, 'pdf'),
                            opt: (options.getParams == null ? '' : $.toJSON(options.getParams()))
                        },
                        target: Q.coalesce(options.target, '_blank')
                    });
                }
            };
        }
    }
}