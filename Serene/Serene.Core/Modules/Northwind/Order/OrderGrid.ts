namespace Serene.Northwind {

    import fld = OrderRow.Fields;

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class OrderGrid extends Serenity.EntityGrid<OrderRow, any> {
        protected getColumnsKey() { return "Northwind.Order"; }
        protected getDialogType() { return <any>OrderDialog; }
        protected getIdProperty() { return OrderRow.idProperty; }
        protected getLocalTextPrefix() { return OrderRow.localTextPrefix; }
        protected getService() { return OrderService.baseUrl; }

        protected shippingStateFilter: Serenity.EnumEditor;

        constructor(container: JQuery) {
            super(container);
        }

        protected getQuickFilters() {
            var filters = super.getQuickFilters();

            filters.push({
                type: Serenity.LookupEditor,
                options: {
                    lookupKey: ProductRow.lookupKey
                },
                field: 'ProductID',
                title: 'Contains Product in Details',
                handler: w => {
                    (this.view.params as OrderListRequest).ProductID = Q.toId(w.value);
                },
                cssClass: 'hidden-xs'
            });

            return filters;
        }

        protected createQuickFilters() {
            super.createQuickFilters();

            this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, fld.ShippingState);
        }

        protected getButtons()
        {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: OrderService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }

        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(1, 0, {
                field: 'Print Invoice',
                name: '',
                format: ctx => '<a class="inline-action print-invoice" title="invoice">' +
                    '<i class="fa fa-file-pdf-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            return columns;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('print-invoice')) {
                    Serene.Common.ReportHelper.execute({
                        reportKey: 'Northwind.OrderDetail',
                        params: {
                            OrderID: item.OrderID
                        }
                    });
                }
            }
        }

        public set_shippingState(value: number): void {
            this.shippingStateFilter.value = value == null ? '' : value.toString();
        }

        protected addButtonClick() {
            var eq = this.view.params.EqualityFilter;
            this.editItem(<OrderRow>{
                CustomerID: eq ? eq.CustomerID : null
            });
        }
    }
}
