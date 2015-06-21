namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    public partial class RolePermissionService
    {
        [InlineConstant] public const string BaseUrl = "Administration/RolePermission";
    
        public static jQueryXmlHttpRequest Update(RolePermissionUpdateRequest request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Update, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(RolePermissionListRequest request, Action<RolePermissionListResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.List, request, onSuccess, options);
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Update = "Administration/RolePermission/Update";
            [InlineConstant] public const string List = "Administration/RolePermission/List";
        }
    }
    
}

