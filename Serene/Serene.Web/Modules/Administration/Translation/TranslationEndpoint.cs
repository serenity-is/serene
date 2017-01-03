
namespace Serene.Administration.Endpoints
{
    using Serenity.Services;
    using System.Web.Mvc;
    using MyRepository = Repositories.TranslationRepository;

    [RoutePrefix("Services/Administration/Translation"), Route("{action}")]
    [ServiceAuthorize(PermissionKeys.Translation)]
    public class TranslationController : ServiceEndpoint
    {
        public ListResponse<TranslationItem> List(TranslationListRequest request)
        {
            return new MyRepository().List(request);
        }

        [HttpPost]
        public SaveResponse Update(TranslationUpdateRequest request)
        {
            return new MyRepository().Update(request);
        }
    }
}
