using EnvDTE;
using Microsoft.VisualStudio.ComponentModelHost;
using Microsoft.VisualStudio.TemplateWizard;
using NuGet.VisualStudio;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data.SqlLocalDb;
using System.Diagnostics;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Text;
using System.Windows.Forms;
using System.Xml.Linq;

namespace RootProjectWizard
{
    public class ChildWizard : IWizard 
    {
        private DTE dteObject;
        private Microsoft.VisualStudio.OLE.Interop.IServiceProvider serviceProvider;
        private static Guid IUnknownGuid = new Guid("{00000000-0000-0000-C000-000000000046}");
        private IComponentModel componentModel;
        private string wizardData;
        private bool isDotNetCore;

        private static object GetObjectFromNativeUnknown(IntPtr nativeUnknown)
        {
            object result = null;
            if (nativeUnknown != IntPtr.Zero)
            {
                try
                {
                    result = Marshal.GetObjectForIUnknown(nativeUnknown);
                }
                finally
                {
                    Marshal.Release(nativeUnknown);
                }
            }
            return result;
        }

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            dteObject = (DTE)automationObject;

            serviceProvider = (Microsoft.VisualStudio.OLE.Interop.IServiceProvider)this.dteObject;

            IntPtr zero4 = IntPtr.Zero;
            Guid guid = typeof(SComponentModel).GUID;
            serviceProvider.QueryService(ref guid, ref IUnknownGuid, out zero4);
            componentModel = (IComponentModel)GetObjectFromNativeUnknown(zero4);

            replacementsDictionary["$ext_safeprojectname$"] = RootWizard.GlobalDictionary["$ext_safeprojectname$"];
            replacementsDictionary["$ext_projectname$"] = RootWizard.GlobalDictionary["$ext_projectname$"];

            try
            {
                string localDBInstance = "v11.0";
                var localDBInstances = SqlLocalDbApi.GetInstanceNames();
                if (localDBInstances.IndexOf("MSSqlLocalDB") >= 0)
                    localDBInstance = "MSSqlLocalDB";
                else if (localDBInstances.IndexOf("v12.0") >= 0)
                    localDBInstance = "v12.0";
                else if (localDBInstances.IndexOf("v11.0") >= 0)
                    localDBInstance = "v11.0";
                else if (localDBInstances.Count > 0)
                    localDBInstance = localDBInstances[0];

                replacementsDictionary["connectionString=\"Data Source=(LocalDb)\\v11.0;"] =
                    "connectionString=\"Data Source=(LocalDb)\\" + localDBInstance + ";";
                replacementsDictionary["connectionString=\"Data Source=(LocalDb)\\MsSqlLocalDB;"] =
                    "connectionString=\"Data Source=(LocalDb)\\" + localDBInstance + ";";
            }
            catch 
            {
            }

            if (!replacementsDictionary.TryGetValue("$wizarddata$", out wizardData))
                wizardData = null;
        }

        public void BeforeOpeningFile(EnvDTE.ProjectItem projectItem)
        {
        }

        public IEnumerable<Tuple<string, ProjectItem>> Recurse(string path, ProjectItems i)
        {
            if (i == null)
                yield break;

            path = string.IsNullOrEmpty(path) ? "" : path + @"\";
            foreach (ProjectItem j in i)
            {
                var path2 = path + j.Name;
                yield return new Tuple<string, ProjectItem>(path2, j);
                foreach (var k in Recurse(path2, j.ProjectItems))
                    yield return k;
            }
        }

        XNamespace ns = "http://schemas.microsoft.com/developer/vstemplate/2005";

