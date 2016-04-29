namespace Serene.EditorTesting {
    export function isEditable(editor: JQuery) {
        return !editor.hasClass('readonly') &&
            !editor.hasClass('disabled') &&
            !editor.is('[readonly]') &&
            !editor.is(':disabled');
    }

    export function getValue(editor: JQuery) {
        let widget = editor.tryGetWidget(Serenity.Widget);
        if (widget != null)
            return Serenity.EditorUtils.getValue(widget);

        return editor.val();
    }
}