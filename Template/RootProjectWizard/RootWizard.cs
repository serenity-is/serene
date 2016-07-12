using Microsoft.VisualStudio.ComponentModelHost;
using Microsoft.VisualStudio.TemplateWizard;
using NuGet.VisualStudio;
using System;
using System.Collections.Generic;

namespace RootProjectWizard
{
    public class RootWizard : IWizard
    {
        public static Dictionary<string, string> GlobalDictionary = new Dictionary<string, string>();


        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            GlobalDictionary["$ext_safeprojectname$"] = replacementsDictionary["$safeprojectname$"];
            GlobalDictionary["$ext_projectname$"] = replacementsDictionary["$projectname$"];
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
