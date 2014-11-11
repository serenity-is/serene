
namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("UserPermissionId"), NameProperty("PermissionKey")]
    [FormKey("Administration.UserPermission"), LocalTextPrefix("Administration.UserPermission"), Service("Administration/UserPermission")]
    public class UserPermissionDialog : EntityDialog<UserPermissionRow>, IAsyncInit
    {
    }
}