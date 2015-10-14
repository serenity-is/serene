using FluentMigrator;

namespace Serene.Migrations.DefaultDB
{
    [Migration(20151014030700)]
    public class DefaultDB_20151014_030700_OrderDetailID : Migration
    {
        public override void Up()
        {
            Alter.Table("Order Details")
                .AddColumn("DetailID").AsInt32().Identity().NotNullable();
        }

        public override void Down()
        {
            Delete.Column("DetailID")
                .FromTable("Order Details");
        }
    }
}