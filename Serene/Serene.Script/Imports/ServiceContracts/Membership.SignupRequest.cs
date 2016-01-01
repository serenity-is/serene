
namespace Serene.Membership
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class SignupRequest : ServiceRequest
    {
        public String Username { get; set; }
        public String Email { get; set; }
        public String Password { get; set; }
    }
    
}

