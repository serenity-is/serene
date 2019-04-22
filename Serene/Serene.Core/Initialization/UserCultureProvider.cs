using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace Serene.AppServices
{
    public class UserCultureProvider : IRequestCultureProvider
    {
        private static Dictionary<string, string> TwoLetterToFourLetter = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
        {
            { "en", "en-US" },
            { "fa", "fa-IR" },
            { "zh", "zh-CN" },
            { "vi", "vi-VN" }
        };

        public Task<ProviderCultureResult> DetermineProviderCultureResult(HttpContext httpContext)
        {
            var culture = httpContext.Request.Cookies["LanguagePreference"];
            if (string.IsNullOrEmpty(culture))
                culture = null;
            else
            {
                if (culture.Length == 2)
                {
                    string code;
                    if (TwoLetterToFourLetter.TryGetValue(culture, out code))
                        culture = code;
                    else
                        culture = culture + "-" + culture.ToUpperInvariant();
                }
            }

            return Task.FromResult(new ProviderCultureResult(culture ?? "en-US", culture ?? "en-US"));
        }

        private static List<CultureInfo> supportedCultures;
        private static readonly string[] supportedCultureIndentifiers = new string[] {
            "de-DE",
            "en-US",
            "en-GB",
            "es-ES",
            "fa-IR",
            "it-IT",
            "pt-PT",
            "pt-BR",
            "ru-RU",
            "tr-TR",
            "vi-VN",
            "zh-CN"
        };


        public static IList<CultureInfo> SupportedCultures
        {
            get
            {
                if (supportedCultures == null)
                    supportedCultures = supportedCultureIndentifiers.Select(x =>
                    {
                        try
                        {
                            return new CultureInfo(x);
                        }
                        catch
                        {
                            return null;
                        }
                    }).Where(x => x != null).ToList();

                return supportedCultures;
            }
        }
    }

}
