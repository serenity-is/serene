namespace Serene.Administration.Test {
    QUnit.module('Serene.Administration');

    QUnit.test('RoleDialog New Entity, Apply Changes Button', function (assert) {
        let done = assert.async();
        let dialog = new RoleDialog();

        dialog.loadNewAndOpenDialog();
        try {
            let uiDialog = dialog.element.closest(".ui-dialog");

            assert.ok(uiDialog.is(":visible"),
                'open a new entity dialog');

            assert.strictEqual(DialogTesting.getDialogTitle(uiDialog), "New Role",
                'has correct title');

            let buttons = DialogTesting.getVisibleButtons(dialog);
            assert.strictEqual(3, buttons.length,
                'has 3 visible buttons');

            let buttonTesting = new ButtonTesting(assert);
            buttonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
            buttonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
            buttonTesting.assertDisabled(buttons.eq(2), 'edit-permissions-button');

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
            formTesting.assertValue(rolename, '');

            formTesting.setValue(rolename, 'ABC  ');

            var datachangeTriggers = 0;
            dialog.element.on('ondatachange', function () {
                datachangeTriggers++;
            });

            let ajax = new ServiceTesting.FakeAjax();
            var createCalls = 0;
            ajax.addServiceHandler("~/services/Administration/Role/Create", s => {
                createCalls++;
                assert.deepEqual(s.request, {
                        Entity: <RoleRow>{
                            RoleName: 'ABC  '
                        }
                    },
                    'save request');

                var retrieveCalls = 0;
                ajax.addServiceHandler("~/services/Administration/Role/Retrieve", s => {
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

                            formTesting.assertValue(rolename, 'ABC');
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
                            RoleId: 9876,
                            RoleName: 'ABC'
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