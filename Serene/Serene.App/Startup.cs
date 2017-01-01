using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Serene;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Extensions.DependencyInjection;
using Serenity.Localization;
using Serenity.Services;
using System;
using System.Data.SqlClient;

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
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddConfig(Configuration);
            services.AddCaching();
            services.AddTextRegistry();
            services.AddFileLogging();
            services.AddSingleton<IAuthorizationService, MyAuthorizationService>();
            services.AddSingleton<IUserRetrieveService, MyUserRetrieveService>();
            services.AddSingleton<IPermissionService, MyPermissionService>();
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

            Dependency.SetResolver(new MyDependencyResolver(app.ApplicationServices));

            var textRegistry = app.ApplicationServices.GetRequiredService<ILocalTextRegistry>();
            textRegistry.AddNestedTexts();
            textRegistry.AddEnumTexts();
            textRegistry.AddRowTexts();
            var contentRoot = env.ContentRootPath;
            textRegistry.AddJsonTexts(System.IO.Path.Combine(env.ContentRootPath, "texts/serenity"));
            textRegistry.AddJsonTexts(System.IO.Path.Combine(env.ContentRootPath, "texts/site"));
            textRegistry.AddJsonTexts(System.IO.Path.Combine(env.ContentRootPath, "texts/user"));

            DbProviderFactories.RegisterFactory("System.Data.SqlClient", SqlClientFactory.Instance);

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();
            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                CookieName = ".AspNetAuth"
            });

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }

    public class MyDependencyResolver : IDependencyResolver
    {
        private IServiceProvider provider;

        public MyDependencyResolver(IServiceProvider provider)
        {
            this.provider = provider;
        }

        public TService Resolve<TService>() where TService : class
        {
            return provider.GetRequiredService<TService>();
        }

        public TService TryResolve<TService>() where TService : class
        {
            return provider.GetService<TService>();
        }
    }

    public class MyAuthorizationService : IAuthorizationService
    {
        public bool IsLoggedIn
        {
            get
            {
                return true;
            }
        }

        public string Username
        {
            get
            {
                return "admin";
            }
        }
    }

    public class MyUserRetrieveService : IUserRetrieveService
    {
        public IUserDefinition ById(string id)
        {
            return new UserDefinition
            {
                UserId = Convert.ToInt32(id),
                Username = "admin",
                DisplayName = "admin",
                IsActive = 1
            };
        }

        public IUserDefinition ByUsername(string username)
        {
            return new UserDefinition
            {
                UserId = 1,
                Username = username,
                DisplayName = "admin",
                IsActive = 1
            };
        }
    }

    public class MyPermissionService : IPermissionService
    {
        public bool HasPermission(string permission)
        {
            return true;
        }
    }

}
