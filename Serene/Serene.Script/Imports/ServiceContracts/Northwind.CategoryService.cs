namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported, PreserveMemberCase]
    public partial class CategoryService
    {
        [InlineConstant] public const string BaseUrl = "Northwind/Category";
    
        [InlineCode("Q.serviceRequest('Northwind/Category/Create', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Create(SaveWithLocalizationRequest<CategoryRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('Northwind/Category/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(SaveWithLocalizationRequest<CategoryRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('Northwind/Category/Delete', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('Northwind/Category/RetrieveLocalization', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest RetrieveLocalization(RetrieveLocalizationRequest request, Action<RetrieveLocalizationResponse<CategoryRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('Northwind/Category/Retrieve', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<CategoryRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('Northwind/Category/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<CategoryRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "Northwind/Category/Create";
            [InlineConstant] public const string Update = "Northwind/Category/Update";
            [InlineConstant] public const string Delete = "Northwind/Category/Delete";
            [InlineConstant] public const string RetrieveLocalization = "Northwind/Category/RetrieveLocalization";
            [InlineConstant] public const string Retrieve = "Northwind/Category/Retrieve";
            [InlineConstant] public const string List = "Northwind/Category/List";
        }
    }
    
}

