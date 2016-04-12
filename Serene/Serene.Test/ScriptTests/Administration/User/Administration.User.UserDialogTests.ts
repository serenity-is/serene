namespace Serene.Administration.Test {
    let assert: QUnitAssert = QUnit.assert;
    QUnit.module('Serene.Administration', {
        beforeEach: function() {
            Q.LT.add(Serene.Test.dataLocalText);
            Q.ScriptData.set("Template.EntityDialog", Serene.Test.dataEntityDialogTemplate);
            Q.ScriptData.set("Form.Administration.User", dataUserForm);
        },
        afterEach: function () {
            Q.ScriptData.set("Form.Administration.User", null);
            Q.ScriptData.set("Template.EntityDialog", null);
            Q.LT.$table = {};
        }
    });

    QUnit.test('UserDialog General', function () {
        assert.notEqual(null, new UserDialog(),
            'create a new instance');

        var dialog = new UserDialog();
        assert.notEqual(null, dialog.element,
            'has element');

        var uiDialog = dialog.element.closest('.ui-dialog');
        assert.equal(1, uiDialog.length,
            'element under .ui-dialog');

        assert.ok(uiDialog.hasClass("s-Dialog"),
            'has dialog css class');

        assert.ok(uiDialog.hasClass("s-UserDialog"),
            'has classname css class');

        assert.ok(uiDialog.hasClass("s-Administration-UserDialog"),
            'has module prefixed css class');

        assert.ok(!uiDialog.is(':visible'),
            'initially invisible');

        dialog.dialogOpen();
        assert.ok(uiDialog.is(':visible'),
            'visible after dialogOpen');

        dialog.dialogClose();
        assert.ok(!uiDialog.is(':visible'),
            'hidden after dialogClose');

        dialog = new UserDialog();
        uiDialog = dialog.element.closest('.ui-dialog');

        dialog.loadNewAndOpenDialog();
        assert.ok(uiDialog.is(':visible'),
            'open in new entity mode');

        dialog.dialogClose();
        assert.ok(!uiDialog.is(":visible"),
            'close new entity dialog');
    });

    QUnit.test('UserDialog New Entity', function () {
        let dialog = new UserDialog();
        let uiDialog = dialog.element.closest(".ui-dialog");
        dialog.loadNewAndOpenDialog();

        assert.ok(uiDialog.is(":visible"),
            'open a new entity dialog');

        assert.strictEqual(DialogUtils.getDialogTitle(uiDialog), "New User",
            'has correct title');

        let buttons = DialogUtils.getVisibleButtons(dialog);
        assert.strictEqual(4, buttons.length,
            'has 4 visible buttons');

        assert.ok(
            buttons.eq(0).hasClass('save-and-close-button') &&
            !buttons.eq(0).hasClass('disabled'),
            'has enabled save and close button');

        assert.ok(
            buttons.eq(1).hasClass('apply-changes-button') &&
            !buttons.eq(1).hasClass('disabled'),
            'has enabled apply changes button');

        assert.ok(
            buttons.eq(2).hasClass('users-button') &&
            buttons.eq(2).hasClass('disabled'),
            'has disabled roles button');

        assert.ok(
            buttons.eq(3).hasClass('lock-button') &&
            buttons.eq(3).hasClass('disabled'),
            'has disabled permissions button');

        let fields = DialogUtils.getVisibleFields(dialog);
        assert.strictEqual(6, fields.length,
            'has 6 fields');

        var username = fields.eq(0);
        assert.strictEqual(DialogUtils.getFieldTitle(username), 'Username',
            'username at 0');

        assert.ok(DialogUtils.isRequired(username),
            'username is required');

        assert.ok(DialogUtils.isEditable(username),
            'username is editable');


        dialog.dialogClose();

    });
}