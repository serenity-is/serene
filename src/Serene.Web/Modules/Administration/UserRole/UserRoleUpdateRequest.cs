using Serenity.Services;
using System;
using System.Collections.Generic;

namespace Serene.Administration
{
    public class UserRoleUpdateRequest : ServiceRequest
    {
        public int? UserID { get; set; }
        public List<int> Roles { get; set; }
    }
}