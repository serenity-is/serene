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
    public partial class UserRoleService
    {
        [InlineConstant] public const string BaseUrl = "Administration/UserRole";

        [InlineCode("Q.serviceRequest('Administration/UserRole/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(UserRoleUpdateRequest request, Action<SaveResponse> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Administration/UserRole/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(UserRoleListRequest request, Action<UserRoleListResponse> onSuccess = null, ServiceCallOptions options = null)
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

