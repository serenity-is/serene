/// <reference path="../../../Northwind/Order/OrderGrid.ts" />

namespace Serene.BasicSamples {

    // get a reference to order row field names
    import fld = Northwind.OrderRow.Fields;

    @Serenity.Decorators.registerClass()
    export class QuickFilterCustomization extends Serenity.EntityGrid<Northwind.OrderRow, any> {

        protected getColumnsKey() { return "Northwind.Order"; }
        protected getDialogType() { return Northwind.OrderDialog; }
        protected getIdProperty() { return Northwind.OrderRow.idProperty; }
        protected getLocalTextPrefix() { return Northwind.OrderRow.localTextPrefix; }
        protected getService() { return Northwind.OrderService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        /**
         * This method is called to get list of quick filters to be created for this grid.
         * By default, it returns quick filter objects corresponding to properties that
         * have a [QuickFilter] attribute at server side OrderColumns.cs
         */
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[] {

            // get quick filter list from base class, e.g. columns
            let filters = super.getQuickFilters();

            // we start by turning CustomerID filter to a Not Equal one
            let filter = Q.first(filters, x => x.field == fld.CustomerID);
            filter.title = "Customer Not Equal To";
            filter.handler = h => {
                // if filter is active, e.g. editor has some value
                if (h.active) {
                    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                        [[fld.CustomerID], '!=', h.value]);
                }
            };

            // turn order date filter to exact match, not a range
            filter = Q.first(filters, x => x.field == fld.OrderDate);
            filter.title = "Order Date Is Exactly";
            // element method in DataGrid turns this into a range editor, clear it to prevent
            filter.element = e => { }
            // need to override handler too, otherwise default handler will try to handle a date range
            filter.handler = h => {
                if (h.active) {
                    h.request.EqualityFilter[fld.OrderDate] = h.value;
                }
                else {
                    h.request.EqualityFilter[fld.OrderDate] = null;
                }
            };
            // reset these as they also expect range editors
            filter.loadState = null;
            filter.saveState = null;
            filter.displayText = null;

            // make employee filter a textbox, instead of lookup, and search by starts with
            filter = Q.first(filters, x => x.field == fld.EmployeeID);
            filter.title = "Employee Name Starts With";
            filter.type = Serenity.StringEditor;
            filter.handler = h => {
                if (h.active) {
                    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                        [[fld.EmployeeFullName], 'like', h.value + '%']);
                }
            };

            // turn shipping state into a boolean filter
            filter = Q.first(filters, x => x.field == fld.ShippingState);
            filter.title = "Show Only Shipped";
            filter.type = Serenity.BooleanEditor;
            filter.handler = h => {
                h.active = !!h.value;
                if (h.active) {
                    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                        ['is not null', [fld.ShippedDate]]);
                }
            };

            // ship via filters by NOT IN
            filter = Q.first(filters, x => x.field == fld.ShipVia);
            filter.title = "Ship Via Not IN";
            filter.handler = h => {
                if (h.active) {
                    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                        [[fld.ShipVia], 'not in', [h.value]]);
                }
            };

            // ship country filters by NOT contains
            filter = Q.first(filters, x => x.field == fld.ShipCountry);
            filter.title = "Ship Country NOT Contains";
            filter.type = Serenity.StringEditor;
            filter.handler = h => {
                if (h.active) {
                    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                        [[fld.ShipCountry], 'not like', '%' + h.value + '%']);
                }
            };

            // ship city filters by GREATER THAN (>)
            filter = Q.first(filters, x => x.field == fld.ShipCity);
            filter.title = "Ship City Greater Than";
            filter.type = Serenity.StringEditor;
            filter.handler = h => {
                if (h.active) {
                    h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                        [[fld.ShipCity], '>', h.value]);
                }
            };

            // create a range editor for freight
            let endFreight: Serenity.DecimalEditor = null;

            filters.push({
                field: fld.Freight,
                type: Serenity.DecimalEditor,
                title: 'Freight Between',
                element: e1 => {
                    e1.css("width", "80px");
                    endFreight = Serenity.Widget.create({
                        type: Serenity.DecimalEditor,
                        element: e2 => e2.insertAfter(e1).css("width", "80px")
                    });

                    endFreight.element.change(x => e1.triggerHandler("change"));
                    $("<span/>").addClass("range-separator").text("-").insertAfter(e1);
                },
                handler: h => {
                    var active1 = h.value != null && !isNaN(h.value);
                    var active2 = endFreight.value != null && !isNaN(endFreight.value);
                    h.active = active1 || active2;

                    if (active1)
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                            [[fld.Freight], '>=', h.value]);

                    if (active2)
                        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                            [[fld.Freight], '<=', endFreight.value]);
                }
            });

            return filters;
        }
    }
}