
namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("RoleId"), NameProperty("RoleName")]
    [FormKey("Administration.Role"), LocalTextPrefix("Administration.Role"), Service("Administration/Role")]
    public class RoleDialog : EntityDialog<RoleRow>, IAsyncInit
    {
    }
}