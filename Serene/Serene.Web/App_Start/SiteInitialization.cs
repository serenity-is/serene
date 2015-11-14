namespace Serene
{
    using FluentMigrator.Runner.Announcers;
    using FluentMigrator.Runner.Initialization;
    using Serenity;
    using Serenity.Abstractions;
    using Serenity.Data;
    using System;
    using System.Data.Common;
    using System.Data.SqlClient;
    using System.IO;
    using System.Linq;
    using System.Web.Hosting;

    public static partial class SiteInitialization
    {
        public static void ApplicationStart()
        {
            try
            {
                SqlSettings.CurrentDialect = SqlDialect.MsSql2012;

                Serenity.Web.CommonInitialization.Run();

                var registrar = Dependency.Resolve<IDependencyRegistrar>();
                registrar.RegisterInstance<IAuthorizationService>(new Administration.AuthorizationService());
                registrar.RegisterInstance<IAuthenticationService>(new Administration.AuthenticationService());
                registrar.RegisterInstance<IPermissionService>(new Administration.PermissionService());
                registrar.RegisterInstance<IUserRetrieveService>(new Administration.UserRetrieveService());
            }
            catch (Exception ex)
            {
                ex.Log();
                throw;
            }

            foreach (var databaseKey in new string[] { "Default", "Northwind" })
            {
                EnsureDatabase(databaseKey);
                RunMigrations(databaseKey);
            }
        }

        public static void ApplicationEnd()
        {
        }

        private static string[] databaseKeys = new[] { "Default", "Northwind" };

        /// <summary>
        /// Automatically creates a database for the template if it doesn't already exists.
        /// You might delete this method to disable auto create functionality.
        /// </summary>
        private static void EnsureDatabase(string databaseKey)
        {
            var cs = SqlConnections.GetConnectionString(databaseKey);

            var cb = new DbConnectionStringBuilder();
            cb.ConnectionString = cs.ConnectionString;
            var catalog = cb["Initial Catalog"] as string;
            cb["Initial Catalog"] = null;
            cb["AttachDBFilename"] = null;

            using (var serverConnection = new SqlConnection(cb.ConnectionString))
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

                if (serverConnection.Query("SELECT * FROM sys.databases WHERE NAME = @name", new { name = catalog }).Any())
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
                    command = String.Format(@"CREATE DATABASE [{0}]",
                        catalog);
                }

                serverConnection.Execute(command);
                SqlConnection.ClearAllPools();
            }
        }

        private static void RunMigrations(string databaseKey)
        {
            var connectionString = SqlConnections.GetConnectionString(databaseKey);

            // safety check to ensure that we are not modifying an arbitrary database.
            // remove these two lines if you want Serene migrations to run on your DB.
            if (connectionString.ConnectionString.IndexOf(typeof(SiteInitialization).Namespace + 
                    @"_" + databaseKey + "_v1") < 0)
                return;

            using (var sw = new StringWriter())
            {
                var announcer = new TextWriterWithGoAnnouncer(sw)
                {
                    ShowSql = true
                };

                var runner = new RunnerContext(announcer)
                {
                    Database = "SqlServer",
                    Connection = connectionString.ConnectionString,
                    Targets = new string[] { typeof(SiteInitialization).Assembly.Location },
                    Task = "migrate:up",
                    WorkingDirectory = Path.GetDirectoryName(typeof(SiteInitialization).Assembly.Location),
                    Namespace = "Serene.Migrations." + databaseKey + "DB"
                };

                new TaskExecutor(runner).Execute();
            }
        }
    }
}