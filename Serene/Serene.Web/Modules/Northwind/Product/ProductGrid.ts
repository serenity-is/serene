namespace Serene.Northwind {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class ProductGrid extends Serenity.EntityGrid<ProductRow, any> {
        protected getColumnsKey() { return "Northwind.Product"; }
        protected getDialogType() { return <any>ProductDialog; }
        protected getIdProperty() { return ProductRow.idProperty; }
        protected getLocalTextPrefix() { return ProductRow.localTextPrefix; }
        protected getService() { return ProductService.baseUrl; }

        private pendingChanges: Q.Dictionary<any> = {};

        constructor(container: JQuery) {
            super(container);

            this.slickContainer.on('change', '.edit:input', (e) => this.inputsChange(e));
        }

        protected getButtons()
        {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: ProductService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit()
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                title: 'Product List',
                columnTitles: {
                    'Discontinued': 'Dis.',
                },
                tableOptions: {
                    columnStyles: {
                        ProductID: {
                            columnWidth: 25,
                            halign: 'right'
                        },
                        Discountinued: {
                            columnWidth: 25
                        }
                    }
                }
            }));

            buttons.push({
                title: 'Save Changes',
                cssClass: 'apply-changes-button',
                onClick: e => this.saveClick()
            });

            return buttons;
        }

        protected onViewProcessData(response) {
            this.pendingChanges = {};
            this.setSaveButtonState();
            return super.onViewProcessData(response);
        }

        // PLEASE NOTE! Inline editing in grids is not something Serenity supports nor recommends.
        // SlickGrid has some set of limitations, UI is very hard to use on some devices like mobile, 
        // custom widgets and validations are not possible, and as a bonus the code can become a mess.
        // 
        // This was just a sample how-to after much requests, and is not supported. 
        // This is all we can offer, please don't ask us to Guide you...

        /**
         * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
         * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
         * no event handlers to rendered cell contents
         */
        private numericInputFormatter(ctx) {
            var klass = 'edit numeric';
            var item = ctx.item as ProductRow;
            var pending = this.pendingChanges[item.ProductID];

            if (pending && pending[ctx.column.field] !== undefined) {
                klass += ' dirty';
            }

            var value = this.getEffectiveValue(item, ctx.column.field) as number;

            return "<input type='text' class='" + klass + "'" +
                " value='" + Q.formatNumber(value, '0.##') + "'/>";
        }

        private stringInputFormatter(ctx) {
            var klass = 'edit string';
            var item = ctx.item as ProductRow;
            var pending = this.pendingChanges[item.ProductID];
            var column = ctx.column as Slick.Column;

            if (pending && pending[column.field] !== undefined) {
                klass += ' dirty';
            }

            var value = this.getEffectiveValue(item, column.field) as string;

            return "<input type='text' class='" + klass +
                "' value='" + Q.htmlEncode(value) + 
                "' maxlength='" + column.sourceItem.maxLength + "'/>";
        }

        /**
         * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
         */
        private selectFormatter(ctx: Slick.FormatterContext, idField: string, lookup: Q.Lookup<any>) {
            var fld = ProductRow.Fields;
            var klass = 'edit';
            var item = ctx.item as ProductRow;
            var pending = this.pendingChanges[item.ProductID];
            var column = ctx.column as Slick.Column;

            if (pending && pending[idField] !== undefined) {
                klass += ' dirty';
            }

            var value = this.getEffectiveValue(item, idField);
            var markup = "<select class='" + klass +
                "' data-field='" + idField + 
                "' style='width: 100%; max-width: 100%'>";
            for (var c of lookup.items) {
                let id = c[lookup.idField];
                markup += "<option value='" + id + "'"
                if (id == value) {
                    markup += " selected";
                }
                markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
            }
            return markup + "</select>";
        }

        private getEffectiveValue(item, field): any {
            var pending = this.pendingChanges[item.ProductID];
            if (pending && pending[field] !== undefined) {
                return pending[field];
            }

            return item[field];
        }

        protected getColumns() {
            var columns = super.getColumns();
            var num = ctx => this.numericInputFormatter(ctx);
            var str = ctx => this.stringInputFormatter(ctx);
            var fld = ProductRow.Fields;

            Q.first(columns, x => x.field === 'QuantityPerUnit').format = str;

            var category = Q.first(columns, x => x.field === fld.CategoryName);
            category.referencedFields = [fld.CategoryID];
            category.format = ctx => this.selectFormatter(ctx, fld.CategoryID, CategoryRow.lookup());

            var supplier = Q.first(columns, x => x.field === fld.SupplierCompanyName);
            supplier.referencedFields = [fld.SupplierID];
            supplier.format = ctx => this.selectFormatter(ctx, fld.SupplierID, SupplierRow.lookup());

            Q.first(columns, x => x.field === fld.UnitPrice).format = num;
            Q.first(columns, x => x.field === fld.UnitsInStock).format = num;
            Q.first(columns, x => x.field === fld.UnitsOnOrder).format = num;
            Q.first(columns, x => x.field === fld.ReorderLevel).format = num;

            return columns;
        }

        private inputsChange(e: JQueryEventObject) {
            var cell = this.slickGrid.getCellFromEvent(e);
            var item = this.itemAt(cell.row);
            var input = $(e.target);
            var field = input.data('field') || this.getColumns()[cell.cell].field;
            var text = ss.coalesce(Q.trimToNull(input.val()), '0');
            var pending = this.pendingChanges[item.ProductID];

            var effective = this.getEffectiveValue(item, field);
            var oldText: string;
            if (input.hasClass("numeric"))
                oldText = Q.formatNumber(effective, '0.##');
            else
                oldText = effective as string;

            var value;
            if (field === 'UnitPrice') {
                value = Q.parseDecimal(text);
                if (value == null || isNaN(value)) {
                    Q.notifyError(Q.text('Validation.Decimal'), '', null);
                    input.val(oldText);
                    input.focus();
                    return;
                }
            }
            else if (input.hasClass("numeric")) {
                var i = Q.parseInteger(text);
                if (isNaN(i) || i > 32767 || i < 0) {
                    Q.notifyError(Q.text('Validation.Integer'), '', null);
                    input.val(oldText);
                    input.focus();
                    return;
                }
                value = i;
            }
            else
                value = text;

            if (!pending) {
                this.pendingChanges[item.ProductID] = pending = {};
            }

            pending[field] = value;
            item[field] = value;
            this.view.refresh();

            if (input.hasClass("numeric"))
                value = Q.formatNumber(value, '0.##');

            input.val(value).addClass('dirty');

            this.setSaveButtonState();
        }

        private setSaveButtonState() {
            this.toolbar.findButton('apply-changes-button').toggleClass('disabled',
                Object.keys(this.pendingChanges).length === 0);
        }

        private saveClick() {
            if (Object.keys(this.pendingChanges).length === 0) {
                return;
            }

            // this calls save service for all modified rows, one by one
            // you could write a batch update service
            var keys = Object.keys(this.pendingChanges);
            var current = -1;
            var self = this;

            (function saveNext() {
                if (++current >= keys.length) {
                    self.refresh();
                    return;
                }

                var key = keys[current];
                var entity = Q.deepClone(self.pendingChanges[key]);
                entity.ProductID = key;
                Q.serviceRequest('Northwind/Product/Update', {
                    EntityId: key,
                    Entity: entity
                }, (response) => {
                    delete self.pendingChanges[key];
                    saveNext();
                });
            })();
        }

    }
}