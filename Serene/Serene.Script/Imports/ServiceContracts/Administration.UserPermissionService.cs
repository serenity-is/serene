namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;

    public partial class UserPermissionService
    {
        public static jQueryXmlHttpRequest Update(UserPermissionUpdateRequest request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/UserPermission/Update", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(UserPermissionListRequest request, Action<UserPermissionListResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/UserPermission/List", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest ListPermissionKeys(ServiceRequest request, Action<UserPermissionListResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/UserPermission/ListPermissionKeys", request, onSuccess, options);
        }
    }
    
}

