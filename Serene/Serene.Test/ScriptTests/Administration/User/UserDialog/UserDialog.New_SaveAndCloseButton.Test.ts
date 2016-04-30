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

            var buttonTesting = new ButtonTesting(assert);

            buttonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
            buttonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
            buttonTesting.assertDisabled(buttons.eq(2), 'edit-roles-button');
            buttonTesting.assertDisabled(buttons.eq(3), 'edit-permissions-button');

            let fields = DialogTesting.getVisibleFields(dialog);
            assert.strictEqual(6, fields.length,
                'has 6 fields');

            var formTesting = new FormTesting(assert);

            var username = fields.eq(0);
            formTesting.assertTitle(username, 'Username');
            formTesting.assertRequired(username);
            formTesting.assertEditable(username);
            formTesting.assertHasClass(username, 's-StringEditor');
            formTesting.assertMaxLength(username, 100);
            formTesting.assertValue(username, '');

            var displayName = fields.eq(1);
            formTesting.assertTitle(displayName, 'Display Name');
            formTesting.assertRequired(displayName);
            formTesting.assertEditable(displayName);
            formTesting.assertHasClass(displayName, 's-StringEditor');
            formTesting.assertMaxLength(displayName, 100);
            formTesting.assertValue(displayName, '');

            var email = fields.eq(2);
            formTesting.assertTitle(email, 'Email');
            formTesting.assertNotRequired(email);
            formTesting.assertEditable(email);
            formTesting.assertHasClass(email, 'emailuser');
            formTesting.assertMaxLength(email, 100);
            formTesting.assertValue(email, '');

            var emaildomain = email.find('.emaildomain');
            assert.ok(EditorTesting.isEditable(emaildomain),
                'email domain is editable');

            var password = fields.eq(3);
            formTesting.assertTitle(password, 'Password');
            formTesting.assertRequired(password);
            formTesting.assertEditable(password);
            formTesting.assertHasClass(password, 's-PasswordEditor');
            formTesting.assertEditorIs(password, 'input[type=password]');
            formTesting.assertMaxLength(password, 50);
            formTesting.assertValue(password, '');

            var confirm = fields.eq(4);
            formTesting.assertTitle(confirm, 'Confirm Password');
            formTesting.assertRequired(confirm);
            formTesting.assertEditable(confirm);
            formTesting.assertHasClass(confirm, 's-PasswordEditor');
            formTesting.assertEditorIs(confirm, 'input[type=password]');
            formTesting.assertMaxLength(confirm, 50);
            formTesting.assertValue(confirm, '');

            var source = fields.eq(5);
            formTesting.assertTitle(source, 'Source');
            formTesting.assertNotRequired(source);
            formTesting.assertNotEditable(source);
            formTesting.assertHasClass(source, 's-StringEditor');
            formTesting.assertMaxLength(source, 4);
            formTesting.assertValue(source, 'site');

            formTesting.setValue(username, 'ABC  ');
            formTesting.setValue(displayName, 'DEF');
            formTesting.setValue(email, 'ghi@jkl.com');
            formTesting.setValue(password, '1234567');
            formTesting.setValue(confirm, '1234567');

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