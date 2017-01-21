using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Extensions.DependencyInjection;
using Serenity.Localization;
using Serenity.Web.Middleware;
using Serenity.Services;
using System;
using System.Data.SqlClient;
using Newtonsoft.Json.Serialization;
using System.IO;
using Serene.AppServices;
using System.Globalization;
using System.Collections.Generic;

namespace Serene
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddJsonFile($"appsettings.machine.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc(options =>
            {
                options.ModelBinderProviders.Insert(0, new ServiceEndpointModelBinderProvider());
                options.Conventions.Add(new ServiceEndpointActionModelConvention());
            })
            .AddJsonOptions(options =>
            {
                options.SerializerSettings.ContractResolver = new DefaultContractResolver();
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
                typeof(LocalTextRegistry).GetAssembly(),
                typeof(SqlConnections).GetAssembly(),
                typeof(Row).GetAssembly(),
                typeof(SaveRequestHandler<>).GetAssembly(),
                typeof(WebSecurityHelper).GetAssembly(),
                typeof(Startup).GetAssembly()
            };

            DbProviderFactories.RegisterFactory("System.Data.SqlClient", SqlClientFactory.Instance);
            DbProviderFactories.RegisterFactory("Microsoft.Data.Sqlite", Microsoft.Data.Sqlite.SqliteFactory.Instance);

            Dependency.SetResolver(new AppServices.DependencyResolver(app.ApplicationServices));

            var textRegistry = app.ApplicationServices.GetRequiredService<ILocalTextRegistry>();
            textRegistry.AddNestedTexts();
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
            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationScheme = "CookieAuthenticationScheme",
                CookieName = ".AspNetAuth",
                LoginPath = new PathString("/Account/Login/"),
                AccessDeniedPath = new PathString("/Account/AccessDenied"),
                AutomaticAuthenticate = true,
                AutomaticChallenge = true
            });

            app.UseDynamicScripts();
            app.UseMvc(routes =>
            {
            });

            DataMigrations.Initialize();
        }
    }
}
