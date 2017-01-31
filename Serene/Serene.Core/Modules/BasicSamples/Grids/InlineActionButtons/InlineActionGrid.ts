/// <reference path="../../../Northwind/Customer/CustomerGrid.ts" />

namespace Serene.BasicSamples {

    @Serenity.Decorators.registerClass()
    export class InlineActionGrid extends Northwind.CustomerGrid {

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            var columns = super.getColumns();

            columns.unshift({
                field: 'Delete Row',
                name: '',
                format: ctx => '<a class="inline-action delete-row" title="delete">' + 
                    '<i class="fa fa-trash-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24                   
            });

            columns.splice(1, 0, {
                field: 'View Details',
                name: '',
                format: ctx => '<a class="inline-action view-details" title="view details"></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24 
            });

            columns.splice(2, 0, {
                field: 'New Order',
                name: '',
                format: ctx => '<a class="inline-action new-order" title="new order"></a>',
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

                if (target.hasClass('delete-row')) {
                    Q.confirm('Delete record?', () => {
                        Northwind.CustomerService.Delete({
                            EntityId: item.ID,
                        }, response => {
                            this.refresh();
                        });
                    });
                }
                else if (target.hasClass('view-details')) {
                    this.editItem(item.ID);
                }
                else if (target.hasClass('new-order')) {
                    var dlg = new Northwind.OrderDialog();
                    this.initDialog(dlg);
                    dlg.loadEntityAndOpenDialog(<Northwind.OrderRow>{
                        CustomerID: item.CustomerID
                    });
                }
            }
        }
    }
}