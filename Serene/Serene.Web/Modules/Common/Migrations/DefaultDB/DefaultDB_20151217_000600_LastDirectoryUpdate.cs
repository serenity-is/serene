using FluentMigrator;

namespace Serene.Migrations.DefaultDB
{
    [Migration(20151217000600)]
    public class DefaultDB_20151217_000600_LastDirectoryUpdate : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Users")
                .AddColumn("LastDirectoryUpdate").AsDateTime().Nullable();
        }
    }
}