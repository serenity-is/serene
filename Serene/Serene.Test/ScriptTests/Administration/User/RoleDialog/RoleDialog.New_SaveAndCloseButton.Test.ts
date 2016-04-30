namespace Serene.Administration.Test {
    QUnit.module('Serene.Administration');

    QUnit.test('RoleDialog New Entity, Save and Close Button', function (assert) {
        let done = assert.async();
        let dialog = new RoleDialog();
        let uiDialog = dialog.element.closest(".ui-dialog");

        dialog.loadNewAndOpenDialog();
        try {
            assert.ok(uiDialog.is(":visible"),
                'open a new entity dialog');

            assert.strictEqual(DialogTesting.getDialogTitle(uiDialog), "New Role",
                'has correct title');

            let fields = DialogTesting.getVisibleFields(dialog);
            assert.strictEqual(1, fields.length,
                'has 1 field');

            var formTesting = new FormTesting(assert);

            var rolename = fields.eq(0);

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