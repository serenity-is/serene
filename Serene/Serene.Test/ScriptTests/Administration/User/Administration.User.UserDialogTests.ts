namespace Serene.Administration.Test {
    let assert: QUnitAssert = QUnit.assert;
    QUnit.module('Serene.Administration');

    QUnit.test('UserDialog tests', function () {

        Q.LT.add(Serene.Test.dataLocalText);
        Q.ScriptData.set("Template.EntityDialog", Serene.Test.dataEntityDialogTemplate);
        Q.ScriptData.set("Form.Administration.User", dataUserForm);
        try {
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

            var idPrefix = (dialog as any).idPrefix;
        }
        finally {
            Q.ScriptData.set("Form.Administration.User", null);
            Q.ScriptData.set("Template.EntityDialog", null);
            Q.LT.$table = {};
        }

    });
}