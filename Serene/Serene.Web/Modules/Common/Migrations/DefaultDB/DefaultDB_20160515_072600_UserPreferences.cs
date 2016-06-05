using FluentMigrator;

namespace Serene.Migrations.DefaultDB
{
    [Migration(20160515072600)]
    public class DefaultDB_20160515_072600_UserPreferences : AutoReversingMigration
    {
        public override void Up()
        {
            IfDatabase(Utils.AllExceptOracle)
                .Create.Table("UserPreferences")
                    .WithColumn("UserPreferenceId").AsInt32().Identity().PrimaryKey().NotNullable()
                    .WithColumn("UserId").AsInt32().NotNullable()
                    .WithColumn("PreferenceType").AsString(100).NotNullable()
                    .WithColumn("Name").AsString(200).NotNullable()
                    .WithColumn("Value").AsString(int.MaxValue).Nullable();

            IfDatabase("Oracle")
                .Create.Table("UserPreferences")
                    .WithColumn("UserPreferenceId").AsInt32().PrimaryKey().NotNullable()
                    .WithColumn("UserId").AsInt32().NotNullable()
                    .WithColumn("PreferenceType").AsString(100).NotNullable()
                    .WithColumn("Name").AsString(200).NotNullable()
                    .WithColumn("Value").AsString(int.MaxValue).Nullable();

            Utils.AddOracleIdentity(this, "UserPreferences", "UserId");

            Create.Index("IX_UserPref_UID_PrefType_Name")
                .OnTable("UserPreferences")
                .OnColumn("UserId").Ascending()
                .OnColumn("PreferenceType").Ascending()
                .OnColumn("Name").Ascending()
                .WithOptions()
                .Unique();
        }
    }
}