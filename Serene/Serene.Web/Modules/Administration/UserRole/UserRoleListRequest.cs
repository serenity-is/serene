using Serenity.Services;

namespace Serene.Administration
{
    public class UserRoleListRequest : ServiceRequest
    {
        public int? UserID { get; set; }
    }
}