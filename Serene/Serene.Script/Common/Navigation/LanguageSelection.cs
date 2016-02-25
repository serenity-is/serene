namespace Serene.Common
{
    using Serene.Administration;
    using jQueryApi;
    using Serenity;
    using System.Html;
    using System.Linq;

    public class LanguageSelection : Widget
    {
        public LanguageSelection(jQueryObject select, string currentLanguage)
            : base(select)
        {
            currentLanguage = currentLanguage ?? "en";

            var self = this;
            this.Change(e =>
            {
                jQuery.Instance.cookie("LanguagePreference", select.GetValue(), new {
                    path = Q.Config.ApplicationPath,
                    expires = 365
                });
                Window.Location.Reload(true);
            });

            Q.GetLookupAsync<LanguageRow>("Administration.Language").Then(x =>
            {
                if (!x.Items.Any(z => z.LanguageId == currentLanguage))
                {
                    var idx = currentLanguage.LastIndexOf("-");
                    if (idx >= 0)
                    {
                        currentLanguage = currentLanguage.Substr(0, idx);
                        if (!x.Items.Any(z => z.LanguageId == currentLanguage))
                        {
                            currentLanguage = "en";
                        }
                    }
                    else
                        currentLanguage = "en";
                }

                foreach (var l in x.Items)
                    Q.AddOption(select, l.LanguageId, l.LanguageName);

                select.Value(currentLanguage);
            });
        }
    }
}
