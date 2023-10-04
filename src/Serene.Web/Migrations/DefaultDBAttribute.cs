namespace Serene.Migrations;

public class DefaultDBAttribute : FluentMigrator.TagsAttribute
{
    public DefaultDBAttribute()
        : base("DefaultDB")
    {
    }
}
