var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var Test;
        (function (Test) {
            QUnit.module('Serene.Administration');
            QUnit.test('UserDialog Edit Permissions Button', function (assert) {
                var done = assert.async();
                var dialog = new Administration.UserDialog();
                var uiDialog = dialog.element.closest(".ui-dialog");
                dialog.loadEntityAndOpenDialog({
                    UserId: 789,
                    Username: 'some.thing',
                    DisplayName: 'Some Thing',
                    Email: 'some_thing@somedomain.com',
                    Source: 'some'
                });
                try {
                    assert.ok(uiDialog.is(":visible"), 'open edit entity dialog');
                    var ajax_1 = new Serene.ServiceTesting.FakeAjax();
                    var userPermissionListCalls = 0;
                    ajax_1.addServiceHandler("~/services/Administration/UserPermission/List", function (s) {
                        userPermissionListCalls++;
                        assert.deepEqual(s.request, { UserID: 789, Module: null, Submodule: null }, 'user permission list request');
                        return { "Entities": [], "TotalCount": 0, "Skip": 0, "Take": 0 };
                    });
                    var listRolePermissionsCalls = 0;
                    ajax_1.addServiceHandler("~/services/Administration/UserPermission/ListRolePermissions", function (s) {
                        listRolePermissionsCalls++;
                        assert.deepEqual(s.request, { UserID: 789, Module: null, Submodule: null }, 'list role permissions request');
                        return { "Entities": [], "TotalCount": 0, "Skip": 0, "Take": 0 };
                    });
                    Q.ScriptData.set('RemoteData.Administration.PermissionKeys', { "Entities": ["A", "B", "C"], "TotalCount": 0, "Skip": 0, "Take": 0 });
                    Serene.DialogTesting.clickButton(dialog, '.edit-permissions-button');
                    window.setTimeout(function () {
                        try {
                            var permissionDialog = $('.ui-dialog:visible').last();
                            assert.ok(permissionDialog.hasClass('s-Administration-UserPermissionDialog'), 'user permissions dialog is shown on edit permissions button click');
                            assert.equal(Serene.DialogTesting.getDialogTitle(permissionDialog), 'Edit User Permissions (some.thing)', 'dialog title');
                            assert.equal(1, userPermissionListCalls, 'UserPermission/List should be called once');
                            assert.equal(1, listRolePermissionsCalls, 'UserPermission/ListRolePermissions should be called once');
                            permissionDialog.find('.ui-dialog-content').dialog('close');
                        }
                        finally {
                            Q.ScriptData.set('RemoteData.Administration.PermissionKeys', null);
                            ajax_1.dispose();
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
        })(Test = Administration.Test || (Administration.Test = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var Test;
        (function (Test) {
            QUnit.module('Serene.Administration');
            QUnit.test('UserDialog Edit Roles Button', function (assert) {
                var done = assert.async();
                var dialog = new Administration.UserDialog();
                var uiDialog = dialog.element.closest(".ui-dialog");
                dialog.loadEntityAndOpenDialog({
                    UserId: 789,
                    Username: 'some.thing',
                    DisplayName: 'Some Thing',
                    Email: 'some_thing@somedomain.com',
                    Source: 'some'
                });
                try {
                    assert.ok(uiDialog.is(":visible"), 'open edit entity dialog');
                    Q.ScriptData.set('Lookup.Administration.Role', new Q.Lookup({
                        idField: 'RoleId',
                        textField: 'RoleName'
                    }, [{
                            RoleId: 13579,
                            RoleName: 'SomeRole'
                        }, {
                            RoleId: 24680,
                            RoleName: 'OtherRole'
                        }]));
                    var ajax_2 = new Serene.ServiceTesting.FakeAjax();
                    var userRoleListCalls = 0;
                    ajax_2.addServiceHandler("~/services/Administration/UserRole/List", function (s) {
                        userRoleListCalls++;
                        assert.deepEqual(s.request, { UserID: 789 });
                        return { "Entities": [13579], "TotalCount": 0, "Skip": 0, "Take": 0 };
                    });
                    Serene.DialogTesting.clickButton(dialog, '.edit-roles-button');
                    window.setTimeout(function () {
                        try {
                            var roleDialog = $('.ui-dialog:visible').last();
                            assert.ok(roleDialog.hasClass('s-Administration-UserRoleDialog'), 'user roles dialog is shown on edit roles button click');
                            assert.equal(Serene.DialogTesting.getDialogTitle(roleDialog), 'Edit User Roles (some.thing)');
                            roleDialog.find('.ui-dialog-content').dialog('close');
                            assert.equal(1, userRoleListCalls, 'user role list should be called once');
                        }
                        finally {
                            ajax_2.dispose();
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
        })(Test = Administration.Test || (Administration.Test = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var Test;
        (function (Test) {
            QUnit.module('Serene.Administration');
            QUnit.test('UserDialog Edit LoadById, Apply Changes Button', function (assert) {
                var asyncDone = assert.async();
                var dialog = new Administration.UserDialog();
                var uiDialog = dialog.element.closest(".ui-dialog");
                var ajax = new Serene.ServiceTesting.FakeAjax();
                var userRetrieveCalled = 0;
                ajax.addServiceHandler("~/services/Administration/User/Retrieve", function (s) {
                    userRetrieveCalled++;
                    assert.deepEqual(s.request, { EntityId: 789 });
                    dialog.element.on('dialogopen', function () {
                        window.setTimeout(function () {
                            assert.ok(uiDialog.is(":visible"), 'open edit entity dialog');
                            assert.strictEqual(Serene.DialogTesting.getDialogTitle(uiDialog), 'Edit User (some.thing)', 'has correct title');
                            var buttons = Serene.DialogTesting.getVisibleButtons(dialog);
                            assert.strictEqual(5, buttons.length, 'has 5 visible buttons');
                            Serene.ButtonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
                            Serene.ButtonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
                            Serene.ButtonTesting.assertEnabled(buttons.eq(2), 'delete-button');
                            Serene.ButtonTesting.assertEnabled(buttons.eq(3), 'edit-roles-button');
                            Serene.ButtonTesting.assertEnabled(buttons.eq(4), 'edit-permissions-button');
                            var fields = Serene.DialogTesting.getVisibleFields(dialog);
                            assert.strictEqual(6, fields.length, 'has 6 fields');
                            var username = fields.eq(0);
                            Serene.FormTesting.assertTitle(username, 'Username');
                            Serene.FormTesting.assertRequired(username);
                            Serene.FormTesting.assertEditable(username);
                            Serene.FormTesting.assertHasClass(username, 's-StringEditor');
                            Serene.FormTesting.assertMaxLength(username, 100);
                            Serene.FormTesting.assertValue(username, 'some.thing');
                            var displayName = fields.eq(1);
                            Serene.FormTesting.assertTitle(displayName, 'Display Name');
                            Serene.FormTesting.assertRequired(displayName);
                            Serene.FormTesting.assertEditable(displayName);
                            Serene.FormTesting.assertHasClass(displayName, 's-StringEditor');
                            Serene.FormTesting.assertMaxLength(displayName, 100);
                            Serene.FormTesting.assertValue(displayName, 'Some Thing');
                            var email = fields.eq(2);
                            Serene.FormTesting.assertTitle(email, 'Email');
                            Serene.FormTesting.assertNotRequired(email);
                            Serene.FormTesting.assertEditable(email);
                            Serene.FormTesting.assertHasClass(email, 'emailuser');
                            Serene.FormTesting.assertMaxLength(email, 100);
                            Serene.FormTesting.assertValue(email, 'some_thing@somedomain.com');
                            var emaildomain = email.find('.emaildomain');
                            assert.ok(Serene.EditorTesting.isEditable(emaildomain), 'email domain is editable');
                            var password = fields.eq(3);
                            Serene.FormTesting.assertTitle(password, 'Password');
                            Serene.FormTesting.assertNotRequired(password);
                            Serene.FormTesting.assertEditable(password);
                            Serene.FormTesting.assertHasClass(password, 's-PasswordEditor');
                            Serene.FormTesting.assertEditorIs(password, 'input[type=password]');
                            Serene.FormTesting.assertMaxLength(password, 50);
                            Serene.FormTesting.assertValue(password, '');
                            var confirm = fields.eq(4);
                            Serene.FormTesting.assertTitle(confirm, 'Confirm Password');
                            Serene.FormTesting.assertNotRequired(confirm);
                            Serene.FormTesting.assertEditable(confirm);
                            Serene.FormTesting.assertHasClass(confirm, 's-PasswordEditor');
                            Serene.FormTesting.assertEditorIs(confirm, 'input[type=password]');
                            Serene.FormTesting.assertMaxLength(confirm, 50);
                            Serene.FormTesting.assertValue(confirm, '');
                            var source = fields.eq(5);
                            Serene.FormTesting.assertTitle(source, 'Source');
                            Serene.FormTesting.assertNotRequired(source);
                            Serene.FormTesting.assertNotEditable(source);
                            Serene.FormTesting.assertHasClass(source, 's-StringEditor');
                            Serene.FormTesting.assertMaxLength(source, 4);
                            Serene.FormTesting.assertValue(source, 'some');
                            Serene.FormTesting.setValue(username, 'ABC  ');
                            Serene.FormTesting.setValue(displayName, 'DEF');
                            Serene.FormTesting.setValue(email, 'ghi@jkl.com');
                            Serene.FormTesting.setValue(password, '1234567');
                            Serene.FormTesting.setValue(confirm, '1234567');
                            var datachangeTriggers = 0;
                            dialog.element.on('ondatachange', function () {
                                datachangeTriggers++;
                            });
                            var updateCalls = 0;
                            ajax.addServiceHandler("~/services/Administration/User/Update", function (s) {
                                updateCalls++;
                                assert.deepEqual(s.request, {
                                    EntityId: 789,
                                    Entity: {
                                        UserId: 789,
                                        Username: 'ABC  ',
                                        DisplayName: 'DEF',
                                        Email: 'ghi@jkl.com',
                                        Password: '1234567'
                                    }
                                }, 'save request');
                                var retrieveCalls = 0;
                                ajax.addServiceHandler("~/services/Administration/User/Retrieve", function (s) {
                                    retrieveCalls++;
                                    assert.deepEqual(s.request, { EntityId: 789 }, 'retrieve request');
                                    setTimeout(function () {
                                        try {
                                            assert.strictEqual(updateCalls, 1, 'update should be called once');
                                            assert.strictEqual(retrieveCalls, 1, "retrieve should be called once");
                                            assert.strictEqual(datachangeTriggers, 1, "data change trigger should be called once");
                                            assert.ok(uiDialog.is(":visible"), 'dialog should stay open');
                                            Serene.FormTesting.assertValue(username, 'ABC');
                                            Serene.FormTesting.assertValue(displayName, 'DEF');
                                            Serene.FormTesting.assertValue(email, 'ghi@jkl.com');
                                            Serene.FormTesting.assertValue(password, '');
                                            Serene.FormTesting.assertValue(confirm, '');
                                            Serene.FormTesting.assertValue(source, 'some');
                                        }
                                        finally {
                                            toastr.remove();
                                            ajax.dispose();
                                            dialog.dialogClose();
                                            asyncDone();
                                        }
                                    }, 0);
                                    return {
                                        Entity: {
                                            UserId: 789,
                                            Username: 'ABC',
                                            DisplayName: 'DEF',
                                            Email: 'ghi@jkl.com',
                                            Source: 'some'
                                        }
                                    };
                                });
                                return {
                                    EntityId: 789
                                };
                            });
                            Serene.DialogTesting.clickButton(dialog, ".apply-changes-button");
                        }, 0);
                    });
                    return {
                        "Entity": {
                            UserId: 789,
                            Username: 'some.thing',
                            DisplayName: 'Some Thing',
                            Email: 'some_thing@somedomain.com',
                            Source: 'some'
                        }
                    };
                });
                try {
                    dialog.loadByIdAndOpenDialog(789);
                }
                catch (e) {
                    dialog.dialogClose();
                    throw e;
                }
            });
        })(Test = Administration.Test || (Administration.Test = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var Test;
        (function (Test) {
            QUnit.module('Serene.Administration');
            QUnit.test('UserDialog Edit LoadById, Delete Button', function (assert) {
                var asyncDone = assert.async();
                var dialog = new Administration.UserDialog();
                var uiDialog = dialog.element.closest(".ui-dialog");
                var ajax = new Serene.ServiceTesting.FakeAjax();
                var userRetrieveCalled = 0;
                ajax.addServiceHandler("~/services/Administration/User/Retrieve", function (s) {
                    userRetrieveCalled++;
                    assert.deepEqual(s.request, { EntityId: 789 });
                    dialog.element.on('dialogopen', function () {
                        window.setTimeout(function () {
                            assert.ok(uiDialog.is(":visible"), 'open edit entity dialog');
                            assert.strictEqual(Serene.DialogTesting.getDialogTitle(uiDialog), 'Edit User (some.thing)', 'has correct title');
                            var buttons = Serene.DialogTesting.getVisibleButtons(dialog);
                            assert.strictEqual(5, buttons.length, 'has 5 visible buttons');
                            Serene.ButtonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
                            Serene.ButtonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
                            Serene.ButtonTesting.assertEnabled(buttons.eq(2), 'delete-button');
                            Serene.ButtonTesting.assertEnabled(buttons.eq(3), 'edit-roles-button');
                            Serene.ButtonTesting.assertEnabled(buttons.eq(4), 'edit-permissions-button');
                            var fields = Serene.DialogTesting.getVisibleFields(dialog);
                            assert.strictEqual(6, fields.length, 'has 6 fields');
                            var username = fields.eq(0);
                            Serene.FormTesting.assertTitle(username, 'Username');
                            Serene.FormTesting.assertRequired(username);
                            Serene.FormTesting.assertEditable(username);
                            Serene.FormTesting.assertHasClass(username, 's-StringEditor');
                            Serene.FormTesting.assertMaxLength(username, 100);
                            Serene.FormTesting.assertValue(username, 'some.thing');
                            var displayName = fields.eq(1);
                            Serene.FormTesting.assertTitle(displayName, 'Display Name');
                            Serene.FormTesting.assertRequired(displayName);
                            Serene.FormTesting.assertEditable(displayName);
                            Serene.FormTesting.assertHasClass(displayName, 's-StringEditor');
                            Serene.FormTesting.assertMaxLength(displayName, 100);
                            Serene.FormTesting.assertValue(displayName, 'Some Thing');
                            var email = fields.eq(2);
                            Serene.FormTesting.assertTitle(email, 'Email');
                            Serene.FormTesting.assertNotRequired(email);
                            Serene.FormTesting.assertEditable(email);
                            Serene.FormTesting.assertHasClass(email, 'emailuser');
                            Serene.FormTesting.assertMaxLength(email, 100);
                            Serene.FormTesting.assertValue(email, 'some_thing@somedomain.com');
                            var emaildomain = email.find('.emaildomain');
                            assert.ok(Serene.EditorTesting.isEditable(emaildomain), 'email domain is editable');
                            var password = fields.eq(3);
                            Serene.FormTesting.assertTitle(password, 'Password');
                            Serene.FormTesting.assertNotRequired(password);
                            Serene.FormTesting.assertEditable(password);
                            Serene.FormTesting.assertHasClass(password, 's-PasswordEditor');
                            Serene.FormTesting.assertEditorIs(password, 'input[type=password]');
                            Serene.FormTesting.assertMaxLength(password, 50);
                            Serene.FormTesting.assertValue(password, '');
                            var confirm = fields.eq(4);
                            Serene.FormTesting.assertTitle(confirm, 'Confirm Password');
                            Serene.FormTesting.assertNotRequired(confirm);
                            Serene.FormTesting.assertEditable(confirm);
                            Serene.FormTesting.assertHasClass(confirm, 's-PasswordEditor');
                            Serene.FormTesting.assertEditorIs(confirm, 'input[type=password]');
                            Serene.FormTesting.assertMaxLength(confirm, 50);
                            Serene.FormTesting.assertValue(confirm, '');
                            var source = fields.eq(5);
                            Serene.FormTesting.assertTitle(source, 'Source');
                            Serene.FormTesting.assertNotRequired(source);
                            Serene.FormTesting.assertNotEditable(source);
                            Serene.FormTesting.assertHasClass(source, 's-StringEditor');
                            Serene.FormTesting.assertMaxLength(source, 4);
                            Serene.FormTesting.assertValue(source, 'some');
                            Serene.FormTesting.setValue(username, 'ABC  ');
                            Serene.FormTesting.setValue(displayName, 'DEF');
                            Serene.FormTesting.setValue(email, 'ghi@jkl.com');
                            Serene.FormTesting.setValue(password, '1234567');
                            Serene.FormTesting.setValue(confirm, '1234567');
                            var datachangeTriggers = 0;
                            dialog.element.on('ondatachange', function () {
                                datachangeTriggers++;
                            });
                            var deleteCalls = 0;
                            ajax.addServiceHandler("~/services/Administration/User/Delete", function (s) {
                                deleteCalls++;
                                assert.deepEqual(s.request, {
                                    EntityId: 789
                                }, 'delete request');
                                var retrieveCalls = 0;
                                ajax.addServiceHandler("~/services/Administration/User/Retrieve", function (s) {
                                    throw new Error("retrieve shouldn't be called!");
                                });
                                setTimeout(function () {
                                    try {
                                        assert.strictEqual(deleteCalls, 1, 'update should be called once');
                                        assert.strictEqual(retrieveCalls, 0, "retrieve shouldn't be called");
                                        assert.strictEqual(datachangeTriggers, 1, "data change trigger should be called once");
                                        assert.ok(!uiDialog.is(":visible"), 'dialog should be closed');
                                    }
                                    finally {
                                        toastr.remove();
                                        ajax.dispose();
                                        dialog.dialogClose();
                                        asyncDone();
                                    }
                                }, 0);
                                return {};
                            });
                            Serene.DialogTesting.clickButton(dialog, ".delete-button");
                            var confirmDialog = $('.s-ConfirmDialog');
                            assert.equal(confirmDialog.length, 1, 'confirm dialog should be shown');
                            confirmDialog.find('.ui-dialog-buttonpane .ui-button').first().click();
                        }, 0);
                    });
                    return {
                        "Entity": {
                            UserId: 789,
                            Username: 'some.thing',
                            DisplayName: 'Some Thing',
                            Email: 'some_thing@somedomain.com',
                            Source: 'some'
                        }
                    };
                });
                try {
                    dialog.loadByIdAndOpenDialog(789);
                }
                catch (e) {
                    dialog.dialogClose();
                    throw e;
                }
            });
        })(Test = Administration.Test || (Administration.Test = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var Test;
        (function (Test) {
            QUnit.module('Serene.Administration');
            QUnit.test('UserDialog Edit LoadById, Save and Close Button', function (assert) {
                var asyncDone = assert.async();
                var dialog = new Administration.UserDialog();
                var uiDialog = dialog.element.closest(".ui-dialog");
                var ajax = new Serene.ServiceTesting.FakeAjax();
                var userRetrieveCalled = 0;
                ajax.addServiceHandler("~/services/Administration/User/Retrieve", function (s) {
                    userRetrieveCalled++;
                    assert.deepEqual(s.request, { EntityId: 789 });
                    dialog.element.on('dialogopen', function () {
                        window.setTimeout(function () {
                            assert.ok(uiDialog.is(":visible"), 'open edit entity dialog');
                            assert.strictEqual(Serene.DialogTesting.getDialogTitle(uiDialog), 'Edit User (some.thing)', 'has correct title');
                            var buttons = Serene.DialogTesting.getVisibleButtons(dialog);
                            assert.strictEqual(5, buttons.length, 'has 5 visible buttons');
                            Serene.ButtonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
                            Serene.ButtonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
                            Serene.ButtonTesting.assertEnabled(buttons.eq(2), 'delete-button');
                            Serene.ButtonTesting.assertEnabled(buttons.eq(3), 'edit-roles-button');
                            Serene.ButtonTesting.assertEnabled(buttons.eq(4), 'edit-permissions-button');
                            var fields = Serene.DialogTesting.getVisibleFields(dialog);
                            assert.strictEqual(6, fields.length, 'has 6 fields');
                            var username = fields.eq(0);
                            Serene.FormTesting.assertTitle(username, 'Username');
                            Serene.FormTesting.assertRequired(username);
                            Serene.FormTesting.assertEditable(username);
                            Serene.FormTesting.assertHasClass(username, 's-StringEditor');
                            Serene.FormTesting.assertMaxLength(username, 100);
                            Serene.FormTesting.assertValue(username, 'some.thing');
                            var displayName = fields.eq(1);
                            Serene.FormTesting.assertTitle(displayName, 'Display Name');
                            Serene.FormTesting.assertRequired(displayName);
                            Serene.FormTesting.assertEditable(displayName);
                            Serene.FormTesting.assertHasClass(displayName, 's-StringEditor');
                            Serene.FormTesting.assertMaxLength(displayName, 100);
                            Serene.FormTesting.assertValue(displayName, 'Some Thing');
                            var email = fields.eq(2);
                            Serene.FormTesting.assertTitle(email, 'Email');
                            Serene.FormTesting.assertNotRequired(email);
                            Serene.FormTesting.assertEditable(email);
                            Serene.FormTesting.assertHasClass(email, 'emailuser');
                            Serene.FormTesting.assertMaxLength(email, 100);
                            Serene.FormTesting.assertValue(email, 'some_thing@somedomain.com');
                            var emaildomain = email.find('.emaildomain');
                            assert.ok(Serene.EditorTesting.isEditable(emaildomain), 'email domain is editable');
                            var password = fields.eq(3);
                            Serene.FormTesting.assertTitle(password, 'Password');
                            Serene.FormTesting.assertNotRequired(password);
                            Serene.FormTesting.assertEditable(password);
                            Serene.FormTesting.assertHasClass(password, 's-PasswordEditor');
                            Serene.FormTesting.assertEditorIs(password, 'input[type=password]');
                            Serene.FormTesting.assertMaxLength(password, 50);
                            Serene.FormTesting.assertValue(password, '');
                            var confirm = fields.eq(4);
                            Serene.FormTesting.assertTitle(confirm, 'Confirm Password');
                            Serene.FormTesting.assertNotRequired(confirm);
                            Serene.FormTesting.assertEditable(confirm);
                            Serene.FormTesting.assertHasClass(confirm, 's-PasswordEditor');
                            Serene.FormTesting.assertEditorIs(confirm, 'input[type=password]');
                            Serene.FormTesting.assertMaxLength(confirm, 50);
                            Serene.FormTesting.assertValue(confirm, '');
                            var source = fields.eq(5);
                            Serene.FormTesting.assertTitle(source, 'Source');
                            Serene.FormTesting.assertNotRequired(source);
                            Serene.FormTesting.assertNotEditable(source);
                            Serene.FormTesting.assertHasClass(source, 's-StringEditor');
                            Serene.FormTesting.assertMaxLength(source, 4);
                            Serene.FormTesting.assertValue(source, 'some');
                            Serene.FormTesting.setValue(username, 'ABC  ');
                            Serene.FormTesting.setValue(displayName, 'DEF');
                            Serene.FormTesting.setValue(email, 'ghi@jkl.com');
                            Serene.FormTesting.setValue(password, '1234567');
                            Serene.FormTesting.setValue(confirm, '1234567');
                            var datachangeTriggers = 0;
                            dialog.element.on('ondatachange', function () {
                                datachangeTriggers++;
                            });
                            var updateCalls = 0;
                            ajax.addServiceHandler("~/services/Administration/User/Update", function (s) {
                                updateCalls++;
                                assert.deepEqual(s.request, {
                                    EntityId: 789,
                                    Entity: {
                                        UserId: 789,
                                        Username: 'ABC  ',
                                        DisplayName: 'DEF',
                                        Email: 'ghi@jkl.com',
                                        Password: '1234567'
                                    }
                                }, 'save request');
                                var retrieveCalls = 0;
                                ajax.addServiceHandler("~/services/Administration/User/Retrieve", function (s) {
                                    throw new Error("retrieve shouldn't be called!");
                                });
                                setTimeout(function () {
                                    try {
                                        assert.strictEqual(updateCalls, 1, 'update should be called once');
                                        assert.strictEqual(retrieveCalls, 0, "retrieve shouldn't be called");
                                        assert.strictEqual(datachangeTriggers, 1, "data change trigger should be called once");
                                        assert.ok(!uiDialog.is(":visible"), 'dialog should be closed');
                                    }
                                    finally {
                                        toastr.remove();
                                        ajax.dispose();
                                        dialog.dialogClose();
                                        asyncDone();
                                    }
                                }, 0);
                                return {
                                    EntityId: 789
                                };
                            });
                            Serene.DialogTesting.clickButton(dialog, ".save-and-close-button");
                        }, 0);
                    });
                    return {
                        "Entity": {
                            UserId: 789,
                            Username: 'some.thing',
                            DisplayName: 'Some Thing',
                            Email: 'some_thing@somedomain.com',
                            Source: 'some'
                        }
                    };
                });
                try {
                    dialog.loadByIdAndOpenDialog(789);
                }
                catch (e) {
                    dialog.dialogClose();
                    throw e;
                }
            });
        })(Test = Administration.Test || (Administration.Test = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var Test;
        (function (Test) {
            QUnit.module('Serene.Administration');
            QUnit.test('UserDialog Edit With LoadEntity', function (assert) {
                var dialog = new Administration.UserDialog();
                var uiDialog = dialog.element.closest(".ui-dialog");
                dialog.loadEntityAndOpenDialog({
                    UserId: 789,
                    Username: 'some.thing',
                    DisplayName: 'Some Thing',
                    Email: 'some_thing@somedomain.com',
                    Source: 'some'
                });
                try {
                    assert.ok(uiDialog.is(":visible"), 'open edit entity dialog');
                    assert.strictEqual(Serene.DialogTesting.getDialogTitle(uiDialog), 'Edit User (some.thing)', 'has correct title');
                    var buttons = Serene.DialogTesting.getVisibleButtons(dialog);
                    assert.strictEqual(5, buttons.length, 'has 5 visible buttons');
                    Serene.ButtonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
                    Serene.ButtonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
                    Serene.ButtonTesting.assertEnabled(buttons.eq(2), 'delete-button');
                    Serene.ButtonTesting.assertEnabled(buttons.eq(3), 'edit-roles-button');
                    Serene.ButtonTesting.assertEnabled(buttons.eq(4), 'edit-permissions-button');
                    var fields = Serene.DialogTesting.getVisibleFields(dialog);
                    assert.strictEqual(6, fields.length, 'has 6 fields');
                    var username = fields.eq(0);
                    Serene.FormTesting.assertTitle(username, 'Username');
                    Serene.FormTesting.assertRequired(username);
                    Serene.FormTesting.assertEditable(username);
                    Serene.FormTesting.assertHasClass(username, 's-StringEditor');
                    Serene.FormTesting.assertMaxLength(username, 100);
                    Serene.FormTesting.assertValue(username, 'some.thing');
                    var displayName = fields.eq(1);
                    Serene.FormTesting.assertTitle(displayName, 'Display Name');
                    Serene.FormTesting.assertRequired(displayName);
                    Serene.FormTesting.assertEditable(displayName);
                    Serene.FormTesting.assertHasClass(displayName, 's-StringEditor');
                    Serene.FormTesting.assertMaxLength(displayName, 100);
                    Serene.FormTesting.assertValue(displayName, 'Some Thing');
                    var email = fields.eq(2);
                    Serene.FormTesting.assertTitle(email, 'Email');
                    Serene.FormTesting.assertNotRequired(email);
                    Serene.FormTesting.assertEditable(email);
                    Serene.FormTesting.assertHasClass(email, 'emailuser');
                    Serene.FormTesting.assertMaxLength(email, 100);
                    Serene.FormTesting.assertValue(email, 'some_thing@somedomain.com');
                    var emaildomain = email.find('.emaildomain');
                    assert.ok(Serene.EditorTesting.isEditable(emaildomain), 'email domain is editable');
                    var password = fields.eq(3);
                    Serene.FormTesting.assertTitle(password, 'Password');
                    Serene.FormTesting.assertNotRequired(password);
                    Serene.FormTesting.assertEditable(password);
                    Serene.FormTesting.assertHasClass(password, 's-PasswordEditor');
                    Serene.FormTesting.assertEditorIs(password, 'input[type=password]');
                    Serene.FormTesting.assertMaxLength(password, 50);
                    Serene.FormTesting.assertValue(password, '');
                    var confirm = fields.eq(4);
                    Serene.FormTesting.assertTitle(confirm, 'Confirm Password');
                    Serene.FormTesting.assertNotRequired(confirm);
                    Serene.FormTesting.assertEditable(confirm);
                    Serene.FormTesting.assertHasClass(confirm, 's-PasswordEditor');
                    Serene.FormTesting.assertEditorIs(confirm, 'input[type=password]');
                    Serene.FormTesting.assertMaxLength(confirm, 50);
                    Serene.FormTesting.assertValue(confirm, '');
                    var source = fields.eq(5);
                    Serene.FormTesting.assertTitle(source, 'Source');
                    Serene.FormTesting.assertNotRequired(source);
                    Serene.FormTesting.assertNotEditable(source);
                    Serene.FormTesting.assertHasClass(source, 's-StringEditor');
                    Serene.FormTesting.assertMaxLength(source, 4);
                    Serene.FormTesting.assertValue(source, 'some');
                }
                finally {
                    dialog.dialogClose();
                }
            });
        })(Test = Administration.Test || (Administration.Test = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var Test;
        (function (Test) {
            QUnit.module('Serene.Administration');
            QUnit.test('UserDialog General', function (assert) {
                assert.notEqual(null, new Administration.UserDialog(), 'create a new instance');
                var dialog = new Administration.UserDialog();
                assert.notEqual(null, dialog.element, 'has element');
                var uiDialog = dialog.element.closest('.ui-dialog');
                assert.equal(1, uiDialog.length, 'element under .ui-dialog');
                assert.ok(uiDialog.hasClass("s-Dialog"), 'has dialog css class');
                assert.ok(uiDialog.hasClass("s-UserDialog"), 'has classname css class');
                assert.ok(uiDialog.hasClass("s-Administration-UserDialog"), 'has module prefixed css class');
                assert.ok(!uiDialog.is(':visible'), 'initially invisible');
                dialog.dialogOpen();
                assert.ok(uiDialog.is(':visible'), 'visible after dialogOpen');
                dialog.dialogClose();
                assert.ok(!uiDialog.is(':visible'), 'hidden after dialogClose');
                dialog = new Administration.UserDialog();
                uiDialog = dialog.element.closest('.ui-dialog');
                dialog.loadNewAndOpenDialog();
                assert.ok(uiDialog.is(':visible'), 'open in new entity mode');
                dialog.dialogClose();
                assert.ok(!uiDialog.is(":visible"), 'close new entity dialog');
            });
        })(Test = Administration.Test || (Administration.Test = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var Test;
        (function (Test) {
            QUnit.module('Serene.Administration');
            QUnit.test('UserDialog New Entity, Apply Changes Button', function (assert) {
                var done = assert.async();
                var dialog = new Administration.UserDialog();
                var uiDialog = dialog.element.closest(".ui-dialog");
                dialog.loadNewAndOpenDialog();
                try {
                    assert.ok(uiDialog.is(":visible"), 'open a new entity dialog');
                    assert.strictEqual(Serene.DialogTesting.getDialogTitle(uiDialog), "New User", 'has correct title');
                    var buttons = Serene.DialogTesting.getVisibleButtons(dialog);
                    assert.strictEqual(4, buttons.length, 'has 4 visible buttons');
                    Serene.ButtonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
                    Serene.ButtonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
                    Serene.ButtonTesting.assertDisabled(buttons.eq(2), 'edit-roles-button');
                    Serene.ButtonTesting.assertDisabled(buttons.eq(3), 'edit-permissions-button');
                    var fields = Serene.DialogTesting.getVisibleFields(dialog);
                    assert.strictEqual(6, fields.length, 'has 6 fields');
                    var username = fields.eq(0);
                    Serene.FormTesting.assertTitle(username, 'Username');
                    Serene.FormTesting.assertRequired(username);
                    Serene.FormTesting.assertEditable(username);
                    Serene.FormTesting.assertHasClass(username, 's-StringEditor');
                    Serene.FormTesting.assertMaxLength(username, 100);
                    Serene.FormTesting.assertValue(username, '');
                    var displayName = fields.eq(1);
                    Serene.FormTesting.assertTitle(displayName, 'Display Name');
                    Serene.FormTesting.assertRequired(displayName);
                    Serene.FormTesting.assertEditable(displayName);
                    Serene.FormTesting.assertHasClass(displayName, 's-StringEditor');
                    Serene.FormTesting.assertMaxLength(displayName, 100);
                    Serene.FormTesting.assertValue(displayName, '');
                    var email = fields.eq(2);
                    Serene.FormTesting.assertTitle(email, 'Email');
                    Serene.FormTesting.assertNotRequired(email);
                    Serene.FormTesting.assertEditable(email);
                    Serene.FormTesting.assertHasClass(email, 'emailuser');
                    Serene.FormTesting.assertMaxLength(email, 100);
                    Serene.FormTesting.assertValue(email, '');
                    var emaildomain = email.find('.emaildomain');
                    assert.ok(Serene.EditorTesting.isEditable(emaildomain), 'email domain is editable');
                    var password = fields.eq(3);
                    Serene.FormTesting.assertTitle(password, 'Password');
                    Serene.FormTesting.assertRequired(password);
                    Serene.FormTesting.assertEditable(password);
                    Serene.FormTesting.assertHasClass(password, 's-PasswordEditor');
                    Serene.FormTesting.assertEditorIs(password, 'input[type=password]');
                    Serene.FormTesting.assertMaxLength(password, 50);
                    Serene.FormTesting.assertValue(password, '');
                    var confirm = fields.eq(4);
                    Serene.FormTesting.assertTitle(confirm, 'Confirm Password');
                    Serene.FormTesting.assertRequired(confirm);
                    Serene.FormTesting.assertEditable(confirm);
                    Serene.FormTesting.assertHasClass(confirm, 's-PasswordEditor');
                    Serene.FormTesting.assertEditorIs(confirm, 'input[type=password]');
                    Serene.FormTesting.assertMaxLength(confirm, 50);
                    Serene.FormTesting.assertValue(confirm, '');
                    var source = fields.eq(5);
                    Serene.FormTesting.assertTitle(source, 'Source');
                    Serene.FormTesting.assertNotRequired(source);
                    Serene.FormTesting.assertNotEditable(source);
                    Serene.FormTesting.assertHasClass(source, 's-StringEditor');
                    Serene.FormTesting.assertMaxLength(source, 4);
                    Serene.FormTesting.assertValue(source, 'site');
                    Serene.FormTesting.setValue(username, 'ABC  ');
                    Serene.FormTesting.setValue(displayName, 'DEF');
                    Serene.FormTesting.setValue(email, 'ghi@jkl.com');
                    Serene.FormTesting.setValue(password, '1234567');
                    Serene.FormTesting.setValue(confirm, '1234567');
                    var datachangeTriggers = 0;
                    dialog.element.on('ondatachange', function () {
                        datachangeTriggers++;
                    });
                    var ajax_3 = new Serene.ServiceTesting.FakeAjax();
                    var createCalls = 0;
                    ajax_3.addServiceHandler("~/services/Administration/User/Create", function (s) {
                        createCalls++;
                        assert.deepEqual(s.request, {
                            Entity: {
                                Username: 'ABC  ',
                                DisplayName: 'DEF',
                                Email: 'ghi@jkl.com',
                                Password: '1234567'
                            }
                        }, 'save request');
                        var retrieveCalls = 0;
                        ajax_3.addServiceHandler("~/services/Administration/User/Retrieve", function (s) {
                            retrieveCalls++;
                            assert.deepEqual(s.request, { EntityId: 9876 }, 'retrieve request');
                            setTimeout(function () {
                                try {
                                    assert.strictEqual(createCalls, 1, 'create should be called once');
                                    assert.strictEqual(retrieveCalls, 1, "retrieve should be called once");
                                    assert.strictEqual(datachangeTriggers, 1, "data change trigger should be called once");
                                    assert.ok(uiDialog.is(":visible"), 'dialog should stay open');
                                    Serene.FormTesting.assertValue(username, 'ABC');
                                    Serene.FormTesting.assertValue(displayName, 'DEF');
                                    Serene.FormTesting.assertValue(email, 'ghi@jkl.com');
                                    Serene.FormTesting.assertValue(password, '');
                                    Serene.FormTesting.assertValue(confirm, '');
                                    Serene.FormTesting.assertValue(source, 'some');
                                }
                                finally {
                                    toastr.remove();
                                    ajax_3.dispose();
                                    dialog.dialogClose();
                                    done();
                                }
                            }, 0);
                            return {
                                Entity: {
                                    UserId: 9876,
                                    Username: 'ABC',
                                    DisplayName: 'DEF',
                                    Email: 'ghi@jkl.com',
                                    Source: 'some'
                                }
                            };
                        });
                        return { EntityId: 9876 };
                    });
                    Serene.DialogTesting.clickButton(dialog, ".apply-changes-button");
                }
                catch (e) {
                    dialog.dialogClose();
                    throw e;
                }
            });
        })(Test = Administration.Test || (Administration.Test = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var Test;
        (function (Test) {
            QUnit.module('Serene.Administration');
            QUnit.test('UserDialog New Entity, Save and Close Button', function (assert) {
                var done = assert.async();
                var dialog = new Administration.UserDialog();
                var uiDialog = dialog.element.closest(".ui-dialog");
                dialog.loadNewAndOpenDialog();
                try {
                    assert.ok(uiDialog.is(":visible"), 'open a new entity dialog');
                    assert.strictEqual(Serene.DialogTesting.getDialogTitle(uiDialog), "New User", 'has correct title');
                    var buttons = Serene.DialogTesting.getVisibleButtons(dialog);
                    assert.strictEqual(4, buttons.length, 'has 4 visible buttons');
                    Serene.ButtonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
                    Serene.ButtonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
                    Serene.ButtonTesting.assertDisabled(buttons.eq(2), 'edit-roles-button');
                    Serene.ButtonTesting.assertDisabled(buttons.eq(3), 'edit-permissions-button');
                    var fields = Serene.DialogTesting.getVisibleFields(dialog);
                    assert.strictEqual(6, fields.length, 'has 6 fields');
                    var username = fields.eq(0);
                    Serene.FormTesting.assertTitle(username, 'Username');
                    Serene.FormTesting.assertRequired(username);
                    Serene.FormTesting.assertEditable(username);
                    Serene.FormTesting.assertHasClass(username, 's-StringEditor');
                    Serene.FormTesting.assertMaxLength(username, 100);
                    Serene.FormTesting.assertValue(username, '');
                    var displayName = fields.eq(1);
                    Serene.FormTesting.assertTitle(displayName, 'Display Name');
                    Serene.FormTesting.assertRequired(displayName);
                    Serene.FormTesting.assertEditable(displayName);
                    Serene.FormTesting.assertHasClass(displayName, 's-StringEditor');
                    Serene.FormTesting.assertMaxLength(displayName, 100);
                    Serene.FormTesting.assertValue(displayName, '');
                    var email = fields.eq(2);
                    Serene.FormTesting.assertTitle(email, 'Email');
                    Serene.FormTesting.assertNotRequired(email);
                    Serene.FormTesting.assertEditable(email);
                    Serene.FormTesting.assertHasClass(email, 'emailuser');
                    Serene.FormTesting.assertMaxLength(email, 100);
                    Serene.FormTesting.assertValue(email, '');
                    var emaildomain = email.find('.emaildomain');
                    assert.ok(Serene.EditorTesting.isEditable(emaildomain), 'email domain is editable');
                    var password = fields.eq(3);
                    Serene.FormTesting.assertTitle(password, 'Password');
                    Serene.FormTesting.assertRequired(password);
                    Serene.FormTesting.assertEditable(password);
                    Serene.FormTesting.assertHasClass(password, 's-PasswordEditor');
                    Serene.FormTesting.assertEditorIs(password, 'input[type=password]');
                    Serene.FormTesting.assertMaxLength(password, 50);
                    Serene.FormTesting.assertValue(password, '');
                    var confirm = fields.eq(4);
                    Serene.FormTesting.assertTitle(confirm, 'Confirm Password');
                    Serene.FormTesting.assertRequired(confirm);
                    Serene.FormTesting.assertEditable(confirm);
                    Serene.FormTesting.assertHasClass(confirm, 's-PasswordEditor');
                    Serene.FormTesting.assertEditorIs(confirm, 'input[type=password]');
                    Serene.FormTesting.assertMaxLength(confirm, 50);
                    Serene.FormTesting.assertValue(confirm, '');
                    var source = fields.eq(5);
                    Serene.FormTesting.assertTitle(source, 'Source');
                    Serene.FormTesting.assertNotRequired(source);
                    Serene.FormTesting.assertNotEditable(source);
                    Serene.FormTesting.assertHasClass(source, 's-StringEditor');
                    Serene.FormTesting.assertMaxLength(source, 4);
                    Serene.FormTesting.assertValue(source, 'site');
                    Serene.FormTesting.setValue(username, 'ABC  ');
                    Serene.FormTesting.setValue(displayName, 'DEF');
                    Serene.FormTesting.setValue(email, 'ghi@jkl.com');
                    Serene.FormTesting.setValue(password, '1234567');
                    Serene.FormTesting.setValue(confirm, '1234567');
                    var datachangeTriggers = 0;
                    dialog.element.on('ondatachange', function () {
                        datachangeTriggers++;
                    });
                    var ajax_4 = new Serene.ServiceTesting.FakeAjax();
                    var createCalls = 0;
                    ajax_4.addServiceHandler("~/services/Administration/User/Create", function (s) {
                        createCalls++;
                        assert.deepEqual(s.request, {
                            Entity: {
                                Username: 'ABC  ',
                                DisplayName: 'DEF',
                                Email: 'ghi@jkl.com',
                                Password: '1234567'
                            }
                        }, 'save request');
                        var retrieveCalls = 0;
                        ajax_4.addServiceHandler("~/services/Administration/User/Retrieve", function (s) {
                            throw new Error("retrieve shouldn't be called!");
                        });
                        setTimeout(function () {
                            try {
                                assert.strictEqual(createCalls, 1, 'create should be called once');
                                assert.strictEqual(retrieveCalls, 0, "retrieve shouldn't be called");
                                assert.strictEqual(datachangeTriggers, 1, "data change trigger should be called once");
                                assert.ok(!uiDialog.is(":visible"), 'dialog should be closed');
                            }
                            finally {
                                toastr.remove();
                                ajax_4.dispose();
                                dialog.dialogClose();
                                done();
                            }
                        }, 0);
                        return { EntityId: 9876 };
                    });
                    Serene.DialogTesting.clickButton(dialog, ".save-and-close-button");
                }
                catch (e) {
                    dialog.dialogClose();
                    throw e;
                }
            });
        })(Test = Administration.Test || (Administration.Test = {}));
    })(Administration = Serene.Administration || (Serene.Administration = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var ButtonTesting;
    (function (ButtonTesting) {
        function assertEnabled(button, klass) {
            QUnit.assert.ok(button.hasClass(klass) &&
                !button.hasClass('disabled'), 'button with class ' + klass + ' is enabled.');
        }
        ButtonTesting.assertEnabled = assertEnabled;
        function assertDisabled(button, klass) {
            QUnit.assert.ok(button.hasClass(klass) &&
                button.hasClass('disabled'), 'button with class ' + klass + ' is disabled.');
        }
        ButtonTesting.assertDisabled = assertDisabled;
    })(ButtonTesting = Serene.ButtonTesting || (Serene.ButtonTesting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var DialogTesting;
    (function (DialogTesting) {
        function getDialogTitle(element) {
            if (element.hasClass(".ui-dialog-content"))
                element = element.closest(".ui-dialog");
            return element.find(".ui-dialog-title").text();
        }
        DialogTesting.getDialogTitle = getDialogTitle;
        function getVisibleButtons(dialog) {
            return $('#' + dialog.idPrefix + 'Toolbar').find('.tool-button:visible');
        }
        DialogTesting.getVisibleButtons = getVisibleButtons;
        function clickButton(dialog, klass) {
            var button = $('#' + dialog.idPrefix + 'Toolbar').find(klass + '.tool-button:visible');
            QUnit.assert.ok(button.length == 1, 'clicking "' + klass + '" button');
            button.click();
        }
        DialogTesting.clickButton = clickButton;
        function getVisibleFields(dialog) {
            return $('#' + dialog.idPrefix + 'PropertyGrid').find('div.field:visible');
        }
        DialogTesting.getVisibleFields = getVisibleFields;
    })(DialogTesting = Serene.DialogTesting || (Serene.DialogTesting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var EditorTesting;
    (function (EditorTesting) {
        function isEditable(editor) {
            return !editor.hasClass('readonly') &&
                !editor.hasClass('disabled') &&
                !editor.is('[readonly]') &&
                !editor.is(':disabled');
        }
        EditorTesting.isEditable = isEditable;
        function getValue(editor) {
            var widget = editor.tryGetWidget(Serenity.Widget);
            if (widget != null)
                return Serenity.EditorUtils.getValue(widget);
            return editor.val();
        }
        EditorTesting.getValue = getValue;
        function setValue(editor, value) {
            var widget = editor.tryGetWidget(Serenity.Widget);
            if (widget != null) {
                Serenity.EditorUtils.setValue(widget, value);
                return;
            }
            editor.val(value);
        }
        EditorTesting.setValue = setValue;
    })(EditorTesting = Serene.EditorTesting || (Serene.EditorTesting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var FormTesting;
    (function (FormTesting) {
        function getTitle(field) {
            var lbl = field.children("label.caption");
            var text = lbl.text();
            var pref = lbl.children("sup").text();
            if (pref && text.substr(0, pref.length) == pref)
                return text.substr(pref.length);
            return text;
        }
        FormTesting.getTitle = getTitle;
        function assertTitle(field, title) {
            QUnit.assert.strictEqual(getTitle(field), title, '[Field has title ' + title + ']');
        }
        FormTesting.assertTitle = assertTitle;
        function setValue(field, value) {
            var edit = field.find('.editor').first();
            Serene.EditorTesting.setValue(edit, value);
        }
        FormTesting.setValue = setValue;
        function assertValue(field, expected) {
            var edit = field.find('.editor').first();
            var value = Serene.EditorTesting.getValue(edit);
            QUnit.assert.strictEqual(value, expected, getTitle(field) + ' has value ' + JSON.stringify(expected));
        }
        FormTesting.assertValue = assertValue;
        function isEditable(field) {
            var edit = field.find('.editor').first();
            return Serene.EditorTesting.isEditable(edit);
        }
        FormTesting.isEditable = isEditable;
        function getEditor(field) {
            return field.find('.editor').first();
        }
        FormTesting.getEditor = getEditor;
        function assertEditorIs(field, selector) {
            QUnit.assert.ok(getEditor(field).is(selector), getTitle(field) + ' is ' + selector);
        }
        FormTesting.assertEditorIs = assertEditorIs;
        function assertEditable(field) {
            QUnit.assert.ok(isEditable(field), getTitle(field) + ' is editable.');
        }
        FormTesting.assertEditable = assertEditable;
        function assertNotEditable(field) {
            QUnit.assert.ok(!isEditable(field), getTitle(field) + ' is not editable.');
        }
        FormTesting.assertNotEditable = assertNotEditable;
        function assertHasClass(field, klass) {
            QUnit.assert.ok(field.find('.editor').first().hasClass(klass), getTitle(field) + ' has class ' + klass);
        }
        FormTesting.assertHasClass = assertHasClass;
        function assertMaxLength(field, maxLength) {
            QUnit.assert.strictEqual(field.find('.editor').first().attr('maxlength'), maxLength.toString(), getTitle(field) + ' has maxlength ' + maxLength);
        }
        FormTesting.assertMaxLength = assertMaxLength;
        function isRequired(field) {
            return hasRequiredMark(field) && hasRequiredEditor(field);
        }
        FormTesting.isRequired = isRequired;
        function assertRequired(field) {
            QUnit.assert.ok(isRequired(field), getTitle(field) + ' is required.');
        }
        FormTesting.assertRequired = assertRequired;
        function assertNotRequired(field) {
            QUnit.assert.ok(!isRequired(field), getTitle(field) + ' is not required.');
        }
        FormTesting.assertNotRequired = assertNotRequired;
        function hasRequiredMark(field) {
            var lbl = field.children("label.caption");
            return lbl.children("sup:visible").length > 0;
        }
        FormTesting.hasRequiredMark = hasRequiredMark;
        function hasRequiredEditor(field) {
            return field.find(".editor").first().hasClass("required");
        }
        FormTesting.hasRequiredEditor = hasRequiredEditor;
    })(FormTesting = Serene.FormTesting || (Serene.FormTesting = {}));
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var ServiceTesting;
    (function (ServiceTesting) {
        var FakeAjax = (function () {
            function FakeAjax() {
                this.oldAjax = $.ajax;
                var self = this;
                this.handlers = {};
                $.ajax = function (settings) {
                    var url = settings.url;
                    var handler = self.handlers[url];
                    if (!handler) {
                        throw new Error("No fake handler registered for ajax URL: " + url + ", request: " +
                            JSON.stringify(settings, null, "    "));
                    }
                    var xhr = {
                        fail: function () {
                        }
                    };
                    var result = handler(settings);
                    settings.success(result, '200', xhr);
                    return xhr;
                };
            }
            FakeAjax.prototype.addServiceHandler = function (service, handler) {
                this.handlers[Q.resolveUrl(service)] = handler;
            };
            FakeAjax.prototype.dispose = function () {
                $.ajax = this.oldAjax;
            };
            return FakeAjax;
        }());
        ServiceTesting.FakeAjax = FakeAjax;
    })(ServiceTesting = Serene.ServiceTesting || (Serene.ServiceTesting = {}));
})(Serene || (Serene = {}));
//# sourceMappingURL=Serene.Test.js.map