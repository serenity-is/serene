namespace Serene.Administration
{
    using Serenity;
    using System;
    using System.Runtime.CompilerServices;

    [Imported]
    public class UserRoleDialog : TemplatedDialog<UserRoleDialogOptions>
    {
        public UserRoleDialog(UserRoleDialogOptions opt)
            : base(opt)
        {

        }
    }

    [Imported, Serializable]
    public class UserRoleDialogOptions
    {
        public int UserID { get; set; }
        public string Username { get; set; }
    }

    /* 
    This class has been ported to TypeScript. See UserRoleDialog.ts
    Code below is only a reference for those who want to use Saltaralle

    public class UserRoleDialog : TemplatedDialog<UserRoleDialogOptions>
    {
        private RoleCheckEditor permissions;
        
        public UserRoleDialog(UserRoleDialogOptions opt)
            : base(opt)
        {
            permissions = new RoleCheckEditor(this.ById("Roles"));

            UserRoleService.List(new UserRoleListRequest
            {
                UserID = options.UserID,
            }, response =>
            {
                permissions.Value = response.Entities.Select(x => x.ToString()).ToList();
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
                        UserRoleService.Update(new UserRoleUpdateRequest
                        {
                            UserID = options.UserID,
                            Roles = permissions.Value.Select(x => Int32.Parse(x, 10)).ToList(),
                        }, response => {
                            DialogClose();
                            Window.SetTimeout(delegate()
                            {
                                Q.NotifySuccess(Q.Text("Site.UserRoleDialog.SaveSuccess"));
                            }, 0);
                        });
                    },
                },
                new DialogButton {
                    Text = Q.Text("Dialogs.CancelButton"),
                    Click = DialogClose
                }
            };
            opt.Title = String.Format(Q.Text("Site.UserRoleDialog.DialogTitle"), options.Username);
            return opt;
        }

        protected override string GetTemplate()
        {
            return "<div id='~_Roles'></div>";
        }
    }
    */
}
 