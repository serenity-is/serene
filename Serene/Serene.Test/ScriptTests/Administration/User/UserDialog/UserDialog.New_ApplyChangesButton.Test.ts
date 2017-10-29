namespace Serene.Administration.Test {
    QUnit.module('Serene.Administration');
    
    QUnit.test('UserDialog New Entity, Apply Changes Button', function (assert) {
        let done = assert.async();
        let dialog = new UserDialog();

        dialog.loadNewAndOpenDialog();
        try {
            let uiDialog = dialog.element.closest(".ui-dialog");

            assert.ok(uiDialog.is(":visible"),
                'open a new entity dialog');

            assert.strictEqual(DialogTesting.getDialogTitle(uiDialog), "New User",
                'has correct title');

            let buttons = DialogTesting.getVisibleButtons(dialog);
            assert.strictEqual(4, buttons.length,
                'has 4 visible buttons');

            let buttonTesting = new ButtonTesting(assert);
            buttonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
            buttonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
            buttonTesting.assertDisabled(buttons.eq(2), 'edit-roles-button');
            buttonTesting.assertDisabled(buttons.eq(3), 'edit-permissions-button');

            let fields = DialogTesting.getVisibleFields(dialog);
            assert.strictEqual(7, fields.length,
                'has 7 fields');

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

            var image = fields.eq(3);
            formTesting.assertTitle(image, 'User Image');
            formTesting.assertNotRequired(image);
            formTesting.assertEditable(image);
            formTesting.assertHasClass(image, 's-ImageUploadEditor');
            formTesting.assertValue(image, null);

            var password = fields.eq(4);
            formTesting.assertTitle(password, 'Password');
            formTesting.assertRequired(password);
            formTesting.assertEditable(password);
            formTesting.assertHasClass(password, 's-PasswordEditor');
            formTesting.assertEditorIs(password, 'input[type=password]');
            formTesting.assertMaxLength(password, 50);
            formTesting.assertValue(password, '');

            var confirm = fields.eq(5);
            formTesting.assertTitle(confirm, 'Confirm Password');
            formTesting.assertRequired(confirm);
            formTesting.assertEditable(confirm);
            formTesting.assertHasClass(confirm, 's-PasswordEditor');
            formTesting.assertEditorIs(confirm, 'input[type=password]');
            formTesting.assertMaxLength(confirm, 50);
            formTesting.assertValue(confirm, '');

            var source = fields.eq(6);
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
                            Password: '1234567',
                            UserImage: null
                        }
                    },
                    'save request');

                var retrieveCalls = 0;
                ajax.addServiceHandler("~/services/Administration/User/Retrieve", s => {
                    retrieveCalls++;

                    assert.deepEqual(s.request, { EntityId: 9876 },
                        'retrieve request');

                    setTimeout(function () {
                        try {
                            assert.strictEqual(createCalls, 1,
                                'create should be called once');

                            assert.strictEqual(retrieveCalls, 1,
                                "retrieve should be called once");

                            assert.strictEqual(datachangeTriggers, 1,
                                "data change trigger should be called once");

                            assert.ok(uiDialog.is(":visible"),
                                'dialog should stay open');

                            formTesting.assertValue(username, 'ABC');
                            formTesting.assertValue(displayName, 'DEF');
                            formTesting.assertValue(email, 'ghi@jkl.com');
                            formTesting.assertValue(password, '');
                            formTesting.assertValue(confirm, '');
                            formTesting.assertValue(source, 'some');
                        }
                        finally {
                            (<any>toastr).remove();
                            ajax.dispose();
                            dialog.dialogClose();
                            done();
                        }
                    }, 0);

                    return {
                        Entity: {
                            UserId: 9876,
                            Username: 'ABC',
                            DisplayName: 'DEF',
                            Email: 'ghi@jkl.com',
                            Source: 'some'
                        }
                    }
                });

                return { EntityId: 9876 };
            });

            DialogTesting.clickButton(dialog, ".apply-changes-button");
        }
        catch (e) {
            dialog.dialogClose();
            throw e;
        }

    });
}