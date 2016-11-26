using FluentMigrator;

namespace Serene.Migrations.DefaultDB
{
    [Migration(20161126210000)]
    public class DefaultDB_20161126_210000_Meeting : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("BusinessUnits", "UnitId", s => s
                .WithColumn("Name").AsString(100).NotNullable()
                .WithColumn("ParentUnitId").AsInt32().Nullable()
                    .ForeignKey("FK_BusinessUnits_ParentUnit", "BusinessUnits", "UnitId"));

            this.CreateTableWithId32("Contacts", "ContactId", s => s
                .WithColumn("Title").AsString(30).Nullable()
                .WithColumn("FirstName").AsString(50).NotNullable()
                .WithColumn("LastName").AsString(50).NotNullable()
                .WithColumn("Email").AsString(100).NotNullable()
                .WithColumn("IdentityNo").AsString(20).Nullable()
                .WithColumn("UserId").AsInt32().Nullable()
                    .ForeignKey("FK_Contacts_UserId", "Users", "UserId"));

            this.CreateTableWithId32("MeetingLocations", "LocationId", s => s
                .WithColumn("Name").AsString(100).NotNullable()
                .WithColumn("Address").AsString(300).Nullable()
                .WithColumn("Latitude").AsDouble()
                .WithColumn("Longitude").AsDouble());

            this.CreateTableWithId32("MeetingTypes", "MeetingTypeId", s => s
                .WithColumn("Name").AsString(100).NotNullable());

            this.CreateTableWithId32("Meetings", "MeetingId", s => s
                .WithColumn("MeetingName").AsString(100).NotNullable()
                .WithColumn("MeetingNumber").AsString(20).Nullable()
                .WithColumn("MeetingGuid").AsGuid().NotNullable()
                .WithColumn("MeetingTypeId").AsInt32().NotNullable()
                    .ForeignKey("FK_Meetings_TypeId", "MeetingTypes", "MeetingTypeId")
                .WithColumn("StartDate").AsDateTime().NotNullable()
                .WithColumn("EndDate").AsDateTime().NotNullable()
                .WithColumn("LocationId").AsInt32().Nullable()
                    .ForeignKey("FK_Meetings_LocationId", "MeetingLocations", "LocationId")
                .WithColumn("UnitId").AsInt32().Nullable()
                    .ForeignKey("FK_Meetings_UnitId", "BusinessUnits", "UnitId")
                .WithColumn("OrganizerContactId").AsInt32().Nullable()
                    .ForeignKey("FK_Meetings_Organizer", "Contacts", "ContactId")
                .WithColumn("ReporterContactId").AsInt32().Nullable()
                    .ForeignKey("FK_Meetings_Reporter", "Contacts", "ContactId")
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable());

            this.CreateTableWithId32("MeetingAgendaTypes", "AgendaTypeId", s => s
                .WithColumn("Name").AsString(100).NotNullable());

            this.CreateTableWithId32("MeetingAgendas", "AgendaId", s => s
                .WithColumn("MeetingId").AsInt32().NotNullable()
                    .ForeignKey("FK_MeetAgendas_MeetingId", "Meetings", "MeetingId")
                .WithColumn("AgendaNumber").AsInt32().NotNullable()
                .WithColumn("Title").AsString(2000).Nullable()
                .WithColumn("Description").AsString(int.MaxValue).Nullable()
                .WithColumn("AgendaTypeId").AsInt32().NotNullable()
                    .ForeignKey("FK_MeetAgendas_AgendaTypeId", "MeetingAgendaTypes", "AgendaTypeId")
                .WithColumn("RequestedByContactId").AsInt32().Nullable()
                    .ForeignKey("FK_MeetAgendas_RequestedBy", "Contacts", "ContactId")
                .WithColumn("Images").AsString(int.MaxValue).Nullable()
                .WithColumn("Attachments").AsString(int.MaxValue).Nullable());

            this.CreateTableWithId32("MeetingAgendaRelevant", "AgendaRelevantId", s => s
                .WithColumn("AgendaId").AsInt32().NotNullable()
                    .ForeignKey("FK_AgendaRel_AgendaId", "MeetingAgendas", "AgendaId")
                .WithColumn("ContactId").AsInt32().NotNullable()
                    .ForeignKey("FK_AgendaRel_ContactId", "Contacts", "ContactId"));

            this.CreateTableWithId32("MeetingAttendees", "AttendeeId", s => s
                .WithColumn("MeetingId").AsInt32().NotNullable()
                    .ForeignKey("FK_MeetAttendees_MeetingId", "Meetings", "MeetingId")
                .WithColumn("ContactId").AsInt32().NotNullable()
                    .ForeignKey("FK_MeetAttendees_ContactId", "Contacts", "ContactId")
                .WithColumn("AttendeeType").AsInt32().NotNullable()
                .WithColumn("AttendanceStatus").AsInt32().NotNullable());

            this.CreateTableWithId32("MeetingDecisions", "DecisionId", s => s
                .WithColumn("MeetingId").AsInt32().NotNullable()
                    .ForeignKey("FK_MeetDecisions_MeetingId", "Meetings", "MeetingId")
                .WithColumn("AgendaId").AsInt32().NotNullable()
                    .ForeignKey("FK_MeetDecisions_AgendaId", "MeetingAgendas", "AgendaId")
                .WithColumn("Description").AsString(int.MaxValue).Nullable()
                .WithColumn("DecisionNumber").AsInt32().NotNullable()
                    .ForeignKey("FK_MeetDecisions_AgendaType", "MeetingAgendaTypes", "AgendaTypeId")
                .WithColumn("ResponsibleContactId").AsInt32().Nullable()
                    .ForeignKey("FK_MeetDecisions_RequestedBy", "Contacts", "ContactId")
                .WithColumn("DueDate").AsDateTime().Nullable()
                .WithColumn("ResolutionStatus").AsInt32().NotNullable()
                .WithColumn("Images").AsString(int.MaxValue).Nullable()
                .WithColumn("Attachments").AsString(int.MaxValue).Nullable());

            this.CreateTableWithId32("MeetingDecisionRelevant", "DecisionRelevantId", s => s
                .WithColumn("DecisionId").AsInt32().NotNullable()
                    .ForeignKey("FK_DecisionRel_DecisionId", "MeetingDecisions", "DecisionId")
                .WithColumn("ContactId").AsInt32().NotNullable()
                    .ForeignKey("FK_DecisionRel_ContactId", "Contacts", "ContactId"));
        }
    }
}