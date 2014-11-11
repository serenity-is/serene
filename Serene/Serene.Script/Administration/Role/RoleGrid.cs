
namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Administration.Role"), IdProperty("RoleId"), NameProperty("RoleName")]
    [DialogType(typeof(RoleDialog)), LocalTextPrefix("Administration.Role"), Service("Administration/Role")]
    public class RoleGrid : EntityGrid<RoleRow>, IAsyncInit
    {
        public RoleGrid(jQueryObject container)
            : base(container)
        {
        }

        protected override List<string> GetDefaultSortBy()
        {
            return new List<string> { "RoleName" };
        }
    }
}