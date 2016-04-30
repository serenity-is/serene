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
                                Username: 'some.thing',
                                DisplayName: 'Some Thing',
                                Email: 'some_thing@somedomain.com',
                                Password: ''
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