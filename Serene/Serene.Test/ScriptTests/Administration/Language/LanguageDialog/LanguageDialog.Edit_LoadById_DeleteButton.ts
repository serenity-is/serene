namespace Serene.Administration.Test {
    QUnit.module('Serene.Administration');
    
    QUnit.test('LanguageDialog Edit LoadById, Delete Button', function (assert) {
        let asyncDone = assert.async();
        let dialog = new LanguageDialog();

        let ajax = new ServiceTesting.FakeAjax();
        var retrieveCalls = 0;
        ajax.addServiceHandler("~/services/Administration/Language/Retrieve", s => {
            retrieveCalls++;
            assert.deepEqual(s.request, { EntityId: 789 });

            dialog.element.on('dialogopen', function () {
                let uiDialog = dialog.element.closest(".ui-dialog");
                window.setTimeout(function () {
                    var datachangeTriggers = 0;
                    dialog.element.on('ondatachange', function () {
                        datachangeTriggers++;
                    });

                    var deleteCalls = 0;
                    ajax.addServiceHandler("~/services/Administration/Language/Delete", s => {
                        deleteCalls++;
                        assert.deepEqual(s.request, {
                            EntityId: 789
                        }, 'delete request');

                        var retrieveCalls = 0;
                        ajax.addServiceHandler("~/services/Administration/Language/Retrieve", s => {
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
                "Entity": <LanguageRow>{
                    Id: 789,
                    LanguageId: 'tr',
                    LanguageName: 'Turkish'
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