namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;

    public partial class UserRoleService
    {
        public static jQueryXmlHttpRequest Create(SaveRequest<UserRoleRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/UserRole/Create", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Update(SaveRequest<UserRoleRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/UserRole/Update", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/UserRole/Delete", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<UserRoleRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/UserRole/Retrieve", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<UserRoleRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/UserRole/List", request, onSuccess, options);
        }
    }
    
}

