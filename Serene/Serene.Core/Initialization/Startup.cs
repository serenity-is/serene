using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using Serene.AppServices;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Extensions.DependencyInjection;
using Serenity.Localization;
using Serenity.Services;
using Serenity.Web.Middleware;
using System.Data.SqlClient;
using System.IO;

namespace Serene
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAntiforgery(options => options.HeaderName = "X-CSRF-TOKEN");
            services.AddMvc(options =>
            {
                options.Filters.Add(new AutoValidateAntiforgeryTokenAttribute());
                options.Filters.Add(typeof(AntiforgeryCookieResultFilterAttribute));
                options.ModelBinderProviders.Insert(0, new ServiceEndpointModelBinderProvider());
                options.Conventions.Add(new ServiceEndpointActionModelConvention());
            })
            .AddJsonOptions(options =>
            {
                options.SerializerSettings.ContractResolver = new DefaultContractResolver();
            });

            services.AddAuthentication(o =>
            {
                o.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                o.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                o.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            }).AddCookie(o =>
            {
                o.Cookie.Name = ".AspNetAuth";
                o.LoginPath = new PathString("/Account/Login/");
                o.AccessDeniedPath = new PathString("/Account/AccessDenied");
            });

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddConfig(Configuration);
            services.AddCaching();
            services.AddTextRegistry();
            services.AddFileLogging();
            services.AddSingleton<IAuthenticationService, Administration.AuthenticationService>();
            services.AddSingleton<IAuthorizationService, Administration.AuthorizationService>();
            services.AddSingleton<IUserRetrieveService, Administration.UserRetrieveService>();
            services.AddSingleton<IPermissionService, Administration.PermissionService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            Serenity.Extensibility.ExtensibilityHelper.SelfAssemblies = new System.Reflection.Assembly[]
            {
                typeof(LocalTextRegistry).Assembly,
                typeof(SqlConnections).Assembly,
                typeof(Row).Assembly,
                typeof(SaveRequestHandler<>).Assembly,
                typeof(WebSecurityHelper).Assembly,
                typeof(Startup).Assembly
            };

            SqlSettings.AutoQuotedIdentifiers = true;
            RegisterDataProviders();

            Dependency.SetResolver(new AppServices.DependencyResolver(app.ApplicationServices));

            var textRegistry = app.ApplicationServices.GetRequiredService<ILocalTextRegistry>();
            textRegistry.AddNestedTexts();
            textRegistry.AddNestedPermissions();
            textRegistry.AddEnumTexts();
            textRegistry.AddRowTexts();
            var contentRoot = env.ContentRootPath;
            textRegistry.AddJsonTexts(System.IO.Path.Combine(env.WebRootPath, "Scripts/serenity/texts".Replace('/', Path.DirectorySeparatorChar)));
            textRegistry.AddJsonTexts(System.IO.Path.Combine(env.WebRootPath, "Scripts/site/texts".Replace('/', Path.DirectorySeparatorChar)));
            textRegistry.AddJsonTexts(System.IO.Path.Combine(env.ContentRootPath, "App_Data/texts".Replace('/', Path.DirectorySeparatorChar)));

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            var reqLocOpt = new RequestLocalizationOptions();
            reqLocOpt.SupportedUICultures = UserCultureProvider.SupportedCultures;
            reqLocOpt.SupportedCultures = UserCultureProvider.SupportedCultures;
            reqLocOpt.RequestCultureProviders.Clear();
            reqLocOpt.RequestCultureProviders.Add(new UserCultureProvider());
            app.UseRequestLocalization(reqLocOpt);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();
            app.UseAuthentication();

            app.UseDynamicScripts();
            app.UseMvc(routes =>
            {
            });

            DataMigrations.Initialize();
        }

        public static void RegisterDataProviders()
        {
#if COREFX
            DbProviderFactories.RegisterFactory("System.Data.SqlClient", SqlClientFactory.Instance);
            DbProviderFactories.RegisterFactory("Microsoft.Data.Sqlite", Microsoft.Data.Sqlite.SqliteFactory.Instance);

            // to enable FIREBIRD: add FirebirdSql.Data.FirebirdClient reference, set connections, and uncomment line below
            // DbProviderFactories.RegisterFactory("FirebirdSql.Data.FirebirdClient", FirebirdSql.Data.FirebirdClient.FirebirdClientFactory.Instance);

            // to enable MYSQL: add MySql.Data reference, set connections, and uncomment line below
            // DbProviderFactories.RegisterFactory("MySql.Data.MySqlClient", MySql.Data.MySqlClient.MySqlClientFactory.Instance);

            // to enable POSTGRES: add Npgsql reference, set connections, and uncomment line below
            // DbProviderFactories.RegisterFactory("Npgsql", Npgsql.NpgsqlFactory.Instance);
#endif
        }
    }
}
