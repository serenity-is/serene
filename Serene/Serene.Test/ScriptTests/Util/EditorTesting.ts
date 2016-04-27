namespace Serene.EditorTesting {
    export function isEditable(editor: JQuery) {
        return !editor.hasClass('readonly') &&
            !editor.hasClass('disabled') &&
            !editor.is('[readonly]') &&
            !editor.is(':disabled');
    }
}