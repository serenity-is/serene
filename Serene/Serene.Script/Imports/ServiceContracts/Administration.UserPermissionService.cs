namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    public partial class UserPermissionService
    {
        [InlineConstant] public const string BaseUrl = "Administration/UserPermission";
    
        public static jQueryXmlHttpRequest Update(UserPermissionUpdateRequest request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Update, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(UserPermissionListRequest request, Action<UserPermissionListResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.List, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest ListPermissionKeys(ServiceRequest request, Action<UserPermissionListResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.ListPermissionKeys, request, onSuccess, options);
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Update = "Administration/UserPermission/Update";
            [InlineConstant] public const string List = "Administration/UserPermission/List";
            [InlineConstant] public const string ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys";
        }
    }
    
}

