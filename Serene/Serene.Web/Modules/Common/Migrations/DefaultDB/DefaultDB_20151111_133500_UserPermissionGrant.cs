using FluentMigrator;

namespace Serene.Migrations.DefaultDB
{
    [Migration(20151111133500)]
    public class DefaultDB_20151111_133500_UserPermissionGrant : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("UserPermissions")
                .AddColumn("Grant").AsBoolean().WithDefaultValue(true).NotNullable();
        }
    }
}