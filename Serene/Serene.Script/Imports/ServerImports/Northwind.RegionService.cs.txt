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
    public partial class RegionService
    {
        [InlineConstant] public const string BaseUrl = "Northwind/Region";

        [InlineCode("Q.serviceRequest('Northwind/Region/Create', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Create(SaveRequest<RegionRow> request, Action<SaveResponse> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Northwind/Region/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(SaveRequest<RegionRow> request, Action<SaveResponse> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Northwind/Region/Delete', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Northwind/Region/Retrieve', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<RegionRow>> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Northwind/Region/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<RegionRow>> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "Northwind/Region/Create";
            [InlineConstant] public const string Update = "Northwind/Region/Update";
            [InlineConstant] public const string Delete = "Northwind/Region/Delete";
            [InlineConstant] public const string Retrieve = "Northwind/Region/Retrieve";
            [InlineConstant] public const string List = "Northwind/Region/List";
        }
    }
}

