
namespace Serene.Organization {
    
    @Serenity.Decorators.registerClass()
    export class BusinessUnitGrid extends Serenity.EntityGrid<BusinessUnitRow, any> {
        protected getColumnsKey() { return 'Organization.BusinessUnit'; }
        protected getDialogType() { return BusinessUnitDialog; }
        protected getIdProperty() { return BusinessUnitRow.idProperty; }
        protected getLocalTextPrefix() { return BusinessUnitRow.localTextPrefix; }
        protected getService() { return BusinessUnitService.baseUrl; }

        constructor(container: JQuery) {
            super(container);

            new Serenity.TreeGridMixin<BusinessUnitRow>({
                grid: this,
                getParentId: x => x.ParentUnitId,
                toggleField: BusinessUnitRow.Fields.Name,
                initialCollapse: () => false
            });
        }

        protected subDialogDataChange() {
            super.subDialogDataChange();

            Q.reloadLookup(BusinessUnitRow.lookupKey);
        }

        protected usePager() {
            return false;
        }

        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(Q.indexOf(columns, x => x.name == BusinessUnitRow.Fields.Name) + 1, 0, {
                field: 'Add Child Unit',
                name: '',
                format: ctx => '<a class="inline-action add-child-unit" title="add child unit"></a>',
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

            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('add-child-unit')) {
                    var dlg = new BusinessUnitDialog();
                    this.initDialog(dlg);
                    dlg.loadEntityAndOpenDialog({
                        ParentUnitId: item.UnitId
                    });
                }
            }
        }
    }
}