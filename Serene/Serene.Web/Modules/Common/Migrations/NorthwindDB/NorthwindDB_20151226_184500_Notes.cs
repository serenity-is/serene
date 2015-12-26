using FluentMigrator;

namespace Serene.Migrations.NorthwindDB
{
    [Migration(20151226184500)]
    public class NorthwindDB_20151226_184500_Notes : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Notes")
                .WithColumn("NoteID").AsInt64().PrimaryKey().Identity().NotNullable()
                .WithColumn("EntityType").AsString(100).NotNullable()
                .WithColumn("EntityID").AsInt64().NotNullable()
                .WithColumn("Text").AsString(int.MaxValue).NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable();
        }
    }
}