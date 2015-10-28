namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported, PreserveMemberCase]
    public partial class CustomerDemographicService
    {
        [InlineConstant] public const string BaseUrl = "Northwind/CustomerDemographic";
    
        [InlineCode("Q.serviceRequest('Northwind/CustomerDemographic/Create', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Create(SaveRequest<CustomerDemographicRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('Northwind/CustomerDemographic/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(SaveRequest<CustomerDemographicRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('Northwind/CustomerDemographic/Delete', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('Northwind/CustomerDemographic/Retrieve', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<CustomerDemographicRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('Northwind/CustomerDemographic/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<CustomerDemographicRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "Northwind/CustomerDemographic/Create";
            [InlineConstant] public const string Update = "Northwind/CustomerDemographic/Update";
            [InlineConstant] public const string Delete = "Northwind/CustomerDemographic/Delete";
            [InlineConstant] public const string Retrieve = "Northwind/CustomerDemographic/Retrieve";
            [InlineConstant] public const string List = "Northwind/CustomerDemographic/List";
        }
    }
    
}

