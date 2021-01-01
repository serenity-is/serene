using System;
using System.Collections.Generic;
using System.IO;
using System.Xml.Linq;

namespace Build
{
    partial class Program
    {
        private static HashSet<string> GetPackageContentFiles(IEnumerable<Tuple<string, string>> packages,
            bool dependencies = true)
        {
            var contentFiles = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

            var profilePath = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);
            var nugetCache = Path.Combine(profilePath, ".nuget", "packages");
            var myPackages = Path.Combine(profilePath, ".nuget", "my-packages");
            XNamespace nuspecNS = "http://schemas.microsoft.com/packaging/2013/05/nuspec.xsd";

            var processed = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

            void scanPackage(string id, string ver)
            {
                var key = id + "." + ver;
                if (processed.Contains(key))
                    return;

                processed.Add(key);
                id = id.ToLowerInvariant();

                var contentFolder = Path.Combine(nugetCache, id, ver, "content");
                if (!Directory.Exists(contentFolder))
                    contentFolder = Path.Combine(myPackages, id, ver, "content");
                
                if (!Directory.Exists(contentFolder) && id == "serenity.assets")
                {
                    contentFolder = Path.Combine(Root, "Serenity", "src", "Serenity.Assets");
                    if (Directory.Exists(contentFolder))
                    {
                        foreach (var subfolder in new string[] { "Content", "Scripts" })
                            if (Directory.Exists(Path.Combine(contentFolder, subfolder)))
                            {
                                foreach (var f in Directory.GetFiles(Path.Combine(contentFolder, subfolder),
                                    "*.*", SearchOption.AllDirectories))
                                {
                                    contentFiles.Add(@"wwwroot\" + f[(contentFolder.Length + 1)..]);
                                }
                            }
                    }
                }
                else if (Directory.Exists(contentFolder))
                {
                    foreach (var f in Directory.GetFiles(contentFolder,
                        "*.*", SearchOption.AllDirectories))
                    {
                        contentFiles.Add(@"wwwroot\" + f[(contentFolder.Length + 1)..]);
                    }
                }
                
                var nuspec = Path.Combine(nugetCache, id, ver, id + ".nuspec");
                if (!Directory.Exists(nuspec))
                    nuspec = Path.Combine(myPackages, id, ver, id + ".nuspec");

                if (File.Exists(nuspec))
                {
                    var xml = XElement.Parse(File.ReadAllText(nuspec));
                    foreach (var x in xml.Descendants(nuspecNS + "dependency"))
                    {
                        var packageId = x.Attribute("id").Value;
                        var packageVer = x.Attribute("version").Value;
                        if (packageVer.Length > 1 && packageVer[0] == '[')
                            packageVer = packageVer.Substring(1, packageVer.Length - 2);
                        scanPackage(packageId, packageVer);
                    }
                }
            }

            foreach (var package in packages)
            {
                scanPackage(package.Item1, package.Item2);
            }

            return contentFiles;
        }
    }
}
