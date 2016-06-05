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

            IfDatabase("mysql")
                .Execute.EmbeddedScript("Serene.Modules.Common.Migrations.NorthwindDB.NorthwindDBScript_MySql.sql");

            IfDatabase("oracle")
                .Execute.EmbeddedScript("Serene.Modules.Common.Migrations.NorthwindDB.NorthwindDBScript_Oracle.sql");

            IfDatabase("sqlserver", "postgres")
                .Alter.Table("Customers")
                    .AddColumn("ID").AsInt32().Identity().NotNullable();

            IfDatabase("oracle")
                .Alter.Table("Customers")
                    .AddColumn("ID").AsInt32().Nullable();

            Utils.AddOracleIdentity(this, "Customers", "ID");
            IfDatabase("Oracle")
                .Execute.Sql("UPDATE Customers SET ID = CUSTOMERS_SEQ.nextval");

            IfDatabase("oracle")
                .Alter.Column("ID").OnTable("Customers")
                    .AsInt32().NotNullable();

            IfDatabase("sqlserver", "postgres")
                .Alter.Table("Territories")
                    .AddColumn("ID").AsInt32().Identity();

            IfDatabase("oracle")
                .Alter.Table("Territories")
                    .AddColumn("ID").AsInt32().Nullable();

            Utils.AddOracleIdentity(this, "Territories", "ID");

            IfDatabase("Oracle")
                .Execute.Sql("UPDATE Territories SET ID = Territories_SEQ.nextval");

            IfDatabase("oracle")
                .Alter.Column("ID").OnTable("Territories")
                    .AsInt32().NotNullable();

            Alter.Table("Products")
                .AddColumn("ProductImage").AsString(100).Nullable();
        }

        public override void Down()
        {
        }
    }
}