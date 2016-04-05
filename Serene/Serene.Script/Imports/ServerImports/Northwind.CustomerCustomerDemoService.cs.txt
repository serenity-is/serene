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
    public partial class CustomerCustomerDemoService
    {
        [InlineConstant] public const string BaseUrl = "Northwind/CustomerCustomerDemo";

        [InlineCode("Q.serviceRequest('Northwind/CustomerCustomerDemo/Create', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Create(SaveRequest<CustomerCustomerDemoRow> request, Action<SaveResponse> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Northwind/CustomerCustomerDemo/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(SaveRequest<CustomerCustomerDemoRow> request, Action<SaveResponse> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Northwind/CustomerCustomerDemo/Delete', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Northwind/CustomerCustomerDemo/Retrieve', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<CustomerCustomerDemoRow>> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Northwind/CustomerCustomerDemo/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<CustomerCustomerDemoRow>> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "Northwind/CustomerCustomerDemo/Create";
            [InlineConstant] public const string Update = "Northwind/CustomerCustomerDemo/Update";
            [InlineConstant] public const string Delete = "Northwind/CustomerCustomerDemo/Delete";
            [InlineConstant] public const string Retrieve = "Northwind/CustomerCustomerDemo/Retrieve";
            [InlineConstant] public const string List = "Northwind/CustomerCustomerDemo/List";
        }
    }
}

