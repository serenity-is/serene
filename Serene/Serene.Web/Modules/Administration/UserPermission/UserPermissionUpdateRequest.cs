using Newtonsoft.Json;
using Serenity.Services;
using System;
using System.Collections.Generic;

namespace Serene.Administration
{
    public class UserPermissionUpdateRequest : ServiceRequest
    {
        public Int32? UserID { get; set; }
        [JsonProperty(Required = Required.AllowNull)]
        public string Module { get; set; }
        [JsonProperty(Required = Required.AllowNull)]
        public string Submodule { get; set; }
        public List<UserPermissionRow> Permissions { get; set; }
    }
}