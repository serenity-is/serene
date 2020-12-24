using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Xml.Linq;

namespace Build
{
    partial class Program
    {
        static void PatchVSIXManifest(List<Tuple<string, string>> packages)
        {
            var hash = new HashSet<Tuple<string, string>>();
            foreach (var x in packages)
                hash.Add(x);

            var allPackages = new List<Tuple<string, string>>();
            allPackages.AddRange(hash);
            allPackages.Sort((x, y) => x.Item1.CompareTo(y.Item1));

            var xm = XElement.Parse(File.ReadAllText(VSIXManifestFile));
            var ver = allPackages.First(x => x.Item1.StartsWith("Serenity.Net")).Item2;
            SerenityVersion = ver;
            var identity = xm.Descendants(((XNamespace)"http://schemas.microsoft.com/developer/vsx-schema/2011") + "Identity").First();
            var old = identity.Attribute("Version").Value;
            if (old != null && old.StartsWith(ver + "."))
                ver = ver + "." + (int.Parse(old.Substring(ver.Length + 1)) + 1);
            else
                ver += ".0";
            identity.SetAttributeValue("Version", ver);
            File.WriteAllText(VSIXManifestFile, xm.ToString(SaveOptions.OmitDuplicateNamespaces));
        }
    }
}