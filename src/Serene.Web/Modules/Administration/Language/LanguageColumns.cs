using Serenity.ComponentModel;
using System;

namespace Serene.Administration.Forms
{
    [ColumnsScript("Administration.Language")]
    [BasedOnRow(typeof(LanguageRow), CheckNames = true)]
    public class LanguageColumns
    {
        [EditLink]
        public string LanguageId { get; set; }
        [EditLink]
        public string LanguageName { get; set; }
    }
}