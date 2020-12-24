using System;
using System.Collections.Generic;
using System.IO;

namespace Build
{
    partial class Program
    {
        static string ProPackagesFolder => Path.Combine(Root, "pro-packages");
        static string ProPackagesTempZipDir => Path.Combine(TemporaryFilesRoot, "pro-packages-zip");

        static void CopyProPackagesToTempZipDir(List<Tuple<string, string>> packages)
        {
            CleanDirectory(ProPackagesTempZipDir, ensure: true);

            foreach (var pair in packages)
            {
                if (pair.Item1.StartsWith("Serenity.Pro.", StringComparison.OrdinalIgnoreCase))
                {
                    var idLower = pair.Item1.ToLower(System.Globalization.CultureInfo.InvariantCulture);
                    var sourceFolder = Path.Combine(Path.Combine(ProPackagesFolder, idLower), pair.Item2);
                    var targetFolder = Path.Combine(Path.Combine(ProPackagesTempZipDir, idLower), pair.Item2);
                    
                    Directory.CreateDirectory(targetFolder);

                    foreach (var file in Directory.GetFiles(sourceFolder))
                    {
                        File.Copy(file, Path.Combine(targetFolder, Path.GetFileName(file)));
                    }
                }
            }
        }
    }
}
