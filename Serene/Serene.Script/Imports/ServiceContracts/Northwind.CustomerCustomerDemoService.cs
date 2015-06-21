namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    public partial class CustomerCustomerDemoService
    {
        [InlineConstant] public const string BaseUrl = "Northwind/CustomerCustomerDemo";
    
        public static jQueryXmlHttpRequest Create(SaveRequest<CustomerCustomerDemoRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Create, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Update(SaveRequest<CustomerCustomerDemoRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Update, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Delete, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<CustomerCustomerDemoRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Retrieve, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<CustomerCustomerDemoRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.List, request, onSuccess, options);
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

