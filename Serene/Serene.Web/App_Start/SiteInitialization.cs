namespace Serene
{
    using FluentMigrator.Runner.Announcers;
    using FluentMigrator.Runner.Initialization;
    using Serenity;
    using Serenity.Abstractions;
    using Serenity.Data;
    using System;
    using System.Data;
    using System.Data.Common;
    using System.Data.SqlClient;
    using System.IO;
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

            EnsureDatabase();
        }

        public static void ApplicationEnd()
        {
            Log.Dispose();
        }

        private static void EnsureDatabase()
        {
            using (var connection = SqlConnections.NewByKey("Default"))
            try
            {
                connection.Open();
            }
            catch
            {
                var cb = new DbConnectionStringBuilder();
                cb.ConnectionString = SqlConnections.GetConnectionString("Default").ConnectionString;
                var catalog = cb["Initial Catalog"];
                cb["Initial Catalog"] = null;
                cb["AttachDBFilename"] = null;

                using (var serverConnection = new SqlConnection(cb.ConnectionString))
                {
                    serverConnection.Open();
                    serverConnection.Execute(String.Format(
                        @"CREATE DATABASE [{0}] ON PRIMARY (Name = N'{0}', FILENAME = '{1}\{0}.mdf') LOG ON (NAME = N'{0}_log', FILENAME = '{1}\{0}.ldf');",
                            catalog, HostingEnvironment.MapPath("~/App_Data")));
                }
                
                SqlConnection.ClearAllPools();
            }

            RunMigrations();
        }

        private static void RunMigrations()
        {
            var defaultConnection = SqlConnections.GetConnectionString("Default");

            // safety check to ensure that we are not modifying another database
            if (defaultConnection.ConnectionString.IndexOf(@"(LocalDb)\v11.0") < 0)
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
                    Connection = defaultConnection.ConnectionString,
                    Target = typeof(SiteInitialization).Assembly.Location,
                    Task = "migrate:up",
                    WorkingDirectory = Path.GetDirectoryName(typeof(SiteInitialization).Assembly.Location),
                    Namespace = "Serene.Migrations.DefaultDB"
                };

                new TaskExecutor(runner).Execute();
            }
        }
    }
}