using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Serenity;
using Serenity.Services;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace Serene.Administration.Endpoints
{
    [Route("Services/Administration/Sergen/[action]")]
    [ServiceAuthorize(PermissionKeys.Security)]
    public class SergenController : ServiceEndpoint
    {
        private readonly IWebHostEnvironment hostingEnvironment;

        public SergenController(IWebHostEnvironment hostingEnvironment)
        {
            this.hostingEnvironment = hostingEnvironment;
        }

        private void CheckAccess()
        {
            if (!Pages.SergenController.IsLocal(HttpContext.Request) ||
                Repositories.UserRepository.isPublicDemo)
                throw new System.Exception("Sergen can only run for local requests!");
        }

        private void RunSergen(params string[] arguments)
        {
            var process = Process.Start(new ProcessStartInfo
            {
                FileName = "dotnet",
                CreateNoWindow = true,
                Arguments = "sergen " + string.Join(" ", arguments)
            });

            if (!process.WaitForExit(90000) || process.ExitCode != 0)
                throw new ValidationError("Error while running Sergen!");
        }

        private string Escape(string value)
        {
            if (value.IsEmptyOrNull())
                return "\"\"";

            if (value.IndexOf(' ') > 0)
                return "\"" + value + "\"";

            return value;
        }

        private TOut RunSergen<TOut>(params string[] arguments)
        {
            var tempFile = System.IO.Path.GetTempFileName() + ".json";
            try
            {
                var process = Process.Start(new ProcessStartInfo
                {
                    FileName = "dotnet",
                    CreateNoWindow = true,
                    WorkingDirectory = hostingEnvironment.ContentRootPath,
                    Arguments = "sergen " + string.Join(" ", arguments) + " -o " + Escape(tempFile)
                });

                if (!process.WaitForExit(90000) || process.ExitCode != 0)
                    throw new ValidationError("Error while running Sergen!");

                return JSON.ParseTolerant<TOut>(System.IO.File.ReadAllText(tempFile));
            }
            finally
            {
                System.IO.File.Delete(tempFile);
            }
        }

        private class AppSettingsFormat
        {
            public Dictionary<string, ConnectionInfo> Data { get; }

            public class ConnectionInfo
            {
                public string ConnectionString { get; set; }
                public string ProviderName { get; set; }
            }
        }

        [HttpPost]
        public ListResponse<SergenConnection> ListConnections(ServiceRequest request)
        {
            CheckAccess();

            var response = new ListResponse<SergenConnection>
            {
                Entities = RunSergen<List<string>>("g").Select(x => new SergenConnection
                {
                    Key = x
                }).ToList()
            };

            return response;
        }

        [HttpPost]
        public ListResponse<SergenTable> ListTables(SergenListTablesRequest request)
        {
            CheckAccess();

            request.CheckNotNull();
            Check.NotNullOrEmpty(request.ConnectionKey, "connectionKey");

            var response = new ListResponse<SergenTable>
            {
                Entities = RunSergen<List<dynamic>>("g", "-c", Escape(request.ConnectionKey))
                    .Select(x => new SergenTable
                    {
                        Tablename = x.name,
                        Identifier = x.identifier,
                        Module = x.module,
                        PermissionKey = x.permission
                    }).ToList()
            };

            return response;
        }

        public ServiceResponse Generate(SergenGenerateRequest request)
        {
            CheckAccess();

            request.CheckNotNull();
            Check.NotNullOrEmpty(request.ConnectionKey, "connectionKey");
            Check.NotNull(request.Table, "table");
            Check.NotNull(request.GenerateOptions, "table");
            Check.NotNullOrWhiteSpace(request.Table.Tablename, "tableName");
            Check.NotNullOrWhiteSpace(request.Table.Identifier, "identifier");
            Check.NotNullOrWhiteSpace(request.Table.Module, "module");

            RunSergen("g",
                "-c", Escape(request.ConnectionKey),
                "-t", Escape(request.Table.Tablename),
                "-m", Escape(request.Table.Module),
                "-i", Escape(request.Table.Identifier),
                "-p", Escape(request.Table.PermissionKey),
                "-w", Escape(
                    (request.GenerateOptions.Row ? "R" : "") +
                    (request.GenerateOptions.Service ? "S" : "") +
                    (request.GenerateOptions.UI ? "U" : "")));

            return new ServiceResponse();
        }
    }
}
