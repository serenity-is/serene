using FluentMigrator;

namespace Serene.Migrations.DefaultDB
{
    [Migration(20161004212900)]
    public class DefaultDB_20161004_212900_UserImage : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Users")
                .AddColumn("UserImage").AsString(100).Nullable();
        }
    }
}