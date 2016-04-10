using jQueryApi;
using Serenity;
using System.Runtime.CompilerServices;

namespace Serene.Administration
{
    [Imported]
    public class UserGrid : EntityGrid<UserRow, object>
    {
        public UserGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    /*
    This class has been ported to TypeScript. See UserDialog.ts
    Code below is only for reference purposes who wants to use Saltaralle 

    [IdProperty("UserId"), NameProperty("Username"), IsActiveProperty("IsActive")]
    [LocalTextPrefix("Administration.User"), Service("Administration/User")]
    public class UserGrid : EntityGrid<UserRow>
    {
        public UserGrid(jQueryObject container)
            : base(container)
        {
        }

        protected override List<string> GetDefaultSortBy()
        {
            return new List<string> { "Username" };
        }

        protected override Type GetDialogType()
        {
            return typeof(UserDialog);
        }
    }
    */
}