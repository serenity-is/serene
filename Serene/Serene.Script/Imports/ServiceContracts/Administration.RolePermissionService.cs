namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;

    public partial class RolePermissionService
    {
        public static jQueryXmlHttpRequest Update(RolePermissionUpdateRequest request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/RolePermission/Update", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(RolePermissionListRequest request, Action<RolePermissionListResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/RolePermission/List", request, onSuccess, options);
        }
    }
    
}

