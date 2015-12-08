using FluentMigrator;

namespace Serene.Migrations.NorthwindDB
{
    [Migration(20141123155100)]
    public class DefaultDB_20141123_155100_ProductImage : Migration
    {
        public override void Up()
        {
            IfDatabase("sqlserver")
                .Execute.EmbeddedScript("Serene.Modules.Common.Migrations.NorthwindDB.NorthwindDBScript_SqlServer.sql");

            IfDatabase("postgres")
                .Execute.EmbeddedScript("Serene.Modules.Common.Migrations.NorthwindDB.NorthwindDBScript_Postgres.sql");

            IfDatabase("postgres")
                .Execute.EmbeddedScript("Serene.Modules.Common.Migrations.NorthwindDB.NorthwindDBScript_PostgresData.sql");

            Alter.Table("Customers")
                .AddColumn("ID").AsInt32().Identity().NotNullable();

            Alter.Table("Territories")
                .AddColumn("ID").AsInt32().Identity().NotNullable();
                
            Alter.Table("Products")
                .AddColumn("ProductImage").AsString(100).Nullable();
        }

        public override void Down()
        {
        }
    }
}