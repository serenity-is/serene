using System;

namespace Build
{
    partial class Program
    {
        static bool IsProPackage(string packageId)
        {
            return packageId.StartsWith("Serenity.", StringComparison.OrdinalIgnoreCase) &&
                (packageId.StartsWith("Serenity.Pro", StringComparison.OrdinalIgnoreCase) ||
                 packageId.Contains("Advanced", StringComparison.OrdinalIgnoreCase) ||
                 packageId.Contains("Premium", StringComparison.OrdinalIgnoreCase));
        }

        static void UpdateProPackages()
        {
            if (!HasProPackages)
                return;

            var packages = ParsePackages(ProjectFile);
            foreach (var package in packages)
            {
                if (IsProPackage(package.Item1))
                {
                    var proVer = GetLatestVersionOf(package.Item1);
                    if (proVer != null)
                        PatchPackageVersion(package.Item1, proVer.ToString());
                }
            }
        }
    }
}
