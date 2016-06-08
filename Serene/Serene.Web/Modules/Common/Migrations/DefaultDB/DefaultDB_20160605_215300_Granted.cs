using FluentMigrator;

namespace Serene.Migrations.DefaultDB
{
    [Migration(20160605215300)]
    public class DefaultDB_20160605_215300_Granted : AutoReversingMigration
    {
        public override void Up()
        {
            if (this.Schema.Table("UserPermissions").Column("Grant").Exists())
                IfDatabase(Utils.AllExceptOracle)
                    .Rename.Column("Grant").OnTable("UserPermissions").To("Granted");
        }
    }
}