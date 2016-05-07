namespace Serene {

    export class BasicProgressDialog extends Serenity.TemplatedDialog<any> {

        private cancelled: boolean;
        private cancelTitle: string;

        constructor() {
            super();

            this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: (e, v) => {
                    this.byId('ProgressLabel').text(this.get_value() + ' / ' + this.get_max());
                }
            });
        }

        public get_cancelled() {
            return this.cancelled;
        }

        public set_cancelled(value) {
            this.cancelled = value;
        }

        public get_max() {
            return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
        }

        public set_max(value) {
            this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
        }

        public get_value() {
            return this.byId('ProgressBar').progressbar('value');
        }

        public set_value(value) {
            this.byId('ProgressBar').progressbar().progressbar('value', value);
        }

        public get_title() {
            return this.element.dialog().dialog('option', 'title');
        }

        public set_title(value) {
            this.element.dialog().dialog('option', 'title', value);
        }

        public get_cancelTitle() {
            return this.cancelTitle;
        }

        public set_cancelTitle(value) {
            this.cancelTitle = value;
        }

        getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                text: Q.text('Dialogs.CancelButton'),
                click: () => {
                    this.set_cancelled(true);
                    this.element.closest('.ui-dialog')
                        .find('.ui-dialog-buttonpane .ui-button')
                        .attr('disabled', 'disabled')
                        .css('opacity', '0.5');

                    this.element.dialog('option', 'title', Q.trimToNull(this.get_cancelTitle()) ||
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