
namespace Serene.Administration.Endpoints
{
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Mvc;
    using Serenity;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Diagnostics;
    using System.Linq;

    [Route("Services/Administration/Sergen/[action]")]
    [ServiceAuthorize(PermissionKeys.Security)]
    public class SergenController : ServiceEndpoint
    {
        private IHostingEnvironment hostingEnvironment;

        public SergenController(IHostingEnvironment hostingEnvironment)
        {
            this.hostingEnvironment = hostingEnvironment;
        }

        private void RunSergen(string[] arguments)
        {
            var process = Process.Start(new ProcessStartInfo
            {
                FileName = "dotnet",
                CreateNoWindow = true,
                Arguments = "sergen " + string.Join(" ", arguments)
            });
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
                    Arguments = "sergen " + string.Join(" ", arguments) + " -o:" + tempFile
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
            var response = new ListResponse<SergenConnection>();
            response.Entities = RunSergen<List<string>>("g").Select(x => new SergenConnection
            {
                Key = x
            }).ToList();

            return response;
        }

        [HttpPost]
        public ListResponse<SergenTable> ListTables(SergenListTablesRequest request)
        {
            request.CheckNotNull();
            Check.NotNullOrEmpty(request.ConnectionKey, "connectionKey");

            var response = new ListResponse<SergenTable>();
            response.Entities = RunSergen<List<dynamic>>("g", "-c:" + request.ConnectionKey).Select(x => new SergenTable
            {
                Tablename = x.name,
                Identifier = x.identifier,
                Module = x.module,
                PermissionKey = x.permission
            }).ToList();
            return response;
        }
    }
}
