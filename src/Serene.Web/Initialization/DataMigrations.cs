using FluentMigrator.Runner;
using FluentMigrator.Runner.Conventions;
using FluentMigrator.Runner.Initialization;
using FluentMigrator.Runner.Processors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.DependencyInjection;
using System.Data.Common;
using System.Globalization;
using System.IO;

namespace Serene;

public class DataMigrations : IDataMigrations
{
    private static readonly string[] databaseKeys = new[] {
    "Default"
#if (Northwind)
    , "Northwind"
#endif
};

    private readonly ITypeSource typeSource;
    private readonly ISqlConnections sqlConnections;
    private readonly IWebHostEnvironment hostEnvironment;

    public DataMigrations(ITypeSource typeSource,
        ISqlConnections sqlConnections,
        IWebHostEnvironment hostEnvironment)
    {
        this.typeSource = typeSource ?? throw new ArgumentNullException(nameof(typeSource));
        this.sqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        this.hostEnvironment = hostEnvironment ?? throw new ArgumentNullException(nameof(hostEnvironment));
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
        var cs = sqlConnections.TryGetConnectionString(databaseKey)
            ?? throw new ArgumentNullException(nameof(databaseKey));
        var serverType = cs.Dialect.ServerType;
        bool isSql = serverType.StartsWith("SqlServer", StringComparison.OrdinalIgnoreCase);
        bool isPostgres = serverType.StartsWith("Postgres", StringComparison.OrdinalIgnoreCase);
        bool isMySql = serverType.StartsWith("MySql", StringComparison.OrdinalIgnoreCase);
        bool isSqlite = serverType.StartsWith("Sqlite", StringComparison.OrdinalIgnoreCase);
        bool isFirebird = serverType.StartsWith("Firebird", StringComparison.OrdinalIgnoreCase);

        if (isSqlite)
        {
            var contentRoot = hostEnvironment.ContentRootPath;
            Directory.CreateDirectory(Path.Combine(contentRoot, "App_Data"));
            return;
        }

        var cb = DbProviderFactories.GetFactory(cs.ProviderName).CreateConnectionStringBuilder();
        cb.ConnectionString = cs.ConnectionString;

        if (isFirebird)
        {
            if (cb.ConnectionString.IndexOf(@"localhost", StringComparison.Ordinal) < 0 &&
                cb.ConnectionString.IndexOf(@"127.0.0.1", StringComparison.Ordinal) < 0)
                return;

            var database = cb["Database"] as string;
            if (string.IsNullOrEmpty(database))
                return;

            database = Path.GetFullPath(database);
            if (File.Exists(database))
                return;
            Directory.CreateDirectory(Path.GetDirectoryName(database));

            using var fbConnection = sqlConnections.New(cb.ConnectionString,
                cs.ProviderName, cs.Dialect);
            ((WrappedConnection)fbConnection).ActualConnection.GetType()
                .GetMethod("CreateDatabase", new Type[] { typeof(string), typeof(bool) })
                .Invoke(null, new object[] { fbConnection.ConnectionString, false });

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
        cb[catalogKey] = isPostgres ? "postgres" : null;

        using var serverConnection = sqlConnections.New(cb.ConnectionString,
            cs.ProviderName, cs.Dialect);
        serverConnection.Open();

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
            serverConnection.ConnectionString.Contains(@"(localdb)\", StringComparison.OrdinalIgnoreCase) ||
            serverConnection.ConnectionString.Contains(@".\", StringComparison.OrdinalIgnoreCase) ||
            serverConnection.ConnectionString.Contains(@"localhost", StringComparison.OrdinalIgnoreCase) ||
            serverConnection.ConnectionString.Contains(@"127.0.0.1", StringComparison.OrdinalIgnoreCase));

        string command;
        if (isLocalServer)
        {
            string baseDirectory = hostEnvironment.ContentRootPath;

            var filename = Path.Combine(Path.Combine(baseDirectory, "App_Data"), catalog);
            Directory.CreateDirectory(Path.GetDirectoryName(filename));

            command = string.Format(CultureInfo.InvariantCulture, @"CREATE DATABASE [{0}] ON PRIMARY (Name = N'{0}', FILENAME = '{1}.mdf') " +
                "LOG ON (NAME = N'{0}_log', FILENAME = '{1}.ldf')",
                catalog, filename);

            if (File.Exists(filename + ".mdf"))
                command += " FOR ATTACH";
        }
        else
        {
            command = string.Format(CultureInfo.InvariantCulture, createDatabaseQuery, catalog);
        }

        serverConnection.Execute(command);
        SqlConnection.ClearAllPools();
    }

    private void RunMigrations(string databaseKey)
    {
        var cs = sqlConnections.TryGetConnectionString(databaseKey) ??
            throw new ArgumentOutOfRangeException(nameof(databaseKey));
        string serverType = cs.Dialect.ServerType;
        bool isOracle = serverType.StartsWith("Oracle", StringComparison.OrdinalIgnoreCase);
        bool isFirebird = serverType.StartsWith("Firebird", StringComparison.OrdinalIgnoreCase);

        string databaseType = isOracle ? "OracleManaged" : serverType;

        var conventionSet = new DefaultConventionSet(defaultSchemaName: null,
            Path.GetDirectoryName(typeof(DataMigrations).Assembly.Location));

        var serviceProvider = new ServiceCollection()
            .AddLogging(lb => lb.AddFluentMigratorConsole())
            .AddFluentMigratorCore()
            .AddSingleton<IConventionSet>(conventionSet)
            .Configure<ProcessorOptions>(options =>
            {
                options.Timeout = TimeSpan.FromSeconds(90);
            })
            .Configure<RunnerOptions>(options =>
            {
                options.Tags = new[] { databaseKey + "DB" };
                options.IncludeUntaggedMigrations = databaseKey == "Default";
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
                builder.ScanIn(((IGetAssemblies)typeSource).GetAssemblies().ToArray()).For.Migrations();
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