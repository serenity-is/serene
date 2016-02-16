
namespace Serene
{
    using Administration;
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;

    public class LanguageList
    {
        public static List<Tuple<string, string>> Value
        {
            get
            {
                var result = new List<Tuple<string, string>>();
                foreach (var k in LanguageRow.Lookup.Items)
                    if (k.LanguageId != "en")
                        result.Add(new Tuple<string, string>(k.Id.ToString(), k.LanguageName));
                return result;
            }
        }
    }

}