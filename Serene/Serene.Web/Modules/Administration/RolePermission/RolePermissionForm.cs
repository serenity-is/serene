
namespace Serene.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.RolePermission")]
    [BasedOnRow(typeof(Entities.RolePermissionRow))]
    public class RolePermissionForm
    {
        public Int32 RoleId { get; set; }
        public String PermissionKey { get; set; }
    }
}