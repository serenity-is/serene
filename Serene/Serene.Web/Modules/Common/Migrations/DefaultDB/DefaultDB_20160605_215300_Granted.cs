using FluentMigrator;

namespace Serene.Migrations.DefaultDBx
{
    [Migration(20160605215300)]
    public class DefaultDB_20160605_215300_Granted : AutoReversingMigration
    {
        public override void Up()
        {
            IfDatabase(Utils.AllExceptOracle)
                .Rename.Column("Grant").OnTable("Users").To("Granted");
        }
    }
}