namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [Imported, PreserveMemberCase]
    public partial class TranslationService
    {
        [InlineConstant] public const string BaseUrl = "Administration/Translation";
    
        [InlineCode("Q.serviceRequest('Administration/Translation/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(TranslationListRequest request, Action<ListResponse<TranslationItem>> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [InlineCode("Q.serviceRequest('Administration/Translation/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(TranslationUpdateRequest request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return null;
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string List = "Administration/Translation/List";
            [InlineConstant] public const string Update = "Administration/Translation/Update";
        }
    }
    
}

