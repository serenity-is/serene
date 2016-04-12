namespace Serene.Administration {

    @Serenity.Decorators.registerClass()
    export class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey() { return UserForm.formKey; }
        protected getIdProperty() { return UserRow.idProperty; }
        protected getIsActiveProperty() { return UserRow.isActiveProperty; }
        protected getLocalTextPrefix() { return UserRow.localTextPrefix; }
        protected getNameProperty() { return UserRow.nameProperty; }
        protected getService() { return UserService.baseUrl; }

        protected form = new UserForm(this.idPrefix);

        constructor() {
            super();

            this.form.Password().addValidationRule(this.uniqueName, e => {
                if (this.form.Password().get_value().length < 7)
                    return "Password must be at least 7 characters!";
            });

            this.form.PasswordConfirm().addValidationRule(this.uniqueName, e => {
                if (this.form.Password().get_value() != this.form.PasswordConfirm().get_value())
                    return "The passwords entered doesn't match!";
            });
        }

        protected getToolbarButtons()
        {
            let buttons = super.getToolbarButtons();

            buttons.push({
                title: Q.text('Site.UserDialog.EditRolesButton'),
                cssClass: 'users-button',
                onClick: () =>
                {
                    new UserRoleDialog({
                        userID: this.entity.UserId,
                        username: this.entity.Username
                    }).dialogOpen();
                }
            });

            buttons.push({
                title: Q.text('Site.UserDialog.EditPermissionsButton'),
                cssClass: 'lock-button',
                onClick: () =>
                {
                    new UserPermissionDialog({
                        userID: this.entity.UserId,
                        username: this.entity.Username
                    }).dialogOpen();
                }
            });

            return buttons;
        }

        protected updateInterface() {
            super.updateInterface();

            this.toolbar.findButton('users-button').toggleClass('disabled', this.isNewOrDeleted());
            this.toolbar.findButton("lock-button").toggleClass("disabled", this.isNewOrDeleted());
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            // these fields are only required in new record mode
            this.form.Password().element.toggleClass('required', this.isNew())
                .closest('.field').find('sup').toggle(this.isNew());
            this.form.PasswordConfirm().element.toggleClass('required', this.isNew())
                .closest('.field').find('sup').toggle(this.isNew());
        }
    }
}