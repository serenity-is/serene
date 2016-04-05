using jQueryApi;
using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace Serene.Administration
{
    [Imported, Serializable, PreserveMemberCase]
    public partial class RolePermissionListRequest : ServiceRequest
    {
        public Int32? RoleID { get; set; }
        public String Module { get; set; }
        public String Submodule { get; set; }
    }
}

