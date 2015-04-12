namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;

    public partial class MeetingAttendeeTypeService
    {
        public static jQueryXmlHttpRequest Create(SaveRequest<MeetingAttendeeTypeRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingAttendeeType/Create", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Update(SaveRequest<MeetingAttendeeTypeRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingAttendeeType/Update", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingAttendeeType/Delete", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Undelete(UndeleteRequest request, Action<UndeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingAttendeeType/Undelete", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<MeetingAttendeeTypeRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingAttendeeType/Retrieve", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<MeetingAttendeeTypeRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingAttendeeType/List", request, onSuccess, options);
        }
    }
    
}

