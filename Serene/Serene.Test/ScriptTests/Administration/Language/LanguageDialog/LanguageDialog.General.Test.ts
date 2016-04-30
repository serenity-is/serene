namespace Serene.Administration.Test {
    QUnit.module('Serene.Administration');

    QUnit.test('LanguageDialog General', function (assert) {
        assert.notEqual(null, new LanguageDialog(),
            'create a new instance');

        var dialog = new LanguageDialog();
        assert.notEqual(null, dialog.element,
            'has element');

        var uiDialog = dialog.element.closest('.ui-dialog');
        assert.equal(1, uiDialog.length,
            'element under .ui-dialog');

        assert.ok(uiDialog.hasClass("s-Dialog"),
            'has dialog css class');

        assert.ok(uiDialog.hasClass("s-LanguageDialog"),
            'has classname css class');

        assert.ok(uiDialog.hasClass("s-Administration-LanguageDialog"),
            'has module prefixed css class');

        assert.ok(!uiDialog.is(':visible'),
            'initially invisible');

        dialog.dialogOpen();
        assert.ok(uiDialog.is(':visible'),
            'visible after dialogOpen');

        dialog.dialogClose();
        assert.ok(!uiDialog.is(':visible'),
            'hidden after dialogClose');

        dialog = new LanguageDialog();
        uiDialog = dialog.element.closest('.ui-dialog');

        dialog.loadNewAndOpenDialog();
        assert.ok(uiDialog.is(':visible'),
            'open in new entity mode');

        dialog.dialogClose();
        assert.ok(!uiDialog.is(":visible"),
            'close new entity dialog');
    });
}