
namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Administration.UserPermission"), IdProperty("UserPermissionId"), NameProperty("PermissionKey")]
    [DialogType(typeof(UserPermissionDialog)), LocalTextPrefix("Administration.UserPermission"), Service("Administration/UserPermission")]
    public class UserPermissionGrid : EntityGrid<UserPermissionRow>, IAsyncInit
    {
        public UserPermissionGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}