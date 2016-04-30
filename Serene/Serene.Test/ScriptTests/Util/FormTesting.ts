namespace Serene.FormTesting {
    export function getTitle(field: JQuery) {
        let lbl = field.children("label.caption");
        var text = lbl.text();
        var pref = lbl.children("sup").text();
        if (pref && text.substr(0, pref.length) == pref)
            return text.substr(pref.length);

        return text;
    }

    export function assertTitle(field: JQuery, title: string) {
        QUnit.assert.strictEqual(getTitle(field), title,
            '[Field has title ' + title + ']');
    }

    export function setValue(field: JQuery, value: any) {
        let edit = field.find('.editor').first();
        EditorTesting.setValue(edit, value);
    }

    export function assertValue(field: JQuery, expected: any) {
        let edit = field.find('.editor').first();
        let value = EditorTesting.getValue(edit);
        QUnit.assert.strictEqual(value, expected,
            getTitle(field) + ' has value ' + JSON.stringify(expected));
    }

    export function isEditable(field: JQuery) {
        let edit = field.find('.editor').first();
        return EditorTesting.isEditable(edit);
    }

    export function getEditor(field: JQuery) {
        return field.find('.editor').first();
    }

    export function assertEditorIs(field: JQuery, selector: string) {
        QUnit.assert.ok(getEditor(field).is(selector), getTitle(field) + ' is '+ selector);
    }

    export function assertEditable(field: JQuery) {
        QUnit.assert.ok(isEditable(field), getTitle(field) + ' is editable.');
    }

    export function assertNotEditable(field: JQuery) {
        QUnit.assert.ok(!isEditable(field), getTitle(field) + ' is not editable.');
    }

    export function assertHasClass(field: JQuery, klass: string) {
        QUnit.assert.ok(field.find('.editor').first().hasClass(klass), getTitle(field) + ' has class ' + klass);
    }

    export function assertMaxLength(field: JQuery, maxLength: number) {
        QUnit.assert.strictEqual(field.find('.editor').first().attr('maxlength'), maxLength.toString(),
            getTitle(field) + ' has maxlength ' + maxLength);
    }

    export function isRequired(field: JQuery) {
        return hasRequiredMark(field) && hasRequiredEditor(field);
    }

    export function assertRequired(field: JQuery) {
        QUnit.assert.ok(isRequired(field), getTitle(field) + ' is required.');
    }

    export function assertNotRequired(field: JQuery) {
        QUnit.assert.ok(!isRequired(field), getTitle(field) + ' is not required.');
    }

    export function hasRequiredMark(field: JQuery) {
        let lbl = field.children("label.caption");
        return lbl.children("sup:visible").length > 0;
    }

    export function hasRequiredEditor(field: JQuery) {
        return field.find(".editor").first().hasClass("required");
    }
}