namespace Serene.Administration.Test {
    QUnit.module('Serene.Administration');

    QUnit.test('UserDialog Edit LoadById, Apply Changes Button', function (assert) {
        let asyncDone = assert.async();
        let dialog = new UserDialog();
        let uiDialog = dialog.element.closest(".ui-dialog");

        let ajax = new ServiceTesting.FakeAjax();
        var firstRetrieveCalls = 0;
        ajax.addServiceHandler("~/services/Administration/User/Retrieve", s => {
            firstRetrieveCalls++;
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

                    var buttonTesting = new ButtonTesting(assert);
                    buttonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
                    buttonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
                    buttonTesting.assertEnabled(buttons.eq(2), 'delete-button');
                    buttonTesting.assertEnabled(buttons.eq(3), 'edit-roles-button');
                    buttonTesting.assertEnabled(buttons.eq(4), 'edit-permissions-button');

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

                    var image = fields.eq(3);
                    formTesting.assertTitle(image, 'User Image');
                    formTesting.assertNotRequired(image);
                    formTesting.assertEditable(image);
                    formTesting.assertHasClass(image, 's-ImageUploadEditor');
                    formTesting.assertValue(image, null);

                    var password = fields.eq(4);
                    formTesting.assertTitle(password, 'Password');
                    formTesting.assertNotRequired(password);
                    formTesting.assertEditable(password);
                    formTesting.assertHasClass(password, 's-PasswordEditor');
                    formTesting.assertEditorIs(password, 'input[type=password]');
                    formTesting.assertMaxLength(password, 50);
                    formTesting.assertValue(password, '');

                    var confirm = fields.eq(5);
                    formTesting.assertTitle(confirm, 'Confirm Password');
                    formTesting.assertNotRequired(confirm);
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
                                Password: '1234567',
                                UserImage: null
                            }
                        }, 'save request');

                        var retrieveCalls = 0;
                        ajax.addServiceHandler("~/services/Administration/User/Retrieve", s => {
                            retrieveCalls++;

                            assert.deepEqual(s.request, { EntityId: 789 },
                                'retrieve request');

                            setTimeout(function () {
                                try {
                                    assert.strictEqual(updateCalls, 1,
                                        'update should be called once');

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
                                    asyncDone();
                                }
                            }, 0);

                            return {
                                Entity: {
                                    UserId: 789,
                                    Username: 'ABC',
                                    DisplayName: 'DEF',
                                    Email: 'ghi@jkl.com',
                                    Source: 'some'
                                }
                            }
                        });

                        return {
                            EntityId: 789
                        };
                    });

                    DialogTesting.clickButton(dialog, ".apply-changes-button");
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