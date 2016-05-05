namespace Serene.Northwind {

    @Serenity.Decorators.registerClass()
    export class OrderGrid extends Serenity.EntityGrid<OrderRow, any> {
        protected getColumnsKey() { return "Northwind.Order"; }
        protected getDialogType() { return <any>OrderDialog; }
        protected getIdProperty() { return OrderRow.idProperty; }
        protected getLocalTextPrefix() { return OrderRow.localTextPrefix; }
        protected getService() { return OrderService.baseUrl; }

        protected shippingState: Serenity.EnumEditor;
        public customerFilter: CustomerEditor;

        constructor(container: JQuery) {
            super(container);
        }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();

            let fld = OrderRow.Fields;

            this.customerFilter = this.addQuickFilter(fld.CustomerID, CustomerEditor);

            this.addDateRangeFilter(fld.OrderDate);

            this.shippingState = this.addQuickFilter(fld.ShippingState, Serenity.EnumEditor, {
                options: {
                    enumType: Northwind.OrderShippingState
                }
            });

            this.addQuickFilter(fld.ShipVia, Serenity.LookupEditor, {
                options: {
                    lookupKey: ShipperRow.lookupKey
                }
            });

            this.addQuickFilter(fld.ShipCountry, Serenity.LookupEditor, {
                options: {
                    lookupKey: 'Northwind.OrderShipCountry'
                }
            });

            this.addQuickFilter(fld.ShipCity, Serenity.LookupEditor, {
                options: {
                    lookupKey: 'Northwind.OrderShipCity',
                    cascadeFrom: fld.ShipCountry
                }
            });

            this.addQuickFilter(fld.EmployeeID, Serenity.LookupEditor, {
                options: {
                    lookupKey: EmployeeRow.lookupKey
                }
            });
        }

        protected getButtons()
        {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton(this,
                OrderService.baseUrl + '/ListExcel', () => this.onViewSubmit()));

            buttons.push(Common.PdfExportHelper.createToolButton(this,
                () => this.onViewSubmit()));

            return buttons;
        }
    }
}