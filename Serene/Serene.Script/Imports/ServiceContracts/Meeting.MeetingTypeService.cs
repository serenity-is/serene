namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;

    public partial class MeetingTypeService
    {
        public static jQueryXmlHttpRequest Create(SaveRequest<MeetingTypeRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingType/Create", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Update(SaveRequest<MeetingTypeRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingType/Update", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingType/Delete", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Undelete(UndeleteRequest request, Action<UndeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingType/Undelete", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<MeetingTypeRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingType/Retrieve", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<MeetingTypeRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingType/List", request, onSuccess, options);
        }
    }
    
}

