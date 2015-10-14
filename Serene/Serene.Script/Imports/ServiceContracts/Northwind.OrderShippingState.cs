
namespace Serene.Northwind
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [EnumKey("Northwind.OrderShippingState"), PreserveMemberCase]
    public enum OrderShippingState
    {
        NotShipped = 0,
        Shipped = 1
    }
    
}

