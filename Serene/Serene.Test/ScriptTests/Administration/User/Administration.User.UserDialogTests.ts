namespace Serene.Administration.Test {
    let assert: QUnitAssert = QUnit.assert;
    QUnit.module('Serene.Administration');

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

        assert.strictEqual(DialogTesting.getDialogTitle(uiDialog), "New User",
            'has correct title');

        let buttons = DialogTesting.getVisibleButtons(dialog);
        assert.strictEqual(4, buttons.length,
            'has 4 visible buttons');

        ButtonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
        ButtonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
        ButtonTesting.assertDisabled(buttons.eq(2), 'edit-roles-button');
        ButtonTesting.assertDisabled(buttons.eq(3), 'edit-permissions-button');

        let fields = DialogTesting.getVisibleFields(dialog);
        assert.strictEqual(6, fields.length,
            'has 6 fields');

        var username = fields.eq(0);
        FormTesting.assertTitle(username, 'Username');
        FormTesting.assertRequired(username);
        FormTesting.assertEditable(username);
        FormTesting.assertHasClass(username, 's-StringEditor');
        FormTesting.assertMaxLength(username, 100);

        var displayName = fields.eq(1);
        FormTesting.assertTitle(displayName, 'Display Name');
        FormTesting.assertRequired(displayName);
        FormTesting.assertEditable(displayName);
        FormTesting.assertHasClass(displayName, 's-StringEditor');
        FormTesting.assertMaxLength(displayName, 100);

        var email = fields.eq(2);
        FormTesting.assertTitle(email, 'Email');
        FormTesting.assertNotRequired(email);
        FormTesting.assertEditable(email);
        FormTesting.assertHasClass(email, 'emailuser');
        FormTesting.assertMaxLength(email, 100);

        var emaildomain = email.find('.emaildomain');
        assert.ok(EditorTesting.isEditable(emaildomain),
            'email domain is editable');

        var password = fields.eq(3);
        FormTesting.assertTitle(password, 'Password');
        FormTesting.assertRequired(password);
        FormTesting.assertEditable(password);
        FormTesting.assertHasClass(password, 's-PasswordEditor');
        FormTesting.assertEditorIs(password, 'input[type=password]');
        FormTesting.assertMaxLength(password, 50);

        var confirm = fields.eq(4);
        FormTesting.assertTitle(confirm, 'Confirm Password');
        FormTesting.assertRequired(confirm);
        FormTesting.assertEditable(confirm);
        FormTesting.assertHasClass(confirm, 's-PasswordEditor');
        FormTesting.assertEditorIs(confirm, 'input[type=password]');
        FormTesting.assertMaxLength(confirm, 50);

        var source = fields.eq(5);
        FormTesting.assertTitle(source, 'Source');
        FormTesting.assertNotRequired(source);
        FormTesting.assertNotEditable(source);
        FormTesting.assertHasClass(source, 's-StringEditor');
        FormTesting.assertMaxLength(source, 4);

        dialog.dialogClose();

    });

    QUnit.test('UserDialog Edit Entity', function () {
        let dialog = new UserDialog();
        let uiDialog = dialog.element.closest(".ui-dialog");
        dialog.loadEntityAndOpenDialog(<UserRow>{
            UserId: 789,
            Username: 'some.thing',
            DisplayName: 'Some Thing',
            Email: 'some_thing@somedomain.com',
            Source: 'some'
        });

        assert.ok(uiDialog.is(":visible"),
            'open edit entity dialog');

        assert.strictEqual(DialogTesting.getDialogTitle(uiDialog), 'Edit User (some.thing)',
            'has correct title');

        let buttons = DialogTesting.getVisibleButtons(dialog);
        assert.strictEqual(5, buttons.length,
            'has 5 visible buttons');

        ButtonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
        ButtonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
        ButtonTesting.assertEnabled(buttons.eq(2), 'delete-button');
        ButtonTesting.assertEnabled(buttons.eq(3), 'edit-roles-button');
        ButtonTesting.assertEnabled(buttons.eq(4), 'edit-permissions-button');

        let fields = DialogTesting.getVisibleFields(dialog);
        assert.strictEqual(6, fields.length,
            'has 6 fields');

        var username = fields.eq(0);
        FormTesting.assertTitle(username, 'Username');
        FormTesting.assertRequired(username);
        FormTesting.assertEditable(username);
        FormTesting.assertHasClass(username, 's-StringEditor');
        FormTesting.assertMaxLength(username, 100);

        var displayName = fields.eq(1);
        FormTesting.assertTitle(displayName, 'Display Name');
        FormTesting.assertRequired(displayName);
        FormTesting.assertEditable(displayName);
        FormTesting.assertHasClass(displayName, 's-StringEditor');
        FormTesting.assertMaxLength(displayName, 100);

        var email = fields.eq(2);
        FormTesting.assertTitle(email, 'Email');
        FormTesting.assertNotRequired(email);
        FormTesting.assertEditable(email);
        FormTesting.assertHasClass(email, 'emailuser');
        FormTesting.assertMaxLength(email, 100);

        var emaildomain = email.find('.emaildomain');
        assert.ok(EditorTesting.isEditable(emaildomain),
            'email domain is editable');

        var password = fields.eq(3);
        FormTesting.assertTitle(password, 'Password');
        FormTesting.assertNotRequired(password);
        FormTesting.assertEditable(password);
        FormTesting.assertHasClass(password, 's-PasswordEditor');
        FormTesting.assertEditorIs(password, 'input[type=password]');
        FormTesting.assertMaxLength(password, 50);

        var confirm = fields.eq(4);
        FormTesting.assertTitle(confirm, 'Confirm Password');
        FormTesting.assertNotRequired(confirm);
        FormTesting.assertEditable(confirm);
        FormTesting.assertHasClass(confirm, 's-PasswordEditor');
        FormTesting.assertEditorIs(confirm, 'input[type=password]');
        FormTesting.assertMaxLength(confirm, 50);

        var source = fields.eq(5);
        FormTesting.assertTitle(source, 'Source');
        FormTesting.assertNotRequired(source);
        FormTesting.assertNotEditable(source);
        FormTesting.assertHasClass(source, 's-StringEditor');
        FormTesting.assertMaxLength(source, 4);

        dialog.dialogClose();

    });
}