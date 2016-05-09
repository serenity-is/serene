namespace Serene.Northwind {

    @Serenity.Decorators.registerClass()
    export class NoteDialog extends Serenity.TemplatedDialog<any> {

        private textEditor: Serenity.HtmlContentEditor;

        constructor() {
            super();

            this.textEditor = new Serenity.HtmlContentEditor(this.byId('Text'));
        }

        protected getTemplate() {
            return (
                "<form id='~_Form' class='s-Form'>" +
                    "<textarea id='~_Text' class='required'></textarea>" +
                "</form>");
        }

        protected getDialogOptions() {
            var opt = super.getDialogOptions();

            opt.buttons = [{
                text: Q.text('Dialogs.OkButton'),
                click: () => {
                    if (!this.validateForm()) {
                        return;
                    }

                    this.okClick && this.okClick();
                }
            }, {
                    text: Q.text('Dialogs.CancelButton'),
                    click: () => this.dialogClose()
                }
            ];

            return opt;
        }

        get text(): string {
            return this.textEditor.value;
        }

        set text(value: string) {
            this.textEditor.value = value;
        }

        public okClick: () => void;
    }
}