using Microsoft.VisualStudio.TemplateWizard;
using System.Collections.Generic;
using System.Windows.Forms;
using System.Xml.Linq;

namespace RootProjectWizard
{
    public class RootWizard : IWizard
    {
        public static HashSet<string> SelectedFeatures = new HashSet<string>();
        public static Dictionary<string, string> GlobalDictionary = new Dictionary<string, string>();

        public void RunStarted(object automationObject, Dictionary<string, string> replacementsDictionary, WizardRunKind runKind, object[] customParams)
        {
            GlobalDictionary["$ext_safeprojectname$"] = replacementsDictionary["$safeprojectname$"];
            GlobalDictionary["$ext_projectname$"] = replacementsDictionary["$projectname$"];

            string wizardData;
            if (!replacementsDictionary.TryGetValue("$wizarddata$", out wizardData))
                wizardData = "";

            var data = XElement.Parse("<data>" + wizardData + "</data>");
            var dlg = new FeatureSelection();
            dlg.selfChange = 1;
            PopulateFeatureList(dlg.featureList, data);
            dlg.selfChange = 0;

            if (dlg.ShowDialog() != System.Windows.Forms.DialogResult.OK)
                throw new WizardCancelledException("The wizard has been cancelled by the user.");

            SelectedFeatures.Clear();
            foreach (FeatureCheckItem item in dlg.featureList.CheckedItems)
                SelectedFeatures.Add(item.Key);
        }

        private void PopulateFeatureList(CheckedListBox featureList, XElement data)
        {
            XNamespace ns = "http://schemas.microsoft.com/developer/vstemplate/2005";
            var elFeatures = data.Elements(ns + "features");
            var elFeatureList = elFeatures.Elements(ns + "feature");
            featureList.Items.Clear();
            foreach (var elFeature in elFeatureList)
            {
                var item = new FeatureCheckItem(elFeature.Attribute("key").Value, elFeature.Attribute("title").Value);
                foreach (var elDependency in elFeature.Elements(ns + "dependency"))
                    if (elDependency.Attribute("feature") != null)
                        item.FeatureDependencies.Add(elDependency.Attribute("feature").Value);

                featureList.Items.Add(item, true);
            }
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
