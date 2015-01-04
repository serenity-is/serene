using FluentMigrator;

namespace Serene.Migrations.DefaultDB
{
    [Migration(20150401142800)]
    public class DefaultDB_20150401_142800_MeetingPrimary : Migration
    {
        public override void Up()
        {
            Create.Table("MeetingContact")
                .WithColumn("MeetingContactId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Title").AsString(15).Nullable()
                .WithColumn("Firstname").AsString(30).Nullable()
                .WithColumn("Lastname").AsString(50).Nullable()
                .WithColumn("DisplayName").AsString(100).NotNullable()
                .WithColumn("Email").AsString(100).NotNullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Create.Table("Meeting")
                .WithColumn("MeetingId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("MeetingGuid").AsString(100).NotNullable()
                .WithColumn("MeetingName").AsString(100).NotNullable()
                .WithColumn("MeetingTypeId").AsInt32().NotNullable()
                    .ForeignKey("FK_Meeting_MeetingTypeId", "MeetingType", "MeetingTypeId")
                .WithColumn("StartDate").AsDateTime().NotNullable()
                .WithColumn("EndDate").AsDateTime().NotNullable()
                .WithColumn("LocationId").AsInt32().Nullable()
                    .ForeignKey("FK_Meeting_LocationId", "MeetingLocation", "MeetingLocationId")
                .WithColumn("OrganizationId").AsInt32().Nullable()
                    .ForeignKey("FK_Meeting_OrganizationId", "Organizations", "OrganizationId")
                .WithColumn("OrganizerContactId").AsInt32().Nullable()
                    .ForeignKey("FK_Meeting_OrganizerContactId", "MeetingContact", "MeetingContactId")
                .WithColumn("ReporterContactId").AsInt32().Nullable()
                    .ForeignKey("FK_Meeting_ReporterContactId", "MeetingContact", "MeetingContactId")
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsInt32().NotNullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("UpdateDate").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Create.Table("MeetingAgenda")
                .WithColumn("MeetingAgendaId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Title").AsString(2000).Nullable()
                .WithColumn("Description").AsString().Nullable()
                .WithColumn("ImageFileId").AsInt32().Nullable()
                .WithColumn("AgendaTypeId").AsInt32().NotNullable()
                    .ForeignKey("FK_MeetingAgenda_AgendaTypeId", "MeetingAgendaType", "MeetingAgendaTypeId")
                .WithColumn("MeetingId").AsInt32().NotNullable()
                    .ForeignKey("FK_MeetingAgenda_MeetingId", "Meeting", "MeetingId")
                .WithColumn("RequestedByContactId").AsInt32().Nullable()
                    .ForeignKey("FK_MeetingAgenda_RequestedByContactId", "MeetingContact", "MeetingContactId")
                .WithColumn("Tags").AsString(200).Nullable()
                .WithColumn("DisplayOrder").AsInt32().NotNullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Create.Table("MeetingDecision")
                .WithColumn("MeetingDecisionId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("MeetingId").AsInt32().NotNullable()
                    .ForeignKey("FK_MeetingDecision_MeetingId", "Meeting", "MeetingId")
                .WithColumn("MeetingAgendaId").AsInt32().Nullable()
                    .ForeignKey("FK_MeetingDecision_MeetingAgendaId", "MeetingAgenda", "MeetingAgendaId")
                .WithColumn("Description").AsString().Nullable()
                .WithColumn("ImageFileId").AsInt32().Nullable()
                .WithColumn("ResponsibleContactId").AsInt32().Nullable()
                    .ForeignKey("FK_MeetingDecision_ResponsibleContactId", "MeetingContact", "MeetingContactId")
                .WithColumn("DueDate").AsDateTime().Nullable()
                .WithColumn("ResolutionStatusId").AsInt32().NotNullable()
                .WithColumn("DisplayOrder").AsInt32().NotNullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Create.Table("MeetingAgendaRelevant")
                .WithColumn("MeetingAgendaRelevantId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("MeetingAgendaId").AsInt32().NotNullable()
                    .ForeignKey("FK_MeetingAgendaRelevant_MeetingAgendaId", "MeetingAgenda", "MeetingAgendaId")
                .WithColumn("RelevantUserId").AsInt32().NotNullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Create.Table("MeetingAttendee")
                .WithColumn("MeetingAttendeeId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("MeetingId").AsInt32().NotNullable()
                    .ForeignKey("FK_MeetingAttendee_MeetingId", "Meeting", "MeetingId")
                .WithColumn("ContactId").AsInt32().NotNullable()
                    .ForeignKey("FK_MeetingAttendee_ContactId", "MeetingContact", "MeetingContactId")
                .WithColumn("AttendeeTypeId").AsInt32().NotNullable()
                    .ForeignKey("FK_MeetingAttendee_AttendeeTypeId", "MeetingAttendeeType", "MeetingAttendeeTypeId")
                .WithColumn("AttendanceStatusId").AsInt32().NotNullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Create.Table("MeetingDecisionRelevant")
                .WithColumn("MeetingDecisionRelevantId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("MeetingDecisionId").AsInt32().NotNullable()
                    .ForeignKey("FK_MeetingDecisionRelevant_MeetingDecisionId", "MeetingDecision", "MeetingDecisionId")
                .WithColumn("RelevantUserId").AsInt32().NotNullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Create.Table("MeetingTypePermission")
                .WithColumn("MeetingTypePermissionId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("MeetingTypeId").AsInt32().NotNullable()
                    .ForeignKey("FK_MeetingTypePermission_MeetingTypeId", "MeetingType", "MeetingTypeId")
                .WithColumn("UserId").AsInt32().NotNullable()
                    .ForeignKey("FK_MeetingTypePermission_UserId", "Users", "UserId");
        }

        public override void Down()
        {
            Delete.Table("MeetingTypePermission");
            Delete.Table("MeetingDecisionRelevant");
            Delete.Table("MeetingAttendee");
            Delete.Table("MeetingAgendaRelevant");
            Delete.Table("MeetingDecision");
            Delete.Table("Meeting");
            Delete.Table("MeetingTypePermission");
        }
    }
}