namespace Serene.Administration.Test {
    QUnit.module('Serene.Administration');

    QUnit.test('UserDialog Edit LoadById, Save and Close Button', function (assert) {
        let asyncDone = assert.async();
        let dialog = new UserDialog();
        let uiDialog = dialog.element.closest(".ui-dialog");

        let ajax = new ServiceTesting.FakeAjax();
        var userRetrieveCalled = 0;
        ajax.addServiceHandler("~/services/Administration/User/Retrieve", s => {
            userRetrieveCalled++;
            assert.deepEqual(s.request, { EntityId: 789 });

            dialog.element.on('dialogopen', function () {
                window.setTimeout(function () {
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
                    FormTesting.assertValue(username, 'some.thing');

                    var displayName = fields.eq(1);
                    FormTesting.assertTitle(displayName, 'Display Name');
                    FormTesting.assertRequired(displayName);
                    FormTesting.assertEditable(displayName);
                    FormTesting.assertHasClass(displayName, 's-StringEditor');
                    FormTesting.assertMaxLength(displayName, 100);
                    FormTesting.assertValue(displayName, 'Some Thing');

                    var email = fields.eq(2);
                    FormTesting.assertTitle(email, 'Email');
                    FormTesting.assertNotRequired(email);
                    FormTesting.assertEditable(email);
                    FormTesting.assertHasClass(email, 'emailuser');
                    FormTesting.assertMaxLength(email, 100);
                    FormTesting.assertValue(email, 'some_thing@somedomain.com');

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
                    FormTesting.assertValue(password, '');

                    var confirm = fields.eq(4);
                    FormTesting.assertTitle(confirm, 'Confirm Password');
                    FormTesting.assertNotRequired(confirm);
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
                    FormTesting.assertValue(source, 'some');

                    FormTesting.setValue(username, 'ABC  ');
                    FormTesting.setValue(displayName, 'DEF');
                    FormTesting.setValue(email, 'ghi@jkl.com');
                    FormTesting.setValue(password, '1234567');
                    FormTesting.setValue(confirm, '1234567');

                    var datachangeTriggers = 0;
                    dialog.element.on('ondatachange', function () {
                        datachangeTriggers++;
                    });

                    var updateCalls = 0;
                    ajax.addServiceHandler("~/services/Administration/User/Update", s => {
                        updateCalls++;
                        assert.deepEqual(s.request, {
                            EntityId: 789,
                            Entity: <UserRow>{
                                UserId: 789,
                                Username: 'ABC  ',
                                DisplayName: 'DEF',
                                Email: 'ghi@jkl.com',
                                Password: '1234567'
                            }
                        }, 'save request');

                        var retrieveCalls = 0;
                        ajax.addServiceHandler("~/services/Administration/User/Retrieve", s => {
                            throw new Error("retrieve shouldn't be called!");
                        });

                        setTimeout(function () {
                            try {
                                assert.strictEqual(updateCalls, 1,
                                    'update should be called once');

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
                                asyncDone();
                            }
                        }, 0);

                        return {
                            EntityId: 789
                        };
                    });

                    DialogTesting.clickButton(dialog, ".save-and-close-button");
                }, 0);
            });

            return {
                "Entity": <UserRow>{
                    UserId: 789,
                    Username: 'some.thing',
                    DisplayName: 'Some Thing',
                    Email: 'some_thing@somedomain.com',
                    Source: 'some'
                }
            };
        });

        try {
            dialog.loadByIdAndOpenDialog(789);
        }
        catch (e) {
            dialog.dialogClose();
            throw e;
        }
    });
}