var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var Test;
        (function (Test) {
            var assert = QUnit.assert;
            QUnit.module('Serene.Administration');
            QUnit.test('UserDialog General', function () {
                assert.notEqual(null, new Administration.UserDialog(), 'create a new instance');
                var dialog = new Administration.UserDialog();
                assert.notEqual(null, dialog.element, 'has element');
                var uiDialog = dialog.element.closest('.ui-dialog');
                assert.equal(1, uiDialog.length, 'element under .ui-dialog');
                assert.ok(uiDialog.hasClass("s-Dialog"), 'has dialog css class');
                assert.ok(uiDialog.hasClass("s-UserDialog"), 'has classname css class');
                assert.ok(uiDialog.hasClass("s-Administration-UserDialog"), 'has module prefixed css class');
                assert.ok(!uiDialog.is(':visible'), 'initially invisible');
                dialog.dialogOpen();
                assert.ok(uiDialog.is(':visible'), 'visible after dialogOpen');
                dialog.dialogClose();
                assert.ok(!uiDialog.is(':visible'), 'hidden after dialogClose');
                dialog = new Administration.UserDialog();
                uiDialog = dialog.element.closest('.ui-dialog');
                dialog.loadNewAndOpenDialog();
                assert.ok(uiDialog.is(':visible'), 'open in new entity mode');
                dialog.dialogClose();
                assert.ok(!uiDialog.is(":visible"), 'close new entity dialog');
            });
            QUnit.test('UserDialog New Entity', function () {
                var dialog = new Administration.UserDialog();
                var uiDialog = dialog.element.closest(".ui-dialog");
                dialog.loadNewAndOpenDialog();
                assert.ok(uiDialog.is(":visible"), 'open a new entity dialog');
                assert.strictEqual(Serene.DialogTesting.getDialogTitle(uiDialog), "New User", 'has correct title');
                var buttons = Serene.DialogTesting.getVisibleButtons(dialog);
                assert.strictEqual(4, buttons.length, 'has 4 visible buttons');
                Serene.ButtonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
                Serene.ButtonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
                Serene.ButtonTesting.assertDisabled(buttons.eq(2), 'edit-roles-button');
                Serene.ButtonTesting.assertDisabled(buttons.eq(3), 'edit-permissions-button');
                var fields = Serene.DialogTesting.getVisibleFields(dialog);
                assert.strictEqual(6, fields.length, 'has 6 fields');
                var username = fields.eq(0);
                Serene.FormTesting.assertTitle(username, 'Username');
                Serene.FormTesting.assertRequired(username);
                Serene.FormTesting.assertEditable(username);
                Serene.FormTesting.assertHasClass(username, 's-StringEditor');
                Serene.FormTesting.assertMaxLength(username, 100);
                var displayName = fields.eq(1);
                Serene.FormTesting.assertTitle(displayName, 'Display Name');
                Serene.FormTesting.assertRequired(displayName);
                Serene.FormTesting.assertEditable(displayName);
                Serene.FormTesting.assertHasClass(displayName, 's-StringEditor');
                Serene.FormTesting.assertMaxLength(displayName, 100);
                var email = fields.eq(2);
                Serene.FormTesting.assertTitle(email, 'Email');
                Serene.FormTesting.assertNotRequired(email);
                Serene.FormTesting.assertEditable(email);
                Serene.FormTesting.assertHasClass(email, 'emailuser');
                Serene.FormTesting.assertMaxLength(email, 100);
                var emaildomain = email.find('.emaildomain');
                assert.ok(Serene.EditorTesting.isEditable(emaildomain), 'email domain is editable');
                var password = fields.eq(3);
                Serene.FormTesting.assertTitle(password, 'Password');
                Serene.FormTesting.assertRequired(password);
                Serene.FormTesting.assertEditable(password);
                Serene.FormTesting.assertHasClass(password, 's-PasswordEditor');
                Serene.FormTesting.assertEditorIs(password, 'input[type=password]');
                Serene.FormTesting.assertMaxLength(password, 50);
                var confirm = fields.eq(4);
                Serene.FormTesting.assertTitle(confirm, 'Confirm Password');
                Serene.FormTesting.assertRequired(confirm);
                Serene.FormTesting.assertEditable(confirm);
                Serene.FormTesting.assertHasClass(confirm, 's-PasswordEditor');
                Serene.FormTesting.assertEditorIs(confirm, 'input[type=password]');
                Serene.FormTesting.assertMaxLength(confirm, 50);
                var source = fields.eq(5);
                Serene.FormTesting.assertTitle(source, 'Source');
                Serene.FormTesting.assertNotRequired(source);
                Serene.FormTesting.assertNotEditable(source);
                Serene.FormTesting.assertHasClass(source, 's-StringEditor');
                Serene.FormTesting.assertMaxLength(source, 4);
                dialog.dialogClose();
            });
            QUnit.test('UserDialog Edit Entity', function () {
                var dialog = new Administration.UserDialog();
                var uiDialog = dialog.element.closest(".ui-dialog");
                dialog.loadEntityAndOpenDialog({
                    UserId: 789,
                    Username: 'some.thing',
                    DisplayName: 'Some Thing',
                    Email: 'some_thing@somedomain.com',
                    Source: 'some'
                });
                assert.ok(uiDialog.is(":visible"), 'open edit entity dialog');
                assert.strictEqual(Serene.DialogTesting.getDialogTitle(uiDialog), 'Edit User (some.thing)', 'has correct title');
                var buttons = Serene.DialogTesting.getVisibleButtons(dialog);
                assert.strictEqual(5, buttons.length, 'has 5 visible buttons');
                Serene.ButtonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
                Serene.ButtonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
                Serene.ButtonTesting.assertEnabled(buttons.eq(2), 'delete-button');
                Serene.ButtonTesting.assertEnabled(buttons.eq(3), 'edit-roles-button');
                Serene.ButtonTesting.assertEnabled(buttons.eq(4), 'edit-permissions-button');
                var fields = Serene.DialogTesting.getVisibleFields(dialog);
                assert.strictEqual(6, fields.length, 'has 6 fields');
                var username = fields.eq(0);
                Serene.FormTesting.assertTitle(username, 'Username');
                Serene.FormTesting.assertRequired(username);
                Serene.FormTesting.assertEditable(username);
                Serene.FormTesting.assertHasClass(username, 's-StringEditor');
                Serene.FormTesting.assertMaxLength(username, 100);
                var displayName = fields.eq(1);
                Serene.FormTesting.assertTitle(displayName, 'Display Name');
                Serene.FormTesting.assertRequired(displayName);
                Serene.FormTesting.assertEditable(displayName);
                Serene.FormTesting.assertHasClass(displayName, 's-StringEditor');
                Serene.FormTesting.assertMaxLength(displayName, 100);
                var email = fields.eq(2);
                Serene.FormTesting.assertTitle(email, 'Email');
                Serene.FormTesting.assertNotRequired(email);
                Serene.FormTesting.assertEditable(email);
                Serene.FormTesting.assertHasClass(email, 'emailuser');
                Serene.FormTesting.assertMaxLength(email, 100);
                var emaildomain = email.find('.emaildomain');
                assert.ok(Serene.EditorTesting.isEditable(emaildomain), 'email domain is editable');
                var password = fields.eq(3);
                Serene.FormTesting.assertTitle(password, 'Password');
                Serene.FormTesting.assertNotRequired(password);
                Serene.FormTesting.assertEditable(password);
                Serene.FormTesting.assertHasClass(password, 's-PasswordEditor');
                Serene.FormTesting.assertEditorIs(password, 'input[type=password]');
                Serene.FormTesting.assertMaxLength(password, 50);
                var confirm = fields.eq(4);
                Serene.FormTesting.assertTitle(confirm, 'Confirm Password');
                Serene.FormTesting.assertNotRequired(confirm);
                Serene.FormTesting.assertEditable(confirm);
                Serene.FormTesting.assertHasClass(confirm, 's-PasswordEditor');
                Serene.FormTesting.assertEditorIs(confirm, 'input[type=password]');
                Serene.FormTesting.assertMaxLength(confirm, 50);
                var source = fields.eq(5);
                Serene.FormTesting.assertTitle(source, 'Source');
                Serene.FormTesting.assertNotRequired(source);
                Serene.FormTesting.assertNotEditable(source);
                Serene.FormTesting.assertHasClass(source, 's-StringEditor');
                Serene.FormTesting.assertMaxLength(source, 4);
                dialog.dialogClose();
            });
        })(Test = Administration.Test || (Administration.Test = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var ButtonTesting;
    (function (ButtonTesting) {
        function assertEnabled(button, klass) {
            QUnit.assert.ok(button.hasClass(klass) &&
                !button.hasClass('disabled'), 'button with class ' + klass + ' is enabled.');
        }
        ButtonTesting.assertEnabled = assertEnabled;
        function assertDisabled(button, klass) {
            QUnit.assert.ok(button.hasClass(klass) &&
                button.hasClass('disabled'), 'button with class ' + klass + ' is disabled.');
        }
        ButtonTesting.assertDisabled = assertDisabled;
    })(ButtonTesting = Serene.ButtonTesting || (Serene.ButtonTesting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var DialogTesting;
    (function (DialogTesting) {
        function getDialogTitle(element) {
            if (element.hasClass(".ui-dialog-content"))
                element = element.closest(".ui-dialog");
            return element.find(".ui-dialog-title").text();
        }
        DialogTesting.getDialogTitle = getDialogTitle;
        function getVisibleButtons(dialog) {
            return $('#' + dialog.idPrefix + 'Toolbar').find('.tool-button:visible');
        }
        DialogTesting.getVisibleButtons = getVisibleButtons;
        function getVisibleFields(dialog) {
            return $('#' + dialog.idPrefix + 'PropertyGrid').find('div.field:visible');
        }
        DialogTesting.getVisibleFields = getVisibleFields;
    })(DialogTesting = Serene.DialogTesting || (Serene.DialogTesting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var EditorTesting;
    (function (EditorTesting) {
        function isEditable(editor) {
            return !editor.hasClass('readonly') &&
                !editor.hasClass('disabled') &&
                !editor.is('[readonly]') &&
                !editor.is(':disabled');
        }
        EditorTesting.isEditable = isEditable;
    })(EditorTesting = Serene.EditorTesting || (Serene.EditorTesting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var FormTesting;
    (function (FormTesting) {
        function getTitle(field) {
            var lbl = field.children("label.caption");
            var text = lbl.text();
            var pref = lbl.children("sup").text();
            if (pref && text.substr(0, pref.length) == pref)
                return text.substr(pref.length);
            return text;
        }
        FormTesting.getTitle = getTitle;
        function assertTitle(field, title) {
            QUnit.assert.strictEqual(getTitle(field), title, '[Field has title ' + title + ']');
        }
        FormTesting.assertTitle = assertTitle;
        function isEditable(field) {
            var edit = field.find('.editor').first();
            return Serene.EditorTesting.isEditable(edit);
        }
        FormTesting.isEditable = isEditable;
        function getEditor(field) {
            return field.find('.editor').first();
        }
        FormTesting.getEditor = getEditor;
        function assertEditorIs(field, selector) {
            QUnit.assert.ok(getEditor(field).is(selector), getTitle(field) + ' is ' + selector);
        }
        FormTesting.assertEditorIs = assertEditorIs;
        function assertEditable(field) {
            QUnit.assert.ok(isEditable(field), getTitle(field) + ' is editable.');
        }
        FormTesting.assertEditable = assertEditable;
        function assertNotEditable(field) {
            QUnit.assert.ok(!isEditable(field), getTitle(field) + ' is not editable.');
        }
        FormTesting.assertNotEditable = assertNotEditable;
        function assertHasClass(field, klass) {
            QUnit.assert.ok(field.find('.editor').first().hasClass(klass), getTitle(field) + ' has class ' + klass);
        }
        FormTesting.assertHasClass = assertHasClass;
        function assertMaxLength(field, maxLength) {
            QUnit.assert.strictEqual(field.find('.editor').first().attr('maxlength'), maxLength.toString(), getTitle(field) + ' has maxlength ' + maxLength);
        }
        FormTesting.assertMaxLength = assertMaxLength;
        function isRequired(field) {
            return hasRequiredMark(field) && hasRequiredEditor(field);
        }
        FormTesting.isRequired = isRequired;
        function assertRequired(field) {
            QUnit.assert.ok(isRequired(field), getTitle(field) + ' is required.');
        }
        FormTesting.assertRequired = assertRequired;
        function assertNotRequired(field) {
            QUnit.assert.ok(!isRequired(field), getTitle(field) + ' is not required.');
        }
        FormTesting.assertNotRequired = assertNotRequired;
        function hasRequiredMark(field) {
            var lbl = field.children("label.caption");
            return lbl.children("sup:visible").length > 0;
        }
        FormTesting.hasRequiredMark = hasRequiredMark;
        function hasRequiredEditor(field) {
            return field.find(".editor").first().hasClass("required");
        }
        FormTesting.hasRequiredEditor = hasRequiredEditor;
    })(FormTesting = Serene.FormTesting || (Serene.FormTesting = {}));
})(Serene || (Serene = {}));
//# sourceMappingURL=Serene.Test.js.map