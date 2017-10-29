namespace Serene.Administration.Test {
    QUnit.module('Serene.Administration');

    QUnit.test('RoleDialog General', function (assert) {
        assert.notEqual(null, new RoleDialog(),
            'create a new instance');

        var dialog = new RoleDialog();
        assert.notEqual(null, dialog.element,
            'has element');

        assert.ok(!dialog.element.is(':visible'),
            'initially invisible');

        dialog.dialogOpen();
        var uiDialog = dialog.element.closest('.ui-dialog');

        assert.equal(1, uiDialog.length,
            'element under .ui-dialog');

        assert.ok(uiDialog.hasClass("s-Dialog"),
            'has dialog css class');

        assert.ok(uiDialog.hasClass("s-RoleDialog"),
            'has classname css class');

        assert.ok(uiDialog.hasClass("s-Administration-RoleDialog"),
            'has module prefixed css class');

        assert.ok(uiDialog.is(':visible'),
            'visible after dialogOpen');

        dialog.dialogClose();
        assert.ok(!uiDialog.is(':visible'),
            'hidden after dialogClose');

        dialog = new RoleDialog();

        dialog.loadNewAndOpenDialog();
        uiDialog = dialog.element.closest('.ui-dialog');
        assert.ok(uiDialog.is(':visible'),
            'open in new entity mode');

        dialog.dialogClose();
        assert.ok(!uiDialog.is(":visible"),
            'close new entity dialog');
    });
}