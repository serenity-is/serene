using FluentMigrator;

namespace Serene.Migrations.DefaultDB
{
    [Migration(20150102170000)]
    public class DefaultDB_20150102_170000_Organization : Migration
    {
        public override void Up()
        {
            Create.Table("Organizations")
                .WithColumn("OrganizationId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Name").AsString(128).NotNullable()
                .WithColumn("Description").AsString().Nullable()
                .WithColumn("ParentOrganizationId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Create.ForeignKey("FK_Organizations_ParentOrganizationId")
                .FromTable("Organizations")
                .ForeignColumn("ParentOrganizationId")
                .ToTable("Organizations")
                .PrimaryColumn("OrganizationId");
        }

        public override void Down()
        {
            Delete.ForeignKey("FK_Organizations_ParentOrganizationId");
            Delete.Table("Organizations");
        }
    }
}