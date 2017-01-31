using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;

namespace Serene.AppServices
{
    public class UserCultureProvider : IRequestCultureProvider
    {
        private static Dictionary<string, string> TwoLetterToFourLetter = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
        {
            { "en", "en-US" },
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

        public static readonly List<CultureInfo> SupportedCultures = new List<CultureInfo>
        {
            new CultureInfo("de-DE"),
            new CultureInfo("en-US"),
            new CultureInfo("en-UK"),
            new CultureInfo("es-ES"),
            new CultureInfo("fa-FA"),
            new CultureInfo("it-it"),
            new CultureInfo("pt-PT"),
            new CultureInfo("pt-BR"),
            new CultureInfo("ru-RU"),
            new CultureInfo("tr-TR"),
            new CultureInfo("vi-VN"),
            new CultureInfo("zh-CN")
        };
    }
}