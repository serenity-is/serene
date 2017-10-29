namespace Serene.Administration.Test {
    QUnit.module('Serene.Administration');

    QUnit.test('RoleDialog Edit LoadById, Apply Changes Button', function (assert) {
        let asyncDone = assert.async();
        let dialog = new RoleDialog();

        let ajax = new ServiceTesting.FakeAjax();
        var firstRetrieveCalls = 0;
        ajax.addServiceHandler("~/services/Administration/Role/Retrieve", s => {
            firstRetrieveCalls++;
            assert.deepEqual(s.request, { EntityId: 789 });

            dialog.element.on('dialogopen', function () {
                let uiDialog = dialog.element.closest(".ui-dialog");
                window.setTimeout(function () {
                    assert.ok(uiDialog.is(":visible"),
                        'open edit entity dialog');

                    assert.strictEqual(DialogTesting.getDialogTitle(uiDialog), 'Edit Role (some.thing)',
                        'has correct title');

                    let buttons = DialogTesting.getVisibleButtons(dialog);
                    assert.strictEqual(4, buttons.length,
                        'has 4 visible buttons');

                    var buttonTesting = new ButtonTesting(assert);
                    buttonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
                    buttonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
                    buttonTesting.assertEnabled(buttons.eq(2), 'delete-button');
                    buttonTesting.assertEnabled(buttons.eq(3), 'edit-permissions-button');

                    let fields = DialogTesting.getVisibleFields(dialog);
                    assert.strictEqual(1, fields.length,
                        'has 1 field');

                    var formTesting = new FormTesting(assert);

                    var rolename = fields.eq(0);
                    formTesting.assertTitle(rolename, 'Role Name');
                    formTesting.assertRequired(rolename);
                    formTesting.assertEditable(rolename);
                    formTesting.assertHasClass(rolename, 's-StringEditor');
                    formTesting.assertMaxLength(rolename, 100);
                    formTesting.assertValue(rolename, 'some.thing');

                    formTesting.setValue(rolename, 'ABC  ');

                    var datachangeTriggers = 0;
                    dialog.element.on('ondatachange', function () {
                        datachangeTriggers++;
                    });

                    var updateCalls = 0;
                    ajax.addServiceHandler("~/services/Administration/Role/Update", s => {
                        updateCalls++;
                        assert.deepEqual(s.request, {
                            EntityId: 789,
                            Entity: <RoleRow>{
                                RoleId: 789,
                                RoleName: 'ABC  '
                            }
                        }, 'save request');

                        var retrieveCalls = 0;
                        ajax.addServiceHandler("~/services/Administration/Role/Retrieve", s => {
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

                                    formTesting.assertValue(rolename, 'ABC');
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
                                    RoleId: 789,
                                    RoleName: 'ABC'
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
                "Entity": <RoleRow>{
                    RoleId: 789,
                    RoleName: 'some.thing'
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