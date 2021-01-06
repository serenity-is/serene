/// <reference path="../../../Northwind/Order/OrderGrid.ts" />

namespace Serene.BasicSamples {

    @Serenity.Decorators.registerClass()
    export class TreeGrid extends Northwind.OrderGrid {

        private treeMixin: Serenity.TreeGridMixin<Northwind.OrderRow>;

        constructor(container: JQuery) {
            super(container);

            this.treeMixin = new Serenity.TreeGridMixin({
                grid: this,
                // bring tree items initially collapsed
                initialCollapse: () => true,
                // which column to place tree toggle / expand/collapse button
                toggleField: Northwind.OrderRow.Fields.CustomerCompanyName,
                getParentId: x => {
                    // as we don't have parentId column here, we are cheating by using modulus 10 and 50
                    // e.g. order with ID 1605 will have parent 1600, order with ID 1613 will have parent 1610
                    var parentId = Math.floor(x.OrderID / 10) * 10;
                    if (parentId == x.OrderID) {
                        parentId = Math.floor(x.OrderID / 50) * 50;

                        // orders with ID 16050 and 17000 should have NULL parent
                        if (parentId == x.OrderID)
                            return null;
                    }

                    // if you had a ParentID column, you'd just return x.ParentID
                    return parentId;
                }
            });
        }

        protected usePager() {
            return false;
        }
    }
}