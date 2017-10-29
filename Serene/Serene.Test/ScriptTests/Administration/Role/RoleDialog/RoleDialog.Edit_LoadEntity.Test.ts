namespace Serene.Administration.Test {
    QUnit.module('Serene.Administration');
    
    QUnit.test('RoleDialog Edit With LoadEntity', function (assert) {
        let dialog = new RoleDialog();

        dialog.loadEntityAndOpenDialog(<RoleRow>{
            RoleId: 789,
            RoleName: 'some.thing'
        });

        try {
            let uiDialog = dialog.element.closest(".ui-dialog");
            assert.ok(uiDialog.is(":visible"),
                'open edit entity dialog');

            assert.strictEqual(DialogTesting.getDialogTitle(uiDialog), 'Edit Role (some.thing)',
                'has correct title');

            let buttons = DialogTesting.getVisibleButtons(dialog);
            assert.strictEqual(4, buttons.length,
                'has 4 visible buttons');

            let buttonTesting = new ButtonTesting(assert);
            buttonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
            buttonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
            buttonTesting.assertEnabled(buttons.eq(2), 'delete-button');
            buttonTesting.assertEnabled(buttons.eq(3), 'edit-permissions-button');

            let fields = DialogTesting.getVisibleFields(dialog);
            assert.strictEqual(1, fields.length,
                'has 1 fields');

            var formTesting = new FormTesting(assert);

            var rolename = fields.eq(0);
            formTesting.assertTitle(rolename, 'Role Name');
            formTesting.assertRequired(rolename);
            formTesting.assertEditable(rolename);
            formTesting.assertHasClass(rolename, 's-StringEditor');
            formTesting.assertMaxLength(rolename, 100);
            formTesting.assertValue(rolename, 'some.thing');
        }
        finally {
            dialog.dialogClose();
        }
    });
}