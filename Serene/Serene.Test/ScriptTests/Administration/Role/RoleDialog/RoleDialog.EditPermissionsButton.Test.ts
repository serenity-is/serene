namespace Serene.Administration.Test {
    QUnit.module('Serene.Administration');

    QUnit.test('RoleDialog Edit Permissions Button', function (assert) {
        let done = assert.async();

        let dialog = new RoleDialog();

        dialog.loadEntityAndOpenDialog(<RoleRow>{
            RoleId: 789,
            RoleName: 'some.thing',
        });

        try {
            let uiDialog = dialog.element.closest(".ui-dialog");

            assert.ok(uiDialog.is(":visible"),
                'open edit entity dialog');

            let ajax = new ServiceTesting.FakeAjax();
            var rolePermissionListCalls = 0;
            ajax.addServiceHandler("~/services/Administration/RolePermission/List", s => {
                rolePermissionListCalls++;
                assert.deepEqual(s.request, { RoleID: 789, Module: null, Submodule: null },
                    'role permission list request');
                return { "Entities": [], "TotalCount": 0, "Skip": 0, "Take": 0 };
            });

            Q.ScriptData.set('RemoteData.Administration.PermissionKeys', { "Entities": ["A", "B", "C"], "TotalCount": 0, "Skip": 0, "Take": 0 });
            Q.ScriptData.set('RemoteData.Administration.ImplicitPermissions', { });

            DialogTesting.clickButton(dialog, '.edit-permissions-button');

            window.setTimeout(function () {
                try {
                    var permissionDialog = $('.ui-dialog:visible').last();
                    assert.ok(permissionDialog.hasClass('s-Administration-RolePermissionDialog'),
                        'role permissions dialog is shown on edit permissions button click');

                    assert.equal(DialogTesting.getDialogTitle(permissionDialog),
                        'Edit Role Permissions (some.thing)',
                        'dialog title');

                    assert.equal(1, rolePermissionListCalls,
                        'RolePermission/List should be called once');

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