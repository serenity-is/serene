using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

namespace Build
{
    partial class Program
    {
        static void UpdateSerenityPackages()
        {
            foreach (var package in SerenityPackagesToUpdate)
            {
                if (StartProcess("dotnet", "add package " + package,
                        Path.GetDirectoryName(ProjectFile)) != 0)
                    ExitWithError("Error while updating package " + package);
            }

            var projectContent = File.ReadAllText(ProjectFile);
            var scriptsVersion = ParsePackages(ProjectFile)
                .Where(x => x.Item1 == "Serenity.Scripts").First().Item2;

            var replacedContent = Regex.Replace(projectContent,
                @"(PackageReference\s*Include=\""Serenity\.Net\.Web\""\s*Version\s*\=\s*\"")([0-9.]*)(\"")",
                "${1}" + scriptsVersion + "$3");

            if (replacedContent != projectContent)
                File.WriteAllText(ProjectFile, replacedContent);
        }
    }
}