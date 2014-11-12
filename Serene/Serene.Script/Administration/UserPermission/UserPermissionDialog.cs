namespace Serene.Administration
{
    using jQueryApi;
    using jQueryApi.UI.Widgets;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Html;
    using System.Linq;
    using System.Runtime.CompilerServices;

    public class UserPermissionDialog : TemplatedDialog<UserPermissionDialogOptions>
    {
        private PermissionModuleEditor module;
        
        public UserPermissionDialog(UserPermissionDialogOptions opt)
            : base(opt)
        {
            module = new PermissionModuleEditor(this.ById("Module"));
        }

        protected override string GetTemplate()
        {
            return "<div><input id='~_Module' type='hidden'></div><div>";
        }
    }

    [Imported, Serializable]
    public class UserPermissionDialogOptions
    {
        public string UserID { get; set; }
        public string Title { get; set; }
    }
}