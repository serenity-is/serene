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

            if (StartProcess("dotnet", "restore " + Path.GetFileName(ProjectFile), ProjectFolder) != 0)
                ExitWithError("Error while restoring " + ProjectFile);

            if (StartProcess("dotnet", "tool update sergen", ProjectFolder) != 0)
                ExitWithError("Error while sergen tool updating " + ProjectFile);

            if (File.Exists(SerenitySergenExe))
            {
                if (StartProcess(SerenitySergenExe, "restore", ProjectFolder) != 0)
                    ExitWithError("Error while sergen restoring " + ProjectFile);
            }
            else if (StartProcess("dotnet", "sergen restore", ProjectFolder) != 0)
                ExitWithError("Error while sergen restoring " + ProjectFile);

            Directory.CreateDirectory(VSIXAssetsFolder);
            var packageContentFiles = GetPackageContentFiles(projectPackages, dependencies: true);

            CleanDirectory(TemplateTempZipDir, ensure: true);
            var copyTemplateRoot = Path.Combine(TemplateTempZipDir, ProjectFolderName);
            CleanDirectory(copyTemplateRoot, ensure: true);
            PatchTemplateAndCopyFiles(ProjectFile, copyTemplateRoot, packageContentFiles);

            File.Copy(Path.Combine(Root, ProjectId, "SerenityLogo.ico"),
                Path.Combine(TemplateTempZipDir, "SerenityLogo.ico"));

            File.Copy(Path.Combine(Root, ProjectId, ProjectId + "Core.vstemplate"),
                Path.Combine(TemplateTempZipDir, ProjectId + "Core.vstemplate"));

            var templateZip = Path.Combine(VSIXProjectTemplates, TemplateId + ".Template.zip");
            if (File.Exists(templateZip))
                File.Delete(templateZip);
            Directory.CreateDirectory(VSIXProjectTemplates);
            ZipFile.CreateFromDirectory(TemplateTempZipDir, templateZip);
        }
    }
}