namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported, PreserveMemberCase]
    public partial class SalesByCategoryService
    {
        [InlineConstant] public const string BaseUrl = "Northwind/SalesByCategory";
    
        [InlineCode("Q.serviceRequest('Northwind/SalesByCategory/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<SalesByCategoryRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string List = "Northwind/SalesByCategory/List";
        }
    }
    
}

