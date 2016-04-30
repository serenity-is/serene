namespace Serene.Administration.Test {
    QUnit.module('Serene.Administration');

    QUnit.test('LanguageDialog Edit With LoadEntity', function (assert) {
        let dialog = new LanguageDialog();
        let uiDialog = dialog.element.closest(".ui-dialog");

        dialog.loadEntityAndOpenDialog(<LanguageRow>{
            Id: 789,
            LanguageId: 'tr',
            LanguageName: 'Turkish'
        });

        try {
            assert.ok(uiDialog.is(":visible"),
                'open edit entity dialog');

            assert.strictEqual(DialogTesting.getDialogTitle(uiDialog), 'Edit Language (Turkish)',
                'has correct title');

            let buttons = DialogTesting.getVisibleButtons(dialog);
            assert.strictEqual(3, buttons.length,
                'has 3 visible buttons');

            let buttonTesting = new ButtonTesting(assert);
            buttonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
            buttonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
            buttonTesting.assertEnabled(buttons.eq(2), 'delete-button');

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
            formTesting.assertValue(languageId, 'tr');

            var languagename = fields.eq(1);
            formTesting.assertTitle(languagename, 'Language Name');
            formTesting.assertRequired(languagename);
            formTesting.assertEditable(languagename);
            formTesting.assertHasClass(languagename, 's-StringEditor');
            formTesting.assertMaxLength(languagename, 50);
            formTesting.assertValue(languagename, 'Turkish');
        }
        finally {
            dialog.dialogClose();
        }
    });
}