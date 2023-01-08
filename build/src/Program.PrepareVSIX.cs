using System.IO;

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
        }
    }
}