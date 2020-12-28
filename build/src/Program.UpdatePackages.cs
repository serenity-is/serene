using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;

namespace Build
{
    partial class Program
    {
        private static bool PatchPackageVersion(string packageId, string version)
        {
            var projectContent = File.ReadAllText(ProjectFile);

            var replacedContent = Regex.Replace(projectContent,
                @"(PackageReference\s*Include=\""" + packageId.Replace(".", @"\.") + 
                    @"\""\s*Version\s*\=\s*\"")([0-9.]*)(\"")",
                "${1}" + version + "$3");

            if (replacedContent != projectContent)
            {
                File.WriteAllText(ProjectFile, replacedContent);
                return true;
            }

            return false;
        }

        static IEnumerable<string> SerenityPackagesWithSameVersion
        {
            get
            {
                yield return "Serenity.Scripts";
                yield return "Serenity.Net.Web";
            }
        }

        static IEnumerable<string> SerenityPackagesWithUniqueVersion
        {
            get
            {
                yield return "Serenity.Assets";
            }
        }

        static void UpdateSerenityPackages()
        {
            var serenityWebVersion = GetLatestVersionOf("Serenity.Net.Web");
            if (serenityWebVersion != null)
            {
                foreach (var package in SerenityPackagesWithSameVersion)
                    PatchPackageVersion(package, serenityWebVersion.ToString());
            }

            foreach (var package in SerenityPackagesWithUniqueVersion)
            {
                var pkgVer = GetLatestVersionOf(package);
                if (pkgVer != null)
                    PatchPackageVersion(package, pkgVer.ToString());
            }
        }

        static void UpdateCommonPackages()
        {
            var packages = ParsePackages(ProjectFile);
            foreach (var package in packages)
            {
                if (IsCommonPackage(package.Item1))
                {
                    var cmnVer = GetLatestVersionOf(package.Item1);
                    if (cmnVer != null)
                        PatchPackageVersion(package.Item1, cmnVer.ToString());
                }
            }
        }
    }
}