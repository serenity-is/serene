namespace Serene.Administration {

    @Serenity.Decorators.registerClass()
    export class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey() { return RoleForm.formKey; }
        protected getIdProperty() { return RoleRow.idProperty; }
        protected getLocalTextPrefix() { return RoleRow.localTextPrefix; }
        protected getNameProperty() { return RoleRow.nameProperty; }
        protected getService() { return RoleService.baseUrl; }

        protected form = new RoleForm(this.idPrefix);

        protected getToolbarButtons()
        {
            let buttons = super.getToolbarButtons();

            buttons.push({
                title: Q.text('Site.RolePermissionDialog.EditButton'),
                cssClass: 'edit-permissions-button',
                icon: 'icon-lock-open text-green',
                onClick: () =>
                {
                    new RolePermissionDialog({
                        roleID: this.entity.RoleId,
                        title: this.entity.RoleName
                    }).dialogOpen();
                }
            });

            return buttons;
        }

        protected updateInterface() {
            super.updateInterface();

            this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
        }
    }
}