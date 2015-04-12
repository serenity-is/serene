namespace Serene.Meeting
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;

    public partial class MeetingAgendaTypeService
    {
        public static jQueryXmlHttpRequest Create(SaveRequest<MeetingAgendaTypeRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingAgendaType/Create", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Update(SaveRequest<MeetingAgendaTypeRow> request, Action<SaveResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingAgendaType/Update", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Delete(DeleteRequest request, Action<DeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingAgendaType/Delete", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Undelete(UndeleteRequest request, Action<UndeleteResponse> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingAgendaType/Undelete", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest Retrieve(RetrieveRequest request, Action<RetrieveResponse<MeetingAgendaTypeRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingAgendaType/Retrieve", request, onSuccess, options);
        }
    
        public static jQueryXmlHttpRequest List(ListRequest request, Action<ListResponse<MeetingAgendaTypeRow>> onSuccess, ServiceCallOptions options = null)
        {
            return Q.ServiceRequest("Meeting/MeetingAgendaType/List", request, onSuccess, options);
        }
    }
    
}

