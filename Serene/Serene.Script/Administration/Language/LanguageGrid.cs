
namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System.Runtime.CompilerServices;

    [Imported]
    public class LanguageGrid : EntityGrid<LanguageRow>
    {
        public LanguageGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    /* 
    This class has been ported to TypeScript. See LanguageGrid.ts
    Code below is only a reference for those who want to use Saltaralle

    [ColumnsKey("Administration.Language"), IdProperty("Id"), NameProperty("LanguageName")]
    [DialogType(typeof(LanguageDialog)), LocalTextPrefix("Administration.Language"), Service("Administration/Language")]
    public class LanguageGrid : EntityGrid<LanguageRow>, IAsyncInit
    {
        public LanguageGrid(jQueryObject container)
            : base(container)
        {
        }
    }
    */
}
