using FluentMigrator;

namespace Serene.Migrations.NorthwindDB
{
    [Migration(20160216154900)]
    public class NorthwindDB_20160216_154900_DataLocalization : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("CategoryLang")
                .WithColumn("ID").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("CategoryID").AsInt32().NotNullable()
                .WithColumn("LanguageID").AsInt32().NotNullable()
                .WithColumn("CategoryName").AsString(15).Nullable()
                .WithColumn("Description").AsString(int.MaxValue).Nullable();

            Create.Table("ProductLang")
                .WithColumn("ID").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("ProductID").AsInt32().NotNullable()
                .WithColumn("LanguageID").AsInt32().NotNullable()
                .WithColumn("ProductName").AsString(40).Nullable();
        }
    }
}