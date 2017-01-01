namespace Serene {

    export class BasicProgressDialog extends Serenity.TemplatedDialog<any> {

        constructor() {
            super();

            this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: (e, v) => {
                    this.byId('ProgressLabel').text(this.value + ' / ' + this.max);
                }
            });
        }

        public cancelled: boolean;

        public get max(): number {
            return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
        }

        public set max(value: number) {
            this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
        }

        public get value(): number {
            return this.byId('ProgressBar').progressbar('value');
        }

        public set value(value: number) {
            this.byId('ProgressBar').progressbar().progressbar('value', value);
        }

        public get title(): string {
            return this.element.dialog().dialog('option', 'title');
        }

        public set title(value: string) {
            this.element.dialog().dialog('option', 'title', value);
        }

        public cancelTitle: string;

        getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                text: Q.text('Dialogs.CancelButton'),
                click: () => {
                    this.cancelled = true;
                    this.element.closest('.ui-dialog')
                        .find('.ui-dialog-buttonpane .ui-button')
                        .attr('disabled', 'disabled')
                        .css('opacity', '0.5');

                    this.element.dialog('option', 'title', Q.trimToNull(this.cancelTitle) ||
                        Q.text('Site.BasicProgressDialog.CancelTitle'));
                }
            }];

            return opt;
        }

        initDialog() {
            super.initDialog();
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        }

        getTemplate() {
            return (
                "<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                    "<div id='~_StatusText' class='status-text' ></div>" +
                    "<div id='~_ProgressBar' class='progress-bar'>" +
                        "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                    "</div>" +
                "</div>");
        }
    }
}