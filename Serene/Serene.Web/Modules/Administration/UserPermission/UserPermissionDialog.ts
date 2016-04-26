namespace Serene.Administration {

    @Serenity.Decorators.registerClass()
    export class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {

        private permissions: PermissionCheckEditor;

        constructor(opt: UserPermissionDialogOptions) {
            super(opt);

            this.permissions = new PermissionCheckEditor(this.byId('Permissions'), {
                showRevoke: true
            });

            UserPermissionService.List({
                UserID: this.options.userID,
                Module: null,
                Submodule: null
            }, response => {
                this.permissions.set_value(response.Entities);
            });

            UserPermissionService.ListRolePermissions({
                UserID: this.options.userID,
                Module: null,
                Submodule: null,
            }, response => {
                this.permissions.set_rolePermissions(response.Entities);
            });
        }

        protected getDialogOptions(): JQueryUI.DialogOptions {
            let opt = super.getDialogOptions();

            opt.buttons = [
                {
                    text: Q.text('Dialogs.OkButton'),
                    click: e => {
                        UserPermissionService.Update({
                            UserID: this.options.userID,
                            Permissions: this.permissions.get_value(),
                            Module: null,
                            Submodule: null
                        }, response => {
                            this.dialogClose();
                            window.setTimeout(() => Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')), 0);
                        });
                    }
                }, {
                    text: Q.text('Dialogs.CancelButton'),
                    click: () => this.dialogClose()
                }];

            opt.title = ss.formatString(Q.text('Site.UserPermissionDialog.DialogTitle'),
                this.options.username);

            return opt;
        }

        protected getTemplate(): string {
            return '<div id="~_Permissions"></div>';
        }
    }

    export interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}