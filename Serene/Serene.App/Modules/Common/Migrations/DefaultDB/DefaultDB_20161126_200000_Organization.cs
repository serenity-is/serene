using FluentMigrator;

namespace Serene.Migrations.DefaultDB
{
    [Migration(20161126200000)]
    public class DefaultDB_20161126_200000_Organization : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("BusinessUnits", "UnitId", s => s
                .WithColumn("Name").AsString(100).NotNullable()
                .WithColumn("ParentUnitId").AsInt32().Nullable()
                    .ForeignKey("FK_BusinessUnits_ParentUnit", "BusinessUnits", "UnitId"), checkExists: true);

            this.CreateTableWithId32("Contacts", "ContactId", s => s
                .WithColumn("Title").AsString(30).Nullable()
                .WithColumn("FirstName").AsString(50).NotNullable()
                .WithColumn("LastName").AsString(50).NotNullable()
                .WithColumn("Email").AsString(100).NotNullable()
                .WithColumn("IdentityNo").AsString(20).Nullable()
                .WithColumn("UserId").AsInt32().Nullable()
                    .ForeignKey("FK_Contacts_UserId", "Users", "UserId"), checkExists: true);
        }
    }
}