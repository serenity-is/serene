namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;

    public partial class MeetingTypePermissionService
    {
        public static jQueryXmlHttpRequest Create(SaveRequest<MeetingTypePermissionRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingTypePermission/Create", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Update(SaveRequest<MeetingTypePermissionRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingTypePermission/Update", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingTypePermission/Delete", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<MeetingTypePermissionRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingTypePermission/Retrieve", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<MeetingTypePermissionRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingTypePermission/List", request, onSuccess, options);
        }
    }
    
}

