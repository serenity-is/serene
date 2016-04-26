namespace Serene.Administration
{
    using jQueryApi.UI.Widgets;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Html;
    using System.Runtime.CompilerServices;
    using System.Linq;

    [Imported]
    public class RolePermissionDialog : TemplatedDialog<RolePermissionDialogOptions>
    {
    }

    [Imported, Serializable]
    public class RolePermissionDialogOptions
    {
        public int RoleID { get; set; }
        public string Title { get; set; }
    }

    /*
    This class has been ported to TypeScript. See RoleDialog.ts
    Code below is only for reference purposes who wants to use Saltaralle 

    public class RolePermissionDialog : TemplatedDialog<RolePermissionDialogOptions>
    {
        private PermissionCheckEditor permissions;
        
        public RolePermissionDialog(RolePermissionDialogOptions opt)
            : base(opt)
        {
            permissions = new PermissionCheckEditor(this.ById("Permissions"), 
                new PermissionCheckEditorOptions { ShowRevoke = false });

            RolePermissionService.List(new RolePermissionListRequest
            {
                RoleID = options.RoleID,
                Module = null,
                Submodule = null
            }, response =>
            {
                permissions.Value = response.Entities.Select(x => new UserPermissionRow { PermissionKey = x }).ToList();
            });
        }

        protected override DialogOptions GetDialogOptions()
        {
            var opt = base.GetDialogOptions();
            opt.Buttons = new List<DialogButton>
            {
                new DialogButton {
                    Text = Q.Text("Dialogs.OkButton"),
                    Click = delegate
                    {
                        RolePermissionService.Update(new RolePermissionUpdateRequest
                        {
                            RoleID = options.RoleID,
                            Permissions = permissions.Value.Select(x => x.PermissionKey).ToList(),
                            Module = null,
                            Submodule = null
                        }, response => {
                            DialogClose();
                            Window.SetTimeout(delegate()
                            {
                                Q.NotifySuccess(Q.Text("Site.RolePermissionDialog.SaveSuccess"));
                            }, 0);
                        });
                    },
                },
                new DialogButton {
                    Text = Q.Text("Dialogs.CancelButton"),
                    Click = DialogClose
                }
            };
            opt.Title = String.Format(Q.Text("Site.RolePermissionDialog.DialogTitle"), options.Title);
            return opt;
        }

        protected override string GetTemplate()
        {
            return "<div id='~_Permissions'></div>";
        }
    }
    */
}
 