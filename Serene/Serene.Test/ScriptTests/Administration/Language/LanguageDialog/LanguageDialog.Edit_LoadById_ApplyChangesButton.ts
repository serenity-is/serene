namespace Serene.Administration.Test {
    QUnit.module('Serene.Administration');
    
    QUnit.test('LanguageDialog Edit LoadById, Apply Changes Button', function (assert) {
        let asyncDone = assert.async();
        let dialog = new LanguageDialog();
        let uiDialog = dialog.element.closest(".ui-dialog");

        let ajax = new ServiceTesting.FakeAjax();
        var firstRetrieveCalls = 0;
        ajax.addServiceHandler("~/services/Administration/Language/Retrieve", s => {
            firstRetrieveCalls++;
            assert.deepEqual(s.request, { EntityId: 789 });

            dialog.element.on('dialogopen', function () {
                window.setTimeout(function () {
                    assert.ok(uiDialog.is(":visible"),
                        'open edit entity dialog');

                    assert.strictEqual(DialogTesting.getDialogTitle(uiDialog), 'Edit Language (Something)',
                        'has correct title');

                    let buttons = DialogTesting.getVisibleButtons(dialog);
                    assert.strictEqual(3, buttons.length,
                        'has 3 visible buttons');

                    var buttonTesting = new ButtonTesting(assert);
                    buttonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
                    buttonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
                    buttonTesting.assertEnabled(buttons.eq(2), 'delete-button');

                    let fields = DialogTesting.getVisibleFields(dialog);
                    assert.strictEqual(2, fields.length,
                        'has 2 field');

                    var formTesting = new FormTesting(assert);

                    var languageId = fields.eq(0);
                    formTesting.assertTitle(languageId, 'Language Id');
                    formTesting.assertRequired(languageId);
                    formTesting.assertEditable(languageId);
                    formTesting.assertHasClass(languageId, 's-StringEditor');
                    formTesting.assertMaxLength(languageId, 10);
                    formTesting.assertValue(languageId, 'tx');

                    var languagename = fields.eq(1);
                    formTesting.assertTitle(languagename, 'Language Name');
                    formTesting.assertRequired(languagename);
                    formTesting.assertEditable(languagename);
                    formTesting.assertHasClass(languagename, 's-StringEditor');
                    formTesting.assertMaxLength(languagename, 50);
                    formTesting.assertValue(languagename, 'Something');

                    formTesting.setValue(languageId, 'tr  ');
                    formTesting.setValue(languagename, ' Turkish  ');

                    var datachangeTriggers = 0;
                    dialog.element.on('ondatachange', function () {
                        datachangeTriggers++;
                    });

                    var updateCalls = 0;
                    ajax.addServiceHandler("~/services/Administration/Language/Update", s => {
                        updateCalls++;
                        assert.deepEqual(s.request, {
                            EntityId: 789,
                            Entity: <LanguageRow>{
                                Id: 789,
                                LanguageId: 'tr  ',
                                LanguageName: ' Turkish  '
                            }
                        }, 'save request');

                        var retrieveCalls = 0;
                        ajax.addServiceHandler("~/services/Administration/Language/Retrieve", s => {
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

                                    formTesting.assertValue(languagename, 'ABC');
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
                                    LanguageId: 789,
                                    LanguageName: 'ABC'
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
                "Entity": <LanguageRow>{
                    Id: 789,
                    LanguageId: 'tx',
                    LanguageName: 'Something'
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