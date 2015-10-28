namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported, PreserveMemberCase]
    public partial class RoleService
    {
        [InlineConstant] public const string BaseUrl = "Administration/Role";
    
        [InlineCode("Q.serviceRequest('Administration/Role/Create', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Create(SaveRequest<RoleRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('Administration/Role/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(SaveRequest<RoleRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('Administration/Role/Delete', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('Administration/Role/Retrieve', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<RoleRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('Administration/Role/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<RoleRow>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string Create = "Administration/Role/Create";
            [InlineConstant] public const string Update = "Administration/Role/Update";
            [InlineConstant] public const string Delete = "Administration/Role/Delete";
            [InlineConstant] public const string Retrieve = "Administration/Role/Retrieve";
            [InlineConstant] public const string List = "Administration/Role/List";
        }
    }
    
}

