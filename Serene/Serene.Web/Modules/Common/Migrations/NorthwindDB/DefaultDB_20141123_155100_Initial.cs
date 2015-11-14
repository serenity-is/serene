using FluentMigrator;

namespace Serene.Migrations.NorthwindDB
{
    [Migration(20141123155100)]
    public class DefaultDB_20141123_155100_ProductImage : Migration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("Serene.Modules.Common.Migrations.NorthwindDB.NorthwindDBScript.sql");

            Alter.Table("Products")
                .AddColumn("ProductImage").AsString(100).Nullable();
        }

        public override void Down()
        {
            Delete.Column("ProductImage")
                .FromTable("Products");
        }
    }
}