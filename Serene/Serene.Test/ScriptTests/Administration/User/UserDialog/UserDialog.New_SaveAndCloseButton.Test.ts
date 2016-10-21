namespace Serene.Administration.Test {
    QUnit.module('Serene.Administration');
    
    QUnit.test('UserDialog New Entity, Save and Close Button', function (assert) {
        let done = assert.async();
        let dialog = new UserDialog();
        let uiDialog = dialog.element.closest(".ui-dialog");

        dialog.loadNewAndOpenDialog();
        try {
            assert.ok(uiDialog.is(":visible"),
                'open a new entity dialog');

            assert.strictEqual(DialogTesting.getDialogTitle(uiDialog), "New User",
                'has correct title');

            let fields = DialogTesting.getVisibleFields(dialog);
            assert.strictEqual(7, fields.length,
                'has 7 fields');

            var formTesting = new FormTesting(assert);

            var username = fields.eq(0);
            var displayName = fields.eq(1);
            var email = fields.eq(2);
            var password = fields.eq(4);
            var confirm = fields.eq(5);
            var source = fields.eq(6);

            formTesting.setValue(username, 'ABC  ');
            formTesting.setValue(displayName, 'DEF');
            formTesting.setValue(email, 'ghi@jkl.com');
            formTesting.setValue(password, '1234567');
            formTesting.setValue(confirm, '1234567');

            var datachangeTriggers = 0;
            dialog.element.on('ondatachange', function () {
                datachangeTriggers++;
            });

            let ajax = new ServiceTesting.FakeAjax();
            var createCalls = 0;
            ajax.addServiceHandler("~/services/Administration/User/Create", s => {
                createCalls++;
                assert.deepEqual(s.request, {
                        Entity: <UserRow>{
                            Username: 'ABC  ',
                            DisplayName: 'DEF',
                            Email: 'ghi@jkl.com',
                            Password: '1234567',
                            UserImage: null
                        }
                    },
                    'save request');

                var retrieveCalls = 0;
                ajax.addServiceHandler("~/services/Administration/User/Retrieve", s => {
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