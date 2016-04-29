namespace Serene.Administration.Test {
    QUnit.module('Serene.Administration');

    QUnit.test('UserDialog Edit Permissions Button', function (assert) {
        let done = assert.async();

        let dialog = new UserDialog();
        let uiDialog = dialog.element.closest(".ui-dialog");

        dialog.loadEntityAndOpenDialog(<UserRow>{
            UserId: 789,
            Username: 'some.thing',
            DisplayName: 'Some Thing',
            Email: 'some_thing@somedomain.com',
            Source: 'some'
        });

        try {

            assert.ok(uiDialog.is(":visible"),
                'open edit entity dialog');

            let ajax = new ServiceTesting.FakeAjax();
            var userPermissionListCalled = 0;
            ajax.addServiceHandler("~/services/Administration/UserPermission/List", s => {
                userPermissionListCalled++;
                assert.deepEqual(s.request, { UserID: 789, Module: null, Submodule: null },
                    'user permission list request');
                return { "Entities": [], "TotalCount": 0, "Skip": 0, "Take": 0 };
            });

            var listRolePermissionsCalled = 0;
            ajax.addServiceHandler("~/services/Administration/UserPermission/ListRolePermissions", s => {
                listRolePermissionsCalled++;
                assert.deepEqual(s.request, { UserID: 789, Module: null, Submodule: null },
                    'list role permissions request');
                return { "Entities": [], "TotalCount": 0, "Skip": 0, "Take": 0 };
            });

            Q.ScriptData.set('RemoteData.Administration.PermissionKeys', { "Entities": ["A", "B", "C"], "TotalCount": 0, "Skip": 0, "Take": 0 });

            DialogTesting.clickButton(dialog, '.edit-permissions-button');

            window.setTimeout(function () {
                try {
                    var permissionDialog = $('.ui-dialog:visible').last();
                    assert.ok(permissionDialog.hasClass('s-Administration-UserPermissionDialog'),
                        'user permissions dialog is shown on edit permissions button click');

                    assert.equal(DialogTesting.getDialogTitle(permissionDialog),
                        'Edit User Permissions (some.thing)',
                        'dialog title');

                    assert.equal(1, userPermissionListCalled,
                        'UserPermission/List should be called once');

                    assert.equal(1, listRolePermissionsCalled,
                        'UserPermission/ListRolePermissions should be called once');

                    permissionDialog.find('.ui-dialog-content').dialog('close');
                }
                finally {
                    Q.ScriptData.set('RemoteData.Administration.PermissionKeys', null);
                    ajax.dispose();
                    dialog.dialogClose();
                    done();
                }
            }, 0);
        }
        catch (e) {
            dialog.dialogClose();
            throw e;
        }
    });
}