        public void ProjectFinishedGenerating(EnvDTE.Project project)
        {
            isDotNetCore = File.Exists(Path.Combine(Path.GetDirectoryName(project.FullName), "appsettings.json"));
            project.DTE.StatusBar.Text = isDotNetCore ? "ASP.NET Core Project" : "ASP.NET MVC Project";

            if (!string.IsNullOrEmpty(wizardData))
            {
                var data = XElement.Parse("<data>" + wizardData + "</data>");

                try
                {
                    project.DTE.StatusBar.Text = "Removing excluded feature files";
                    RemoveExcludedFiles(project, data);
                    project.DTE.StatusBar.Text = "Processing feature conditionals";
                    PreprocessConditionals(project, data);
                }
                catch (Exception ex)
                {
                    MessageBox.Show("An error occured while configuring features\r\n\r\n" +
                        ex.ToString());
                }

                var packageInstaller = componentModel.GetService<IVsPackageInstaller>();
                var packageQuery = componentModel.GetService<IVsPackageInstallerServices>();
                foreach (var el in data.Descendants(ns + "installPackage"))
                {
                    var id = el.Attribute("id").Value;
                    try
                    {
                        if (!packageQuery.IsPackageInstalled(project, id))
                        {
                            var ver = el.Attribute("version").Value;
                            project.DTE.StatusBar.Text = "Installing NuGet Package: " + id + " " + ver;
                            packageInstaller.InstallPackage((string)null, project, id, ver, false);
                        }
                    }
                    catch (Exception ex)
                    {
                        MessageBox.Show("An error occured while installing package: " + id + "\r\n" + 
                            "Your project might be incomplete.\r\n\r\n", ex.ToString());
                    }
                }
            }

            if (isDotNetCore)
            {
                try
                {
                    project.DTE.StatusBar.Text = "Running DotNet Restore...";
                    System.Diagnostics.Process.Start(new ProcessStartInfo
                    {
                        FileName = "dotnet",
                        Arguments = "restore",
                        WorkingDirectory = System.IO.Path.GetDirectoryName(project.FullName)
                    }).WaitForExit(120000);

                    project.DTE.StatusBar.Text = "Running DotNet Tool Restore...";
                    System.Diagnostics.Process.Start(new ProcessStartInfo
                    {
                        FileName = "dotnet",
                        Arguments = "tool restore",
                        WorkingDirectory = System.IO.Path.GetDirectoryName(project.FullName)
                    }).WaitForExit(120000);

                    project.DTE.StatusBar.Text = "Running DotNet Sergen Restore...";
                    System.Diagnostics.Process.Start(new ProcessStartInfo
                    {
                        FileName = "dotnet",
                        Arguments = "sergen restore",
                        WorkingDirectory = System.IO.Path.GetDirectoryName(project.FullName)
                    }).WaitForExit(120000);
                }
                catch (Exception ex)
                {
                    MessageBox.Show(ex.ToString());
                }
            }
        }

        private void PreprocessConditionals(EnvDTE.Project project, XElement data)
        {
            var elConditionals = data.Element(ns + "conditionals");
            var conditionals = GetPathMatcher(elConditionals);

            foreach (var item in Recurse("", project.ProjectItems).ToList())
            {
                var path = item.Item1;
                if (string.IsNullOrEmpty(path))
                    continue;

                if (conditionals.IsMatch(path))
                {
                    PreprocessConditional(project, (string)item.Item2.Properties.Item("FullPath").Value);
                }
            }
        }

