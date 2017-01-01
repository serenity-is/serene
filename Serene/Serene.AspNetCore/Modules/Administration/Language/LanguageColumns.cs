
namespace Serene.Administration.Forms
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Administration.Language")]
    [BasedOnRow(typeof(Entities.LanguageRow))]
    public class LanguageColumns
    {
        [EditLink]
        public String LanguageId { get; set; }
        [EditLink]
        public String LanguageName { get; set; }
    }
}