
namespace Serene.Administration
{
    using Serenity;
    using System.Runtime.CompilerServices;

    [Imported]
    public class LanguageDialog : EntityDialog<LanguageRow>
    {
    }

    /* 
    This class has been ported to TypeScript. See LanguageDialog.ts
    Code below is only a reference for those who want to use Saltaralle

    [IdProperty("Id"), NameProperty("LanguageName")]
    [FormKey("Administration.Language"), LocalTextPrefix("Administration.Language"), Service("Administration/Language")]
    public class LanguageDialog : EntityDialog<LanguageRow>, IAsyncInit
    {
    }
    */
}
