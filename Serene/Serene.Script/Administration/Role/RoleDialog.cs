
using Serenity;
using System.Runtime.CompilerServices;

namespace Serene.Administration
{
    [Imported]
    public class RoleDialog : EntityDialog<RoleRow>
    {
    }

    /*
    This class has been ported to TypeScript. See RoleDialog.ts
    Code below is only for reference purposes who wants to use Saltaralle 


    [IdProperty("RoleId"), NameProperty("RoleName")]
    [FormKey("Administration.Role"), LocalTextPrefix("Administration.Role"), Service("Administration/Role")]
    public class RoleDialog : EntityDialog<RoleRow>, IAsyncInit
    {
        protected override List<ToolButton> GetToolbarButtons()
        {
            var buttons = base.GetToolbarButtons();

            buttons.Add(new ToolButton
            {
                Title = Q.Text("Site.RolePermissionDialog.EditButton"),
                CssClass = "lock-button",
                OnClick = delegate
                {
                    new RolePermissionDialog(new RolePermissionDialogOptions
                    {
                        RoleID = this.Entity.RoleId.Value,
                        Title = this.Entity.RoleName,
                    }).DialogOpen();
                }
            });

            return buttons;
        }

        protected override void UpdateInterface()
        {
            base.UpdateInterface();

            toolbar.FindButton("lock-button").ToggleClass("disabled", this.IsNewOrDeleted);
        }
    }
    */
}