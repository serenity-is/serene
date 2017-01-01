namespace Serene.Administration {

    @Serenity.Decorators.registerClass()
    export class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {

        private permissions: RoleCheckEditor;

        constructor(opt: UserRoleDialogOptions) {
            super(opt);

            this.permissions = new RoleCheckEditor(this.byId('Roles'));

            UserRoleService.List({
                UserID: this.options.userID
            }, response => {
                this.permissions.value = response.Entities.map(x => x.toString());
            });
        }

        protected getDialogOptions() {
            var opt = super.getDialogOptions();

            opt.buttons = [{
                text: Q.text('Dialogs.OkButton'),
                click: () => {
                    Q.serviceRequest('Administration/UserRole/Update', {
                        UserID: this.options.userID,
                        Roles: this.permissions.value.map(x => parseInt(x, 10))
                    }, response => {
                        this.dialogClose();
                        Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                    });
                }
            }, {
                text: Q.text('Dialogs.CancelButton'),
                click: () => this.dialogClose()
            }];

            opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
            return opt;
        }

        protected getTemplate() {
            return "<div id='~_Roles'></div>";
        }
    }

    export interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}