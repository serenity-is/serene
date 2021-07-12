using FluentMigrator.Runner;
using FluentMigrator.Runner.Conventions;
using FluentMigrator.Runner.Initialization;
using FluentMigrator.Runner.Processors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.DependencyInjection;
using Serenity.Data;
using System;
using System.Data.Common;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading;

namespace Serene
{
    public class DataMigrations : IDataMigrations
    { 
        private static readonly string[] databaseKeys = new[] {
            "Default"
            //<if:Northwind>
            , "Northwind"
            //</if:Northwind>
        };

        protected ISqlConnections SqlConnections { get; }
        protected IWebHostEnvironment HostEnvironment { get; }

        public DataMigrations(ISqlConnections sqlConnections, IWebHostEnvironment hostEnvironment)
        {
            SqlConnections = sqlConnections ?? 
                throw new ArgumentNullException(nameof(sqlConnections));
            HostEnvironment = hostEnvironment ??
                throw new ArgumentNullException(nameof(hostEnvironment));
        }

        public void Initialize()
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
        private void EnsureDatabase(string databaseKey)
        {
            var cs = SqlConnections.TryGetConnectionString(databaseKey);
            if (cs == null)
                throw new ArgumentOutOfRangeException(nameof(databaseKey));

            var serverType = cs.Dialect.ServerType;
            bool isSql = serverType.StartsWith("SqlServer", StringComparison.OrdinalIgnoreCase);
            bool isPostgres = serverType.StartsWith("Postgres", StringComparison.OrdinalIgnoreCase);
            bool isMySql = serverType.StartsWith("MySql", StringComparison.OrdinalIgnoreCase);
            bool isSqlite = serverType.StartsWith("Sqlite", StringComparison.OrdinalIgnoreCase);
            bool isFirebird = serverType.StartsWith("Firebird", StringComparison.OrdinalIgnoreCase);

            if (isSqlite)
            {
                var contentRoot = HostEnvironment.ContentRootPath;
                Directory.CreateDirectory(Path.Combine(contentRoot, "App_Data"));
                return;
            }

            var cb = DbProviderFactories.GetFactory(cs.ProviderName).CreateConnectionStringBuilder();
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

                using (var fbConnection = SqlConnections.New(cb.ConnectionString, cs.ProviderName, cs.Dialect))
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

            using (var serverConnection = SqlConnections.New(cb.ConnectionString, cs.ProviderName, cs.Dialect))
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
                    var hostingEnvironment = HostEnvironment;
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

        public bool SkippedMigrations { get; private set; }

        private void RunMigrations(string databaseKey)
        {
            var cs = SqlConnections.TryGetConnectionString(databaseKey);
            if (cs == null)
                throw new ArgumentOutOfRangeException(nameof(databaseKey));
            

            string serverType = cs.Dialect.ServerType;
            
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

            var conventionSet = new DefaultConventionSet(defaultSchemaName: null,
                Path.GetDirectoryName(typeof(DataMigrations).Assembly.Location));
            var migrationNamespace = "Serene.Migrations." + databaseKey + "DB";
            var migrationAssemblies = new[] { typeof(DataMigrations).Assembly };
            if (databaseKey.Equals("Northwind", StringComparison.OrdinalIgnoreCase))
            {
                migrationNamespace = typeof(Serenity.Demo.Northwind.Migrations.MigrationAttribute).Namespace;
                migrationAssemblies = new[] { typeof(Serenity.Demo.Northwind.Migrations.MigrationAttribute).Assembly };
            }

            var serviceProvider = new ServiceCollection()
                .AddLogging(lb => lb.AddFluentMigratorConsole())
                .AddFluentMigratorCore()
                .AddSingleton<IConventionSet>(conventionSet)
                .Configure<TypeFilterOptions>(options =>
                {
                    options.Namespace = migrationNamespace;
                })
                .Configure<ProcessorOptions>(options =>
                {
                    options.Timeout = TimeSpan.FromSeconds(90);
                })
                .ConfigureRunner(builder =>
                {
                    if (databaseType == OracleDialect.Instance.ServerType)
                        builder.AddOracleManaged();
                    else if (databaseType == SqliteDialect.Instance.ServerType)
                        builder.AddSQLite();
                    else if (databaseType == FirebirdDialect.Instance.ServerType)
                        builder.AddFirebird();
                    else if (databaseType == MySqlDialect.Instance.ServerType)
                        builder.AddMySql5();
                    else if (databaseType == PostgresDialect.Instance.ServerType)
                        builder.AddPostgres();
                    else
                        builder.AddSqlServer();

                    builder.WithGlobalConnectionString(cs.ConnectionString);
                    builder.WithMigrationsIn(migrationAssemblies);
                })
                .BuildServiceProvider();

            var culture = CultureInfo.CurrentCulture;
            try
            {
                if (isFirebird)
                    Thread.CurrentThread.CurrentCulture = CultureInfo.InvariantCulture;

                using var scope = serviceProvider.CreateScope();
                var runner = scope.ServiceProvider.GetRequiredService<IMigrationRunner>();
                runner.MigrateUp();
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException("Error executing migration!", ex);
            }
            finally
            {
                if (isFirebird)
                    Thread.CurrentThread.CurrentCulture = culture;
            }
        }
    }
}
