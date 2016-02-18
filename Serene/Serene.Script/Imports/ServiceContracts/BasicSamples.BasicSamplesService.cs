namespace Serene.BasicSamples
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported, PreserveMemberCase]
    public partial class BasicSamplesService
    {
        [InlineConstant] public const string BaseUrl = "BasicSamples/BasicSamples";
    
        [InlineCode("Q.serviceRequest('BasicSamples/BasicSamples/OrdersByShipper', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest OrdersByShipper(OrdersByShipperRequest request, Action<OrdersByShipperResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string OrdersByShipper = "BasicSamples/BasicSamples/OrdersByShipper";
        }
    }
    
}

