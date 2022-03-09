using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Xml.Linq;

namespace Build
{
    partial class Program
    {
        static string Root { get; set; }
        static bool HasProPackages { get; set; }

        static string ProjectId => HasProPackages ? "StartSharp" : "Serene";
        static string ProjectFolderName => ProjectId + ".Web";
        static string ProjectFolder => Path.Combine(Root, ProjectId, ProjectFolderName);
        static string ProjectFile => Path.Combine(ProjectFolder, ProjectFolderName + ".csproj");
        static string SergenJsonFile => Path.Combine(ProjectFolder, "sergen.json");
        static string TemplateId => ProjectId == "StartSharp" ? "StartCore" : "SereneCore";
        static string VSIXTemplateFolder => Path.Combine(Root, "Template");
        static string VSIXTemplateProject => Path.Combine(VSIXTemplateProject, ProjectId + ".Template.csproj");
        static string VSIXAssetsFolder => Path.Combine(VSIXTemplateFolder, "Assets");
        static string VSIXManifestFile => Path.Combine(VSIXTemplateFolder, "source.extension.vsixmanifest");
		static string VSIXManifestFile2019 => Path.Combine(VSIXTemplateFolder, "vs2019", "extension.vsixmanifest");
        static string VSIXProjectTemplates => Path.Combine(VSIXTemplateFolder, "ProjectTemplates");
        static string TemporaryFilesRoot => Path.Combine(Root, "Template", "obj");
        static string TemplateTempZipDir => Path.Combine(TemporaryFilesRoot, ProjectId + "Core.Template");
        static string SerenitySergenExe => Path.Combine(Root, "Serenity", "src", "Serenity.Net.CodeGenerator", "bin", "sergen.exe");

        static string SerenityVersion { get; set; }
        static readonly UTF8Encoding UTF8Bom = new UTF8Encoding(true);

        static bool IsCommonPackage(string packageId)
        {
            return packageId.StartsWith("Serenity.", StringComparison.OrdinalIgnoreCase) &&
                !IsProPackage(packageId) &&
                (string.Equals(packageId, "Serenity.Extensions", StringComparison.OrdinalIgnoreCase) ||
                 packageId.StartsWith("Serenity.Common", StringComparison.OrdinalIgnoreCase) ||
                 packageId.StartsWith("Serenity.Demo", StringComparison.OrdinalIgnoreCase));
        }

        static void Main(string[] args)
        {
            var target = args != null && args.Length > 1 ? args[1] : "vsix";

            DetermineRoot();
            HasProPackages = Directory.Exists(Path.Combine(Root, "StartSharp"));
            Clean();

            if (target == "vsix")
                PrepareVSIX();
        }

        static List<Tuple<string, string>> ParsePackages(string path)
        {
            var xml = XElement.Parse(File.ReadAllText(path));
            var pkg = new List<Tuple<string, string>>();
            foreach (var x in xml.Descendants("PackageReference"))
                pkg.Add(new Tuple<string, string>(x.Attribute("Include").Value, x.Attribute("Version").Value));
            return pkg;
        }

        static void DetermineRoot()
        {
            Root = Environment.CurrentDirectory;

            if (new[] { "debug", "release" }.Contains(
                    Path.GetFileName(Root).ToLowerInvariant()))
                Root = Path.GetDirectoryName(Root);

            if (Path.GetFileName(Root).ToLowerInvariant() == "bin")
                Root = Path.GetDirectoryName(Root);

            if (Path.GetFileName(Root).ToLowerInvariant() == "build")
                Root = Path.GetDirectoryName(Root);
        }

        static void CleanDirectory(string path, bool ensure = false)
        {
            path = Path.Combine(Root, path);
            if (!Directory.Exists(path))
            {
                if (ensure)
                    Directory.CreateDirectory(path);
                return;
            }

            foreach (var file in Directory.GetFiles(path, "*.*", SearchOption.AllDirectories))
            {
                try
                {
                    File.Delete(file);
                }
                catch
                {
                }
            }

            foreach (var dir in Directory.GetDirectories(path, "*.*", SearchOption.AllDirectories))
            {
                try
                {
                    Directory.Delete(dir);
                }
                catch
                {
                }
            }
        }

        static void Clean()
        {
            CleanDirectory("Template/ProjectTemplates", ensure: true);
            CleanDirectory(TemplateTempZipDir, ensure: true);
            CleanDirectory("Template/bin/");
            CleanDirectory("Template/RootProjectWizard/obj/");
        }

        static void ExitWithError(string error, int errorCode = 1)
        {
            Console.WriteLine(error);
            Environment.Exit(1);
        }

        static int StartProcess(string name, string arguments, string workingDirectory)
        {
            var info = new ProcessStartInfo(name)
            {
                WorkingDirectory = workingDirectory
            };
            if (arguments != null)
                info.Arguments = arguments;

            var process = Process.Start(info);
            process.WaitForExit();
            var exitCode = process.ExitCode;
            return exitCode;
        }
    }
}