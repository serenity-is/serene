var Serenity;
(function (Serenity) {
    var SingleLineTextFormatter = /** @class */ (function () {
        function SingleLineTextFormatter() {
        }
        SingleLineTextFormatter_1 = SingleLineTextFormatter;
        SingleLineTextFormatter.prototype.format = function (ctx) {
            return SingleLineTextFormatter_1.formatValue(ctx.value);
        };
        SingleLineTextFormatter.formatValue = function (value) {
            var text = $('<div/>').html(value || '').text();
            return Q.toSingleLine(text);
        };
        SingleLineTextFormatter = SingleLineTextFormatter_1 = __decorate([
            Serenity.Decorators.registerFormatter('Serenity.SingleLineTextFormatter')
        ], SingleLineTextFormatter);
        return SingleLineTextFormatter;
        var SingleLineTextFormatter_1;
    }());
    Serenity.SingleLineTextFormatter = SingleLineTextFormatter;
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    /**
     * A dialog/panel base class that easily generates a wizard UI from tabs in a form definition (e.g. Form.cs)
     */
    var WizardDialog = /** @class */ (function (_super) {
        __extends(WizardDialog, _super);
        /**
         * Creates a new wizard dialog
         * @param opt options, might be used by derived classes
         */
        function WizardDialog(opt) {
            var _this = _super.call(this, opt) || this;
            _this._step = 1;
            _this.element.children().addClass("wizard-horz");
            _this.wizardGrid = new Serenity.PropertyGrid(_this.byId("WizardGrid"), _this.getPropertyGridOptions());
            _this.wizardGrid.element.children(".property-tabs").children('li').each(function (i, li) {
                var $li = $(li);
                var h = $li.children('a').html();
                $li.html('').attr('data-step', i + 1);
                $('<span class="badge"/>').text(i + 1).appendTo($li);
                $('<span class="text"/>').html(h).appendTo($li);
                $('<span class="chevron"/>').appendTo($li);
            });
            _this.byId("CancelButton").click(function (e) { return _this.confirmCancel(e); });
            _this.byId("BackButton").click(function () {
                _this.moveToStep(_this.step - 1);
            });
            _this.byId("NextButton").click(function () {
                if (!_this.validateForm())
                    return false;
                _this.moveToStep(_this.step + 1);
            });
            _this.wizardGrid.element.children(".property-tabs")
                .on("click", "li", function (e) {
                var step = $(e.currentTarget).data('step');
                if (step > _this.step)
                    return;
                _this.moveToStep(step);
            });
            _this.wizardGrid.load(_this.getInitialEntity());
            _this.element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e))
                    return;
                _this.confirmCancel(e);
            });
            return _this;
        }
        /**
         * gets property grid options
         */
        WizardDialog.prototype.getPropertyGridOptions = function () {
            return {
                idPrefix: this.idPrefix,
                mode: 1 /* insert */,
                items: this.getPropertyItems(),
                localTextPrefix: this.getLocalTextPrefix(),
                useCategories: true
            };
        };
        /**
         * gets form key to use to load property items / tabs
         */
        WizardDialog.prototype.getFormKey = function () {
            return null;
        };
        /**
         * gets local text prefix for labels
         */
        WizardDialog.prototype.getLocalTextPrefix = function () {
            return "";
        };
        /**
         * gets list of property items to shown on form, uses form key to load items by default
         */
        WizardDialog.prototype.getPropertyItems = function () {
            var formKey = this.getFormKey();
            if (formKey)
                return Q.getForm(formKey);
            return [];
        };
        /**
         * gets initial entity to load onto form, override these to customize initial form values
         */
        WizardDialog.prototype.getInitialEntity = function () {
            return {};
        };
        Object.defineProperty(WizardDialog.prototype, "maxSteps", {
            // gets maximum number of steps from
            get: function () {
                return this.wizardGrid.element
                    .children(".property-tabs")
                    .children("li")
                    .length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * moves to a step, by calling one of next, back or finish methods based on target step
         * @param toStep the target step to move to
         */
        WizardDialog.prototype.moveToStep = function (toStep) {
            if (toStep == this.step || toStep < 1 || toStep > this.maxSteps + 1)
                return;
            if (toStep >= this.maxSteps + 1) {
                this.finish();
                return;
            }
            (toStep < this.step ? this.back : this.next).call(this, toStep);
        };
        Object.defineProperty(WizardDialog.prototype, "step", {
            // gets current step
            get: function () {
                return this._step;
            },
            // sets current step directly, skipping any validation
            set: function (value) {
                this.getStepLink(this._step).removeClass("in active");
                this.getStepPanel(this._step).removeClass("in active");
                this.getStepLink(value).addClass("in active");
                this.getStepPanel(value).addClass("in active")
                    .find(".require-layout").triggerHandler("layout");
                var s;
                for (s = value; s <= this._step; s++)
                    this.getStepLink(s).removeClass("complete").find("span.badge").removeClass("badge-success");
                for (s = this._step; s < value; s++)
                    this.getStepLink(s).addClass("complete").find("span.badge").addClass("badge-success");
                this._step = value;
                this.byId("BackButton").toggleClass('disabled', this._step <= 1);
                this.byId("NextButton").children('.txt').text(Q.text("Site.WizardDialog." +
                    (this._step == this.maxSteps ? "Finish" : "Next") + "Button"));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * called to reset the form, and go back to first step
         */
        WizardDialog.prototype.reset = function () {
            this.step = 1;
            this.wizardGrid.load(this.getInitialEntity());
        };
        /**
         * is called when user clicks the Finish button (next button on last step)
         */
        WizardDialog.prototype.finish = function () {
            this.dialogClose();
        };
        /**
         * next method is called when user tries to go forward
         * @param toStep the step user is trying to move to, usually one step ahead
         */
        WizardDialog.prototype.next = function (toStep) {
            this.step = toStep;
        };
        /**
         * back method is called when user tries to go backward
         * @param toStep the step user is trying to move to, usually one step back but can also be multiple
         */
        WizardDialog.prototype.back = function (toStep) {
            this.step = toStep;
        };
        WizardDialog.prototype.getStepLink = function (step) {
            return this.wizardGrid.element
                .children(".property-tabs")
                .children("li").eq(step - 1);
        };
        WizardDialog.prototype.getStepPanel = function (step) {
            return this.wizardGrid.element
                .children(".property-panes")
                .children().eq(step - 1);
        };
        /**
         * make sure derived classes use WizardDialog template,
         * if they don't define one of their own
         */
        WizardDialog.prototype.getFallbackTemplate = function () {
            return "\n<div class=\"s-Form\">\n    <form id=\"~_Form\" action=\"\">\n        <div id=\"~_WizardGrid\" class=\"wizard-grid\">\n        </div>\n\n        <div class=\"buttons\" style=\"text-align: right; margin: 10px 20px;\">\n            <button id=\"~_CancelButton\" class=\"btn btn-danger\" formnovalidate><i class=\"fa fa-ban\"></i> Cancel</button>\n            <button id=\"~_BackButton\" class=\"btn btn-primary disabled\" formnovalidate><i class=\"fa fa-chevron-left\"></i> " + Q.text("Site.WizardDialog.BackButton") + "</button>\n            <button id=\"~_NextButton\" class=\"btn btn-primary\" formnovalidate><span class=\"txt\">" + Q.text("Site.WizardDialog.NextButton") + "</span> <i class=\"fa fa-chevron-right\"></i></button>\n        </div>\n    </form>\n</div>";
        };
        /**
         * gets cancel confirmation message, return null to disable confirmation
         */
        WizardDialog.prototype.getCancelMessage = function () {
            return Q.text("Site.WizardDialog.CancelMessage");
        };
        /**
         * confirms when user tries to cancel or close the wizard
         * @param e
         */
        WizardDialog.prototype.confirmCancel = function (e) {
            var _this = this;
            var cancelMessage = this.getCancelMessage();
            if (!cancelMessage) {
                e.preventDefault();
                this.dialogClose();
                return;
            }
            e.preventDefault();
            Q.confirm(cancelMessage, function () {
                _this.dialogClose();
            });
        };
        /** gets save entity from form, optionally from a limited list of steps (tabs)
         * @param steps the list of steps to read data from, pass null to get all
         */
        WizardDialog.prototype.getSaveEntity = function (steps) {
            var entity = {};
            this.wizardGrid.save(entity);
            if (steps != null) {
                var maxSteps = this.maxSteps;
                for (var i = 1; i <= maxSteps; i++) {
                    if (steps.indexOf(i) >= 0)
                        continue;
                    var panel = this.getStepPanel(i);
                    panel.find('.field').each(function (z, el) {
                        var field = $(el).attr('class').split(' ')[1];
                        if (field)
                            delete entity[field];
                    });
                }
            }
            return entity;
        };
        Object.defineProperty(WizardDialog.prototype, "compactSteps", {
            // gets value of compact steps option
            get: function () {
                return this.element.children().hasClass("compact-steps");
            },
            // sets value of compact steps option, when it is on, inactive step titles only show
            // numbers and gets visible on hover. this is better there are many steps to fit
            set: function (value) {
                this.element.children().toggleClass("compact-steps", value);
            },
            enumerable: true,
            configurable: true
        });
        return WizardDialog;
    }(Serenity.TemplatedDialog));
    Serenity.WizardDialog = WizardDialog;
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var CardViewItems = /** @class */ (function (_super) {
        __extends(CardViewItems, _super);
        function CardViewItems() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CardViewItems.prototype.render = function () {
            var _this = this;
            return (React.createElement("div", { className: "card-items" }, this.props.items.map(function (item, index) {
                return React.createElement("div", { className: "card-item", key: index }, _this.props.renderItem(item, index));
            })));
        };
        return CardViewItems;
    }(React.Component));
    Serenity.CardViewItems = CardViewItems;
})(Serenity || (Serenity = {}));
// thanks a lot to Brainweber Inc. for sponsoring this feature and letting us share it with community
var Serenity;
(function (Serenity) {
    /**
     * A mixin that can be applied to a DataGrid for card view functionality
     */
    var CardViewMixin = /** @class */ (function () {
        function CardViewMixin(options) {
            var _this = this;
            this.options = options;
            var dg = this.dataGrid = options.grid;
            var idProperty = dg.getIdProperty();
            var getId = this.getId = function (item) { return item[idProperty]; };
            var btnGroup = $("\n<div class=\"btn-group view-switch\" data-toggle=\"buttons\" style=\"float: right\">\n    <label class=\"btn btn-default active\" title=\"" + Q.text("Site.CardViewMixin.ListView") + "\">\n        <i class=\"fa fa-th-list text-purple\"></i>\n        <input type=\"radio\" name=\"" + dg.element.attr('id') + "_ViewType\" value=\"list\" checked />\n    </label>\n    <label class=\"btn btn-default\" title=\"" + Q.text("Site.CardViewMixin.CardView") + "\">\n        <i class=\"fa fa-th-large text-purple\"></i>\n        <input type=\"radio\" name=\"" + dg.element.attr('id') + "_ViewType\" value=\"card\" />    \n    </label>\n</div>")
                .prependTo(dg.element.find('.grid-title'));
            this.cardContainer = $('<div class="card-container" style="display: none;"></div>')
                .insertAfter(dg.element.children('.grid-container'));
            btnGroup.find('input').change(function (e) { return _this.switchView($(e.target).val()); });
            this.resizeCardView();
            dg.element.bind('layout', function () { return _this.resizeCardView(); });
            dg.view.onDataChanged.subscribe(function () {
                _this.updateCardItems();
            });
            var oldCurrentSettings = dg.getCurrentSettings;
            dg.getCurrentSettings = function (flag) {
                var settings = oldCurrentSettings.apply(dg, [flag]);
                settings['viewType'] = btnGroup.find('input:checked').val();
                return settings;
            };
            var oldRestoreSettings = dg.restoreSettings;
            dg.restoreSettings = function (settings, flags) {
                oldRestoreSettings.apply(dg, [settings, flags]);
                if (settings == null) {
                    var storage = this.getPersistanceStorage();
                    if (storage == null)
                        return;
                    var json = Q.trimToNull(storage.getItem(this.getPersistanceKey()));
                    if (!json)
                        return;
                    settings = JSON.parse(json);
                }
                var viewType = settings.viewType || 'list';
                var currentViewType = btnGroup.find('input:checked').val() || 'list';
                if (viewType != currentViewType) {
                    btnGroup.find('input').eq(viewType == 'card' ? 1 : 0).click();
                }
            };
        }
        CardViewMixin.prototype.switchView = function (viewType) {
            this.resizeCardView();
            var card = viewType == 'card';
            this.dataGrid.element.children('.card-container').toggle(card);
            this.dataGrid.element.children('.grid-container').toggle(!card);
            if (card)
                this.updateCardItems();
            this.dataGrid.persistSettings();
        };
        CardViewMixin.prototype.updateCardItems = function () {
            ReactDOM.render(React.createElement(Serenity.CardViewItems, {
                items: this.dataGrid.getItems(),
                renderItem: this.options.renderItem
            }), this.cardContainer[0]);
        };
        CardViewMixin.prototype.resizeCardView = function () {
            var gc = this.dataGrid.element.children('.grid-container');
            var width = this.dataGrid.element.width();
            var height = gc.height();
            this.dataGrid.element.children('.card-container').css({
                width: width + 'px',
                height: height + 'px'
            });
        };
        return CardViewMixin;
    }());
    Serenity.CardViewMixin = CardViewMixin;
    Q.initFullHeightGridPage = function (gridDiv) {
        $('body').addClass('full-height-page');
        gridDiv.addClass('responsive-height');
        var layout = function () {
            var inPageContent = gridDiv.parent().hasClass('page-content') ||
                gridDiv.parent().is('section.content');
            if (inPageContent) {
                gridDiv.css('height', '1px').css('overflow', 'hidden');
            }
            var cc = gridDiv.children('.card-container');
            if (cc.length && cc.is(':visible')) {
                cc.hide();
                gridDiv.children('.grid-container').show();
                try {
                    Q.layoutFillHeight(gridDiv);
                    gridDiv.triggerHandler('layout');
                }
                finally {
                    gridDiv.children('.grid-container').hide();
                    cc.show();
                }
            }
            else {
                Q.layoutFillHeight(gridDiv);
                if (inPageContent) {
                    gridDiv.css('overflow', '');
                }
                gridDiv.triggerHandler('layout');
            }
        };
        if ($('body').hasClass('has-layout-event')) {
            $('body').bind('layout', layout);
        }
        else if (window.Metronic) {
            window.Metronic.addResizeHandler(layout);
        }
        else {
            $(window).resize(layout);
        }
        layout();
        Q.Router.resolve();
    };
})(Serenity || (Serenity = {}));
// thanks a lot to Brainweber Inc. for sponsoring this feature and letting us share it with community
var Serenity;
(function (Serenity) {
    /**
     * A mixin that can be applied to a DataGrid for favorite views functionality
     */
    var FavoriteViewsMixin = /** @class */ (function () {
        function FavoriteViewsMixin(options) {
            var _this = this;
            this.options = options;
            var dg = this.dataGrid = options.grid;
            var idProperty = dg.getIdProperty();
            var getId = this.getId = function (item) { return item[idProperty]; };
            var dropdown = $("\n<div class=\"dropdown favorite-views\" style=\"float: right\">\n  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"" + dg.element.attr('id') + "_Favorites\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    <i class=\"fa fa-star text-blue\"></i> " + Q.text("Site.FavoriteViewsMixin.FavoriteViews") + "\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n    <li class=\"save\">\n        <div>" + Q.text("Site.FavoriteViewsMixin.SaveView") + "</div>\n        <div><input type=\"text\"></div>\n        <div><button class=\"btn btn-primary save-button\"><i class=\"fa fa-floppy-o\"></i> " + Q.text("Site.FavoriteViewsMixin.SaveButton") + "</button></div>\n    </li>\n  </ul>\n</div>\n")
                .prependTo(dg.element.find(".grid-title"));
            dropdown.on('shown.bs.dropdown', function (e) {
                dropdown.find('input[type=text]').focus();
            });
            var viewName = dropdown.find('li.save input[type=text]');
            dropdown.find('button.save-button').click(function () {
                var name = Q.trimToNull(viewName.val());
                if (!name) {
                    Q.notifyWarning(Q.text("Site.FavoriteViewsMixin.EmptyNameError"));
                    return;
                }
                var favorites = _this.getFavorites();
                favorites[name] = dg.getCurrentSettings();
                _this.saveFavorites(favorites);
                Q.notifySuccess(Q.format(Q.text("Site.FavoriteViewsMixin.SaveSuccessMessage"), name));
                viewName.val('');
                _this.populateFavorites();
            });
            this.ul = dropdown.children("ul");
            this.ul.on('click', 'i.fa-trash-o', function (e) {
                var name = $(e.target).closest('li').children('a').text();
                var favorites = _this.getFavorites();
                delete favorites[name];
                _this.saveFavorites(favorites);
                _this.populateFavorites();
                Q.notifyWarning(Q.format(Q.text("Site.FavoriteViewsMixin.DeleteSuccessMessage"), name));
            });
            this.ul.on('click', 'a', function (e) {
                var name = $(e.target).text();
                var favorites = _this.getFavorites();
                var settings = favorites[name];
                if (settings) {
                    dg.restoreSettings(settings);
                    dg.refresh();
                    Q.notifySuccess(Q.format(Q.text("Site.FavoriteViewsMixin.LoadedViewMessage"), name));
                }
            });
            this.populateFavorites();
        }
        FavoriteViewsMixin.prototype.populateFavorites = function () {
            var favorites = this.getFavorites();
            var saveLI = this.ul.children('.save');
            this.ul.children().not(saveLI).remove();
            var keys = Object.keys(favorites).sort();
            if (keys.length) {
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var li = $('<li class="fav"><a href="javascript:;"></a></li>')
                        .insertBefore(saveLI)
                        .children('a')
                        .text(k)
                        .end();
                    $('<i class="fa fa-trash-o pull-right"></i>')
                        .attr('title', Q.text("Site.FavoriteViewsMixin.DeleteButtonHint"))
                        .appendTo(li);
                }
                $('<li role="separator" class="divider"></li>').insertBefore(saveLI);
            }
        };
        FavoriteViewsMixin.prototype.saveFavorites = function (favorites) {
            var storage = this.dataGrid.getPersistanceStorage();
            var key = "Views:" + this.dataGrid.getPersistanceKey();
            storage.setItem(key, JSON.stringify(favorites));
        };
        FavoriteViewsMixin.prototype.getFavorites = function () {
            var storage = this.dataGrid.getPersistanceStorage();
            var key = "Views:" + this.dataGrid.getPersistanceKey();
            return JSON.parse(storage.getItem(key) || "{}") || {};
        };
        return FavoriteViewsMixin;
    }());
    Serenity.FavoriteViewsMixin = FavoriteViewsMixin;
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    function toAggregator(summaryType) {
        switch (summaryType) {
            case Serenity.SummaryType.Sum: return Slick.Aggregators.Sum;
            case Serenity.SummaryType.Avg: return Slick.Aggregators.Avg;
            case Serenity.SummaryType.Max: return Slick.Aggregators.Max;
            case Serenity.SummaryType.Min: return Slick.Aggregators.Min;
        }
        return null;
    }
    var CustomSummaryMixin = /** @class */ (function () {
        function CustomSummaryMixin(options) {
            var dg = options.grid;
            var getDefaultAggregators = function () {
                var columns = dg['allColumns'];
                var aggregators = [];
                for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                    var x = columns_1[_i];
                    if (x.sourceItem == null)
                        continue;
                    if (x.sourceItem.summaryType != null &&
                        x.sourceItem.summaryType != Serenity.SummaryType.Disabled) {
                        var aggregator = toAggregator(x.sourceItem.summaryType);
                        if (aggregator == null)
                            continue;
                        x.summaryType = x.sourceItem.summaryType;
                        aggregators.push(new aggregator(x.field));
                    }
                }
                return aggregators;
            };
            dg.view.setSummaryOptions({
                aggregators: getDefaultAggregators()
            });
            var aggregatesPopup = $("<ul class=\"s-AggregatesPopup\" \n                style=\"display:none;position:absolute;z-index:100000;\">\n                <li data-agg=\"1\">Sum</li>\n                <li data-agg=\"2\">Average</li>\n                <li data-agg=\"3\">Min</li>\n                <li data-agg=\"4\">Max</li>\n            </ul>").appendTo(document.body)
                .click(function (e) {
                if (!$(e.target).is("li"))
                    return;
                var col = aggregatesPopup.data("column");
                if (col == null || !col.id)
                    return;
                var column = Q.tryFirst(dg['allColumns'], function (x) { return x.id == col.id; });
                if (!column)
                    return;
                if (column.sourceItem == null ||
                    column.sourceItem.summaryType == null ||
                    column.sourceItem.summaryType == Serenity.SummaryType.Disabled)
                    return;
                var agg = Q.toId($(e.target).data('agg'));
                if (agg === column.summaryType)
                    return;
                column.summaryType = agg;
                var aggregators = dg['allColumns']
                    .filter(function (x) { return x.summaryType; })
                    .map(function (x) {
                    var aggregator = toAggregator(x.summaryType);
                    if (aggregator == null)
                        return null;
                    return new aggregator(x.field);
                }).filter(function (x) { return x != null; });
                dg.view.setSummaryOptions({
                    aggregators: aggregators
                });
                var grouping = dg.view.getGrouping();
                for (var i = 0; i < grouping.length; i++)
                    grouping[i].aggregators = aggregators;
                dg.view.setGrouping(grouping);
                dg.slickGrid.invalidate();
            });
            dg.element.on('click', '.slick-footerrow-column', function (e) {
                e.preventDefault();
                var col = $(e.currentTarget).data('column');
                if (!col || !col.id)
                    return;
                var column = Q.tryFirst(dg['allColumns'], function (x) { return x.id == col.id; });
                if (!column)
                    return;
                if (!column ||
                    !column.sourceItem ||
                    column.sourceItem.summaryType == null ||
                    column.sourceItem.summaryType == Serenity.SummaryType.Disabled)
                    return;
                aggregatesPopup.data('column', column)
                    .show()
                    .css('top', (e.pageY - aggregatesPopup.height()) + 'px')
                    .css('left', e.pageX + 'px')
                    .children('li')
                    .removeClass('active')
                    .end()
                    .children('li[data-agg=' + column.summaryType + ']')
                    .addClass('active');
                $(document.body).off('click.aggregatesMenu' + dg['uniqueName']);
                window.setTimeout(function () { return $(document.body)
                    .on("click.aggregatesMenu" + dg['uniqueName'], function () {
                    aggregatesPopup.hide();
                    $(document.body).off('click.aggregatesMenu' + dg['uniqueName']);
                }); }, 1);
            });
            var oldCurrentSettings = dg.getCurrentSettings;
            dg.getCurrentSettings = function (flags) {
                var settings = oldCurrentSettings.apply(dg, [flags]);
                return settings;
            };
            var oldRestoreSettings = dg.restoreSettings;
            dg.restoreSettings = function (settings, flags) {
                oldRestoreSettings.apply(dg, [settings, flags]);
            };
        }
        return CustomSummaryMixin;
    }());
    Serenity.CustomSummaryMixin = CustomSummaryMixin;
})(Serenity || (Serenity = {}));
var Slick;
(function (Slick) {
    var Plugins;
    (function (Plugins) {
        /**
         * Based on plugin at https://github.com/muthukumarse/Slickgrid
         */
        var DraggableGrouping = /** @class */ (function () {
            function DraggableGrouping(options) {
                this.onGroupChanged = new Slick.Event();
                var defaults = {};
                this.options = $.extend(true, {}, defaults, options);
            }
            DraggableGrouping.prototype.init = function (grid) {
                this.grid = grid;
                this.gridUid = grid['getUID']();
                this.dropbox = $(grid['getGroupingPanel']());
                var dropPlaceHolderText = this.options.dropPlaceHolderText ||
                    Q.tryGetText("Site.DraggableGroupingMixin.DropPlaceholder") ||
                    "Drag a column header here to group by that column";
                this.dropbox.html("<div class='slick-dropped-placeholder'>" +
                    dropPlaceHolderText + "</div>" +
                    ("<div class=\"slick-group-expand-all\" title=\"" + (Q.tryGetText("Site.DraggableGrupingMixin.ExpandAllButton") || "Expand All") + "\" style=\"display:none\"></div>") +
                    ("<div class=\"slick-group-collapse-all\" title=\"" + (Q.tryGetText("Site.DraggableGrupingMixin.CollapseAllButton") || "Collapse All") + "\" style=\"display:none\"></div>"));
                this.dropboxPlaceholder = this.dropbox.find(".slick-dropped-placeholder");
                this.expandAll = this.dropbox.find(".slick-group-expand-all");
                this.collapseAll = this.dropbox.find(".slick-group-collapse-all");
                this.setupColumnDropbox();
                var cols = this.getColumns();
                for (var i = 0; i < cols.length; i++) {
                    var col = cols[i];
                    grid['updateColumnHeader'](col.id);
                }
                this.columnsGroupBy = [];
            };
            DraggableGrouping.prototype.getColumns = function () {
                return (this.options.getAllColumns && this.options.getAllColumns()) ||
                    this.grid.getColumns();
            };
            DraggableGrouping.prototype.destroy = function () {
                this.onGroupChanged.clear();
            };
            DraggableGrouping.prototype.setupColumnDropbox = function () {
                var _this = this;
                var _self = this;
                this.dropbox.droppable({
                    activeClass: "ui-state-default",
                    hoverClass: "ui-state-hover",
                    accept: ":not(.ui-sortable-helper)",
                    deactivate: function (event, ui) {
                        _this.dropbox.removeClass("slick-header-column-denied");
                    },
                    drop: function (event, ui) {
                        _self.handleGroupByDrop(this, ui.draggable.attr('id').replace(_self.gridUid, ""));
                    },
                    over: function (event, ui) {
                        var id = (ui.draggable).attr('id').replace(_this.gridUid, "");
                        _this.getColumns().forEach(function (e, i, a) {
                            if (e.id == id) {
                                if (e.grouping !== false) {
                                    _this.dropbox.addClass("slick-header-column-denied");
                                }
                            }
                        });
                    }
                });
                this.dropbox.sortable({
                    items: "div.slick-dropped-grouping",
                    cursor: "default",
                    tolerance: "pointer",
                    helper: "clone",
                    update: function (event, ui) {
                        var sortArray = $(event.target).sortable('toArray', {
                            attribute: 'data-id'
                        }), newGroupingOrder = [];
                        for (var i = 0, l = sortArray.length; i < l; i++) {
                            for (var a = 0, b = _this.columnsGroupBy.length; a < b; a++) {
                                if (_this.columnsGroupBy[a].id == sortArray[i]) {
                                    newGroupingOrder.push(_this.columnsGroupBy[a]);
                                    break;
                                }
                            }
                        }
                        _this.columnsGroupBy = newGroupingOrder;
                        _this.updateGroupBy();
                    }
                });
                this.expandAll.on('click', function (e) {
                    _this.grid.getData().expandAllGroups();
                });
                this.collapseAll.on('click', function (e) {
                    _this.grid.getData().collapseAllGroups();
                });
            };
            DraggableGrouping.prototype.getGroupingFor = function (column) {
                var g = null;
                if (this.options.getGroupingFor) {
                    g = this.options.getGroupingFor(column);
                }
                if (g === false)
                    return g;
                return $.extend({
                    getter: column.field || column.id,
                    formatter: function (g) {
                        var text;
                        if (column.formatter) {
                            try {
                                text = column.formatter(-1, -1, g.value, column, (_a = {}, _a[column.field] = g, _a));
                            }
                            catch (e) {
                                text = Q.htmlEncode(g.value);
                            }
                        }
                        else
                            text = Q.htmlEncode(g.value);
                        return (column.name || column.field || column.id) +
                            ": " + text + " <span style='color:green'>(" +
                            g.count + " items)</span>";
                        var _a;
                    },
                    collapsed: true
                }, g);
            };
            DraggableGrouping.prototype.handleGroupByDrop = function (container, columnid) {
                var _this = this;
                var columnAllowed = true;
                this.columnsGroupBy.forEach(function (clmn, i, a) {
                    if (clmn.id == columnid) {
                        columnAllowed = false;
                    }
                });
                var gridColumns = this.getColumns();
                if (!columnAllowed)
                    return;
                gridColumns.forEach(function (col, i, a) {
                    if (col.id !== columnid || col.grouping === false)
                        return;
                    if (col.grouping == null || $.isEmptyObject(col.grouping)) {
                        col.grouping = _this.getGroupingFor(col);
                        if (col.grouping === false)
                            return;
                    }
                    var entry = $("<div id='" + _this.gridUid +
                        col.id + "_entry' data-id='" + col.id +
                        "' class='slick-dropped-grouping'>");
                    var groupText = $("<div style='display: inline-flex'>" +
                        col.name + "</div>");
                    groupText.appendTo(entry);
                    var groupRemoveIcon = $("<div class='slick-groupby-remove'>&nbsp;</div>");
                    if (_this.options.deleteIconCssClass)
                        groupRemoveIcon.addClass(_this.options.deleteIconCssClass);
                    if (_this.options.deleteIconImage)
                        groupRemoveIcon.css("background", "url(" + _this.options.deleteIconImage + ") no-repeat center right");
                    if (!_this.options.deleteIconCssClass && !_this.options.deleteIconImage)
                        groupRemoveIcon.addClass('slick-groupby-remove-image');
                    groupRemoveIcon.appendTo(entry);
                    $("</div>").appendTo(entry);
                    entry.appendTo(container);
                    _this.addColumnGroupBy(col);
                    _this.addGroupByRemoveClickHandler(col.id, container, entry);
                });
                this.grid.invalidate();
            };
            DraggableGrouping.prototype.addColumnGroupBy = function (column) {
                this.columnsGroupBy.push(column);
                this.updateGroupBy();
            };
            DraggableGrouping.prototype.addGroupByRemoveClickHandler = function (id, container, entry) {
                var _this = this;
                $("#" + this.gridUid + id + "_entry >.slick-groupby-remove")
                    .one('click', function () {
                    _this.removeGroupBy(id, entry);
                });
            };
            DraggableGrouping.prototype.setDroppedGroups = function (idList) {
                if (!idList || !idList.length) {
                    this.columnsGroupBy = [];
                    this.dropbox.find(".slick-dropped-grouping").remove();
                }
                else {
                    for (var i = 0; i < idList.length; i++) {
                        this.handleGroupByDrop(this.dropbox, idList[i]);
                    }
                }
                this.updateInterface();
            };
            DraggableGrouping.prototype.removeGroupBy = function (id, entry) {
                entry.remove();
                var gridColumns = this.getColumns();
                var idx;
                while ((idx = Q.indexOf(this.columnsGroupBy, function (x) { return x.id == id; })) >= 0)
                    this.columnsGroupBy.splice(idx, 1);
                this.updateGroupBy();
            };
            DraggableGrouping.prototype.updateInterface = function () {
                var hasGrouping = !!(this.columnsGroupBy && this.columnsGroupBy.length);
                this.collapseAll.toggle(hasGrouping);
                this.expandAll.toggle(hasGrouping);
                this.dropboxPlaceholder.toggle(!hasGrouping);
            };
            DraggableGrouping.prototype.updateGroupBy = function () {
                this.updateInterface();
                if (this.columnsGroupBy.length == 0) {
                    this.grid.getData().setGrouping([]);
                    this.onGroupChanged.notify({ groupColumns: [] });
                    this.grid.invalidate();
                    return;
                }
                var groupingArray = [];
                this.columnsGroupBy.forEach(function (element, index, array) {
                    groupingArray.push(element.grouping);
                });
                this.grid.getData().setGrouping(groupingArray);
                this.grid.invalidate();
                this.onGroupChanged.notify({ groupColumns: groupingArray });
            };
            DraggableGrouping.setupColumnReorder = function (grid, $headers, setupColumnResize, trigger) {
                $headers.filter(":ui-sortable").sortable("destroy");
                var $headerDraggableGroupBy = $(grid['getGroupingPanel']());
                var columns = grid.getColumns();
                var uid = grid['getUID']();
                $headers.sortable({
                    distance: 3,
                    cursor: "default",
                    tolerance: "intersection",
                    helper: "clone",
                    placeholder: "slick-sortable-placeholder ui-state-default slick-header-column",
                    forcePlaceholderSize: true,
                    appendTo: "body",
                    start: function (e, ui) {
                        $(ui.helper).addClass("slick-header-column-active");
                    },
                    beforeStop: function (e, ui) {
                        $(ui.helper).removeClass("slick-header-column-active");
                        var hasDroppedColumn = $headerDraggableGroupBy
                            .find(".slick-dropped-grouping").length;
                        if (hasDroppedColumn > 0) {
                            $headerDraggableGroupBy.find(".slick-dropped-placeholder").hide();
                            $headerDraggableGroupBy.find(".slick-dropped-grouping").show();
                        }
                    },
                    stop: function (e) {
                        if (!grid['getEditorLock']().commitCurrentEdit()) {
                            $(this).sortable("cancel");
                            return;
                        }
                        var reorderedIds = $headers.sortable("toArray");
                        var reorderedColumns = [];
                        for (var i = 0; i < reorderedIds.length; i++) {
                            reorderedColumns.push(columns[grid.getColumnIndex(reorderedIds[i].replace(uid, ""))]);
                        }
                        grid.setColumns(reorderedColumns);
                        trigger(grid.onColumnsReordered, {});
                        e.stopPropagation();
                        setupColumnResize();
                    }
                });
            };
            return DraggableGrouping;
        }());
        Plugins.DraggableGrouping = DraggableGrouping;
    })(Plugins = Slick.Plugins || (Slick.Plugins = {}));
})(Slick || (Slick = {}));
var Serenity;
(function (Serenity) {
    function sortBy(field, reverse, primer) {
        var key = function (x) {
            return primer ? primer(x[field]) : x[field];
        };
        return function (a, b) {
            var A = key(a), B = key(b);
            return (A < B ? -1 : (A > B ? 1 : 0)) * [1, -1][+!!reverse];
        };
    }
    ;
    var DraggableGroupingMixin = /** @class */ (function () {
        function DraggableGroupingMixin(options) {
            var dg = options.grid;
            var plugin = this.plugin = new Slick.Plugins.DraggableGrouping({
                getAllColumns: function () { return dg.allColumns; }
            });
            dg.slickGrid.registerPlugin(plugin);
            plugin.onGroupChanged.subscribe(function () {
                dg.persistSettings(null);
            });
            var oldCurrentSettings = dg.getCurrentSettings;
            dg.getCurrentSettings = function (flags) {
                var settings = oldCurrentSettings.apply(dg, [flags]);
                if (flags == null || flags.groupColumns == null || flags.groupColumns) {
                    var grouping = dg.view.getGrouping() || [];
                    settings['groupColumns'] = grouping.map(function (x) { return x.getter; })
                        .filter(function (x) { return x != null && typeof x == "string"; });
                }
                return settings;
            };
            function loadGroupCols(groupColsToLoad) {
                if (groupColsToLoad == null)
                    return;
                var columns = dg.allColumns;
                var groupCols = groupColsToLoad
                    .map(function (x) { return Q.tryFirst(columns, function (z) { return z.id == x; }); })
                    .filter(function (x) { return x != null; });
                var groupings = groupCols.map(function (e) {
                    if (e['grouping'] == null)
                        e['grouping'] = plugin.getGroupingFor(e);
                    return e['grouping'];
                });
                dg.view.setGrouping(groupings);
                plugin.setDroppedGroups(groupCols.map(function (x) { return x.id; }));
                dg.slickGrid.invalidate();
            }
            ;
            function getDefaultGroupCols() {
                var colsWithOrder = dg.allColumns.filter(function (x) { return x.sourceItem != null &&
                    x.sourceItem.groupOrder != null; });
                if (colsWithOrder.length) {
                    return colsWithOrder.sort(sortBy('groupOrder')).map(function (x) { return x.id; });
                }
                return null;
            }
            var oldRestoreSettings = dg.restoreSettings;
            dg.restoreSettings = function (settings, flags) {
                oldRestoreSettings.apply(dg, [settings, flags]);
                if (!(flags == null || flags.groupColumns == null || flags.groupColumns))
                    return;
                var groupColsToLoad = null;
                if (settings == null) {
                    var storage = this.getPersistanceStorage();
                    if (storage != null) {
                        var json = Q.trimToNull(storage.getItem(this.getPersistanceKey()));
                        if (json) {
                            groupColsToLoad = (JSON.parse(json) || {}).groupColumns;
                        }
                    }
                }
                else
                    groupColsToLoad = settings.groupColumns;
                if (groupColsToLoad == null) {
                    groupColsToLoad = getDefaultGroupCols();
                }
                loadGroupCols(groupColsToLoad);
            };
        }
        return DraggableGroupingMixin;
    }());
    Serenity.DraggableGroupingMixin = DraggableGroupingMixin;
})(Serenity || (Serenity = {}));
var Slick;
(function (Slick) {
    var Plugins;
    (function (Plugins) {
        /*
         Based on SlickGrid Header Menu Plugin (https://github.com/mleibman/SlickGrid/blob/master/plugins/slick.headermenu.js)
         Based on SlickGrid Spreadsheet Plugins (https://github.com/danny-sg/slickgrid-spreadsheet-plugins/blob/master/ext.headerfilter.js)
         (Can't be used at the same time as the header menu plugin as it implements the dropdown in the same way)
        */
        var HeaderFilters = /** @class */ (function () {
            function HeaderFilters(options) {
                this.checkedValues = new window['Set']();
                this.onFilterApplied = new Slick.Event();
                this.onCommand = new Slick.Event();
                this.handler = new Slick.EventHandler();
                var defaults = {
                    buttonImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAALEQAACxEBf2RfkQAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4yMfEgaZUAAACeSURBVDhPvdItDsIwGIfxAoZNAQaDmOEgXAIzsRvgCArNCRBcYAmeO+AQHGBuCWqOhYTP521SQsZI2yzhn/xE3+RxVU3WRoSJoz70OpjiiMxijzH0WhhhgzOeP+RIEOA9E6e4oBqdIFGIr0k8xA43mKjADLXR5wY44IEr1rBGZltIWGIuB9f9P1zgDu+whxW8Q1kXS8T65Tn5x6IypV7aOzNezxwrTQAAAABJRU5ErkJggg==",
                    useColumnFormatter: true,
                    getFilterValues: null
                };
                this.options = $.extend(true, {}, defaults, options);
                this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
            }
            HeaderFilters.prototype.init = function (g) {
                this.grid = g;
                this.handler.subscribe(g.onHeaderCellRendered, this.handleHeaderCellRendered.bind(this))
                    .subscribe(g.onBeforeHeaderCellDestroy, this.handleBeforeHeaderCellDestroy.bind(this))
                    .subscribe(g.onClick, this.handleBodyMouseDown.bind(this))
                    .subscribe(g.onColumnsResized, this.columnsResized.bind(this));
                g.setColumns(g.getColumns());
                $(document.body).bind("mousedown", this.handleBodyMouseDown = this.handleBodyMouseDown.bind(this));
            };
            HeaderFilters.prototype.destroy = function () {
                this.handler.unsubscribeAll();
                $(document.body).unbind("mousedown", this.handleBodyMouseDown);
            };
            HeaderFilters.prototype.getFilterType = function (column) {
                if (column.headerFilterType != null)
                    return column.headerFilterType;
                if (this.options.getFilterType != null) {
                    column.headerFilterType = this.options.getFilterType(column);
                    if (column.headerFilterType != null)
                        return column.headerFilterType;
                }
                if (column.headerFilterType == null)
                    column.headerFilterType = 1 /* value */;
                return column.headerFilterType;
            };
            HeaderFilters.prototype.handleBodyMouseDown = function (e) {
                if (this.menu && this.menu[0] != e.target && !$.contains(this.menu[0], e.target)) {
                    this.hideMenu();
                }
            };
            HeaderFilters.prototype.hideMenu = function () {
                if (this.menu) {
                    this.menu.remove();
                    this.menu = null;
                }
            };
            HeaderFilters.prototype.handleHeaderCellRendered = function (e, args) {
                var _this = this;
                var column = args.column;
                var filterType = this.getFilterType(column);
                if (filterType === 0 /* disabled */)
                    return false;
                var $el = $("<div></div>")
                    .addClass("slick-header-menubutton")
                    .data("column", column);
                if (this.options.buttonImage) {
                    $el.css("background-image", "url(" + this.options.buttonImage + ")");
                }
                $(args.node).addClass('has-header-menubutton');
                $el.on("click", function (e) {
                    e.stopPropagation();
                    _this.showFilter(e);
                }).appendTo(args.node);
            };
            HeaderFilters.prototype.handleBeforeHeaderCellDestroy = function (e, args) {
                $(args.node)
                    .find(".slick-header-menubutton")
                    .remove();
            };
            HeaderFilters.prototype.addMenuItem = function (menu, columnDef, title, command, image) {
                var $item = $("<div class='slick-header-menuitem'>")
                    .data("command", command)
                    .data("column", columnDef)
                    .bind("click", this.handleMenuItemClick)
                    .appendTo(menu);
                var $icon = $("<div class='slick-header-menuicon'>")
                    .appendTo($item);
                if (image) {
                    $icon.css("background-image", "url(" + image + ")");
                }
                $("<span class='slick-header-menucontent'>")
                    .text(title)
                    .appendTo($item);
            };
            HeaderFilters.prototype.addSearchInput = function (menu, columnDef) {
                var _this = this;
                return $("<input class='input' placeholder='"
                    + (Q.tryGetText("Site.HeaderFiltersMixin.Search") || "Search")
                    + "' style='margin-top: 5px; width: 206px'>")
                    .data("column", columnDef)
                    .bind("keyup", function (e) {
                    _this.updateFilterValues(columnDef, function () { });
                })
                    .appendTo(menu);
            };
            HeaderFilters.prototype.updateFilterItems = function (columnDef) {
                var _this = this;
                var filterOptions = "<label><input type='checkbox' value='-1' />" +
                    (Q.tryGetText("Site.HeaderFiltersMixin.SelectAll") || "(Select All)") + "</label>";
                this.checkedValues = new window['Set'](columnDef.headerFilterValues || []);
                for (var i = 0; i < this.filterValues.length; i++) {
                    var filtered = this.checkedValues.has(this.filterValues[i]);
                    filterOptions += "<label><input type='checkbox' value='" + i + "'"
                        + (filtered ? " checked='checked'" : "")
                        + "/>" + this.filterTexts[i] + "</label>";
                }
                var $filter = this.menu.find('.filter');
                $filter.empty().append($(filterOptions));
                $(':checkbox', $filter).bind('click', function (e) {
                    _this.onCheckboxClick($(e.target));
                });
            };
            HeaderFilters.prototype.getFilterText = function (item, column) {
                var value = item[column.field];
                if (this.options.useColumnFormatter && column && column.formatter) {
                    try {
                        var html = column.formatter(-1, -1, value, column, item);
                        if (value == null && html === '') {
                            return (Q.tryGetText("Site.HeaderFiltersMixin.Null") || "(null)");
                        }
                        return html;
                    }
                    catch (ex) {
                    }
                }
                if (value == null)
                    return (Q.tryGetText("Site.HeaderFiltersMixin.Null") || "(null)");
                return Q.htmlEncode(value);
            };
            HeaderFilters.prototype.showFilter = function (e) {
                var _this = this;
                var $menuButton = $(e.target);
                var columnDef = $menuButton.data("column");
                this.checkedValues = new window['Set'](columnDef.headerFilterValues || []);
                if (!this.menu)
                    this.menu = $("<div class='slick-header-menu cke_dialog'>").appendTo(document.body).hide();
                else
                    this.menu.empty();
                this.searchInput = this.addSearchInput(this.menu, columnDef);
                var filterOptions = "<label><input type='checkbox' value='-1' />" +
                    (Q.tryGetText("Site.HeaderFiltersMixin.SelectAll") || "(Select All)") + "</label>";
                var $filter = $("<div class='filter'>")
                    .appendTo(this.menu);
                $('<button>' + (Q.tryGetText("Site.HeaderFiltersMixin.OkButton") || "OK") + '</button>')
                    .appendTo(this.menu)
                    .bind('click', function (ev) {
                    columnDef.headerFilterValues = Array['from'](_this.checkedValues);
                    _this.setButtonImage($menuButton, columnDef.headerFilterValues.length > 0);
                    _this.handleApply(ev, columnDef);
                });
                $('<button>' + (Q.tryGetText("Site.HeaderFiltersMixin.ClearButton") || "Clear") + '</button>')
                    .appendTo(this.menu)
                    .bind('click', function (ev) {
                    columnDef.headerFilterValues.length = 0;
                    _this.setButtonImage($menuButton, false);
                    _this.handleApply(ev, columnDef);
                });
                $('<button>' + (Q.tryGetText("Site.HeaderFiltersMixin.CancelButton") || "Cancel") + '</button>')
                    .appendTo(this.menu)
                    .bind('click', function (e) { return _this.hideMenu(); });
                $(':checkbox', $filter).bind('click', function (e) {
                    _this.onCheckboxClick($(e.target));
                });
                this.updateFilterValues(columnDef, function () {
                    _this.menu.show();
                    $filter.css('height', null);
                    var menuHeight = _this.menu.height();
                    var buttonHeight = $(e.target).height();
                    var offset = $(e.target).offset();
                    var left = offset.left - _this.menu.width() + $(e.target).width() - 8;
                    var menuTop = offset.top + buttonHeight;
                    var windowScrollTop = $(window).scrollTop();
                    var bottomBoundary = $(window).height() + windowScrollTop;
                    var contentWrapperTop = (parseInt($('div.content-wrapper').css('padding-top'), 10) || 0);
                    if (menuTop + menuHeight > bottomBoundary &&
                        bottomBoundary - menuTop + contentWrapperTop < menuTop - windowScrollTop) {
                        menuTop -= (menuHeight + buttonHeight + 8);
                        if (menuTop < windowScrollTop)
                            menuTop = windowScrollTop;
                    }
                    var extraHeight = menuTop + menuHeight - bottomBoundary;
                    if (extraHeight > 0) {
                        $filter.css('height', ($filter.height() - extraHeight));
                    }
                    _this.menu.css("top", menuTop).css("left", (left > 0 ? left : 0));
                });
            };
            HeaderFilters.prototype.columnsResized = function () {
                this.hideMenu();
            };
            HeaderFilters.prototype.onCheckboxClick = function ($checkbox) {
                var index = $checkbox.val();
                var $filter = $checkbox.parent().parent();
                if ($checkbox.val() < 0) {
                    if ($checkbox.prop('checked')) {
                        $(':checkbox', $filter).prop('checked', true);
                        this.checkedValues = new window['Set'](this.filterValues || []);
                    }
                    else {
                        $(':checkbox', $filter).prop('checked', false);
                        this.checkedValues.clear();
                    }
                }
                else {
                    var value = this.filterValues[index];
                    var has = this.checkedValues.has(value);
                    if ($checkbox.prop('checked') && !has) {
                        this.checkedValues.add(value);
                    }
                    else if (has) {
                        this.checkedValues.delete(value);
                    }
                }
            };
            HeaderFilters.prototype.setButtonImage = function ($el, filtered) {
                $el.toggleClass('is-filtered', filtered);
            };
            HeaderFilters.prototype.handleApply = function (e, columnDef) {
                this.hideMenu();
                this.onFilterApplied.notify({
                    "grid": this.grid,
                    "column": columnDef
                }, e, this);
                e.preventDefault();
                e.stopPropagation();
            };
            HeaderFilters.prototype.containsFilter = function (filter) {
                if (filter == null && filter.length == 0)
                    return function (v) { return true; };
                var lowercaseFilter = Q.htmlEncode(filter).toLowerCase();
                return function (text) {
                    text = Q.coalesce(text, '').toString().replace(/<[^>]+>/g, '').toLowerCase();
                    return text.indexOf(lowercaseFilter) >= 0;
                };
            };
            HeaderFilters.prototype.getFilterValue = function (item, column) {
                var value = item[column.field];
                if (this.options.useColumnFormatter &&
                    column.formatter != null &&
                    column.headerFilterType == 2 /* text */) {
                    return (this.getFilterText(item, column)
                        .replace(/<[^>]+>/g, ''));
                }
                return value;
            };
            HeaderFilters.prototype.sortFilterValues = function () {
                var _this = this;
                var idx = [];
                for (var i = 0; i < this.filterValues.length; i++) {
                    idx[i] = i;
                }
                idx.sort(function (x, y) {
                    var A = _this.filterValues[x];
                    var B = _this.filterValues[y];
                    return (A < B ? -1 : (A > B ? 1 : 0));
                });
                var newFilterValues = [];
                var newFilterTexts = [];
                for (var i = 0; i < idx.length; i++) {
                    newFilterValues.push(this.filterValues[i]);
                    newFilterTexts.push(this.filterTexts[i]);
                }
                this.filterValues = newFilterValues;
                this.filterTexts = newFilterTexts;
            };
            HeaderFilters.prototype.updateFilterValues = function (column, done) {
                var _this = this;
                if (this.options.getFilterValues != null) {
                    this.options.getFilterValues(column, function (values, texts) {
                        if (values == null) {
                            _this.updateFilterValuesFromData(column);
                            _this.updateFilterItems(column);
                            done();
                        }
                        else {
                            _this.filterValues = [];
                            _this.filterTexts = [];
                            texts = texts || values.map(function (x) {
                                var item = {};
                                item[column.field] = x;
                                return _this.getFilterText(item, column);
                            });
                            var filter = _this.containsFilter(_this.searchInput.val());
                            _this.filterValues = values.filter(function (x, i) {
                                if (filter(texts[i])) {
                                    _this.filterTexts.push(texts[i]);
                                    return true;
                                }
                                return false;
                            });
                            _this.sortFilterValues();
                            _this.updateFilterItems(column);
                            done();
                        }
                    });
                }
                else {
                    this.updateFilterValuesFromData(column);
                    this.updateFilterItems(column);
                    done();
                }
            };
            HeaderFilters.prototype.updateFilterValuesFromData = function (column) {
                this.filterValues = [];
                this.filterTexts = [];
                var dataView = this.grid.getData();
                var items;
                if (this.checkedValues && this.checkedValues.size) {
                    items = dataView.getItems();
                }
                else {
                    items = [];
                    for (var i = 0; i < dataView.getLength(); i++) {
                        items.push(dataView.getItem(i));
                    }
                }
                var seen = new window['Set']();
                var searchText = this.searchInput.val();
                var searchFilter = this.containsFilter(searchText);
                for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                    var item = items_1[_i];
                    var value = this.getFilterValue(item, column);
                    if (!seen.has(value)) {
                        var text = this.getFilterText(item, column);
                        if (searchFilter(text)) {
                            seen.add(value);
                            this.filterValues.push(value);
                            this.filterTexts.push(text);
                        }
                    }
                }
                this.sortFilterValues();
            };
            HeaderFilters.prototype.handleMenuItemClick = function (e) {
                var command = $(this).data("command");
                var columnDef = $(this).data("column");
                this.hideMenu();
                this.onCommand.notify({
                    "grid": this,
                    "column": columnDef,
                    "command": command
                }, e, this);
                e.preventDefault();
                e.stopPropagation();
            };
            return HeaderFilters;
        }());
        Plugins.HeaderFilters = HeaderFilters;
    })(Plugins = Slick.Plugins || (Slick.Plugins = {}));
})(Slick || (Slick = {}));
var Serenity;
(function (Serenity) {
    /**
     * A mixin that can be applied to a DataGrid for column filters functionality
     */
    var HeaderFiltersMixin = /** @class */ (function () {
        function HeaderFiltersMixin(options) {
            var _this = this;
            var skipColumnFilters = null;
            var cache = {};
            if (options.filterByText == null) {
                this.filterByText = !options.grid.view.url ||
                    !options.grid.view['getPagingInfo']().rowsPerPage;
            }
            else
                this.filterByText = !!options.filterByText;
            var filterPlugin = new Slick.Plugins.HeaderFilters({
                getFilterType: function (col) {
                    if (_this.filterByText)
                        return 2 /* text */;
                    if (col.sortable != null && !col.sortable)
                        return 0 /* disabled */;
                    if (col.sourceItem != null &&
                        col.sourceItem.notFilterable != null &&
                        col.sourceItem.notFilterable)
                        return 0 /* disabled */;
                    return 1 /* value */;
                },
                getFilterValues: function (col, done) {
                    if (col.headerFilterType == 2 /* text */)
                        return done(null);
                    skipColumnFilters = col;
                    try {
                        if (!options.grid.onViewSubmit()) {
                            done([]);
                            return;
                        }
                    }
                    finally {
                        skipColumnFilters = null;
                    }
                    var req = Q.deepClone(options.grid.view.params);
                    req.DistinctFields = [col.field];
                    req.Skip = 0;
                    req.Take = 0;
                    var cacheKey = $.toJSON(req);
                    var cached = cache[cacheKey];
                    if (cached && cached.expires > new Date().getTime())
                        done(cached.value);
                    else {
                        Q.serviceCall({
                            request: req,
                            url: options.grid.view.url,
                            onSuccess: function (response) {
                                cache[cacheKey] = {
                                    value: response.Values,
                                    expires: new Date().getTime() + 1000 * 30
                                };
                                done(response.Values);
                            }
                        });
                    }
                }
            });
            filterPlugin.onFilterApplied.subscribe(function (e, data) {
                var column = data.column;
                if (column && column.headerFilterType == 2 /* text */)
                    options.grid.view.setItems(options.grid.view.getItems(), true);
                else
                    options.grid.refresh();
            });
            options.grid.slickGrid.registerPlugin(filterPlugin);
            var me = this;
            var oldOnViewSubmit = options.grid.onViewSubmit;
            options.grid.onViewSubmit = function () {
                if (!oldOnViewSubmit.call(this))
                    return false;
                var cols = this.slickGrid.getColumns();
                var request = this.view.params;
                for (var _i = 0, cols_1 = cols; _i < cols_1.length; _i++) {
                    var col = cols_1[_i];
                    if (col === skipColumnFilters ||
                        col.headerFilterType == 2 /* text */)
                        continue;
                    var vals = col.headerFilterValues;
                    if (vals && vals.length) {
                        var nonNull = vals.filter(function (z) { return z != null; });
                        var criteria = [[col.field], 'in', [nonNull]];
                        if (nonNull.length !== vals.length) {
                            if (nonNull.length > 0)
                                criteria = Serenity.Criteria.or(['is null', [col.field]], criteria);
                            else
                                criteria = ['is null', [col.field]];
                        }
                        request.Criteria = Serenity.Criteria.and(request.Criteria, criteria);
                    }
                }
                return true;
            };
            var oldOnViewFilter = options.grid.onViewFilter;
            options.grid.onViewFilter = function (item) {
                if (!oldOnViewFilter.apply(this, arguments))
                    return false;
                var cols = this.slickGrid.getColumns();
                for (var _i = 0, cols_2 = cols; _i < cols_2.length; _i++) {
                    var col = cols_2[_i];
                    if (col.headerFilterType != 2 /* text */)
                        continue;
                    var vals = col.headerFilterValues;
                    if (vals && vals.length) {
                        var filterValue = filterPlugin.getFilterValue(item, col);
                        if (vals.indexOf(filterValue) < 0)
                            return false;
                    }
                }
                return true;
            };
        }
        return HeaderFiltersMixin;
    }());
    Serenity.HeaderFiltersMixin = HeaderFiltersMixin;
})(Serenity || (Serenity = {}));
//# sourceMappingURL=Serenity.Pro.App.js.map