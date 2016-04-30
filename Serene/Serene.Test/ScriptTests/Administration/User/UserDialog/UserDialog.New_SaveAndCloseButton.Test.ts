namespace Serene.Administration.Test {
    QUnit.module('Serene.Administration');
    
    QUnit.test('UserDialog New Entity, Save and Close Button', function (assert) {
        let done = assert.async();
        let dialog = new UserDialog();
        let uiDialog = dialog.element.closest(".ui-dialog");

        dialog.loadNewAndOpenDialog();
        try {
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
            FormTesting.assertValue(username, '');

            var displayName = fields.eq(1);
            FormTesting.assertTitle(displayName, 'Display Name');
            FormTesting.assertRequired(displayName);
            FormTesting.assertEditable(displayName);
            FormTesting.assertHasClass(displayName, 's-StringEditor');
            FormTesting.assertMaxLength(displayName, 100);
            FormTesting.assertValue(displayName, '');

            var email = fields.eq(2);
            FormTesting.assertTitle(email, 'Email');
            FormTesting.assertNotRequired(email);
            FormTesting.assertEditable(email);
            FormTesting.assertHasClass(email, 'emailuser');
            FormTesting.assertMaxLength(email, 100);
            FormTesting.assertValue(email, '');

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
            FormTesting.assertValue(password, '');

            var confirm = fields.eq(4);
            FormTesting.assertTitle(confirm, 'Confirm Password');
            FormTesting.assertRequired(confirm);
            FormTesting.assertEditable(confirm);
            FormTesting.assertHasClass(confirm, 's-PasswordEditor');
            FormTesting.assertEditorIs(confirm, 'input[type=password]');
            FormTesting.assertMaxLength(confirm, 50);
            FormTesting.assertValue(confirm, '');

            var source = fields.eq(5);
            FormTesting.assertTitle(source, 'Source');
            FormTesting.assertNotRequired(source);
            FormTesting.assertNotEditable(source);
            FormTesting.assertHasClass(source, 's-StringEditor');
            FormTesting.assertMaxLength(source, 4);
            FormTesting.assertValue(source, 'site');

            FormTesting.setValue(username, 'ABC  ');
            FormTesting.setValue(displayName, 'DEF');
            FormTesting.setValue(email, 'ghi@jkl.com');
            FormTesting.setValue(password, '1234567');
            FormTesting.setValue(confirm, '1234567');

            var datachangeTriggers = 0;
            dialog.element.on('ondatachange', function () {
                datachangeTriggers++;
            });

            let ajax = new ServiceTesting.FakeAjax();
            var createCalls = 0;
            ajax.addServiceHandler("~/services/Administration/User/Create", s => {
                createCalls++;
                assert.deepEqual(s.request, {
                        Entity: <UserRow>{
                            Username: 'ABC  ',
                            DisplayName: 'DEF',
                            Email: 'ghi@jkl.com',
                            Password: '1234567'
                        }
                    },
                    'save request');

                var retrieveCalls = 0;
                ajax.addServiceHandler("~/services/Administration/User/Retrieve", s => {
                    throw new Error("retrieve shouldn't be called!");
                });

                setTimeout(function () {
                    try {
                        assert.strictEqual(createCalls, 1,
                            'create should be called once');

                        assert.strictEqual(retrieveCalls, 0,
                            "retrieve shouldn't be called");

                        assert.strictEqual(datachangeTriggers, 1,
                            "data change trigger should be called once");

                        assert.ok(!uiDialog.is(":visible"),
                            'dialog should be closed');
                    }
                    finally {
                        (<any>toastr).remove();
                        ajax.dispose();
                        dialog.dialogClose();
                        done();
                    }
                }, 0);

                return { EntityId: 9876 };
            });

            DialogTesting.clickButton(dialog, ".save-and-close-button");
        }
        catch (e) {
            dialog.dialogClose();
            throw e;
        }

    });
}