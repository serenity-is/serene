using jQueryApi;
using Serenity;
using System.Runtime.CompilerServices;

namespace Serene.Administration
{
    [Imported]
    public class RoleGrid : EntityGrid<RoleRow>
    {
        public RoleGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    /*
    This class has been ported to TypeScript. See RoleGrid.ts
    Code below is only for reference purposes who wants to use Saltaralle 

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
    */
}
 