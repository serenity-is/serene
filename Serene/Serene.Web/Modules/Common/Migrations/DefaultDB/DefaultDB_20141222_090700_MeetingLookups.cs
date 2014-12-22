using FluentMigrator;

namespace Serene.Migrations.DefaultDB
{
    [Migration(20141222090700)]
    public class DefaultDB_20141222_090700_MeetingLookups : Migration
    {
        public override void Up()
        {
            Create.Table("MeetingType")
                .WithColumn("MeetingTypeId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(100).NotNullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Create.Table("MeetingAgendaType")
                .WithColumn("MeetingAgendaTypeId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(100).NotNullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Create.Table("MeetingAttendeeType")
                .WithColumn("MeetingAttendeeTypeId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(100).NotNullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Create.Table("MeetingLocation")
                .WithColumn("MeetingLocationId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(100).NotNullable()
                .WithColumn("Address").AsString(100).Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);
        }

        public override void Down()
        {
            Delete.Table("MeetingLocation");
            Delete.Table("MeetingAttendeeType");
            Delete.Table("MeetingAgendaType");
            Delete.Table("MeetingType");
        }
    }
}