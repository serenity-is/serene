using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Xml.Linq;

namespace Build
{
    partial class Program
    {
        static void ConvertToTemplateParams(string path)
        {
            var content = File.ReadAllText(path);
            if (content.IndexOf(ProjectId) >= 0)
            {
                content = content.Replace(@$"{ProjectId}.Core\", @"$ext_projectname$.Web\");
                content = content.Replace(@$"{ProjectId}.Web\", @"$ext_projectname$.Web\");
                content = content.Replace(@$"\{ProjectId}", @"\$ext_projectname$");
                content = content.Replace(@$"{ProjectId}\", @"$ext_projectname$\");
                content = content.Replace(@$"{ProjectId}.Core", @"$ext_safeprojectname$.Web");
                content = content.Replace(ProjectId, "$ext_safeprojectname$");
                File.WriteAllText(path, content, UTF8Bom);
            }
        }

        static void PatchTemplateAndCopyFiles(string csproj, string targetPath, HashSet<string> skipFiles)
        {
            List<string> fileList;
            var xml = XElement.Parse(File.ReadAllText(csproj));

            var vsTemplate = Path.ChangeExtension(csproj, ".vstemplate");
            var rootDir = Path.GetDirectoryName(csproj);
            fileList = Directory.GetFiles(rootDir, "*.*", SearchOption.AllDirectories)
                .Select(x => x[(rootDir.Length + 1)..])
                .Where(x => !ExcludeFiles.IsMatch(x) && (skipFiles == null || !skipFiles.Contains(x)))
                .OrderBy(x => x, StringComparer.InvariantCultureIgnoreCase)
                .ToList();

            var xv = XElement.Parse(File.ReadAllText(vsTemplate));
            XNamespace ns = "http://schemas.microsoft.com/developer/vstemplate/2005";
            var project = xv.Descendants(ns + "Project").First();
            project.Elements().Remove();
            var byFolder = new Dictionary<string, XElement>();

            var copySourceRoot = Path.GetDirectoryName(csproj);

            foreach (var file in fileList)
            {
                var parts = file.Split(new char[] { '\\' });
                XElement folder = project;
                string f = "";
                for (var i = 0; i < parts.Length - 1; i++)
                {
                    if (f.Length > 0)
                        f += "\\";
                    f += parts[i];

                    if (!byFolder.ContainsKey(f))
                    {
                        var newFolder = new XElement(ns + "Folder");
                        newFolder.SetAttributeValue("Name", parts[i]);
                        newFolder.SetAttributeValue("TargetFolderName", parts[i]);
                        folder.Add(newFolder);
                        byFolder[f] = newFolder;
                        folder = newFolder;
                    }
                    else
                        folder = byFolder[f];
                }

                if (file.EndsWith(@"\"))
                    continue;

                var item = new XElement(ns + "ProjectItem");
                var extension = (Path.GetExtension(file) ?? "").ToLowerInvariant();
                bool replaceParameters = ReplaceParamsInExtensions.Contains(extension);

                item.SetAttributeValue("ReplaceParameters", replaceParameters ? "true" : "false");
                item.SetAttributeValue("TargetFileName", parts[parts.Length - 1]
                    .Replace(ProjectId, "$ext_projectname$"));
                if (file == "Welcome.htm")
                    item.SetAttributeValue("OpenInWebBrowser", "true");
                item.SetValue(parts[parts.Length - 1]);
                folder.Add(item);

                var targetFile = Path.Combine(targetPath, file);
                Directory.CreateDirectory(Path.GetDirectoryName(targetFile));

                string sourcePath = file;
                sourcePath = Path.Combine(copySourceRoot, sourcePath);
                File.Copy(sourcePath, targetFile);

                if (replaceParameters)
                    ConvertToTemplateParams(targetFile);
            }

            File.WriteAllText(vsTemplate, xv.ToString(SaveOptions.OmitDuplicateNamespaces));
            File.Copy(vsTemplate, Path.Combine(targetPath, Path.GetFileName(vsTemplate)));

            foreach (var z in xml.Descendants("PackageReference").Where(x => 
                x.Attribute("Condition") != null &&
                x.Attribute("Condition").Value != null &&
                x.Attribute("Condition").Value.IndexOf("Serenity.Net") >= 0).ToList())
            {
                z.Attribute("Condition").Remove();
            }

            foreach (var z in xml.Descendants("ItemGroup").Where(x => 
                x.Attribute("Condition") != null &&
                x.Attribute("Condition").Value != null &&
                x.Attribute("Condition").Value.IndexOf("Serenity.Net") >= 0).ToList())
            {
                z.Remove();
            }

            var targetProj = Path.Combine(targetPath, Path.GetFileName(csproj));
            File.WriteAllText(targetProj,
                xml.ToString(SaveOptions.OmitDuplicateNamespaces)
                  .Replace("http://localhost:55555/", "")
                  .Replace(
                    "<DevelopmentServerPort>55556</DevelopmentServerPort>", 
                    "<DevelopmentServerPort></DevelopmentServerPort>"));
            ConvertToTemplateParams(targetProj);
        }
    }
}