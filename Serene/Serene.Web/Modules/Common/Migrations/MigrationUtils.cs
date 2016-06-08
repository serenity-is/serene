using FluentMigrator;
using System;

namespace Serene.Migrations
{
    public static class Utils
    {
        public static string[] AllExceptOracle =
        {
            "SqlServer",
            "SqlServer2000",
            "SqlServerCe",
            "Postgres",
            "MySql",
            "Jet",
            "Sqlite",
            "SAP HANA"
        };

        public static void AddOracleIdentity(MigrationBase migration,
            string table, string id)
        {
            var seq = table.Replace(" ", "_").Replace("\"", "");
            seq = seq.Substring(0, Math.Min(20, seq.Length));
            seq = seq + "_SEQ";

            migration.IfDatabase("Oracle")
                .Execute.Sql("CREATE SEQUENCE " + seq);

            migration.IfDatabase("Oracle")
                .Execute.Sql(String.Format(@"
CREATE OR REPLACE TRIGGER {2}_TRG
BEFORE INSERT ON {0}
FOR EACH ROW
BEGIN
	IF :new.{1} IS NULL THEN
		SELECT {2}.nextval INTO :new.{1} FROM DUAL;
	END IF;
END;", table, id, seq));

            migration.IfDatabase("Oracle")
                .Execute.Sql(@"ALTER TRIGGER " + seq + "_TRG ENABLE");
        }
    }
}
