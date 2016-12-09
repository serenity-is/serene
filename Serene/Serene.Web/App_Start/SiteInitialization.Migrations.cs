namespace Serene
{
    using FluentMigrator.Runner.Announcers;
    using FluentMigrator.Runner.Initialization;
    using Serenity.Data;
    using System;
    using System.Data.SqlClient;
    using System.IO;
    using System.Linq;
    using System.Web.Hosting;

    public static partial class SiteInitialization
    { 
        private static string[] databaseKeys = new[] {
            "Default"
            //<if:Northwind>
            , "Northwind"
            //</if:Northwind>
        };

        /// <summary>
        /// Automatically creates a database for the template if it doesn't already exists.
        /// You might delete this method to disable auto create functionality.
        /// </summary>
        private static void EnsureDatabase(string databaseKey)
        {
            var cs = SqlConnections.GetConnectionString(databaseKey);

            if (cs.Dialect.GetType() == typeof(OracleDialect))
                return;

            var cb = cs.ProviderFactory.CreateConnectionStringBuilder();
            cb.ConnectionString = cs.ConnectionString;

            string catalogKey = "?";
            foreach (var ck in new[] { "Initial Catalog", "Database", "AttachDBFilename" })
                if (cb.ContainsKey(ck))
                {
                    catalogKey = ck;
                    break;
                }

            var catalog = cb[catalogKey] as string;
            cb[catalogKey] = null;

            using (var serverConnection = SqlConnections.New(cb.ConnectionString, cs.ProviderName))
            {
                try
                {
                    serverConnection.Open();
                }
                catch (SqlException ex)
                {
                    if (ex.ErrorCode != -2146232060)
                        throw;

                    const string oldVer = @"\v11.0";

                    if (cb.ConnectionString.IndexOf(oldVer) >= 0)
                        throw new Exception(
                            "You don't seem to have SQL Express LocalDB 2012 installed.\r\n\r\n" +
                            "If you have Visual Studio 2015 (with SQL LocalDB 2014) " +
                            "try changing '" + databaseKey + "' connection string in WEB.CONFIG to:\r\n\r\n" +
                            cs.ConnectionString.Replace(oldVer, @"\MSSqlLocalDB") + "\r\n\r\nor:\r\n\r\n" +
                            cs.ConnectionString.Replace(oldVer, @"\v12.0") + "';\r\n\r\n" +
                            "You can also try another SQL server type like .\\SQLExpress.");

                    throw;
                }

                string databasesQuery = "SELECT * FROM sys.databases WHERE NAME = @name";
                string createDatabaseQuery = @"CREATE DATABASE [{0}]";

                if (String.Equals(cs.ProviderName, "npgsql", StringComparison.OrdinalIgnoreCase))
                {
                    databasesQuery = "select * from postgres.pg_catalog.pg_database where datname = @name";
                    createDatabaseQuery = "CREATE DATABASE \"{0}\"";
                }

                if (String.Equals(cs.ProviderName, "MySql.Data.MySqlClient", StringComparison.OrdinalIgnoreCase))
                {
                    databasesQuery = "SELECT * FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = @name";
                    createDatabaseQuery = "CREATE DATABASE `{0}`";
                }

                if (serverConnection.Query(databasesQuery, new { name = catalog }).Any())
                    return;

                var isLocalServer = serverConnection.ConnectionString.IndexOf(@"(localdb)\", StringComparison.OrdinalIgnoreCase) >= 0 ||
                    serverConnection.ConnectionString.IndexOf(@".\") >= 0;

                string command;
                if (isLocalServer)
                {
                    var filename = Path.Combine(HostingEnvironment.MapPath("~/App_Data"), catalog);
                    command = String.Format(@"CREATE DATABASE [{0}] ON PRIMARY (Name = N'{0}', FILENAME = '{1}.mdf') LOG ON (NAME = N'{0}_log', FILENAME = '{1}.ldf')",
                        catalog, filename);

                    if (File.Exists(filename + ".mdf"))
                        command += " FOR ATTACH";
                }
                else
                {
                    command = String.Format(createDatabaseQuery, catalog);
                }

                serverConnection.Execute(command);
                SqlConnection.ClearAllPools();
            }
        }

        public static bool SkippedMigrations { get; private set; }

        private static void RunMigrations(string databaseKey)
        {
            var cs = SqlConnections.GetConnectionString(databaseKey);
            var connection = cs.ConnectionString;

            bool isOracle = cs.Dialect.GetType() == typeof(OracleDialect);

            // safety check to ensure that we are not modifying an arbitrary database.
            // remove these lines if you want Serene migrations to run on your DB.
            if (!isOracle && cs.ConnectionString.IndexOf(typeof(SiteInitialization).Namespace +
                    @"_" + databaseKey + "_v1", StringComparison.OrdinalIgnoreCase) < 0)
            {
                SkippedMigrations = true;
                return;
            }

            string databaseType = "SqlServer";
            if (String.Equals(cs.ProviderName, "npgsql", StringComparison.OrdinalIgnoreCase))
                databaseType = "Postgres";
            else if (String.Equals(cs.ProviderName, "MySql.Data.MySqlClient", StringComparison.OrdinalIgnoreCase))
                databaseType = "MySql";
            else if (isOracle)
                databaseType = "OracleManaged";

            using (var sw = new StringWriter())
            {
                Announcer announcer = isOracle ?
                    new TextWriterAnnouncer(sw) { ShowSql = true } :
                    new TextWriterWithGoAnnouncer(sw) { ShowSql = true };

                var runner = new RunnerContext(announcer)
                {
                    Database = databaseType,
                    Connection = cs.ConnectionString,
                    Targets = new string[] { typeof(SiteInitialization).Assembly.Location },
                    Task = "migrate:up",
                    WorkingDirectory = Path.GetDirectoryName(typeof(SiteInitialization).Assembly.Location),
                    Namespace = "Serene.Migrations." + databaseKey + "DB",
                    Timeout = 90
                };

                try
                {
                    new TaskExecutor(runner).Execute();
                }
                catch (Exception ex)
                {
                    throw new Exception("Error executing migration:\r\n" +
                        sw.ToString(), ex);
                }

                
            }
        }
    }
}