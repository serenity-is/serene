using FluentMigrator;

namespace Serene.Migrations.DefaultDB
{
    [Migration(20160515072600)]
    public class DefaultDB_20160515_072600_UserPreferences : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("UserPreferences", "UserPreferenceId", s => s
                .WithColumn("UserId").AsInt64().NotNullable()
                .WithColumn("PreferenceType").AsString(100).NotNullable()
                .WithColumn("Name").AsString(200).NotNullable()
                .WithColumn("Value").AsString(int.MaxValue).Nullable());

            Create.Index("IX_UserPref_UID_PrefType_Name")
                .OnTable("UserPreferences")
                .OnColumn("UserId").Ascending()
                .OnColumn("PreferenceType").Ascending()
                .OnColumn("Name").Ascending()
                .WithOptions().Unique();
        }
    }
}