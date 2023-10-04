namespace Serene.Migrations;

public class MigrationAttribute : FluentMigrator.MigrationAttribute
{
    public MigrationAttribute(long version)
        : base((version >= 20010101_0000 && version <= 99990101_0000) ? version * 100 : version)
    {
        if (Version < 20010101_000000 || Version > 99990101_000000)
            throw new Exception("Migration versions must be in yyyyMMdd_HHmm or " +
                "yyyyMMdd_HHmm_ss format! Version " + version + " is incorrect.");
    }
}
