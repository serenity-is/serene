namespace Serene.Administration.Test {
    QUnit.module('Serene.Administration');
    
    QUnit.test('LanguageDialog New Entity, Apply Changes Button', function (assert) {
        let done = assert.async();
        let dialog = new LanguageDialog();
        let uiDialog = dialog.element.closest(".ui-dialog");

        dialog.loadNewAndOpenDialog();
        try {
            assert.ok(uiDialog.is(":visible"),
                'open a new entity dialog');

            assert.strictEqual(DialogTesting.getDialogTitle(uiDialog), "New Language",
                'has correct title');

            let buttons = DialogTesting.getVisibleButtons(dialog);
            assert.strictEqual(2, buttons.length,
                'has 2 visible buttons');

            let buttonTesting = new ButtonTesting(assert);
            buttonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
            buttonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');

            let fields = DialogTesting.getVisibleFields(dialog);
            assert.strictEqual(2, fields.length,
                'has 2 fields');

            var formTesting = new FormTesting(assert);

            var languageId = fields.eq(0);
            formTesting.assertTitle(languageId, 'Language Id');
            formTesting.assertRequired(languageId);
            formTesting.assertEditable(languageId);
            formTesting.assertHasClass(languageId, 's-StringEditor');
            formTesting.assertMaxLength(languageId, 10);
            formTesting.assertValue(languageId, '');

            var languagename = fields.eq(1);
            formTesting.assertTitle(languagename, 'Language Name');
            formTesting.assertRequired(languagename);
            formTesting.assertEditable(languagename);
            formTesting.assertHasClass(languagename, 's-StringEditor');
            formTesting.assertMaxLength(languagename, 50);
            formTesting.assertValue(languagename, '');

            formTesting.setValue(languageId, 'tr  ');
            formTesting.setValue(languagename, ' Turkish  ');

            var datachangeTriggers = 0;
            dialog.element.on('ondatachange', function () {
                datachangeTriggers++;
            });

            let ajax = new ServiceTesting.FakeAjax();
            var createCalls = 0;
            ajax.addServiceHandler("~/services/Administration/Language/Create", s => {
                createCalls++;
                assert.deepEqual(s.request, {
                    Entity: <LanguageRow>{
                            LanguageId: 'tr  ',
                            LanguageName: ' Turkish  '
                        }
                    },
                    'save request');

                var retrieveCalls = 0;
                ajax.addServiceHandler("~/services/Administration/Language/Retrieve", s => {
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

                            formTesting.assertValue(languageId, 'tr');
                            formTesting.assertValue(languagename, 'Turkish');
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
                            Id: 9876,
                            LanguageId: 'tr',
                            LanguageName: 'Turkish'
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