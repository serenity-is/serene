
namespace Serene.Administration.Endpoints
{
    using Serenity.Services;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.TranslationRepository;

    [Route("Services/Administration/Translation")]
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
