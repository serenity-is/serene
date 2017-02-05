
using Serenity.Services;

namespace Serene.Administration
{
    public class SergenListTablesRequest : ServiceRequest
    {
        public string ConnectionKey { get; set; }
    }

    public class SergenConnection
    {
        public string Key { get; set; }
    }

    public class SergenTable
    {
        public string Tablename { get; set; }
        public string Identifier { get; set; }
        public string Module { get; set; }
        public string PermissionKey { get; set; }
    }

    public class SergenGenerateOptions
    {
        public bool Row { get; set; }
        public bool Service { get; set; }
        public bool UI { get; set; }
    }

    public class SergenGenerateRequest : ServiceRequest
    {
        public string ConnectionKey { get; set; }
        public SergenTable Table { get; set; }
        public SergenGenerateOptions GenerateOptions { get; set; }
    }
}