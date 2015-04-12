namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;

    public partial class MeetingLocationService
    {
        public static jQueryXmlHttpRequest Create(SaveRequest<MeetingLocationRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingLocation/Create", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Update(SaveRequest<MeetingLocationRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingLocation/Update", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingLocation/Delete", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Undelete(UndeleteRequest request, Action<UndeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingLocation/Undelete", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<MeetingLocationRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingLocation/Retrieve", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<MeetingLocationRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingLocation/List", request, onSuccess, options);
        }
    }
    
}

