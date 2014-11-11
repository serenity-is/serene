
namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Administration.UserRole"), IdProperty("UserRoleId")]
    [DialogType(typeof(UserRoleDialog)), LocalTextPrefix("Administration.UserRole"), Service("Administration/UserRole")]
    public class UserRoleGrid : EntityGrid<UserRoleRow>, IAsyncInit
    {
        public UserRoleGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}