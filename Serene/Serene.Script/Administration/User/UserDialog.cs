using Serenity;
using System.Runtime.CompilerServices;

namespace Serene.Administration
{
    [Imported]
    public class UserDialog : EntityDialog<UserRow>
    {
    }

    /* 
    This class has been ported to TypeScript. See UserDialog.ts
    Code below is only a reference for those who want to use Saltaralle

    [IdProperty("UserId"), NameProperty("Username"), IsActiveProperty("IsActive")]
    [FormKey("Administration.User"), LocalTextPrefix("Administration.User"), Service("Administration/User")]
    public class UserDialog : EntityDialog<UserRow>
    {
        private UserForm form;

        public UserDialog()
        {
            form = new UserForm(this.IdPrefix);

            form.Password.AddValidationRule(this.uniqueName, e =>
            {
                if (form.Password.Value.Length < 7)
                    return "Password must be at least 7 characters!";

                return null;
            });

            form.PasswordConfirm.AddValidationRule(this.uniqueName, e =>
            {
                if (form.Password.Value != form.PasswordConfirm.Value)
                    return "The passwords entered doesn't match!";

                return null;
            });
        }

        protected override List<ToolButton> GetToolbarButtons()
        {
            var buttons = base.GetToolbarButtons();

            buttons.Add(new ToolButton
            {
                Title = Q.Text("Site.UserDialog.EditRolesButton"),
                CssClass = "users-button",
                OnClick = delegate
                {
                    new UserRoleDialog(new UserRoleDialogOptions
                    {
                        UserID = this.Entity.UserId.Value,
                        Username = this.Entity.Username,
                    }).DialogOpen();
                }
            });

            buttons.Add(new ToolButton
            {
                Title = Q.Text("Site.UserDialog.EditPermissionsButton"),
                CssClass = "lock-button",
                OnClick = delegate
                {
                    new UserPermissionDialog(new UserPermissionDialogOptions
                    {
                        UserID = this.Entity.UserId.Value,
                        Username = this.Entity.Username,
                    }).DialogOpen();
                }
            });

            return buttons;
        }

        protected override void UpdateInterface()
        {
            base.UpdateInterface();

            toolbar.FindButton("users-button").ToggleClass("disabled", this.IsNewOrDeleted);
            toolbar.FindButton("lock-button").ToggleClass("disabled", this.IsNewOrDeleted);
        }
    }
    */
}