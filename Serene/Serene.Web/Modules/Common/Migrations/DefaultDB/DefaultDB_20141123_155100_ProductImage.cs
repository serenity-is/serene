using FluentMigrator;

namespace Serene.Migrations.DefaultDB
{
    [Migration(20141123155100)]
    public class DefaultDB_20141123_155100_ProductImage : Migration
    {
        public override void Up()
        {
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