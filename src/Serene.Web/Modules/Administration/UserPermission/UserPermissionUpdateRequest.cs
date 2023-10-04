using Newtonsoft.Json;

namespace Serene.Administration;

public class UserPermissionUpdateRequest : ServiceRequest
{
    public int? UserID { get; set; }
    [JsonProperty(Required = Required.AllowNull)]
    public string Module { get; set; }
    [JsonProperty(Required = Required.AllowNull)]
    public string Submodule { get; set; }
    public List<UserPermissionRow> Permissions { get; set; }
}