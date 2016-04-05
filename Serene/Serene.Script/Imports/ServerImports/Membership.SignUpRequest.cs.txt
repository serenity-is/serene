using jQueryApi;
using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace Serene.Membership
{
    [Imported, Serializable, PreserveMemberCase]
    public partial class SignUpRequest : ServiceRequest
    {
        public String DisplayName { get; set; }
        public String Email { get; set; }
        public String Password { get; set; }
    }
}

