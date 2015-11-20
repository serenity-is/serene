using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;
using System.Data.SqlLocalDb;

namespace RootProjectWizard
{
    public class ChildWizard : IWizard 
    {
        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
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
        }

        public void BeforeOpeningFile(EnvDTE.ProjectItem projectItem)
        {
        }

        public void ProjectFinishedGenerating(EnvDTE.Project project)
        {
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