        private void PreprocessConditional(EnvDTE.Project project, string fullPath)
        {
            if (!System.IO.File.Exists(fullPath))
                return;

            project.DTE.StatusBar.Text = "Processing Conditionals in File: " + fullPath;
            var lines = new List<string>(System.IO.File.ReadAllLines(fullPath));
            var ifCSStart = "//<if:";
            var ifCSElse = "//<else>";
            var ifXMLStart = "<!--<if:";
            var ifXMLElse = "<!--<else>-->";

            while (true)
            {
                var start = lines.FindIndex(x =>
                    x.TrimStart().StartsWith(ifCSStart) ||
                    x.TrimStart().StartsWith(ifXMLStart));

                if (start < 0)
                    break;

                var line = lines[start];
                lines.RemoveAt(start);

                string feature;
                bool xml = line.TrimStart().StartsWith(ifXMLStart);
                int end;
                int eelse;
                if (xml)
                {
                    line = line.TrimStart().Substring(ifXMLStart.Length);

                    var endidx = line.LastIndexOf(">-->");
                    if (endidx < 0)
                        break;

                    feature = line.Substring(0, endidx).Trim();
                    end = lines.FindIndex(start, x => x.Trim() == "<!--</if:" + feature + ">-->");
                    if (end < 0)
                        break;

                    eelse = lines.FindIndex(start, x => x.Trim() == ifXMLElse);
                    if (eelse > end)
                        eelse = -1;
                }
                else
                {
                    line = line.TrimStart().Substring(ifCSStart.Length);

                    var endidx = line.LastIndexOf(">");
                    if (endidx < 0)
                        break;

                    feature = line.Substring(0, endidx).Trim();
                    end = lines.FindIndex(start, x => x.Trim() == "//</if:" + feature + ">");
                    if (end < 0)
                        break;

                    eelse = lines.FindIndex(start, x => x.Trim() == ifCSElse);
                    if (eelse > end)
                        eelse = -1;
                }

                lines.RemoveAt(end);

                if (!RootWizard.SelectedFeatures.Contains(feature))
                {
                    var z = end;
                    if (eelse >= 0)
                    {
                        lines.RemoveAt(eelse);
                        z = eelse;
                        for (var l = eelse; l < end - 1; l++)
                        {
                            var e = lines[l];
                            if (xml)
                            {
                                var cidx = e.IndexOf("<!--");
                                if (cidx >= 0)
                                {
                                    e = e.Substring(0, cidx) + e.Substring(cidx + 4);
                                    cidx = e.LastIndexOf("-->");
                                    if (cidx >= 0)
                                        e = e.Substring(0, cidx);
                                    lines[l] = e;
                                }
                            }
                            else
                            {
                                var cidx = e.IndexOf("//");
                                if (cidx >= 0)
                                    lines[l] = e.Substring(0, cidx) + e.Substring(cidx + 2);
                            }
                        }
                    }

                    for (var l = start; l < z; l++)
                        lines.RemoveAt(start);
                }
                else if (eelse >= 0)
                {
                    for (var l = eelse; l < end; l++)
                        lines.RemoveAt(eelse);
                }
            }

            System.IO.File.WriteAllLines(fullPath, lines, new UTF8Encoding(true));
        }

        private PathMatcher GetPathMatcher(XElement node)
        {
            var includes = node.Elements(ns + "files")
                .Where(x => x.Attribute("include") != null)
                .Select(x => x.Attribute("include").Value)
                .Where(x => x != null);

            var excludes = node.Elements(ns + "files")
                .Where(x => x.Attribute("exclude") != null)
                .Select(x => x.Attribute("exclude").Value)
                .Where(x => x != null);

            return new PathMatcher(includes, excludes);
        }

        private void RemoveExcludedFiles(EnvDTE.Project project, XElement data)
        {
            var selectedMatchers = new List<PathMatcher>();
            var unselectedMatchers = new List<PathMatcher>();
            var elFeatures = data.Elements(ns + "features");
            var elFeatureList = elFeatures.Elements(ns + "feature");
            foreach (var elFeature in elFeatureList)
            {
                var matcher = GetPathMatcher(elFeature);
                if (RootWizard.SelectedFeatures.Contains(elFeature.Attribute("key").Value))
                    selectedMatchers.Add(matcher);
                else
                    unselectedMatchers.Add(matcher);
            }

            var deleteList = new List<string>();
            foreach (var item in Recurse("", project.ProjectItems).ToList())
            {
                var path = item.Item1;
                if (string.IsNullOrEmpty(path))
                    continue;

                if (unselectedMatchers.Any(x => x.IsMatch(path)))
                {
                    if (!selectedMatchers.Any(x => x.IsMatch(path)))
                    {
                        project.DTE.StatusBar.Text = "Deleting Excluded Feature File: " + path;
                        if (isDotNetCore)
                        {
                            deleteList.Add(item.Item2.Properties.Item("FullPath").Value.ToString());
                        }
                        else
                        {
                            item.Item2.Delete();
                        }
                    }
                }
            }

            foreach (var name in deleteList)
            {
                try
                {
                    if (File.Exists(name))
                        File.Delete(name);
                    else if (Directory.Exists(name))
                        Directory.Delete(name, true);
                }
                catch
                {
                    project.DTE.StatusBar.Text = "Error deleting: " + name;
                }
            }
        }

        public void ProjectItemFinishedGenerating(EnvDTE.ProjectItem projectItem)
        {
        }

        public void RunFinished()
        {
        }

        public bool ShouldAddProjectItem(string filePath)
        {
            return true;
        }
    }
}
