
namespace Serene.Administration
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class RoleRow
    {
        public Int32? RoleId { get; set; }
        public String RoleName { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string RoleId = "RoleId";
            [InlineConstant] public const string RoleName = "RoleName";
        }
    }
    
}

