namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    public partial class UserRoleService
    {
        [InlineConstant] public const string BaseUrl = "Administration/UserRole";
    
        public static jQueryXmlHttpRequest Update(UserRoleUpdateRequest request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Update, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(UserRoleListRequest request, Action<UserRoleListResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.List, request, onSuccess, options);
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Update = "Administration/UserRole/Update";
            [InlineConstant] public const string List = "Administration/UserRole/List";
        }
    }
    
}

