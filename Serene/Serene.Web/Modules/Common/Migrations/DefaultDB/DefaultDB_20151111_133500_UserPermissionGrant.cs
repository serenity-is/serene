using FluentMigrator;

namespace Serene.Migrations.DefaultDB
{
    [Migration(20151111133500)]
    public class DefaultDB_20151111_133500_UserPermissionGrant : Migration
    {
        public override void Up()
        {
            Alter.Table("UserPermissions")
                .AddColumn("Grant").AsBoolean().WithDefaultValue(1).NotNullable();
        }

        public override void Down()
        {
            Delete.Column("Grant")
                .FromTable("UserPermissions");
        }
    }
}