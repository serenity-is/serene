
namespace Serene.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.RolePermission")]
    [BasedOnRow(typeof(Entities.RolePermissionRow))]
    public class RolePermissionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 RolePermissionId { get; set; }
        public Int32 RoleId { get; set; }
        [EditLink]
        public String PermissionKey { get; set; }
    }
}