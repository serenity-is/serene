namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    public partial class TranslationService
    {
        [InlineConstant] public const string BaseUrl = "Administration/Translation";
    
        public static jQueryXmlHttpRequest List(TranslationListRequest request, Action<ListResponse<TranslationItem>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.List, request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Update(TranslationUpdateRequest request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest(Methods.Update, request, onSuccess, options);
        }
    
        [Imported, PreserveMemberCase]
        public static class Methods
        {
            [InlineConstant] public const string List = "Administration/Translation/List";
            [InlineConstant] public const string Update = "Administration/Translation/Update";
        }
    }
    
}

