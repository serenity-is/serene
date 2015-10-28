namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported, PreserveMemberCase]
    public partial class UserRoleService
    {
        [InlineConstant] public const string BaseUrl = "Administration/UserRole";
    
        [InlineCode("Q.serviceRequest('Administration/UserRole/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(UserRoleUpdateRequest request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('Administration/UserRole/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(UserRoleListRequest request, Action<UserRoleListResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Update = "Administration/UserRole/Update";
            [InlineConstant] public const string List = "Administration/UserRole/List";
        }
    }
    
}

