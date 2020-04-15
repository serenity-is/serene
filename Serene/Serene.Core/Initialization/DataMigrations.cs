﻿namespace Serene
{
    using FluentMigrator.Runner.Announcers;
    using FluentMigrator.Runner.Initialization;
    using Microsoft.AspNetCore.Hosting;
    using Serenity.Data;
    using System;
    using System.Data.SqlClient;
    using System.Globalization;
    using System.IO;
    using System.Linq;
    using System.Reflection;
    using System.Threading;

    public static class DataMigrations
    { 
        private static readonly string[] databaseKeys = new[] {
            "Default"
            //<if:Northwind>
            , "Northwind"
            //</if:Northwind>
        };

        public static void Initialize()
        {
            foreach (var databaseKey in databaseKeys)
            {
                EnsureDatabase(databaseKey);
                RunMigrations(databaseKey);
            }
        }

        /// <summary>
        /// Automatically creates a database for the template if it doesn't already exists.
        /// You might delete this method to disable auto create functionality.
        /// </summary>
        private static void EnsureDatabase(string databaseKey)
        {
            var cs = SqlConnections.GetConnectionString(databaseKey);

            var serverType = cs.Dialect.ServerType;
            bool isSql = serverType.StartsWith("SqlServer", StringComparison.OrdinalIgnoreCase);
            bool isPostgres = serverType.StartsWith("Postgres", StringComparison.OrdinalIgnoreCase);
            bool isMySql = serverType.StartsWith("MySql", StringComparison.OrdinalIgnoreCase);
            bool isSqlite = serverType.StartsWith("Sqlite", StringComparison.OrdinalIgnoreCase);
            bool isFirebird = serverType.StartsWith("Firebird", StringComparison.OrdinalIgnoreCase);

            if (isSqlite)
            {
                var contentRoot = Serenity.Dependency.Resolve<IWebHostEnvironment>().ContentRootPath;
                Directory.CreateDirectory(Path.Combine(contentRoot, "App_Data"));
                return;
            }

            var cb = cs.ProviderFactory.CreateConnectionStringBuilder();
            cb.ConnectionString = cs.ConnectionString;

            if (isFirebird)
            {
                if (cb.ConnectionString.IndexOf(@"localhost") < 0 &&
                    cb.ConnectionString.IndexOf(@"127.0.0.1") < 0)
                    return;

                var database = cb["Database"] as string;
                if (string.IsNullOrEmpty(database))
                    return;

                database = Path.GetFullPath(database);
                if (File.Exists(database))
                    return;
                Directory.CreateDirectory(Path.GetDirectoryName(database));

                using (var fbConnection = SqlConnections.New(cb.ConnectionString, cs.ProviderName))
                {
                    ((WrappedConnection)fbConnection).ActualConnection.GetType()
                        .GetMethod("CreateDatabase", new Type[] { typeof(string), typeof(bool) }) 
                        .Invoke(null, new object[] { fbConnection.ConnectionString, false });
                }

                return;
            }

            if (!isSql && !isPostgres && !isMySql)
                return;

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
                    if (ex.Number != -2146232060)
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

                if (isPostgres)
                {
                    databasesQuery = "select * from postgres.pg_catalog.pg_database where datname = @name";
                    createDatabaseQuery = "CREATE DATABASE \"{0}\"";
                }
                else if (isMySql)
                {
                    databasesQuery = "SELECT * FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = @name";
                    createDatabaseQuery = "CREATE DATABASE `{0}`";
                }

                if (serverConnection.Query(databasesQuery, new { name = catalog }).Any())
                    return;

                var isLocalServer = isSql && (
                    serverConnection.ConnectionString.IndexOf(@"(localdb)\", StringComparison.OrdinalIgnoreCase) >= 0 ||
                    serverConnection.ConnectionString.IndexOf(@".\") >= 0 ||
                    serverConnection.ConnectionString.IndexOf(@"localhost") >= 0 ||
                    serverConnection.ConnectionString.IndexOf(@"127.0.0.1") >= 0);

                string command;
                if (isLocalServer)
                {
                    string baseDirectory;
                    var hostingEnvironment = Serenity.Dependency.TryResolve<IWebHostEnvironment>();
                    if (hostingEnvironment != null)
                        baseDirectory = hostingEnvironment.ContentRootPath;
                    else
                        baseDirectory = AppDomain.CurrentDomain.BaseDirectory;

                    var filename = Path.Combine(Path.Combine(baseDirectory, "App_Data/".Replace('/', Path.DirectorySeparatorChar)), catalog);
                    Directory.CreateDirectory(Path.GetDirectoryName(filename));

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

            string serverType = cs.Dialect.ServerType;
            bool isSqlServer = serverType.StartsWith("SqlServer", StringComparison.OrdinalIgnoreCase);
            bool isOracle = serverType.StartsWith("Oracle", StringComparison.OrdinalIgnoreCase);
            bool isFirebird = serverType.StartsWith("Firebird", StringComparison.OrdinalIgnoreCase);

            // safety check to ensure that we are not modifying an arbitrary database.
            // remove these lines if you want Serene migrations to run on your DB.
            if (!isOracle && cs.ConnectionString.IndexOf(typeof(DataMigrations).Namespace +
                    @"_" + databaseKey + "_v1", StringComparison.OrdinalIgnoreCase) < 0)
            {
                SkippedMigrations = true;
                return;
            }

            string databaseType = isOracle ? "OracleManaged" : serverType;

            using (var sw = new StringWriter())
            {
                Announcer announcer = isOracle || isFirebird ?
                    new TextWriterAnnouncer(sw) { ShowSql = true } :
                    new TextWriterWithGoAnnouncer(sw) { ShowSql = true };

                var runner = new RunnerContext(announcer)
                {
                    Database = databaseType,
                    Connection = cs.ConnectionString,
#if COREFX
                    TargetAssemblies = new[] { typeof(DataMigrations).Assembly },
#else
                    Targets = new string[] { typeof(DataMigrations).Assembly.Location },
#endif
                    Task = "migrate:up",
                    WorkingDirectory = Path.GetDirectoryName(typeof(DataMigrations).Assembly.Location),
                    Namespace = "Serene.Migrations." + databaseKey + "DB",
                    Timeout = 90
                };

                var culture = CultureInfo.CurrentCulture;
                try
                {
                    if (isFirebird)
                        Thread.CurrentThread.CurrentCulture = CultureInfo.InvariantCulture;

                    new TaskExecutor(runner)
                    {
#if COREFX
                        ConnectionString = cs.ConnectionString
#endif
                    }.Execute();
                }
                catch (Exception ex)
                {
                    var output = sw.ToString().Trim();

                    if (output.StartsWith("/*"))
                    {
                        var idx = output.IndexOf("*/");
                        output = output.Substring(idx + 2);
                    }

                    throw new Exception("Error executing migration:\r\n" +
                        output, ex);
                }
                finally
                {
                    if (isFirebird)
                        Thread.CurrentThread.CurrentCulture = culture;
                }
            }
        }
    }
}