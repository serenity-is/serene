namespace Serene.Administration.Test {
    QUnit.module('Serene.Administration');
    
    QUnit.test('RoleDialog Edit LoadById, Save and Close Button', function (assert) {
        let asyncDone = assert.async();
        let dialog = new RoleDialog();
        let uiDialog = dialog.element.closest(".ui-dialog");

        let ajax = new ServiceTesting.FakeAjax();
        var firstRetrieveCalls = 0;
        ajax.addServiceHandler("~/services/Administration/Role/Retrieve", s => {
            firstRetrieveCalls++;
            assert.deepEqual(s.request, { EntityId: 789 });

            dialog.element.on('dialogopen', function () {
                window.setTimeout(function () {
                    assert.ok(uiDialog.is(":visible"),
                        'open edit entity dialog');

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
                                RoleName: 'some.thing'
                            }
                        }, 'save request');

                        var retrieveCalls = 0;
                        ajax.addServiceHandler("~/services/Administration/Role/Retrieve", s => {
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