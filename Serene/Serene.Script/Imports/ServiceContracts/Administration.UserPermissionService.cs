namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;

    public partial class UserPermissionService
    {
        public static jQueryXmlHttpRequest Create(SaveRequest<UserPermissionRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/UserPermission/Create", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Update(SaveRequest<UserPermissionRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/UserPermission/Update", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/UserPermission/Delete", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<UserPermissionRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/UserPermission/Retrieve", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<UserPermissionRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/UserPermission/List", request, onSuccess, options);
        }
    }
    
}

