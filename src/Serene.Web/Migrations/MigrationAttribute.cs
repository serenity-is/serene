using FluentMigrator;

namespace Serene.Migrations;

public class MigrationAttribute : MigrationAttributeBase
{
    public MigrationAttribute(long version, TransactionBehavior transactionBehavior = TransactionBehavior.Default, string description = null) : base(version, transactionBehavior, description)
    {
    }
}
