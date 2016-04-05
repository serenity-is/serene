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
    public partial class TranslationService
    {
        [InlineConstant] public const string BaseUrl = "Administration/Translation";

        [InlineCode("Q.serviceRequest('Administration/Translation/List', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest List(TranslationListRequest request, Action<ListResponse<TranslationItem>> onSuccess = null, ServiceCallOptions options = null)
        {
            return null;
        }

        [InlineCode("Q.serviceRequest('Administration/Translation/Update', {request}, {onSuccess}, {options})")]
        public static jQueryXmlHttpRequest Update(TranslationUpdateRequest request, Action<SaveResponse> onSuccess = null, ServiceCallOptions options = null)
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

