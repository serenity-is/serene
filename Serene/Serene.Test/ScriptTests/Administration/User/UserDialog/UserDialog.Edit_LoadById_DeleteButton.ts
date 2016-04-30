namespace Serene.Administration.Test {
    QUnit.module('Serene.Administration');

    QUnit.test('UserDialog Edit LoadById, Delete Button', function (assert) {
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

                    let buttonTesting = new ButtonTesting(assert);
                    buttonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
                    buttonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
                    buttonTesting.assertEnabled(buttons.eq(2), 'delete-button');
                    buttonTesting.assertEnabled(buttons.eq(3), 'edit-roles-button');
                    buttonTesting.assertEnabled(buttons.eq(4), 'edit-permissions-button');

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
                    formTesting.assertValue(username, 'some.thing');

                    var displayName = fields.eq(1);
                    formTesting.assertTitle(displayName, 'Display Name');
                    formTesting.assertRequired(displayName);
                    formTesting.assertEditable(displayName);
                    formTesting.assertHasClass(displayName, 's-StringEditor');
                    formTesting.assertMaxLength(displayName, 100);
                    formTesting.assertValue(displayName, 'Some Thing');

                    var email = fields.eq(2);
                    formTesting.assertTitle(email, 'Email');
                    formTesting.assertNotRequired(email);
                    formTesting.assertEditable(email);
                    formTesting.assertHasClass(email, 'emailuser');
                    formTesting.assertMaxLength(email, 100);
                    formTesting.assertValue(email, 'some_thing@somedomain.com');

                    var emaildomain = email.find('.emaildomain');
                    assert.ok(EditorTesting.isEditable(emaildomain),
                        'email domain is editable');

                    var password = fields.eq(3);
                    formTesting.assertTitle(password, 'Password');
                    formTesting.assertNotRequired(password);
                    formTesting.assertEditable(password);
                    formTesting.assertHasClass(password, 's-PasswordEditor');
                    formTesting.assertEditorIs(password, 'input[type=password]');
                    formTesting.assertMaxLength(password, 50);
                    formTesting.assertValue(password, '');

                    var confirm = fields.eq(4);
                    formTesting.assertTitle(confirm, 'Confirm Password');
                    formTesting.assertNotRequired(confirm);
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
                    formTesting.assertValue(source, 'some');

                    formTesting.setValue(username, 'ABC  ');
                    formTesting.setValue(displayName, 'DEF');
                    formTesting.setValue(email, 'ghi@jkl.com');
                    formTesting.setValue(password, '1234567');
                    formTesting.setValue(confirm, '1234567');

                    var datachangeTriggers = 0;
                    dialog.element.on('ondatachange', function () {
                        datachangeTriggers++;
                    });

                    var deleteCalls = 0;
                    ajax.addServiceHandler("~/services/Administration/User/Delete", s => {
                        deleteCalls++;
                        assert.deepEqual(s.request, {
                            EntityId: 789
                        }, 'delete request');

                        var retrieveCalls = 0;
                        ajax.addServiceHandler("~/services/Administration/User/Retrieve", s => {
                            throw new Error("retrieve shouldn't be called!");
                        });

                        setTimeout(function () {
                            try {
                                assert.strictEqual(deleteCalls, 1,
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

                        return {};
                    });

                    DialogTesting.clickButton(dialog, ".delete-button");
                    let confirmDialog = $('.s-ConfirmDialog');
                    assert.equal(confirmDialog.length, 1,
                        'confirm dialog should be shown');

                   confirmDialog.find('.ui-dialog-buttonpane .ui-button').first().click();
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