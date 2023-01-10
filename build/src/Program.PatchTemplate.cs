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
                content = content.Replace(@$"{ProjectId}.Web\", @"$ext_projectname$.Web\");
                content = content.Replace(@$"\{ProjectId}", @"\$ext_projectname$");
                content = content.Replace(@$"{ProjectId}\", @"$ext_projectname$\");
                content = content.Replace(@$"{ProjectId}.Web", @"$ext_safeprojectname$.Web");
                content = content.Replace(ProjectId, "$ext_safeprojectname$");
                File.WriteAllText(path, content, UTF8Bom);
            }
        }

        static readonly string[] conditionalStarts =
        {
            "<if:",
            "#if(",
            "#if (",
        };

        static void PatchTemplateAndCopyFiles(string csproj, string targetPath, HashSet<string> skipFiles)
        {
            List<string> fileList;
            var csprojXml = XElement.Parse(File.ReadAllText(csproj));

            var vsTemplateFile = Path.Combine(VSIXTemplateFolder, ProjectName + ".vstemplate");
            var rootDir = Path.GetDirectoryName(csproj);
            fileList = Directory.GetFiles(rootDir, "*.*", SearchOption.AllDirectories)
                .Select(x => x[(rootDir.Length + 1)..])
                .Where(x => !ExcludeFiles.IsMatch(x) && (skipFiles == null || !skipFiles.Contains(x)))
                .OrderBy(x => x, StringComparer.InvariantCultureIgnoreCase)
                .ToList();

            var vsTemplateXml = XElement.Parse(File.ReadAllText(vsTemplateFile));

            XNamespace ns = "http://schemas.microsoft.com/developer/vstemplate/2005";
            var conditionalsElement = vsTemplateXml.Descendants(ns + "conditionals").First();

            var project = vsTemplateXml.Descendants(ns + "Project").First();
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
                {
                    ConvertToTemplateParams(targetFile);

                    var text = File.ReadAllText(targetFile);

                    if (conditionalStarts.Any(x => text.Contains(x, StringComparison.OrdinalIgnoreCase)) &&
                        !conditionalsElement.Elements(ns + "files")
                            .Any(x => string.Equals(x.Attribute("include")?.Value?.Trim(), file)))
                    {
                        var el = new XElement(ns + "files");
                        el.SetAttributeValue("include", file);
                        conditionalsElement.Add(el);
                    }
                }
            }

            File.WriteAllText(vsTemplateFile, vsTemplateXml.ToString(SaveOptions.OmitDuplicateNamespaces));
            File.Copy(vsTemplateFile, Path.Combine(targetPath, Path.GetFileName(vsTemplateFile)));

            foreach (var z in csprojXml.Descendants("ItemGroup")
                .Concat(csprojXml.Descendants("PackageReference"))
                .Concat(csprojXml.Descendants("ProjectReference"))
                .Concat(csprojXml.Descendants("Import"))
                .Where(x =>
                {
                    if (x.Attribute("Condition") == null ||
                        x.Attribute("Condition").Value == null)
                        return false;

                    return true;
                }).ToList())
            {
                var value = z.Attribute("Condition").Value.Trim()
                    .Replace(" ", "");

                if (string.Equals(value, "'$(UseProjectRefs)'=='false'", StringComparison.OrdinalIgnoreCase))
                    z.Attribute("Condition").Remove();
                else if (string.Equals(value, "'$(UseProjectRefs)'!='false'", StringComparison.OrdinalIgnoreCase))
                    z.Remove();
            }

            var targetProj = Path.Combine(targetPath, Path.GetFileName(csproj));
            File.WriteAllText(targetProj,
                csprojXml.ToString(SaveOptions.OmitDuplicateNamespaces)
                  .Replace("http://localhost:55555/", "")
                  .Replace(
                    "<DevelopmentServerPort>55556</DevelopmentServerPort>", 
                    "<DevelopmentServerPort></DevelopmentServerPort>"));
            ConvertToTemplateParams(targetProj);
        }
    }
}