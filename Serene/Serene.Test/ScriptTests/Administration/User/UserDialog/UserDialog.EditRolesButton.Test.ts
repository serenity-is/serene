namespace Serene.Administration.Test {
    QUnit.module('Serene.Administration');

    QUnit.test('UserDialog Edit Roles Button', function (assert) {
        let done = assert.async();
        let dialog = new UserDialog();

        dialog.loadEntityAndOpenDialog(<UserRow>{
            UserId: 789,
            Username: 'some.thing',
            DisplayName: 'Some Thing',
            Email: 'some_thing@somedomain.com',
            Source: 'some'
        });

        try {
            let uiDialog = dialog.element.closest(".ui-dialog");

            assert.ok(uiDialog.is(":visible"),
                'open edit entity dialog');

            Q.ScriptData.set('Lookup.Administration.Role',
                new Q.Lookup({
                    idField: 'RoleId',
                    textField: 'RoleName'
                }, [{
                    RoleId: 13579,
                    RoleName: 'SomeRole'
                }, {
                    RoleId: 24680,
                    RoleName: 'OtherRole'
                }]));

            let ajax = new ServiceTesting.FakeAjax();
            var userRoleListCalls = 0;
            ajax.addServiceHandler("~/services/Administration/UserRole/List", s => {
                userRoleListCalls++;
                assert.deepEqual(s.request, { UserID: 789 });
                return { "Entities": [13579], "TotalCount": 0, "Skip": 0, "Take": 0 };
            });
                    
            DialogTesting.clickButton(dialog, '.edit-roles-button');
            window.setTimeout(function () {
                try {
                    var roleDialog = $('.ui-dialog:visible').last()
                    assert.ok(roleDialog.hasClass('s-Administration-UserRoleDialog'),
                        'user roles dialog is shown on edit roles button click');

                    assert.equal(DialogTesting.getDialogTitle(roleDialog),
                        'Edit User Roles (some.thing)');
                    roleDialog.find('.ui-dialog-content').dialog('close');

                    assert.equal(1, userRoleListCalls,
                        'user role list should be called once');
                }
                finally {
                    ajax.dispose();
                    Q.ScriptData.set('Lookup.Administration.Role', null);
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