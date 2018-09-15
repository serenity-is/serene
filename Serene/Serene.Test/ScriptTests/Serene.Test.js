var Serene;
(function (Serene) {
    var ButtonTesting = /** @class */ (function () {
        function ButtonTesting(assert) {
            this.assert = assert;
        }
        ButtonTesting.prototype.assertEnabled = function (button, klass) {
            this.assert.ok(button.hasClass(klass) &&
                !button.hasClass('disabled'), 'button with class ' + klass + ' is enabled.');
        };
        ButtonTesting.prototype.assertDisabled = function (button, klass) {
            this.assert.ok(button.hasClass(klass) &&
                button.hasClass('disabled'), 'button with class ' + klass + ' is disabled.');
        };
        return ButtonTesting;
    }());
    Serene.ButtonTesting = ButtonTesting;
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
    var FormTesting = /** @class */ (function () {
        function FormTesting(assert) {
            this.assert = assert;
        }
        FormTesting.prototype.getTitle = function (field) {
            var lbl = field.children("label.caption");
            var text = lbl.text();
            var pref = lbl.children("sup").text();
            if (pref && text.substr(0, pref.length) == pref)
                return text.substr(pref.length);
            return text;
        };
        FormTesting.prototype.assertTitle = function (field, title) {
            QUnit.assert.strictEqual(this.getTitle(field), title, '[Field has title ' + title + ']');
        };
        FormTesting.prototype.setValue = function (field, value) {
            var edit = field.find('.editor').first();
            Serene.EditorTesting.setValue(edit, value);
        };
        FormTesting.prototype.assertValue = function (field, expected) {
            var edit = field.find('.editor').first();
            var value = Serene.EditorTesting.getValue(edit);
            QUnit.assert.strictEqual(value, expected, this.getTitle(field) + ' has value ' + JSON.stringify(expected));
        };
        FormTesting.prototype.isEditable = function (field) {
            var edit = field.find('.editor').first();
            return Serene.EditorTesting.isEditable(edit);
        };
        FormTesting.prototype.getEditor = function (field) {
            return field.find('.editor').first();
        };
        FormTesting.prototype.assertEditorIs = function (field, selector) {
            QUnit.assert.ok(this.getEditor(field).is(selector), this.getTitle(field) + ' is ' + selector);
        };
        FormTesting.prototype.assertEditable = function (field) {
            QUnit.assert.ok(this.isEditable(field), this.getTitle(field) + ' is editable.');
        };
        FormTesting.prototype.assertNotEditable = function (field) {
            QUnit.assert.ok(!this.isEditable(field), this.getTitle(field) + ' is not editable.');
        };
        FormTesting.prototype.assertHasClass = function (field, klass) {
            QUnit.assert.ok(field.find('.editor').first().hasClass(klass), this.getTitle(field) + ' has class ' + klass);
        };
        FormTesting.prototype.assertMaxLength = function (field, maxLength) {
            QUnit.assert.strictEqual(field.find('.editor').first().attr('maxlength'), maxLength.toString(), this.getTitle(field) + ' has maxlength ' + maxLength);
        };
        FormTesting.prototype.isRequired = function (field) {
            return this.hasRequiredMark(field) && this.hasRequiredEditor(field);
        };
        FormTesting.prototype.assertRequired = function (field) {
            QUnit.assert.ok(this.isRequired(field), this.getTitle(field) + ' is required.');
        };
        FormTesting.prototype.assertNotRequired = function (field) {
            QUnit.assert.ok(!this.isRequired(field), this.getTitle(field) + ' is not required.');
        };
        FormTesting.prototype.hasRequiredMark = function (field) {
            var lbl = field.children("label.caption");
            return lbl.children("sup:visible").length > 0;
        };
        FormTesting.prototype.hasRequiredEditor = function (field) {
            return field.find(".editor").first().hasClass("required");
        };
        return FormTesting;
    }());
    Serene.FormTesting = FormTesting;
})(Serene || (Serene = {}));
var Serene;
(function (Serene) {
    var ServiceTesting;
    (function (ServiceTesting) {
        var FakeAjax = /** @class */ (function () {
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
var Serene;
(function (Serene) {
    var Administration;
    (function (Administration) {
        var Test;
        (function (Test) {
            QUnit.module('Serene.Administration');
            QUnit.test('LanguageDialog Edit LoadById, Apply Changes Button', function (assert) {
                var asyncDone = assert.async();
                var dialog = new Administration.LanguageDialog();
                var ajax = new Serene.ServiceTesting.FakeAjax();
                var firstRetrieveCalls = 0;
                ajax.addServiceHandler("~/services/Administration/Language/Retrieve", function (s) {
                    firstRetrieveCalls++;
                    assert.deepEqual(s.request, { EntityId: 789 });
                    dialog.element.on('dialogopen', function () {
                        var uiDialog = dialog.element.closest(".ui-dialog");
                        window.setTimeout(function () {
                            assert.ok(uiDialog.is(":visible"), 'open edit entity dialog');
                            assert.strictEqual(Serene.DialogTesting.getDialogTitle(uiDialog), 'Edit Language (Something)', 'has correct title');
                            var buttons = Serene.DialogTesting.getVisibleButtons(dialog);
                            assert.strictEqual(3, buttons.length, 'has 3 visible buttons');
                            var buttonTesting = new Serene.ButtonTesting(assert);
                            buttonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
                            buttonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
                            buttonTesting.assertEnabled(buttons.eq(2), 'delete-button');
                            var fields = Serene.DialogTesting.getVisibleFields(dialog);
                            assert.strictEqual(2, fields.length, 'has 2 field');
                            var formTesting = new Serene.FormTesting(assert);
                            var languageId = fields.eq(0);
                            formTesting.assertTitle(languageId, 'Language Id');
                            formTesting.assertRequired(languageId);
                            formTesting.assertEditable(languageId);
                            formTesting.assertHasClass(languageId, 's-StringEditor');
                            formTesting.assertMaxLength(languageId, 10);
                            formTesting.assertValue(languageId, 'tx');
                            var languagename = fields.eq(1);
                            formTesting.assertTitle(languagename, 'Language Name');
                            formTesting.assertRequired(languagename);
                            formTesting.assertEditable(languagename);
                            formTesting.assertHasClass(languagename, 's-StringEditor');
                            formTesting.assertMaxLength(languagename, 50);
                            formTesting.assertValue(languagename, 'Something');
                            formTesting.setValue(languageId, 'tr  ');
                            formTesting.setValue(languagename, ' Turkish  ');
                            var datachangeTriggers = 0;
                            dialog.element.on('ondatachange', function () {
                                datachangeTriggers++;
                            });
                            var updateCalls = 0;
                            ajax.addServiceHandler("~/services/Administration/Language/Update", function (s) {
                                updateCalls++;
                                assert.deepEqual(s.request, {
                                    EntityId: 789,
                                    Entity: {
                                        Id: 789,
                                        LanguageId: 'tr  ',
                                        LanguageName: ' Turkish  '
                                    }
                                }, 'save request');
                                var retrieveCalls = 0;
                                ajax.addServiceHandler("~/services/Administration/Language/Retrieve", function (s) {
                                    retrieveCalls++;
                                    assert.deepEqual(s.request, { EntityId: 789 }, 'retrieve request');
                                    setTimeout(function () {
                                        try {
                                            assert.strictEqual(updateCalls, 1, 'update should be called once');
                                            assert.strictEqual(retrieveCalls, 1, "retrieve should be called once");
                                            assert.strictEqual(datachangeTriggers, 1, "data change trigger should be called once");
                                            assert.ok(uiDialog.is(":visible"), 'dialog should stay open');
                                            formTesting.assertValue(languagename, 'ABC');
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
                                            LanguageId: 789,
                                            LanguageName: 'ABC'
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
                            Id: 789,
                            LanguageId: 'tx',
                            LanguageName: 'Something'
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
            QUnit.test('LanguageDialog Edit LoadById, Delete Button', function (assert) {
                var asyncDone = assert.async();
                var dialog = new Administration.LanguageDialog();
                var ajax = new Serene.ServiceTesting.FakeAjax();
                var retrieveCalls = 0;
                ajax.addServiceHandler("~/services/Administration/Language/Retrieve", function (s) {
                    retrieveCalls++;
                    assert.deepEqual(s.request, { EntityId: 789 });
                    dialog.element.on('dialogopen', function () {
                        var uiDialog = dialog.element.closest(".ui-dialog");
                        window.setTimeout(function () {
                            var datachangeTriggers = 0;
                            dialog.element.on('ondatachange', function () {
                                datachangeTriggers++;
                            });
                            var deleteCalls = 0;
                            ajax.addServiceHandler("~/services/Administration/Language/Delete", function (s) {
                                deleteCalls++;
                                assert.deepEqual(s.request, {
                                    EntityId: 789
                                }, 'delete request');
                                var retrieveCalls = 0;
                                ajax.addServiceHandler("~/services/Administration/Language/Retrieve", function (s) {
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
                            Id: 789,
                            LanguageId: 'tr',
                            LanguageName: 'Turkish'
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
            QUnit.test('LanguageDialog Edit LoadById, Save and Close Button', function (assert) {
                var asyncDone = assert.async();
                var dialog = new Administration.LanguageDialog();
                var ajax = new Serene.ServiceTesting.FakeAjax();
                var firstRetrieveCalls = 0;
                ajax.addServiceHandler("~/services/Administration/Language/Retrieve", function (s) {
                    firstRetrieveCalls++;
                    assert.deepEqual(s.request, { EntityId: 789 });
                    dialog.element.on('dialogopen', function () {
                        var uiDialog = dialog.element.closest(".ui-dialog");
                        window.setTimeout(function () {
                            assert.ok(uiDialog.is(":visible"), 'open edit entity dialog');
                            var datachangeTriggers = 0;
                            dialog.element.on('ondatachange', function () {
                                datachangeTriggers++;
                            });
                            var updateCalls = 0;
                            ajax.addServiceHandler("~/services/Administration/Language/Update", function (s) {
                                updateCalls++;
                                assert.deepEqual(s.request, {
                                    EntityId: 789,
                                    Entity: {
                                        Id: 789,
                                        LanguageId: 'tr',
                                        LanguageName: 'Turkish'
                                    }
                                }, 'save request');
                                var retrieveCalls = 0;
                                ajax.addServiceHandler("~/services/Administration/Language/Retrieve", function (s) {
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
                            Id: 789,
                            LanguageId: 'tr',
                            LanguageName: 'Turkish'
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
            QUnit.test('LanguageDialog Edit With LoadEntity', function (assert) {
                var dialog = new Administration.LanguageDialog();
                dialog.loadEntityAndOpenDialog({
                    Id: 789,
                    LanguageId: 'tr',
                    LanguageName: 'Turkish'
                });
                try {
                    var uiDialog = dialog.element.closest(".ui-dialog");
                    assert.ok(uiDialog.is(":visible"), 'open edit entity dialog');
                    assert.strictEqual(Serene.DialogTesting.getDialogTitle(uiDialog), 'Edit Language (Turkish)', 'has correct title');
                    var buttons = Serene.DialogTesting.getVisibleButtons(dialog);
                    assert.strictEqual(3, buttons.length, 'has 3 visible buttons');
                    var buttonTesting = new Serene.ButtonTesting(assert);
                    buttonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
                    buttonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
                    buttonTesting.assertEnabled(buttons.eq(2), 'delete-button');
                    var fields = Serene.DialogTesting.getVisibleFields(dialog);
                    assert.strictEqual(2, fields.length, 'has 2 fields');
                    var formTesting = new Serene.FormTesting(assert);
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
            QUnit.test('LanguageDialog General', function (assert) {
                assert.notEqual(null, new Administration.LanguageDialog(), 'create a new instance');
                var dialog = new Administration.LanguageDialog();
                assert.notEqual(null, dialog.element, 'has element');
                assert.ok(!dialog.element.is(':visible'), 'initially invisible');
                dialog.dialogOpen();
                var uiDialog = dialog.element.closest('.ui-dialog');
                assert.equal(1, uiDialog.length, 'element under .ui-dialog');
                assert.ok(uiDialog.hasClass("s-Dialog"), 'has dialog css class');
                assert.ok(uiDialog.hasClass("s-LanguageDialog"), 'has classname css class');
                assert.ok(uiDialog.hasClass("s-Administration-LanguageDialog"), 'has module prefixed css class');
                assert.ok(uiDialog.is(':visible'), 'visible after dialogOpen');
                dialog.dialogClose();
                assert.ok(!uiDialog.is(':visible'), 'hidden after dialogClose');
                dialog = new Administration.LanguageDialog();
                dialog.loadNewAndOpenDialog();
                uiDialog = dialog.element.closest('.ui-dialog');
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
            QUnit.test('LanguageDialog New Entity, Apply Changes Button', function (assert) {
                var done = assert.async();
                var dialog = new Administration.LanguageDialog();
                dialog.loadNewAndOpenDialog();
                try {
                    var uiDialog_1 = dialog.element.closest(".ui-dialog");
                    assert.ok(uiDialog_1.is(":visible"), 'open a new entity dialog');
                    assert.strictEqual(Serene.DialogTesting.getDialogTitle(uiDialog_1), "New Language", 'has correct title');
                    var buttons = Serene.DialogTesting.getVisibleButtons(dialog);
                    assert.strictEqual(2, buttons.length, 'has 2 visible buttons');
                    var buttonTesting = new Serene.ButtonTesting(assert);
                    buttonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
                    buttonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
                    var fields = Serene.DialogTesting.getVisibleFields(dialog);
                    assert.strictEqual(2, fields.length, 'has 2 fields');
                    var formTesting = new Serene.FormTesting(assert);
                    var languageId = fields.eq(0);
                    formTesting.assertTitle(languageId, 'Language Id');
                    formTesting.assertRequired(languageId);
                    formTesting.assertEditable(languageId);
                    formTesting.assertHasClass(languageId, 's-StringEditor');
                    formTesting.assertMaxLength(languageId, 10);
                    formTesting.assertValue(languageId, '');
                    var languagename = fields.eq(1);
                    formTesting.assertTitle(languagename, 'Language Name');
                    formTesting.assertRequired(languagename);
                    formTesting.assertEditable(languagename);
                    formTesting.assertHasClass(languagename, 's-StringEditor');
                    formTesting.assertMaxLength(languagename, 50);
                    formTesting.assertValue(languagename, '');
                    formTesting.setValue(languageId, 'tr  ');
                    formTesting.setValue(languagename, ' Turkish  ');
                    var datachangeTriggers = 0;
                    dialog.element.on('ondatachange', function () {
                        datachangeTriggers++;
                    });
                    var ajax_1 = new Serene.ServiceTesting.FakeAjax();
                    var createCalls = 0;
                    ajax_1.addServiceHandler("~/services/Administration/Language/Create", function (s) {
                        createCalls++;
                        assert.deepEqual(s.request, {
                            Entity: {
                                LanguageId: 'tr  ',
                                LanguageName: ' Turkish  '
                            }
                        }, 'save request');
                        var retrieveCalls = 0;
                        ajax_1.addServiceHandler("~/services/Administration/Language/Retrieve", function (s) {
                            retrieveCalls++;
                            assert.deepEqual(s.request, { EntityId: 9876 }, 'retrieve request');
                            setTimeout(function () {
                                try {
                                    assert.strictEqual(createCalls, 1, 'create should be called once');
                                    assert.strictEqual(retrieveCalls, 1, "retrieve should be called once");
                                    assert.strictEqual(datachangeTriggers, 1, "data change trigger should be called once");
                                    assert.ok(uiDialog_1.is(":visible"), 'dialog should stay open');
                                    formTesting.assertValue(languageId, 'tr');
                                    formTesting.assertValue(languagename, 'Turkish');
                                }
                                finally {
                                    toastr.remove();
                                    ajax_1.dispose();
                                    dialog.dialogClose();
                                    done();
                                }
                            }, 0);
                            return {
                                Entity: {
                                    Id: 9876,
                                    LanguageId: 'tr',
                                    LanguageName: 'Turkish'
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
            QUnit.test('LanguageDialog New Entity, Save and Close Button', function (assert) {
                var done = assert.async();
                var dialog = new Administration.LanguageDialog();
                dialog.loadNewAndOpenDialog();
                try {
                    var uiDialog_2 = dialog.element.closest(".ui-dialog");
                    assert.ok(uiDialog_2.is(":visible"), 'open a new entity dialog');
                    assert.strictEqual(Serene.DialogTesting.getDialogTitle(uiDialog_2), "New Language", 'has correct title');
                    var fields = Serene.DialogTesting.getVisibleFields(dialog);
                    assert.strictEqual(2, fields.length, 'has 2 field');
                    var formTesting = new Serene.FormTesting(assert);
                    var languageId = fields.eq(0);
                    var languagename = fields.eq(1);
                    formTesting.setValue(languageId, 'tr  ');
                    formTesting.setValue(languagename, ' Turkish  ');
                    var datachangeTriggers = 0;
                    dialog.element.on('ondatachange', function () {
                        datachangeTriggers++;
                    });
                    var ajax_2 = new Serene.ServiceTesting.FakeAjax();
                    var createCalls = 0;
                    ajax_2.addServiceHandler("~/services/Administration/Language/Create", function (s) {
                        createCalls++;
                        assert.deepEqual(s.request, {
                            Entity: {
                                LanguageId: 'tr  ',
                                LanguageName: ' Turkish  '
                            }
                        }, 'save request');
                        var retrieveCalls = 0;
                        ajax_2.addServiceHandler("~/services/Administration/Language/Retrieve", function (s) {
                            throw new Error("retrieve shouldn't be called!");
                        });
                        setTimeout(function () {
                            try {
                                assert.strictEqual(createCalls, 1, 'create should be called once');
                                assert.strictEqual(retrieveCalls, 0, "retrieve shouldn't be called");
                                assert.strictEqual(datachangeTriggers, 1, "data change trigger should be called once");
                                assert.ok(!uiDialog_2.is(":visible"), 'dialog should be closed');
                            }
                            finally {
                                toastr.remove();
                                ajax_2.dispose();
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
    var Administration;
    (function (Administration) {
        var Test;
        (function (Test) {
            QUnit.module('Serene.Administration');
            QUnit.test('RoleDialog Edit Permissions Button', function (assert) {
                var done = assert.async();
                var dialog = new Administration.RoleDialog();
                dialog.loadEntityAndOpenDialog({
                    RoleId: 789,
                    RoleName: 'some.thing',
                });
                try {
                    var uiDialog = dialog.element.closest(".ui-dialog");
                    assert.ok(uiDialog.is(":visible"), 'open edit entity dialog');
                    var ajax_3 = new Serene.ServiceTesting.FakeAjax();
                    var rolePermissionListCalls = 0;
                    ajax_3.addServiceHandler("~/services/Administration/RolePermission/List", function (s) {
                        rolePermissionListCalls++;
                        assert.deepEqual(s.request, { RoleID: 789, Module: null, Submodule: null }, 'role permission list request');
                        return { "Entities": [], "TotalCount": 0, "Skip": 0, "Take": 0 };
                    });
                    Q.ScriptData.set('RemoteData.Administration.PermissionKeys', { "Entities": ["A", "B", "C"], "TotalCount": 0, "Skip": 0, "Take": 0 });
                    Q.ScriptData.set('RemoteData.Administration.ImplicitPermissions', {});
                    Serene.DialogTesting.clickButton(dialog, '.edit-permissions-button');
                    window.setTimeout(function () {
                        try {
                            var permissionDialog = $('.ui-dialog:visible').last();
                            assert.ok(permissionDialog.hasClass('s-Administration-RolePermissionDialog'), 'role permissions dialog is shown on edit permissions button click');
                            assert.equal(Serene.DialogTesting.getDialogTitle(permissionDialog), 'Edit Role Permissions (some.thing)', 'dialog title');
                            assert.equal(1, rolePermissionListCalls, 'RolePermission/List should be called once');
                            permissionDialog.find('.ui-dialog-content').dialog('close');
                        }
                        finally {
                            Q.ScriptData.set('RemoteData.Administration.PermissionKeys', null);
                            ajax_3.dispose();
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
            QUnit.test('RoleDialog Edit LoadById, Apply Changes Button', function (assert) {
                var asyncDone = assert.async();
                var dialog = new Administration.RoleDialog();
                var ajax = new Serene.ServiceTesting.FakeAjax();
                var firstRetrieveCalls = 0;
                ajax.addServiceHandler("~/services/Administration/Role/Retrieve", function (s) {
                    firstRetrieveCalls++;
                    assert.deepEqual(s.request, { EntityId: 789 });
                    dialog.element.on('dialogopen', function () {
                        var uiDialog = dialog.element.closest(".ui-dialog");
                        window.setTimeout(function () {
                            assert.ok(uiDialog.is(":visible"), 'open edit entity dialog');
                            assert.strictEqual(Serene.DialogTesting.getDialogTitle(uiDialog), 'Edit Role (some.thing)', 'has correct title');
                            var buttons = Serene.DialogTesting.getVisibleButtons(dialog);
                            assert.strictEqual(4, buttons.length, 'has 4 visible buttons');
                            var buttonTesting = new Serene.ButtonTesting(assert);
                            buttonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
                            buttonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
                            buttonTesting.assertEnabled(buttons.eq(2), 'delete-button');
                            buttonTesting.assertEnabled(buttons.eq(3), 'edit-permissions-button');
                            var fields = Serene.DialogTesting.getVisibleFields(dialog);
                            assert.strictEqual(1, fields.length, 'has 1 field');
                            var formTesting = new Serene.FormTesting(assert);
                            var rolename = fields.eq(0);
                            formTesting.assertTitle(rolename, 'Role Name');
                            formTesting.assertRequired(rolename);
                            formTesting.assertEditable(rolename);
                            formTesting.assertHasClass(rolename, 's-StringEditor');
                            formTesting.assertMaxLength(rolename, 100);
                            formTesting.assertValue(rolename, 'some.thing');
                            formTesting.setValue(rolename, 'ABC  ');
                            var datachangeTriggers = 0;
                            dialog.element.on('ondatachange', function () {
                                datachangeTriggers++;
                            });
                            var updateCalls = 0;
                            ajax.addServiceHandler("~/services/Administration/Role/Update", function (s) {
                                updateCalls++;
                                assert.deepEqual(s.request, {
                                    EntityId: 789,
                                    Entity: {
                                        RoleId: 789,
                                        RoleName: 'ABC  '
                                    }
                                }, 'save request');
                                var retrieveCalls = 0;
                                ajax.addServiceHandler("~/services/Administration/Role/Retrieve", function (s) {
                                    retrieveCalls++;
                                    assert.deepEqual(s.request, { EntityId: 789 }, 'retrieve request');
                                    setTimeout(function () {
                                        try {
                                            assert.strictEqual(updateCalls, 1, 'update should be called once');
                                            assert.strictEqual(retrieveCalls, 1, "retrieve should be called once");
                                            assert.strictEqual(datachangeTriggers, 1, "data change trigger should be called once");
                                            assert.ok(uiDialog.is(":visible"), 'dialog should stay open');
                                            formTesting.assertValue(rolename, 'ABC');
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
                                            RoleId: 789,
                                            RoleName: 'ABC'
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
                            RoleId: 789,
                            RoleName: 'some.thing'
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
            QUnit.test('RoleDialog Edit LoadById, Delete Button', function (assert) {
                var asyncDone = assert.async();
                var dialog = new Administration.RoleDialog();
                var ajax = new Serene.ServiceTesting.FakeAjax();
                var retrieveCalls = 0;
                ajax.addServiceHandler("~/services/Administration/Role/Retrieve", function (s) {
                    retrieveCalls++;
                    assert.deepEqual(s.request, { EntityId: 789 });
                    dialog.element.on('dialogopen', function () {
                        var uiDialog = dialog.element.closest(".ui-dialog");
                        window.setTimeout(function () {
                            var datachangeTriggers = 0;
                            dialog.element.on('ondatachange', function () {
                                datachangeTriggers++;
                            });
                            var deleteCalls = 0;
                            ajax.addServiceHandler("~/services/Administration/Role/Delete", function (s) {
                                deleteCalls++;
                                assert.deepEqual(s.request, {
                                    EntityId: 789
                                }, 'delete request');
                                var retrieveCalls = 0;
                                ajax.addServiceHandler("~/services/Administration/Role/Retrieve", function (s) {
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
                            RoleId: 789,
                            RoleName: 'some.thing'
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
            QUnit.test('RoleDialog Edit LoadById, Save and Close Button', function (assert) {
                var asyncDone = assert.async();
                var dialog = new Administration.RoleDialog();
                var ajax = new Serene.ServiceTesting.FakeAjax();
                var firstRetrieveCalls = 0;
                ajax.addServiceHandler("~/services/Administration/Role/Retrieve", function (s) {
                    firstRetrieveCalls++;
                    assert.deepEqual(s.request, { EntityId: 789 });
                    dialog.element.on('dialogopen', function () {
                        var uiDialog = dialog.element.closest(".ui-dialog");
                        window.setTimeout(function () {
                            assert.ok(uiDialog.is(":visible"), 'open edit entity dialog');
                            var datachangeTriggers = 0;
                            dialog.element.on('ondatachange', function () {
                                datachangeTriggers++;
                            });
                            var updateCalls = 0;
                            ajax.addServiceHandler("~/services/Administration/Role/Update", function (s) {
                                updateCalls++;
                                assert.deepEqual(s.request, {
                                    EntityId: 789,
                                    Entity: {
                                        RoleId: 789,
                                        RoleName: 'some.thing'
                                    }
                                }, 'save request');
                                var retrieveCalls = 0;
                                ajax.addServiceHandler("~/services/Administration/Role/Retrieve", function (s) {
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
                            RoleId: 789,
                            RoleName: 'some.thing'
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
            QUnit.test('RoleDialog Edit With LoadEntity', function (assert) {
                var dialog = new Administration.RoleDialog();
                dialog.loadEntityAndOpenDialog({
                    RoleId: 789,
                    RoleName: 'some.thing'
                });
                try {
                    var uiDialog = dialog.element.closest(".ui-dialog");
                    assert.ok(uiDialog.is(":visible"), 'open edit entity dialog');
                    assert.strictEqual(Serene.DialogTesting.getDialogTitle(uiDialog), 'Edit Role (some.thing)', 'has correct title');
                    var buttons = Serene.DialogTesting.getVisibleButtons(dialog);
                    assert.strictEqual(4, buttons.length, 'has 4 visible buttons');
                    var buttonTesting = new Serene.ButtonTesting(assert);
                    buttonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
                    buttonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
                    buttonTesting.assertEnabled(buttons.eq(2), 'delete-button');
                    buttonTesting.assertEnabled(buttons.eq(3), 'edit-permissions-button');
                    var fields = Serene.DialogTesting.getVisibleFields(dialog);
                    assert.strictEqual(1, fields.length, 'has 1 fields');
                    var formTesting = new Serene.FormTesting(assert);
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
            QUnit.test('RoleDialog General', function (assert) {
                assert.notEqual(null, new Administration.RoleDialog(), 'create a new instance');
                var dialog = new Administration.RoleDialog();
                assert.notEqual(null, dialog.element, 'has element');
                assert.ok(!dialog.element.is(':visible'), 'initially invisible');
                dialog.dialogOpen();
                var uiDialog = dialog.element.closest('.ui-dialog');
                assert.equal(1, uiDialog.length, 'element under .ui-dialog');
                assert.ok(uiDialog.hasClass("s-Dialog"), 'has dialog css class');
                assert.ok(uiDialog.hasClass("s-RoleDialog"), 'has classname css class');
                assert.ok(uiDialog.hasClass("s-Administration-RoleDialog"), 'has module prefixed css class');
                assert.ok(uiDialog.is(':visible'), 'visible after dialogOpen');
                dialog.dialogClose();
                assert.ok(!uiDialog.is(':visible'), 'hidden after dialogClose');
                dialog = new Administration.RoleDialog();
                dialog.loadNewAndOpenDialog();
                uiDialog = dialog.element.closest('.ui-dialog');
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
            QUnit.test('RoleDialog New Entity, Apply Changes Button', function (assert) {
                var done = assert.async();
                var dialog = new Administration.RoleDialog();
                dialog.loadNewAndOpenDialog();
                try {
                    var uiDialog_3 = dialog.element.closest(".ui-dialog");
                    assert.ok(uiDialog_3.is(":visible"), 'open a new entity dialog');
                    assert.strictEqual(Serene.DialogTesting.getDialogTitle(uiDialog_3), "New Role", 'has correct title');
                    var buttons = Serene.DialogTesting.getVisibleButtons(dialog);
                    assert.strictEqual(3, buttons.length, 'has 3 visible buttons');
                    var buttonTesting = new Serene.ButtonTesting(assert);
                    buttonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
                    buttonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
                    buttonTesting.assertDisabled(buttons.eq(2), 'edit-permissions-button');
                    var fields = Serene.DialogTesting.getVisibleFields(dialog);
                    assert.strictEqual(1, fields.length, 'has 1 field');
                    var formTesting = new Serene.FormTesting(assert);
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
                    var ajax_4 = new Serene.ServiceTesting.FakeAjax();
                    var createCalls = 0;
                    ajax_4.addServiceHandler("~/services/Administration/Role/Create", function (s) {
                        createCalls++;
                        assert.deepEqual(s.request, {
                            Entity: {
                                RoleName: 'ABC  '
                            }
                        }, 'save request');
                        var retrieveCalls = 0;
                        ajax_4.addServiceHandler("~/services/Administration/Role/Retrieve", function (s) {
                            retrieveCalls++;
                            assert.deepEqual(s.request, { EntityId: 9876 }, 'retrieve request');
                            setTimeout(function () {
                                try {
                                    assert.strictEqual(createCalls, 1, 'create should be called once');
                                    assert.strictEqual(retrieveCalls, 1, "retrieve should be called once");
                                    assert.strictEqual(datachangeTriggers, 1, "data change trigger should be called once");
                                    assert.ok(uiDialog_3.is(":visible"), 'dialog should stay open');
                                    formTesting.assertValue(rolename, 'ABC');
                                }
                                finally {
                                    toastr.remove();
                                    ajax_4.dispose();
                                    dialog.dialogClose();
                                    done();
                                }
                            }, 0);
                            return {
                                Entity: {
                                    RoleId: 9876,
                                    RoleName: 'ABC'
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
            QUnit.test('RoleDialog New Entity, Save and Close Button', function (assert) {
                var done = assert.async();
                var dialog = new Administration.RoleDialog();
                dialog.loadNewAndOpenDialog();
                try {
                    var uiDialog_4 = dialog.element.closest(".ui-dialog");
                    assert.ok(uiDialog_4.is(":visible"), 'open a new entity dialog');
                    assert.strictEqual(Serene.DialogTesting.getDialogTitle(uiDialog_4), "New Role", 'has correct title');
                    var fields = Serene.DialogTesting.getVisibleFields(dialog);
                    assert.strictEqual(1, fields.length, 'has 1 field');
                    var formTesting = new Serene.FormTesting(assert);
                    var rolename = fields.eq(0);
                    formTesting.setValue(rolename, 'ABC  ');
                    var datachangeTriggers = 0;
                    dialog.element.on('ondatachange', function () {
                        datachangeTriggers++;
                    });
                    var ajax_5 = new Serene.ServiceTesting.FakeAjax();
                    var createCalls = 0;
                    ajax_5.addServiceHandler("~/services/Administration/Role/Create", function (s) {
                        createCalls++;
                        assert.deepEqual(s.request, {
                            Entity: {
                                RoleName: 'ABC  '
                            }
                        }, 'save request');
                        var retrieveCalls = 0;
                        ajax_5.addServiceHandler("~/services/Administration/Role/Retrieve", function (s) {
                            throw new Error("retrieve shouldn't be called!");
                        });
                        setTimeout(function () {
                            try {
                                assert.strictEqual(createCalls, 1, 'create should be called once');
                                assert.strictEqual(retrieveCalls, 0, "retrieve shouldn't be called");
                                assert.strictEqual(datachangeTriggers, 1, "data change trigger should be called once");
                                assert.ok(!uiDialog_4.is(":visible"), 'dialog should be closed');
                            }
                            finally {
                                toastr.remove();
                                ajax_5.dispose();
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
    var Administration;
    (function (Administration) {
        var Test;
        (function (Test) {
            QUnit.module('Serene.Administration');
            QUnit.test('UserDialog Edit Permissions Button', function (assert) {
                var done = assert.async();
                var dialog = new Administration.UserDialog();
                dialog.loadEntityAndOpenDialog({
                    UserId: 789,
                    Username: 'some.thing',
                    DisplayName: 'Some Thing',
                    Email: 'some_thing@somedomain.com',
                    Source: 'some'
                });
                try {
                    var uiDialog = dialog.element.closest(".ui-dialog");
                    assert.ok(uiDialog.is(":visible"), 'open edit entity dialog');
                    var ajax_6 = new Serene.ServiceTesting.FakeAjax();
                    var userPermissionListCalls = 0;
                    ajax_6.addServiceHandler("~/services/Administration/UserPermission/List", function (s) {
                        userPermissionListCalls++;
                        assert.deepEqual(s.request, { UserID: 789, Module: null, Submodule: null }, 'user permission list request');
                        return { "Entities": [], "TotalCount": 0, "Skip": 0, "Take": 0 };
                    });
                    var listRolePermissionsCalls = 0;
                    ajax_6.addServiceHandler("~/services/Administration/UserPermission/ListRolePermissions", function (s) {
                        listRolePermissionsCalls++;
                        assert.deepEqual(s.request, { UserID: 789, Module: null, Submodule: null }, 'list role permissions request');
                        return { "Entities": [], "TotalCount": 0, "Skip": 0, "Take": 0 };
                    });
                    Q.ScriptData.set('RemoteData.Administration.PermissionKeys', { "Entities": ["A", "B", "C"], "TotalCount": 0, "Skip": 0, "Take": 0 });
                    Q.ScriptData.set('RemoteData.Administration.ImplicitPermissions', {});
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
                            ajax_6.dispose();
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
                dialog.loadEntityAndOpenDialog({
                    UserId: 789,
                    Username: 'some.thing',
                    DisplayName: 'Some Thing',
                    Email: 'some_thing@somedomain.com',
                    Source: 'some'
                });
                try {
                    var uiDialog = dialog.element.closest(".ui-dialog");
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
                    var ajax_7 = new Serene.ServiceTesting.FakeAjax();
                    var userRoleListCalls = 0;
                    ajax_7.addServiceHandler("~/services/Administration/UserRole/List", function (s) {
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
                            ajax_7.dispose();
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
                var ajax = new Serene.ServiceTesting.FakeAjax();
                var firstRetrieveCalls = 0;
                ajax.addServiceHandler("~/services/Administration/User/Retrieve", function (s) {
                    firstRetrieveCalls++;
                    assert.deepEqual(s.request, { EntityId: 789 });
                    dialog.element.on('dialogopen', function () {
                        var uiDialog = dialog.element.closest(".ui-dialog");
                        window.setTimeout(function () {
                            assert.ok(uiDialog.is(":visible"), 'open edit entity dialog');
                            assert.strictEqual(Serene.DialogTesting.getDialogTitle(uiDialog), 'Edit User (some.thing)', 'has correct title');
                            var buttons = Serene.DialogTesting.getVisibleButtons(dialog);
                            assert.strictEqual(5, buttons.length, 'has 5 visible buttons');
                            var buttonTesting = new Serene.ButtonTesting(assert);
                            buttonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
                            buttonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
                            buttonTesting.assertEnabled(buttons.eq(2), 'delete-button');
                            buttonTesting.assertEnabled(buttons.eq(3), 'edit-roles-button');
                            buttonTesting.assertEnabled(buttons.eq(4), 'edit-permissions-button');
                            var fields = Serene.DialogTesting.getVisibleFields(dialog);
                            assert.strictEqual(7, fields.length, 'has 7 fields');
                            var formTesting = new Serene.FormTesting(assert);
                            var username = fields.eq(0);
                            formTesting.assertTitle(username, 'Username');
                            formTesting.assertRequired(username);
                            formTesting.assertEditable(username);
                            formTesting.assertHasClass(username, 's-StringEditor');
                            formTesting.assertMaxLength(username, 100);
                            formTesting.assertValue(username, 'some.thing');
                            var displayName = fields.eq(1);
                            formTesting.assertTitle(displayName, 'Display Name');
                            formTesting.assertRequired(displayName);
                            formTesting.assertEditable(displayName);
                            formTesting.assertHasClass(displayName, 's-StringEditor');
                            formTesting.assertMaxLength(displayName, 100);
                            formTesting.assertValue(displayName, 'Some Thing');
                            var email = fields.eq(2);
                            formTesting.assertTitle(email, 'Email');
                            formTesting.assertNotRequired(email);
                            formTesting.assertEditable(email);
                            formTesting.assertHasClass(email, 'emailuser');
                            formTesting.assertMaxLength(email, 100);
                            formTesting.assertValue(email, 'some_thing@somedomain.com');
                            var emaildomain = email.find('.emaildomain');
                            assert.ok(Serene.EditorTesting.isEditable(emaildomain), 'email domain is editable');
                            var image = fields.eq(3);
                            formTesting.assertTitle(image, 'User Image');
                            formTesting.assertNotRequired(image);
                            formTesting.assertEditable(image);
                            formTesting.assertHasClass(image, 's-ImageUploadEditor');
                            formTesting.assertValue(image, null);
                            var password = fields.eq(4);
                            formTesting.assertTitle(password, 'Password');
                            formTesting.assertNotRequired(password);
                            formTesting.assertEditable(password);
                            formTesting.assertHasClass(password, 's-PasswordEditor');
                            formTesting.assertEditorIs(password, 'input[type=password]');
                            formTesting.assertMaxLength(password, 50);
                            formTesting.assertValue(password, '');
                            var confirm = fields.eq(5);
                            formTesting.assertTitle(confirm, 'Confirm Password');
                            formTesting.assertNotRequired(confirm);
                            formTesting.assertEditable(confirm);
                            formTesting.assertHasClass(confirm, 's-PasswordEditor');
                            formTesting.assertEditorIs(confirm, 'input[type=password]');
                            formTesting.assertMaxLength(confirm, 50);
                            formTesting.assertValue(confirm, '');
                            var source = fields.eq(6);
                            formTesting.assertTitle(source, 'Source');
                            formTesting.assertNotRequired(source);
                            formTesting.assertNotEditable(source);
                            formTesting.assertHasClass(source, 's-StringEditor');
                            formTesting.assertMaxLength(source, 4);
                            formTesting.assertValue(source, 'some');
                            formTesting.setValue(username, 'ABC  ');
                            formTesting.setValue(displayName, 'DEF');
                            formTesting.setValue(email, 'ghi@jkl.com');
                            formTesting.setValue(password, '1234567');
                            formTesting.setValue(confirm, '1234567');
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
                                        Password: '1234567',
                                        UserImage: null
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
                                            formTesting.assertValue(username, 'ABC');
                                            formTesting.assertValue(displayName, 'DEF');
                                            formTesting.assertValue(email, 'ghi@jkl.com');
                                            formTesting.assertValue(password, '');
                                            formTesting.assertValue(confirm, '');
                                            formTesting.assertValue(source, 'some');
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
                var ajax = new Serene.ServiceTesting.FakeAjax();
                var userRetrieveCalled = 0;
                ajax.addServiceHandler("~/services/Administration/User/Retrieve", function (s) {
                    userRetrieveCalled++;
                    assert.deepEqual(s.request, { EntityId: 789 });
                    dialog.element.on('dialogopen', function () {
                        var uiDialog = dialog.element.closest(".ui-dialog");
                        window.setTimeout(function () {
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
                var ajax = new Serene.ServiceTesting.FakeAjax();
                var userRetrieveCalled = 0;
                ajax.addServiceHandler("~/services/Administration/User/Retrieve", function (s) {
                    userRetrieveCalled++;
                    assert.deepEqual(s.request, { EntityId: 789 });
                    dialog.element.on('dialogopen', function () {
                        var uiDialog = dialog.element.closest(".ui-dialog");
                        window.setTimeout(function () {
                            assert.ok(uiDialog.is(":visible"), 'open edit entity dialog');
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
                                        Username: 'some.thing',
                                        DisplayName: 'Some Thing',
                                        Email: 'some_thing@somedomain.com',
                                        Password: '',
                                        UserImage: null
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
                dialog.loadEntityAndOpenDialog({
                    UserId: 789,
                    Username: 'some.thing',
                    DisplayName: 'Some Thing',
                    Email: 'some_thing@somedomain.com',
                    Source: 'some'
                });
                try {
                    var uiDialog = dialog.element.closest(".ui-dialog");
                    assert.ok(uiDialog.is(":visible"), 'open edit entity dialog');
                    assert.strictEqual(Serene.DialogTesting.getDialogTitle(uiDialog), 'Edit User (some.thing)', 'has correct title');
                    var buttons = Serene.DialogTesting.getVisibleButtons(dialog);
                    assert.strictEqual(5, buttons.length, 'has 5 visible buttons');
                    var buttonTesting = new Serene.ButtonTesting(assert);
                    buttonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
                    buttonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
                    buttonTesting.assertEnabled(buttons.eq(2), 'delete-button');
                    buttonTesting.assertEnabled(buttons.eq(3), 'edit-roles-button');
                    buttonTesting.assertEnabled(buttons.eq(4), 'edit-permissions-button');
                    var fields = Serene.DialogTesting.getVisibleFields(dialog);
                    assert.strictEqual(7, fields.length, 'has 7 fields');
                    var formTesting = new Serene.FormTesting(assert);
                    var username = fields.eq(0);
                    formTesting.assertTitle(username, 'Username');
                    formTesting.assertRequired(username);
                    formTesting.assertEditable(username);
                    formTesting.assertHasClass(username, 's-StringEditor');
                    formTesting.assertMaxLength(username, 100);
                    formTesting.assertValue(username, 'some.thing');
                    var displayName = fields.eq(1);
                    formTesting.assertTitle(displayName, 'Display Name');
                    formTesting.assertRequired(displayName);
                    formTesting.assertEditable(displayName);
                    formTesting.assertHasClass(displayName, 's-StringEditor');
                    formTesting.assertMaxLength(displayName, 100);
                    formTesting.assertValue(displayName, 'Some Thing');
                    var email = fields.eq(2);
                    formTesting.assertTitle(email, 'Email');
                    formTesting.assertNotRequired(email);
                    formTesting.assertEditable(email);
                    formTesting.assertHasClass(email, 'emailuser');
                    formTesting.assertMaxLength(email, 100);
                    formTesting.assertValue(email, 'some_thing@somedomain.com');
                    var emaildomain = email.find('.emaildomain');
                    assert.ok(Serene.EditorTesting.isEditable(emaildomain), 'email domain is editable');
                    var image = fields.eq(3);
                    formTesting.assertTitle(image, 'User Image');
                    formTesting.assertNotRequired(image);
                    formTesting.assertEditable(image);
                    formTesting.assertHasClass(image, 's-ImageUploadEditor');
                    formTesting.assertValue(image, null);
                    var password = fields.eq(4);
                    formTesting.assertTitle(password, 'Password');
                    formTesting.assertNotRequired(password);
                    formTesting.assertEditable(password);
                    formTesting.assertHasClass(password, 's-PasswordEditor');
                    formTesting.assertEditorIs(password, 'input[type=password]');
                    formTesting.assertMaxLength(password, 50);
                    formTesting.assertValue(password, '');
                    var confirm = fields.eq(5);
                    formTesting.assertTitle(confirm, 'Confirm Password');
                    formTesting.assertNotRequired(confirm);
                    formTesting.assertEditable(confirm);
                    formTesting.assertHasClass(confirm, 's-PasswordEditor');
                    formTesting.assertEditorIs(confirm, 'input[type=password]');
                    formTesting.assertMaxLength(confirm, 50);
                    formTesting.assertValue(confirm, '');
                    var source = fields.eq(6);
                    formTesting.assertTitle(source, 'Source');
                    formTesting.assertNotRequired(source);
                    formTesting.assertNotEditable(source);
                    formTesting.assertHasClass(source, 's-StringEditor');
                    formTesting.assertMaxLength(source, 4);
                    formTesting.assertValue(source, 'some');
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
                assert.ok(!dialog.element.is(':visible'), 'initially invisible');
                dialog.dialogOpen();
                var uiDialog = dialog.element.closest('.ui-dialog');
                assert.equal(1, uiDialog.length, 'element under .ui-dialog');
                assert.ok(uiDialog.hasClass("s-Dialog"), 'has dialog css class');
                assert.ok(uiDialog.hasClass("s-UserDialog"), 'has classname css class');
                assert.ok(uiDialog.hasClass("s-Administration-UserDialog"), 'has module prefixed css class');
                assert.ok(uiDialog.is(':visible'), 'visible after dialogOpen');
                dialog.dialogClose();
                assert.ok(!uiDialog.is(':visible'), 'hidden after dialogClose');
                dialog = new Administration.UserDialog();
                dialog.loadNewAndOpenDialog();
                uiDialog = dialog.element.closest('.ui-dialog');
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
                dialog.loadNewAndOpenDialog();
                try {
                    var uiDialog_5 = dialog.element.closest(".ui-dialog");
                    assert.ok(uiDialog_5.is(":visible"), 'open a new entity dialog');
                    assert.strictEqual(Serene.DialogTesting.getDialogTitle(uiDialog_5), "New User", 'has correct title');
                    var buttons = Serene.DialogTesting.getVisibleButtons(dialog);
                    assert.strictEqual(4, buttons.length, 'has 4 visible buttons');
                    var buttonTesting = new Serene.ButtonTesting(assert);
                    buttonTesting.assertEnabled(buttons.eq(0), 'save-and-close-button');
                    buttonTesting.assertEnabled(buttons.eq(1), 'apply-changes-button');
                    buttonTesting.assertDisabled(buttons.eq(2), 'edit-roles-button');
                    buttonTesting.assertDisabled(buttons.eq(3), 'edit-permissions-button');
                    var fields = Serene.DialogTesting.getVisibleFields(dialog);
                    assert.strictEqual(7, fields.length, 'has 7 fields');
                    var formTesting = new Serene.FormTesting(assert);
                    var username = fields.eq(0);
                    formTesting.assertTitle(username, 'Username');
                    formTesting.assertRequired(username);
                    formTesting.assertEditable(username);
                    formTesting.assertHasClass(username, 's-StringEditor');
                    formTesting.assertMaxLength(username, 100);
                    formTesting.assertValue(username, '');
                    var displayName = fields.eq(1);
                    formTesting.assertTitle(displayName, 'Display Name');
                    formTesting.assertRequired(displayName);
                    formTesting.assertEditable(displayName);
                    formTesting.assertHasClass(displayName, 's-StringEditor');
                    formTesting.assertMaxLength(displayName, 100);
                    formTesting.assertValue(displayName, '');
                    var email = fields.eq(2);
                    formTesting.assertTitle(email, 'Email');
                    formTesting.assertNotRequired(email);
                    formTesting.assertEditable(email);
                    formTesting.assertHasClass(email, 'emailuser');
                    formTesting.assertMaxLength(email, 100);
                    formTesting.assertValue(email, '');
                    var emaildomain = email.find('.emaildomain');
                    assert.ok(Serene.EditorTesting.isEditable(emaildomain), 'email domain is editable');
                    var image = fields.eq(3);
                    formTesting.assertTitle(image, 'User Image');
                    formTesting.assertNotRequired(image);
                    formTesting.assertEditable(image);
                    formTesting.assertHasClass(image, 's-ImageUploadEditor');
                    formTesting.assertValue(image, null);
                    var password = fields.eq(4);
                    formTesting.assertTitle(password, 'Password');
                    formTesting.assertRequired(password);
                    formTesting.assertEditable(password);
                    formTesting.assertHasClass(password, 's-PasswordEditor');
                    formTesting.assertEditorIs(password, 'input[type=password]');
                    formTesting.assertMaxLength(password, 50);
                    formTesting.assertValue(password, '');
                    var confirm = fields.eq(5);
                    formTesting.assertTitle(confirm, 'Confirm Password');
                    formTesting.assertRequired(confirm);
                    formTesting.assertEditable(confirm);
                    formTesting.assertHasClass(confirm, 's-PasswordEditor');
                    formTesting.assertEditorIs(confirm, 'input[type=password]');
                    formTesting.assertMaxLength(confirm, 50);
                    formTesting.assertValue(confirm, '');
                    var source = fields.eq(6);
                    formTesting.assertTitle(source, 'Source');
                    formTesting.assertNotRequired(source);
                    formTesting.assertNotEditable(source);
                    formTesting.assertHasClass(source, 's-StringEditor');
                    formTesting.assertMaxLength(source, 4);
                    formTesting.assertValue(source, 'site');
                    formTesting.setValue(username, 'ABC  ');
                    formTesting.setValue(displayName, 'DEF');
                    formTesting.setValue(email, 'ghi@jkl.com');
                    formTesting.setValue(password, '1234567');
                    formTesting.setValue(confirm, '1234567');
                    var datachangeTriggers = 0;
                    dialog.element.on('ondatachange', function () {
                        datachangeTriggers++;
                    });
                    var ajax_8 = new Serene.ServiceTesting.FakeAjax();
                    var createCalls = 0;
                    ajax_8.addServiceHandler("~/services/Administration/User/Create", function (s) {
                        createCalls++;
                        assert.deepEqual(s.request, {
                            Entity: {
                                Username: 'ABC  ',
                                DisplayName: 'DEF',
                                Email: 'ghi@jkl.com',
                                Password: '1234567',
                                UserImage: null
                            }
                        }, 'save request');
                        var retrieveCalls = 0;
                        ajax_8.addServiceHandler("~/services/Administration/User/Retrieve", function (s) {
                            retrieveCalls++;
                            assert.deepEqual(s.request, { EntityId: 9876 }, 'retrieve request');
                            setTimeout(function () {
                                try {
                                    assert.strictEqual(createCalls, 1, 'create should be called once');
                                    assert.strictEqual(retrieveCalls, 1, "retrieve should be called once");
                                    assert.strictEqual(datachangeTriggers, 1, "data change trigger should be called once");
                                    assert.ok(uiDialog_5.is(":visible"), 'dialog should stay open');
                                    formTesting.assertValue(username, 'ABC');
                                    formTesting.assertValue(displayName, 'DEF');
                                    formTesting.assertValue(email, 'ghi@jkl.com');
                                    formTesting.assertValue(password, '');
                                    formTesting.assertValue(confirm, '');
                                    formTesting.assertValue(source, 'some');
                                }
                                finally {
                                    toastr.remove();
                                    ajax_8.dispose();
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
                dialog.loadNewAndOpenDialog();
                try {
                    var uiDialog_6 = dialog.element.closest(".ui-dialog");
                    assert.ok(uiDialog_6.is(":visible"), 'open a new entity dialog');
                    assert.strictEqual(Serene.DialogTesting.getDialogTitle(uiDialog_6), "New User", 'has correct title');
                    var fields = Serene.DialogTesting.getVisibleFields(dialog);
                    assert.strictEqual(7, fields.length, 'has 7 fields');
                    var formTesting = new Serene.FormTesting(assert);
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
                    var ajax_9 = new Serene.ServiceTesting.FakeAjax();
                    var createCalls = 0;
                    ajax_9.addServiceHandler("~/services/Administration/User/Create", function (s) {
                        createCalls++;
                        assert.deepEqual(s.request, {
                            Entity: {
                                Username: 'ABC  ',
                                DisplayName: 'DEF',
                                Email: 'ghi@jkl.com',
                                Password: '1234567',
                                UserImage: null
                            }
                        }, 'save request');
                        var retrieveCalls = 0;
                        ajax_9.addServiceHandler("~/services/Administration/User/Retrieve", function (s) {
                            throw new Error("retrieve shouldn't be called!");
                        });
                        setTimeout(function () {
                            try {
                                assert.strictEqual(createCalls, 1, 'create should be called once');
                                assert.strictEqual(retrieveCalls, 0, "retrieve shouldn't be called");
                                assert.strictEqual(datachangeTriggers, 1, "data change trigger should be called once");
                                assert.ok(!uiDialog_6.is(":visible"), 'dialog should be closed');
                            }
                            finally {
                                toastr.remove();
                                ajax_9.dispose();
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
//# sourceMappingURL=Serene.Test.js.map