import { Decorators, EntityGrid } from "@serenity-is/corelib";
import { resolveUrl, tryFirst } from "@serenity-is/corelib/q";
import { RoleRow, UserColumns, UserRow, UserService } from "../";
import { UserDialog } from "./UserDialog";

@Decorators.registerClass()
export class UserGrid extends EntityGrid<UserRow, any> {
    protected getColumnsKey() { return UserColumns.columnsKey; }
    protected getDialogType() { return UserDialog; }
    protected getIdProperty() { return UserRow.idProperty; }
    protected getIsActiveProperty() { return UserRow.isActiveProperty; }
    protected getLocalTextPrefix() { return UserRow.localTextPrefix; }
    protected getService() { return UserService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }

    protected getDefaultSortBy() {
        return [UserRow.Fields.Username];
    }

    protected getColumns() {
        var columns = super.getColumns();

        var roles = tryFirst(columns, x => x.field == UserRow.Fields.Roles);
        if (roles) {
            roles.format = ctx => {
                var roleList = (ctx.value || []).map(x => (RoleRow.getLookup().itemById[x] || {}).RoleName || "");
                roleList.sort();
                return roleList.join(", ");
            };
        }

        return columns;
    }
}
