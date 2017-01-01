/// <reference path="../../../Northwind/Order/OrderGrid.ts" />

namespace Serene.BasicSamples {

    @Serenity.Decorators.registerClass()
    export class CustomLinksInGrid extends Northwind.OrderGrid {

        constructor(container: JQuery) {
            super(container);
        }

        /**
         * We override getColumns() to change format functions for some columns.
         * You could also write them as formatter classes, and use them at server side
         */
        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();

            var fld = Northwind.OrderRow.Fields;

            Q.first(columns, x => x.field == fld.CustomerCompanyName).format =
                ctx => `<a href="javascript:;" class="customer-link">${Q.htmlEncode(ctx.value)}</a>`;

            Q.first(columns, x => x.field == fld.OrderDate).format =
                ctx => `<a href="javascript:;" class="date-link">${Q.formatDate(ctx.value)}</a>`;

            Q.first(columns, x => x.field == fld.EmployeeFullName).format =
                ctx => `<a href="javascript:;" class="employee-link">${Q.htmlEncode(ctx.value)}</a>`;

            Q.first(columns, x => x.field == fld.ShipCountry).format =
                ctx => `<a href="javascript:;" class="ship-country-link">${Q.htmlEncode(ctx.value)}</a>`;

            return columns;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number): void {

            // let base grid handle clicks for its edit links
            super.onClick(e, row, cell);

            // if base grid already handled, we shouldn"t handle it again
            if (e.isDefaultPrevented()) {
                return;
            }

            // get reference to current item
            var item = this.itemAt(row);

            // get reference to clicked element
            var target = $(e.target);

            if (target.hasClass("customer-link")) {
                e.preventDefault();

                let message = Q.format(
                    "<p>You have clicked an order from customer: {0}.</p>" +
                    "<p>If you click Yes, i'll open Customer dialog.</p>" +
                    "<p>If you click No, i'll open Order dialog.</p>",
                    Q.htmlEncode(item.CustomerCompanyName));

                Q.confirm(message, () => {
                    // CustomerDialog doesn't use CustomerID but ID (identity)
                    // so need to find customer to get its actual ID
                    var customer = Q.first(Northwind.CustomerRow.getLookup().items,
                        x => x.CustomerID == item.CustomerID);

                    new Northwind.CustomerDialog().loadByIdAndOpenDialog(customer.ID);
                },
                    {
                        htmlEncode: false,
                        onNo: () => {
                            new Northwind.OrderDialog().loadByIdAndOpenDialog(item.OrderID);
                        }
                    });
            }
            else if (target.hasClass("date-link")) {
                e.preventDefault();

                var ordersInSameDate = Q.count(this.view.getItems(), x => x.OrderDate == item.OrderDate);

                Q.notifyInfo("You clicked an order from date " +
                    Q.formatDate(item.OrderDate) + ". There are " +
                    ordersInSameDate + " orders from the same date that is loaded in grid at the moment");
            }
            else if (target.hasClass("employee-link")) {
                e.preventDefault();

                Q.notifySuccess("You clicked an employee name, " +
                    "so i've opened a new Order Dialog from same customer " +
                    "with that employee prepopulated!");

                new Northwind.OrderDialog().loadEntityAndOpenDialog(<Northwind.OrderRow>{
                    CustomerID: item.CustomerID,
                    EmployeeID: item.EmployeeID
                });
            }
            else if (target.hasClass("ship-country-link")) {
                e.preventDefault();

                Q.notifySuccess("Let's filter the grid to orders from " + item.ShipCountry);
                var countryFilter = this.findQuickFilter(Serenity.LookupEditor,
                    Northwind.OrderRow.Fields.ShipCountry);
                countryFilter.value = item.ShipCountry;
                this.refresh();
            }
        }

        /**
         * This method is called for columns with [EditLink] attribute,
         * but only for edit links of this grid's own item type.
         * It is also called by Add Product button with a NULL entityOrId
         * parameter so we should check that entityOrId is a string
         * to be sure it is originating from a link.
         *
         * As we changed format for other columns, this will only be called
         * for links in remaining OrderID column
         */
        protected editItem(entityOrId) {
            // check that this is an edit link click, not add button, ID is always a string
            if (typeof entityOrId == "string") {
                // convert ID to an integer, and find order with that ID
                var item = this.view.getItemById(Q.toId(entityOrId));
                // date is a ISO string, so need to parse it first
                var date = Q.formatDate(item.OrderDate);

                // ask for confirmation
                Q.confirm(Q.format("You clicked edit link for order with ID: {0} and Date: {1}. Should i open that order?",
                    item.OrderID, date), () => {
                        new Northwind.OrderDialog().loadByIdAndOpenDialog(item.OrderID);
                    });
            }
            else {
                super.editItem(entityOrId);
            }
        }

    }
}