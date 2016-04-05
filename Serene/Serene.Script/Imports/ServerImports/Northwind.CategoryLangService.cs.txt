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
    public partial class CategoryLangService
    {
        [InlineConstant] public const string BaseUrl = "Northwind/CategoryLang";

        [InlineCode("Q.serviceRequest('Northwind/CategoryLang/Create', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Create(SaveRequest<CategoryLangRow> request, Action<SaveResponse> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Northwind/CategoryLang/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(SaveRequest<CategoryLangRow> request, Action<SaveResponse> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Northwind/CategoryLang/Delete', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Northwind/CategoryLang/Retrieve', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<CategoryLangRow>> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Northwind/CategoryLang/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<CategoryLangRow>> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "Northwind/CategoryLang/Create";
            [InlineConstant] public const string Update = "Northwind/CategoryLang/Update";
            [InlineConstant] public const string Delete = "Northwind/CategoryLang/Delete";
            [InlineConstant] public const string Retrieve = "Northwind/CategoryLang/Retrieve";
            [InlineConstant] public const string List = "Northwind/CategoryLang/List";
        }
    }
}

