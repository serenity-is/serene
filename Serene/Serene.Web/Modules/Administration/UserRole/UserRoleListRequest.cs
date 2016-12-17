
namespace Serene.Administration
{
    using Serenity;
    using Serenity.Services;
    using Serenity.Web;
    using System.Web.Mvc;

    public class UserRoleListRequest : ServiceRequest
    {
        public int? UserID { get; set; }
    }
}