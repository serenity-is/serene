using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Xml.Linq;

namespace Build
{
    partial class Program
    {
        static string PatchVSIXManifest(List<Tuple<string, string>> packages)
        {
            var hash = new HashSet<Tuple<string, string>>();
            foreach (var x in packages)
                hash.Add(x);

            var allPackages = new List<Tuple<string, string>>();
            allPackages.AddRange(hash);
            allPackages.Sort((x, y) => x.Item1.CompareTo(y.Item1));

            if (StartProcess("git", "restore " + VSIXManifestFile, Root) != 0)
                ExitWithError("Error while restoring " + ProjectFile);

            var xm = XElement.Parse(File.ReadAllText(VSIXManifestFile));
            var ver = allPackages.First(x => x.Item1.StartsWith("Serenity.Net")).Item2;
            var identity = xm.Descendants(((XNamespace)"http://schemas.microsoft.com/developer/vsx-schema/2011") + "Identity").First();
            var old = identity.Attribute("Version").Value;
            if (old != null && old.StartsWith(ver + "."))
                ver = ver + "." + (int.Parse(old.Substring(ver.Length + 1)) + 1);
            else
                ver += ".0";
            identity.SetAttributeValue("Version", ver);
            File.WriteAllText(VSIXManifestFile, xm.ToString(SaveOptions.OmitDuplicateNamespaces));
            return ver;
        }

        static void SetInitialVersionInSergenJson(string templateVersion)
        {
            var root = JObject.Parse(File.ReadAllText(SergenJsonFile));
            var upgradeInfo = root["UpgradeInfo"] as JObject;
            if (upgradeInfo == null)
            {
                upgradeInfo = new JObject();
                root["UpgradeInfo"] = upgradeInfo;
                upgradeInfo["InitialType"] = HasProPackages ? "Premium" : "Community";
            }

            upgradeInfo["InitialVersion"] = templateVersion;
            File.WriteAllText(SergenJsonFile, root.ToString());
        }

        static void SetTemplatesPackageVersion(string templateVersion)
        {
            var xm = XElement.Parse(File.ReadAllText(TemplatesProject));
            var packageVersion = xm.Descendants("PackageVersion").First();
            if (packageVersion == null)
                ExitWithError("Can't find PackageVersion element in: " + TemplatesProject);

            if (packageVersion.Value == templateVersion)
                return;

            packageVersion.Value = templateVersion;
            File.WriteAllText(TemplatesProject, xm.ToString(SaveOptions.OmitDuplicateNamespaces));
        }
    }
}