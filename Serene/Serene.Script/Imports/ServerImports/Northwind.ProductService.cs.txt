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
    public partial class ProductService
    {
        [InlineConstant] public const string BaseUrl = "Northwind/Product";

        [InlineCode("Q.serviceRequest('Northwind/Product/Create', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Create(SaveWithLocalizationRequest<ProductRow> request, Action<SaveResponse> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Northwind/Product/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(SaveWithLocalizationRequest<ProductRow> request, Action<SaveResponse> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Northwind/Product/Delete', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Northwind/Product/Retrieve', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<ProductRow>> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Northwind/Product/RetrieveLocalization', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest RetrieveLocalization(RetrieveLocalizationRequest request, Action<RetrieveLocalizationResponse<ProductRow>> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Northwind/Product/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<ProductRow>> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "Northwind/Product/Create";
            [InlineConstant] public const string Update = "Northwind/Product/Update";
            [InlineConstant] public const string Delete = "Northwind/Product/Delete";
            [InlineConstant] public const string Retrieve = "Northwind/Product/Retrieve";
            [InlineConstant] public const string RetrieveLocalization = "Northwind/Product/RetrieveLocalization";
            [InlineConstant] public const string List = "Northwind/Product/List";
        }
    }
}

