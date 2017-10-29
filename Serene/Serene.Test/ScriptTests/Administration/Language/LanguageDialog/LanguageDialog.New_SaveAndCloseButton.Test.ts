namespace Serene.Administration.Test {
    QUnit.module('Serene.Administration');
    
    QUnit.test('LanguageDialog New Entity, Save and Close Button', function (assert) {
        let done = assert.async();
        let dialog = new LanguageDialog();

        dialog.loadNewAndOpenDialog();
        try {
            let uiDialog = dialog.element.closest(".ui-dialog");
            assert.ok(uiDialog.is(":visible"),
                'open a new entity dialog');

            assert.strictEqual(DialogTesting.getDialogTitle(uiDialog), "New Language",
                'has correct title');

            let fields = DialogTesting.getVisibleFields(dialog);
            assert.strictEqual(2, fields.length,
                'has 2 field');

            var formTesting = new FormTesting(assert);

            var languageId = fields.eq(0);
            var languagename = fields.eq(1);

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
                    throw new Error("retrieve shouldn't be called!");
                });

                setTimeout(function () {
                    try {
                        assert.strictEqual(createCalls, 1,
                            'create should be called once');

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
                        done();
                    }
                }, 0);

                return { EntityId: 9876 };
            });

            DialogTesting.clickButton(dialog, ".save-and-close-button");
        }
        catch (e) {
            dialog.dialogClose();
            throw e;
        }

    });
}