using jQueryApi;
using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace Serene.Northwind
{
    [Imported, PreserveMemberCase]
    public partial class SalesByCategoryService
    {
        [InlineConstant] public const string BaseUrl = "Northwind/SalesByCategory";

        [InlineCode("Q.serviceRequest('Northwind/SalesByCategory/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<SalesByCategoryRow>> onSuccess = null, ServiceCallOptions options = null)
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

