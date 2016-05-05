namespace Serene.Administration {

    @Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue])
    export class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {

        protected getIdProperty() { return "Key"; }

        private searchText: string;
        private byParentKey: Q.Grouping<PermissionCheckItem>;
        private rolePermissions: Q.Dictionary<boolean> = {};

        constructor(container: JQuery, opt: PermissionCheckEditorOptions) {
            super(container, opt);

            let titleByKey: Q.Dictionary<string> = {};
            let permissionKeys = this.getSortedGroupAndPermissionKeys(titleByKey);
            let items = permissionKeys.map(key => <PermissionCheckItem>{
                Key: key,
                ParentKey: this.getParentKey(key),
                Title: titleByKey[key],
                GrantRevoke: null,
                IsGroup: key.charAt(key.length - 1) === ':'
            });

            this.byParentKey = Q.toGrouping(items, x => x.ParentKey);
            this.setItems(items);
        }

        private getItemGrantRevokeClass(item: PermissionCheckItem, grant: boolean): string {
            if (!item.IsGroup) {
                return ((item.GrantRevoke === grant) ? ' checked' : '');
            }

            let desc = this.getDescendants(item, true);
            let granted = desc.filter(x => x.GrantRevoke === grant);

            if (!granted.length) {
                return '';
            }

            if (desc.length === granted.length) {
                return 'checked';
            }

            return 'checked partial';
        }

        private getItemEffectiveClass(item: PermissionCheckItem): string {

            if (item.IsGroup) {
                let desc = this.getDescendants(item, true);
                let grantCount = Q.count(desc, x => x.GrantRevoke === true ||
                    (x.GrantRevoke == null && this.rolePermissions[x.Key]));

                if (grantCount === desc.length || desc.length === 0) {
                    return 'allow';
                }

                if (grantCount === 0) {
                    return 'deny';
                }

                return 'partial';
            }

            let granted = item.GrantRevoke === true ||
                (item.GrantRevoke == null && this.rolePermissions[item.Key]);

            return (granted ? ' allow' : ' deny');
        }

        protected getColumns(): Slick.Column[] {
            let columns: Slick.Column[] = [{
                name: Q.text('Site.UserPermissionDialog.Permission'),
                field: 'Title',
                format: Serenity.SlickFormatting.treeToggle(() => this.view, x => x.Key, ctx => {
                    let item = ctx.item;
                    let klass = this.getItemEffectiveClass(item);
                    return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                }),
                width: 495,
                sortable: false
            }, {
                name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                format: ctx => {
                    let item1 = ctx.item;
                    let klass1 = this.getItemGrantRevokeClass(item1, true);
                    return "<span class='check-box grant no-float " + klass1 + "'></span>";
                },
                width: 65,
                sortable: false,
                headerCssClass: 'align-center',
                cssClass: 'align-center'
            }];

            if (this.options.showRevoke) {
                columns.push({
                    name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                    format: ctx => {
                        let item2 = ctx.item;
                        let klass2 = this.getItemGrantRevokeClass(item2, false);
                        return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                    },
                    width: 65,
                    sortable: false,
                    headerCssClass: 'align-center',
                    cssClass: 'align-center'
                });
            }

            return columns;
        }

        public setItems(items: PermissionCheckItem[]): void {
            Serenity.SlickTreeHelper.setIndents(items, x => x.Key, x => x.ParentKey, false);
            this.view.setItems(items, true);
        }

        protected onViewSubmit() {
            return false;
        }

        protected onViewFilter(item: PermissionCheckItem): boolean {
            if (!super.onViewFilter(item)) {
                return false;
            }

            if (!Serenity.SlickTreeHelper.filterById(item, this.view, x => x.ParentKey))
                return false;

            if (this.searchText) {
                return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), x => this.matchContains(x));
            }

            return true;
        }

        private matchContains(item: PermissionCheckItem): boolean {
            return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
        }

        private getDescendants(item: PermissionCheckItem, excludeGroups: boolean): PermissionCheckItem[] {
            let result: PermissionCheckItem[] = [];
            let stack = [item];
            while (stack.length > 0) {
                let i = stack.pop();
                let children = this.byParentKey[i.Key];
                if (!children)
                    continue;

                for (let child of children) {
                    if (!excludeGroups || !child.IsGroup) {
                        result.push(child);
                    }

                    stack.push(child);
                }
            }

            return result;
        }

        protected onClick(e, row, cell): void {
            super.onClick(e, row, cell);

            if (!e.isDefaultPrevented()) {
                Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, x => x.Key);
            }

            if (e.isDefaultPrevented()) {
                return;
            }

            let target = $(e.target);
            let grant = target.hasClass('grant');

            if (grant || target.hasClass('revoke')) {
                e.preventDefault();

                let item = this.itemAt(row);
                let checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');

                if (checkedOrPartial) {
                    grant = null;
                }
                else {
                    grant = grant !== checkedOrPartial;
                }

                if (item.IsGroup) {
                    for (var d of this.getDescendants(item, true)) {
                        d.GrantRevoke = grant;
                    }
                }
                else
                    item.GrantRevoke = grant;

                this.slickGrid.invalidate();
            }
        }

        private getParentKey(key): string {
            if (key.charAt(key.length - 1) === ':') {
                key = key.substr(0, key.length - 1);
            }

            let idx = key.lastIndexOf(':');
            if (idx >= 0) {
                return key.substr(0, idx + 1);
            }
            return null;
        }

        protected getButtons(): Serenity.ToolButton[] {
            return [];
        }

        protected createToolbarExtensions(): void {
            super.createToolbarExtensions();
            Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, (field, text) => {
                this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                this.view.setItems(this.view.getItems(), true);
            });
        }

        private getSortedGroupAndPermissionKeys(titleByKey: Q.Dictionary<string>): string[] {
            let keys = <string[]>Q.getRemoteData('Administration.PermissionKeys').Entities;
            let titleWithGroup = {};
            for (var k of keys) {
                let s = k;

                if (!s) {
                    continue;
                }

                if (s.charAt(s.length - 1) == ':') {
                    s = s.substr(0, s.length - 1);
                    if (s.length === 0) {
                        continue;
                    }
                }

                if (titleByKey[s]) {
                    continue;
                }

                titleByKey[s] = Q.format(Q.tryGetText('Permission.' + s), s);
                let parts = s.split(':');
                let group = '';
                let groupTitle = '';
                for (let i = 0; i < parts.length - 1; i++) {
                    group = group + parts[i] + ':';
                    let txt = Q.tryGetText('Permission.' + group);
                    if (txt == null) {
                        txt = parts[i];
                    }
                    titleByKey[group] = txt;
                    groupTitle = groupTitle + titleByKey[group] + ':';
                    titleWithGroup[group] = groupTitle;
                }

                titleWithGroup[s] = groupTitle + titleByKey[s];
            }

            keys = Object.keys(titleByKey);
            keys = keys.sort((x, y) => Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]));

            return keys;
        }

        get_value(): UserPermissionRow[] {

            let result: UserPermissionRow[] = [];

            for (let item of this.view.getItems()) {
                if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                    result.push({ PermissionKey: item.Key, Grant: item.GrantRevoke });
                }
            }

            return result;
        }

        set_value(value: UserPermissionRow[]) {

            for (let item of this.view.getItems()) {
                item.GrantRevoke = null;
            }

            if (value != null) {
                for (let row of value) {
                    let r = this.view.getItemById(row.PermissionKey);
                    if (r) {
                        r.GrantRevoke = Q.coalesce(row.Grant, true);
                    }
                }
            }

            this.setItems(this.getItems());
        }

        get_rolePermissions(): string[] {
            return Object.keys(this.rolePermissions);
        }

        set_rolePermissions(value: string[]) {
            this.rolePermissions = {};

            if (value) {
                for (let k of value) {
                    this.rolePermissions[k] = true;
                }
            }

            this.setItems(this.getItems());
        }
    }
}