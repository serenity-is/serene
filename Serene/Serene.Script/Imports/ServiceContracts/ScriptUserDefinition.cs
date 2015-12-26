
namespace Serene
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class ScriptUserDefinition
    {
        public String Username { get; set; }
        public String DisplayName { get; set; }
        public JsDictionary<String,Boolean> Permissions { get; set; }
    }
    
}

