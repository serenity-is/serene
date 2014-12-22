using FluentMigrator;

namespace Serene.Migrations.DefaultDB
{
    [Migration(20141222085700)]
    public class DefaultDB_20141222_085700_File : Migration
    {
        public override void Up()
        {
            Create.Table("Files")
                .WithColumn("FileId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("OwnerTable").AsString(50).Nullable()
                .WithColumn("OwnerId").AsInt64().Nullable()
                .WithColumn("Title").AsString(100).Nullable()
                .WithColumn("Filename").AsString(100).NotNullable()
                .WithColumn("OriginalName").AsString(100).NotNullable()
                .WithColumn("Size").AsInt32().NotNullable()
                .WithColumn("MimeType").AsString(50).Nullable()
                .WithColumn("IsImage").AsBoolean().NotNullable()
                .WithColumn("Metadata").AsString().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);
        }

        public override void Down()
        {
            Delete.Table("Files");
        }
    }
}