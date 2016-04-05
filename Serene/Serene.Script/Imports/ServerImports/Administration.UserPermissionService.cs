using jQueryApi;
using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace Serene.Administration
{
    [Imported, PreserveMemberCase]
    public partial class UserPermissionService
    {
        [InlineConstant] public const string BaseUrl = "Administration/UserPermission";

        [InlineCode("Q.serviceRequest('Administration/UserPermission/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(UserPermissionUpdateRequest request, Action<SaveResponse> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Administration/UserPermission/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(UserPermissionListRequest request, Action<ListResponse<UserPermissionRow>> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Administration/UserPermission/ListRolePermissions', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest ListRolePermissions(UserPermissionListRequest request, Action<ListResponse<String>> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Administration/UserPermission/ListPermissionKeys', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest ListPermissionKeys(ServiceRequest request, Action<ListResponse<String>> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Update = "Administration/UserPermission/Update";
            [InlineConstant] public const string List = "Administration/UserPermission/List";
            [InlineConstant] public const string ListRolePermissions = "Administration/UserPermission/ListRolePermissions";
            [InlineConstant] public const string ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys";
        }
    }
}

