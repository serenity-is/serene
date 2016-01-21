using FluentMigrator;

namespace Serene.Migrations.NorthwindDB
{
    [Migration(20160121141200)]
    public class NorthwindDB_20160121_141200_CustomerRepresentatives : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("CustomerRepresentatives")
                .WithColumn("RepresentativeID").AsInt32().PrimaryKey().Identity().NotNullable()
                .WithColumn("CustomerID").AsInt32().NotNullable()
                .WithColumn("EmployeeID").AsInt32().NotNullable();
        }
    }
}