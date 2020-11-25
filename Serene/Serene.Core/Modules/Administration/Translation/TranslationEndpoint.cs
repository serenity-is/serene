using Serenity.Services;
using Microsoft.AspNetCore.Mvc;
using MyRepository = Serene.Administration.Repositories.TranslationRepository;

namespace Serene.Administration.Endpoints
{
    [Route("Services/Administration/Translation/[action]")]
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
