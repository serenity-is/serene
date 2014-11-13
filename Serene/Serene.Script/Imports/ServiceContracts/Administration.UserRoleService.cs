namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;

    public partial class UserRoleService
    {
        public static jQueryXmlHttpRequest Update(UserRoleUpdateRequest request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/UserRole/Update", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(UserRoleListRequest request, Action<UserRoleListResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Administration/UserRole/List", request, onSuccess, options);
        }
    }
    
}

