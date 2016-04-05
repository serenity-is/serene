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
    public partial class RolePermissionService
    {
        [InlineConstant] public const string BaseUrl = "Administration/RolePermission";

        [InlineCode("Q.serviceRequest('Administration/RolePermission/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(RolePermissionUpdateRequest request, Action<SaveResponse> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Administration/RolePermission/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(RolePermissionListRequest request, Action<RolePermissionListResponse> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Update = "Administration/RolePermission/Update";
            [InlineConstant] public const string List = "Administration/RolePermission/List";
        }
    }
}

