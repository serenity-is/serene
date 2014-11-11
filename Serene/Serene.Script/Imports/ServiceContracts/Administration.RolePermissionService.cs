namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;

    public partial class RolePermissionService
    {
        public static jQueryXmlHttpRequest Create(SaveRequest<RolePermissionRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/RolePermission/Create", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Update(SaveRequest<RolePermissionRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/RolePermission/Update", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/RolePermission/Delete", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<RolePermissionRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/RolePermission/Retrieve", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<RolePermissionRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/RolePermission/List", request, onSuccess, options);
        }
    }
    
}

