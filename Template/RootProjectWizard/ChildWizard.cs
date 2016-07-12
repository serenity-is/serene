using EnvDTE;
using Microsoft.VisualStudio.ComponentModelHost;
using Microsoft.VisualStudio.TemplateWizard;
using NuGet.VisualStudio;
using System;
using System.Collections.Generic;
using System.Data.SqlLocalDb;
using System.Runtime.InteropServices;
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

            if (!replacementsDictionary.TryGetValue("$wizarddata$", out wizardData))
                wizardData = null;
        }

        public void BeforeOpeningFile(EnvDTE.ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(EnvDTE.Project project)
        {
            if (!string.IsNullOrEmpty(wizardData))
            {
                var packageInstaller = componentModel.GetService<IVsPackageInstaller>();
                var packageQuery = componentModel.GetService<IVsPackageInstallerServices>();
                var data = XElement.Parse(wizardData);
                XNamespace ns = "http://schemas.microsoft.com/developer/vstemplate/2005";
                foreach (var el in data.Descendants(ns + "installPackage"))
                {
                    var id = el.Attribute("id").Value;
                    if (!packageQuery.IsPackageInstalled(project, id))
                    {
                        var ver = el.Attribute("version").Value;
                        project.DTE.StatusBar.Text = "Installing NuGet Package: " + id + " " + ver;
                        packageInstaller.InstallPackage((string)null, project, id, ver, false);
                    }
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
