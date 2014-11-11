
namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Administration.RolePermission"), IdProperty("RolePermissionId"), NameProperty("PermissionKey")]
    [DialogType(typeof(RolePermissionDialog)), LocalTextPrefix("Administration.RolePermission"), Service("Administration/RolePermission")]
    public class RolePermissionGrid : EntityGrid<RolePermissionRow>, IAsyncInit
    {
        public RolePermissionGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}