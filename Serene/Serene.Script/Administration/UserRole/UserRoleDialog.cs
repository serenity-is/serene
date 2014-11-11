
namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("UserRoleId")]
    [FormKey("Administration.UserRole"), LocalTextPrefix("Administration.UserRole"), Service("Administration/UserRole")]
    public class UserRoleDialog : EntityDialog<UserRoleRow>, IAsyncInit
    {
    }
}