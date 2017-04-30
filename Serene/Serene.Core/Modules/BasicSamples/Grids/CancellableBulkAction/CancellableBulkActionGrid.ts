/// <reference path="../../../Northwind/Order/OrderGrid.ts" />
/// <reference path="OrderBulkAction.ts" />

namespace Serene.BasicSamples {

    @Serenity.Decorators.registerClass()
    export class CancellableBulkActionGrid extends Northwind.OrderGrid {
        private rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery) {
            super(container);
        }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }

        protected getButtons() {
            return [{
                title: 'Perform Bulk Action on Selected Orders',
                cssClass: 'send-button',
                onClick: () => {
                    if (!this.onViewSubmit()) {
                        return;
                    }

                    var action = new OrderBulkAction();
                    action.done = () => this.rowSelection.resetCheckedAndRefresh();
                    action.execute(this.rowSelection.getSelectedKeys());
                }
            }];
        }

        protected getColumns() {
            var columns = super.getColumns();
            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
            return columns;
        }

        protected getViewOptions() {
            var opt = super.getViewOptions();
            opt.rowsPerPage = 2500;
            return opt;
        }
    }
}