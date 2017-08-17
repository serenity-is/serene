namespace Serene.Organization {

    @Serenity.Decorators.registerEditor()
    export class BusinessUnitEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, BusinessUnitRow> {

        constructor(hidden: JQuery) {
            super(hidden);
        }

        protected getLookupKey() {
            return BusinessUnitRow.lookupKey;
        }

        protected getItemText(item: BusinessUnitRow, lookup: Q.Lookup<BusinessUnitRow>) {
            var visited = {};
            var text = item.Name;
            while (item.ParentUnitId != null && !visited[item.ParentUnitId]) {
                item = lookup.itemById[item.ParentUnitId];
                if (!item)
                    break;
                visited[item.UnitId] = true;
                text = item.Name + " >> " + text;
            }

            return text;
        }
    }
}