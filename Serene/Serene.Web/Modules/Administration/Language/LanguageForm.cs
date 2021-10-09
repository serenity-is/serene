using Serenity.ComponentModel;
using System;

namespace Serene.Administration.Forms
{
    [FormScript("Administration.Language")]
    [BasedOnRow(typeof(Entities.LanguageRow), CheckNames = true)]
    public class LanguageForm
    {
        public String LanguageId { get; set; }
        public String LanguageName { get; set; }
    }
}