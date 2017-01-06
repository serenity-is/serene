using Serenity.Navigation;
using Meeting = Serene.Meeting.Pages;

[assembly: NavigationMenu(8000, "Meeting", icon: "fa-comments")]
[assembly: NavigationLink(8000, "Meeting/Meetings", typeof(Meeting.MeetingController))]
[assembly: NavigationLink(8000, "Meeting/Meeting Agenda Types", typeof(Meeting.MeetingAgendaTypeController))]
[assembly: NavigationLink(8000, "Meeting/Meeting Locations", typeof(Meeting.MeetingLocationController))]
[assembly: NavigationLink(8000, "Meeting/Meeting Types", typeof(Meeting.MeetingTypeController))]