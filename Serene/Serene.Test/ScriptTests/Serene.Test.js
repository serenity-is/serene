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
                assert.strictEqual(Serene.DialogUtils.getDialogTitle(uiDialog), "New User", 'has correct title');
                var buttons = Serene.DialogUtils.getVisibleButtons(dialog);
                assert.strictEqual(4, buttons.length, 'has 4 visible buttons');
                assert.ok(buttons.eq(0).hasClass('save-and-close-button') &&
                    !buttons.eq(0).hasClass('disabled'), 'has enabled save and close button');
                assert.ok(buttons.eq(1).hasClass('apply-changes-button') &&
                    !buttons.eq(1).hasClass('disabled'), 'has enabled apply changes button');
                assert.ok(buttons.eq(2).hasClass('users-button') &&
                    buttons.eq(2).hasClass('disabled'), 'has disabled roles button');
                assert.ok(buttons.eq(3).hasClass('lock-button') &&
                    buttons.eq(3).hasClass('disabled'), 'has disabled permissions button');
                var fields = Serene.DialogUtils.getVisibleFields(dialog);
                assert.strictEqual(6, fields.length, 'has 6 fields');
                var username = fields.eq(0);
                assert.strictEqual(Serene.DialogUtils.getFieldTitle(username), 'Username', 'username at 0');
                assert.ok(Serene.DialogUtils.isRequired(username), 'username is required');
                assert.ok(Serene.DialogUtils.isEditable(username), 'username is editable');
                var displayName = fields.eq(1);
                assert.strictEqual(Serene.DialogUtils.getFieldTitle(displayName), 'Display Name', 'display name at 1');
                assert.ok(Serene.DialogUtils.isRequired(displayName), 'display name is required');
                assert.ok(Serene.DialogUtils.isEditable(displayName), 'display name is editable');
                dialog.dialogClose();
            });
        })(Test = Administration.Test || (Administration.Test = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var DialogUtils;
    (function (DialogUtils) {
        function getDialogTitle(element) {
            if (element.hasClass(".ui-dialog-content"))
                element = element.closest(".ui-dialog");
            return element.find(".ui-dialog-title").text();
        }
        DialogUtils.getDialogTitle = getDialogTitle;
        function getVisibleButtons(dialog) {
            return $('#' + dialog.idPrefix + 'Toolbar').find('.tool-button:visible');
        }
        DialogUtils.getVisibleButtons = getVisibleButtons;
        function getVisibleFields(dialog) {
            return $('#' + dialog.idPrefix + 'PropertyGrid').find('div.field:visible');
        }
        DialogUtils.getVisibleFields = getVisibleFields;
        function getFieldTitle(field) {
            var lbl = field.children("label.caption");
            var text = lbl.text();
            var pref = lbl.children("sup:visible").text();
            if (pref && text.substr(0, pref.length) == pref)
                return text.substr(pref.length);
            return text;
        }
        DialogUtils.getFieldTitle = getFieldTitle;
        function isEditable(field) {
            var edit = field.find('.editor').first();
            return !edit.hasClass('readonly') &&
                !edit.hasClass('disabled') &&
                !edit.is('[readonly]') &&
                !edit.is(':disabled');
        }
        DialogUtils.isEditable = isEditable;
        function isRequired(field) {
            return hasRequiredMark(field) && hasRequiredEditor(field);
        }
        DialogUtils.isRequired = isRequired;
        function hasRequiredMark(field) {
            var lbl = field.children("label.caption");
            return lbl.children("sup:visible").length > 0;
        }
        DialogUtils.hasRequiredMark = hasRequiredMark;
        function hasRequiredEditor(field) {
            return field.find(".editor").first().hasClass("required");
        }
        DialogUtils.hasRequiredEditor = hasRequiredEditor;
    })(DialogUtils = Serene.DialogUtils || (Serene.DialogUtils = {}));
})(Serene || (Serene = {}));
//# sourceMappingURL=Serene.Test.js.map