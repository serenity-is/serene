using NuGet.Common;
using System.IO;
using System.IO.Compression;

namespace Build
{
    partial class Program
    {
        static void PrepareVSIX()
        {
            UpdateSerenityPackages();
            UpdateCommonPackages();
            if (HasProPackages)
                UpdateProPackages();

            if (StartProcess("dotnet", "restore", Root) != 0)
                ExitWithError("Error while restoring " + ProjectFile);

            if (StartProcess("dotnet", "build -v minimal -c Release " + ProjectId + ".sln", Root) != 0)
                ExitWithError("Error while building solution!");

            var projectPackages = ParsePackages(ProjectFile);

            CleanDirectory(TemporaryFilesRoot, ensure: true);

            var initialVersion = PatchVSIXManifest(projectPackages);
            SetInitialVersionInSergenJson(initialVersion);
            SetTemplatesPackageVersion(initialVersion);

            if (StartProcess("dotnet", "restore " + Path.GetFileName(ProjectFile), ProjectFolder) != 0)
                ExitWithError("Error while restoring " + ProjectFile);

            if (StartProcess("dotnet", "tool update sergen", ProjectFolder) != 0)
                ExitWithError("Error while sergen tool updating " + ProjectFile);

            var packageContentFiles = GetPackageContentFiles(projectPackages, dependencies: true);

            CleanDirectory(TemplateZipFolder, ensure: true);
            CleanDirectory(TemplateWebFolder, ensure: true);
            PatchTemplateAndCopyFiles(ProjectFile, TemplateWebFolder, packageContentFiles);

            File.Copy(Path.Combine(VSIXTemplateFolder, "SerenityLogo.ico"),
                Path.Combine(TemplateZipFolder, "SerenityLogo.ico"));

            File.Copy(Path.Combine(VSIXTemplateFolder, ProjectId + ".vstemplate"),
                Path.Combine(TemplateZipFolder, ProjectId + ".vstemplate"));

            PatchPackageJsonCopy();
            File.Copy(PackageJsonCopy, Path.Combine(TemplateWebFolder, Path.GetFileName(PackageJsonCopy)), overwrite: true);
            File.Copy(PackageJsonCopyLock, Path.Combine(TemplateWebFolder, Path.GetFileName(PackageJsonCopyLock)), overwrite: true);

            var templateZip = Path.Combine(VSIXProjectTemplates, TemplateId + ".Template.zip");
            if (File.Exists(templateZip))
                File.Delete(templateZip);
            Directory.CreateDirectory(VSIXProjectTemplates);
            ZipFile.CreateFromDirectory(TemplateZipFolder, templateZip);
        }
    }
}