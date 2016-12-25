using FluentMigrator;

namespace Serene.Migrations.NorthwindDB
{
    [Migration(20151014030700)]
    public class DefaultDB_20151014_030700_OrderDetailID : AutoReversingMigration
    {
        public override void Up()
        {
            IfDatabase("SqlServer", "SqlServer2000", "SqlServerCe", "Postgres")
                .Alter.Table("Order Details")
                    .AddColumn("DetailID").AsInt32().Identity().NotNullable();

            IfDatabase("oracle")
                .Alter.Table("\"ORDER DETAILS\"")
                    .AddColumn("DetailID").AsInt32().Nullable();

            Utils.AddOracleIdentity(this, "\"ORDER DETAILS\"", "DetailID");

            IfDatabase("Oracle")
                .Execute.Sql("UPDATE \"ORDER DETAILS\" SET DetailID = Order_Details_SEQ.nextval");

            IfDatabase("oracle")
                .Alter.Column("DetailID").OnTable("\"ORDER DETAILS\"")
                    .AsInt32().NotNullable();
        }
    }
}