using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json.Linq;
using Serene.Administration.Entities;
using Serenity;
using Serenity.Abstractions;
using Serenity.ComponentModel;
using Serenity.Configuration;
using Serenity.Extensibility;
using Serenity.Localization;
using Serenity.Navigation;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Web.Hosting;

namespace Serene.Administration.Repositories
{
    public class TranslationRepository
    {
        private static string GetUserTextsFilePath(string languageID)
        {
            return Path.Combine(Path.GetDirectoryName(HostingEnvironment.MapPath("~/")), 
                "App_Data/texts/".Replace('/', Path.DirectorySeparatorChar)) + "user.texts." + (languageID.TrimToNull() ?? "invariant") + ".json";
        }

        public ListResponse<TranslationItem> List(TranslationListRequest request)
        {
            var result = new ListResponse<TranslationItem>();

            var availableKeys = GetAllAvailableLocalTextKeys();
            var targetLanguageID = request.TargetLanguageID.TrimToNull();
            
            var customTranslations = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);

            var textsFilePath = GetUserTextsFilePath(targetLanguageID);           
            if (File.Exists(textsFilePath))
            {
                var json = JsonConfigHelper.LoadConfig<Dictionary<string, JToken>>(textsFilePath);
                JsonLocalTextRegistration.ProcessNestedDictionary(json, "", customTranslations);
                foreach (var key in customTranslations.Keys)
                    availableKeys.Add(key);
            }

            var sorted = new string[availableKeys.Count];
            availableKeys.CopyTo(sorted);
            Array.Sort(sorted);

            var registry = Dependency.Resolve<ILocalTextRegistry>();
            targetLanguageID = targetLanguageID ?? "";
            var sourceLanguageID = request.SourceLanguageID.TrimToEmpty();

            result.Entities = new List<TranslationItem>();

            Func<string, string> effective = delegate(string key)
            {
                if (key.StartsWith("Navigation."))
                {
                    key = key.Substring("Navigation.".Length);
                    return key.Split(new char[] { '/' }).Last();
                }
                else if (key.StartsWith("Forms.") && key.Contains(".Categories."))
                {
                    return key.Split(new char[] { '.' }).Last().TrimToNull();
                }

                return key;
            };

            foreach (var key in sorted)
            {
                string customText;
                if (!customTranslations.TryGetValue(key, out customText))
                    customText = null;

                result.Entities.Add(new TranslationItem
                {
                    Key = key,
                    SourceText = registry.TryGet(sourceLanguageID, key) ?? effective(key),
                    TargetText = registry.TryGet(targetLanguageID, key) ?? effective(key),
                    CustomText = customText
                });
            }

            return result;
        }

        public HashSet<string> GetAllAvailableLocalTextKeys()
        {
            var result = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

            foreach (var assembly in ExtensibilityHelper.SelfAssemblies)
            {
                foreach (NavigationItemAttribute attr in assembly.GetCustomAttributes<NavigationItemAttribute>())
                    result.Add("Navigation." + (attr.Category.IsEmptyOrNull() ? "" : attr.Category + "/") + attr.Title);

                foreach (var type in assembly.GetTypes())
                {
                    var attr = type.GetCustomAttribute<FormScriptAttribute>();
                    if (attr != null)
                    {
                        foreach (var member in type.GetMembers(BindingFlags.Instance | BindingFlags.Public))
                        {
                            var category = member.GetCustomAttribute<CategoryAttribute>();
                            if (category != null && !category.Category.IsEmptyOrNull())
                                result.Add("Forms." + attr.Key + ".Categories." + category.Category);
                        }
                    }
                }
            }

            var repository = Dependency.Resolve<ILocalTextRegistry>() as LocalTextRegistry;
            if (repository != null)
                result.AddRange(repository.GetAllTextKeys(false));

            return result;
        }

        public SaveResponse Update(TranslationUpdateRequest request)
        {
            if (request.Translations == null)
                throw new ArgumentNullException("translations");

            var translations = List(new TranslationListRequest
            {
                SourceLanguageID = request.TargetLanguageID,
            }).Entities.ToDictionary(x => x.Key, x => x.CustomText);

            foreach (var item in request.Translations)
                translations[item.Key] = item.Value;

            var result = new SortedDictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            foreach (var pair in translations)
                if (!pair.Value.IsEmptyOrNull())
                    result.Add(pair.Key, pair.Value);

            string json = JSON.StringifyIndented(result, indentation: 2);

            var textsFilePath = GetUserTextsFilePath(request.TargetLanguageID);
            Directory.CreateDirectory(Path.GetDirectoryName(textsFilePath));
            File.WriteAllText(textsFilePath, json);

            var localTextRegistry = Dependency.Resolve<ILocalTextRegistry>();
            (localTextRegistry as IRemoveAll)?.RemoveAll();
            Startup.InitializeLocalTexts(localTextRegistry, Dependency.Resolve<IWebHostEnvironment>());

            TwoLevelCache.ExpireGroupItems(UserRow.Fields.GenerationKey);
            DynamicScriptManager.Reset();

            return new SaveResponse();
        }
    }
}