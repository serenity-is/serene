namespace Serene.DialogUtils {
    export function getDialogTitle(element: JQuery) {
        if (element.hasClass(".ui-dialog-content"))
            element = element.closest(".ui-dialog");

        return element.find(".ui-dialog-title").text();
    }

    export function getVisibleButtons(dialog: Serenity.TemplatedDialog<any>) {
        return $('#' + (dialog as any).idPrefix + 'Toolbar').find('.tool-button:visible');
    }

    export function getVisibleFields(dialog: Serenity.TemplatedDialog<any>) {
        return $('#' + (dialog as any).idPrefix + 'PropertyGrid').find('div.field:visible');
    }

    export function getFieldTitle(field: JQuery) {
        let lbl = field.children("label.caption");
        var text = lbl.text();
        var pref = lbl.children("sup:visible").text();
        if (pref && text.substr(0, pref.length) == pref)
            return text.substr(pref.length);

        return text;
    }

    export function isEditable(field: JQuery) {
        let edit = field.find('.editor').first();
        return !edit.hasClass('readonly') &&
            !edit.hasClass('disabled') &&
            !edit.is('[readonly]') &&
            !edit.is(':disabled');
    }

    export function isRequired(field: JQuery) {
        return hasRequiredMark(field) && hasRequiredEditor(field);
    }

    export function hasRequiredMark(field: JQuery) {
        let lbl = field.children("label.caption");
        return lbl.children("sup:visible").length > 0;
    }

    export function hasRequiredEditor(field: JQuery) {
        return field.find(".editor").first().hasClass("required");
    }
}