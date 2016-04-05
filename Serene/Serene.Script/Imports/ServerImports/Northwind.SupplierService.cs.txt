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
    public partial class SupplierService
    {
        [InlineConstant] public const string BaseUrl = "Northwind/Supplier";

        [InlineCode("Q.serviceRequest('Northwind/Supplier/Create', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Create(SaveRequest<SupplierRow> request, Action<SaveResponse> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Northwind/Supplier/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(SaveRequest<SupplierRow> request, Action<SaveResponse> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Northwind/Supplier/Delete', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Northwind/Supplier/Retrieve', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<SupplierRow>> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Northwind/Supplier/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<SupplierRow>> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "Northwind/Supplier/Create";
            [InlineConstant] public const string Update = "Northwind/Supplier/Update";
            [InlineConstant] public const string Delete = "Northwind/Supplier/Delete";
            [InlineConstant] public const string Retrieve = "Northwind/Supplier/Retrieve";
            [InlineConstant] public const string List = "Northwind/Supplier/List";
        }
    }
}

