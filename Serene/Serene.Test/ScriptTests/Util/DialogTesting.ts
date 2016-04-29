namespace Serene.DialogTesting {
    export function getDialogTitle(element: JQuery) {
        if (element.hasClass(".ui-dialog-content"))
            element = element.closest(".ui-dialog");

        return element.find(".ui-dialog-title").text();
    }

    export function getVisibleButtons(dialog: Serenity.TemplatedDialog<any>) {
        return $('#' + (dialog as any).idPrefix + 'Toolbar').find('.tool-button:visible');
    }

    export function clickButton(dialog: Serenity.TemplatedDialog<any>, klass: string) {
        $('#' + (dialog as any).idPrefix + 'Toolbar').find(klass + '.tool-button:visible')
            .click();
    }

    export function getVisibleFields(dialog: Serenity.TemplatedDialog<any>) {
        return $('#' + (dialog as any).idPrefix + 'PropertyGrid').find('div.field:visible');
    }
}