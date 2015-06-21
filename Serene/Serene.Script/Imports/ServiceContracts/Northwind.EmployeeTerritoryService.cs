namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    public partial class EmployeeTerritoryService
    {
        [InlineConstant] public const string BaseUrl = "Northwind/EmployeeTerritory";
    
        public static jQueryXmlHttpRequest Create(SaveRequest<EmployeeTerritoryRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Create, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Update(SaveRequest<EmployeeTerritoryRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Update, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Delete, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<EmployeeTerritoryRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Retrieve, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<EmployeeTerritoryRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.List, request, onSuccess, options);
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "Northwind/EmployeeTerritory/Create";
            [InlineConstant] public const string Update = "Northwind/EmployeeTerritory/Update";
            [InlineConstant] public const string Delete = "Northwind/EmployeeTerritory/Delete";
            [InlineConstant] public const string Retrieve = "Northwind/EmployeeTerritory/Retrieve";
            [InlineConstant] public const string List = "Northwind/EmployeeTerritory/List";
        }
    }
    
}

