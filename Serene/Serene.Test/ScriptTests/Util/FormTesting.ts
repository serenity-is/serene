namespace Serene {
    export class FormTesting {
        constructor(private assert: Assert) {
        }

        getTitle(field: JQuery) {
            let lbl = field.children("label.caption");
            var text = lbl.text();
            var pref = lbl.children("sup").text();
            if (pref && text.substr(0, pref.length) == pref)
                return text.substr(pref.length);

            return text;
        }

        assertTitle(field: JQuery, title: string) {
            QUnit.assert.strictEqual(this.getTitle(field), title,
                '[Field has title ' + title + ']');
        }

        setValue(field: JQuery, value: any) {
            let edit = field.find('.editor').first();
            EditorTesting.setValue(edit, value);
        }

        assertValue(field: JQuery, expected: any) {
            let edit = field.find('.editor').first();
            let value = EditorTesting.getValue(edit);
            QUnit.assert.strictEqual(value, expected,
                this.getTitle(field) + ' has value ' + JSON.stringify(expected));
        }

        isEditable(field: JQuery) {
            let edit = field.find('.editor').first();
            return EditorTesting.isEditable(edit);
        }

        getEditor(field: JQuery) {
            return field.find('.editor').first();
        }

        assertEditorIs(field: JQuery, selector: string) {
            QUnit.assert.ok(this.getEditor(field).is(selector), this.getTitle(field) + ' is ' + selector);
        }

        assertEditable(field: JQuery) {
            QUnit.assert.ok(this.isEditable(field), this.getTitle(field) + ' is editable.');
        }

        assertNotEditable(field: JQuery) {
            QUnit.assert.ok(!this.isEditable(field), this.getTitle(field) + ' is not editable.');
        }

        assertHasClass(field: JQuery, klass: string) {
            QUnit.assert.ok(field.find('.editor').first().hasClass(klass),
                this.getTitle(field) + ' has class ' + klass);
        }

        assertMaxLength(field: JQuery, maxLength: number) {
            QUnit.assert.strictEqual(field.find('.editor').first().attr('maxlength'), maxLength.toString(),
                this.getTitle(field) + ' has maxlength ' + maxLength);
        }

        isRequired(field: JQuery) {
            return this.hasRequiredMark(field) && this.hasRequiredEditor(field);
        }

        assertRequired(field: JQuery) {
            QUnit.assert.ok(this.isRequired(field), this.getTitle(field) + ' is required.');
        }

        assertNotRequired(field: JQuery) {
            QUnit.assert.ok(!this.isRequired(field), this.getTitle(field) + ' is not required.');
        }

        hasRequiredMark(field: JQuery) {
            let lbl = field.children("label.caption");
            return lbl.children("sup:visible").length > 0;
        }

        hasRequiredEditor(field: JQuery) {
            return field.find(".editor").first().hasClass("required");
        }
    }
}