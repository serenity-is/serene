using FluentMigrator;

namespace Serene.Migrations.DefaultDB
{
    [Migration(20151111133500)]
    public class DefaultDB_20151111_133500_UserPermissionGrant : AutoReversingMigration
    {
        public override void Up()
        {
            IfDatabase(Utils.AllExceptOracle)
                .Alter.Table("UserPermissions")
                    .AddColumn("Grant").AsBoolean().WithDefaultValue(true).NotNullable();

            IfDatabase("Oracle")
                .Alter.Table("UserPermissions")
                    .AddColumn("Granted").AsBoolean().WithDefaultValue(true).NotNullable();
        }
    }
}