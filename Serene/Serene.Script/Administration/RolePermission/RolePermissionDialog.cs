
namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("RolePermissionId"), NameProperty("PermissionKey")]
    [FormKey("Administration.RolePermission"), LocalTextPrefix("Administration.RolePermission"), Service("Administration/RolePermission")]
    public class RolePermissionDialog : EntityDialog<RolePermissionRow>, IAsyncInit
    {
    }
}