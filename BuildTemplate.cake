#addin "nuget:https://www.nuget.org/api/v2?package=Newtonsoft.Json&version=9.0.1"

using System.Xml.Linq;
using Newtonsoft.Json.Linq;
using System.Text.RegularExpressions;

var target = Argument("target", "PrepareVSIX");
var configuration = Argument("configuration", "Release");

var r = System.IO.Path.GetFullPath(@".\");

var sereneWebProj = r + @"Serene\Serene.Web\Serene.Web.csproj";
var devSereneWebProj = r + @"Serene\Serene.Web\Dev.Serene.Web.csproj";
var sereneCoreWebProj = r + @"Serene\Serene.AspNetCore\project.json";

Func<string, XElement> loadCsProj = (csproj) => {
        return XElement.Parse(System.IO.File.ReadAllText(csproj));
};

Func<XElement, IEnumerable<XElement>> getCsProjItems = (csprojElement) => {
    XNamespace ns1 = "http://schemas.microsoft.com/developer/msbuild/2003";
    return csprojElement.Descendants(ns1 + "ItemGroup").Elements().Where(x => (
            x.Name == ns1 + "Content" ||
            x.Name == ns1 + "Compile" ||
            x.Name == ns1 + "TypeScriptCompile" ||
            x.Name == ns1 + "EmbeddedResource" ||
            x.Name == ns1 + "Folder" ||
            x.Name == ns1 + "None"));
};

Func<XElement, string> itemToFile = (x) => {
    return (x.Attribute("Include").Value ?? "").Replace("%40", "@");
};

Func<string, Regex> wildcardToRegex = wildcard => {
    var pattern = Regex.Escape(wildcard);
    if (System.IO.Path.DirectorySeparatorChar == '/')
    {
        // regex wildcard adjustments for *nix-style file systems
        pattern = pattern
            .Replace(@"\.\*\*", @"\.[^/.]*") // .** should not match on ../file or ./file but will match .file
            .Replace(@"\*\*/", "(.+/)*") //For recursive wildcards /**/, include the current directory.
            .Replace(@"\*\*", ".*") // For recursive wildcards that don't end in a slash e.g. **.txt would be treated as a .txt file at any depth
            .Replace(@"\*", @"[^/]*(/)?") // For non recursive searches, limit it any character that is not a directory separator
            .Replace(@"\?", "."); // ? translates to a single any character
    }
    else
    {
        // regex wildcard adjustments for Windows-style file systems
        pattern = pattern
            .Replace("/", @"\\") // On Windows, / is treated the same as \.
            .Replace(@"\.\*\*", @"\.[^\\.]*") // .** should not match on ../file or ./file but will match .file
            .Replace(@"\*\*\\", @"(.+\\)*") //For recursive wildcards \**\, include the current directory.
            .Replace(@"\*\*", ".*") // For recursive wildcards that don't end in a slash e.g. **.txt would be treated as a .txt file at any depth
            .Replace(@"\*", @"[^\\]*(\\)?") // For non recursive searches, limit it any character that is not a directory separator
            .Replace(@"\?", "."); // ? translates to a single any character
    }

    return new Regex('^' + pattern + '$', RegexOptions.IgnoreCase | RegexOptions.ExplicitCapture);
};

Func<string, string, string> getPackageVersion = (project, package) => 
{
    var node = loadXml(@".\" + project + @"\packages.config").SelectSingleNode("//package[@id='" + package + "']/@version");
    if (node == null || node.Value == null)
        throw new InvalidOperationException("Couldn't find version for " + package + " in project " + project);
    return node.Value;
};

IEnumerable<Regex> sereneCoreIncludes = null;
IEnumerable<Regex> sereneCoreExcludes = null;

Func<IEnumerable<Regex>, IEnumerable<Regex>, string, bool> isMatchingPath = (includes, excludes, path) => {
    if (excludes.Any(x => x.IsMatch(path)))
        return false;

    return includes.Any(x => x.IsMatch(path));
};

Func<string, JObject> loadJson = path => {
    var content = System.IO.File.ReadAllText(path, Encoding.UTF8);
    return JObject.Parse(content);
};


Action<string, string> patchProjectRefs = (projectjson, version) => {
    var changed = false;

    var deps = node["dependencies"] as JObject;
    if (deps != null) {
        foreach (var pair in (deps as IEnumerable<KeyValuePair<string, JToken>>).ToList()) {
            if (pair.Key.StartsWith("Serenity.") &&
                pair.Key != "Serenity.Web.Assets" &&
                pair.Key != "Serenity.Web.Tooling")
            {
                var v = pair.Value as JValue;
                if (v != null && (v.Value ?? "").ToString() != version)
                {
                    deps[pair.Key].Replace(version);
                    changed = true;
                }
            }
        }
    }

    var deps = node["tools"] as JObject;
    if (deps != null) {
        foreach (var pair in (deps as IEnumerable<KeyValuePair<string, JToken>>).ToList()) {
            if (pair.Key.StartsWith("Serenity.") &&
                pair.Key != "Serenity.Web.Assets" &&
                pair.Key != "Serenity.Web.Tooling")
            {
                var v = pair.Value as JValue;
                if (v != null && (v.Value ?? "").ToString() != version)
                {
                    deps[pair.Key].Replace(version);
                    changed = true;
                }
            }
        }
    }
    
    if (changed)
        System.IO.File.WriteAllText(projectjson, node.ToString(), Encoding.UTF8);
};

Action ensureDevProjSync = () => {
    var devFiles = getCsProjItems(loadCsProj(devSereneWebProj)).Select(itemToFile);
    var sereneFiles = getCsProjItems(loadCsProj(sereneWebProj)).ToLookup(itemToFile);
    var missingFiles = devFiles.Where(x => !sereneFiles[x].Any());
    if (missingFiles.Any()) {
        System.Console.WriteLine("Serene.Web.csproj missing following files in Dev.Serene.Web.csproj:");
        foreach (var f in missingFiles)
            System.Console.WriteLine(f);
        System.Console.ReadLine();
    }
};

Task("PrepareVSIX")
  .Does(() => 
{
    ensureDevProjSync();
    CleanDirectory("./Template/ProjectTemplates");
    CreateDirectory("./Template/ProjectTemplates");
    CleanDirectory("./Template/bin/Debug");
    CleanDirectory("./Template/bin/Release");
    CleanDirectory("./Template/RootProjectWizard/obj/Debug");
    CleanDirectory("./Template/RootProjectWizard/obj/Release");
    
    NuGetRestore(System.IO.Path.Combine(r, @"Serene.Web.sln"), new NuGetRestoreSettings {
        ToolPath = System.IO.Path.Combine(r, @"Serenity\tools\NuGet\nuget.exe"),
        Source = new List<string> { "https://api.nuget.org/v3/index.json" }
    });
    
    var exitCode = StartProcess("dotnet", "restore");
    if (exitCode > 0)
        throw new Exception("Error while restoring: " + exitCode);    

    NuGetUpdate(System.IO.Path.Combine(r, @"Serene\Serene.Web\Serene.Web.csproj"), new NuGetUpdateSettings {
        Id = new List<string> {
            "Serenity.Web"
        },
        ToolPath = System.IO.Path.Combine(r, @"Serenity\tools\NuGet\nuget.exe"),
        ArgumentCustomization = args => args.Append("-FileConflictAction Overwrite")
    });

    NuGetUpdate(System.IO.Path.Combine(r, @"Serene\Serene.Web\Serene.Web.csproj"), new NuGetUpdateSettings {
        Id = new List<string> {
            "Serenity.CodeGenerator"
        },
        ToolPath = System.IO.Path.Combine(r, @"Serenity\tools\NuGet\nuget.exe"),
        ArgumentCustomization = args => args.Append("-FileConflictAction Overwrite")
    });

    MSBuild("./Serene.Web.sln", s => {
        s.SetConfiguration(configuration);
    });

    var serenePackagesFolder = r + @"packages\";
    var vsixProjFile = r + @"Template\Serene.Template.csproj";
    var vsixManifestFile = r + @"Template\source.extension.vsixmanifest";
    var templateFolder = r + @"Template\obj\Serene.Template";
    CleanDirectory(templateFolder);
    CreateDirectory(templateFolder);

    Func<string, List<Tuple<string, string>>> parsePackages = path => {
        var xml = XElement.Parse(System.IO.File.ReadAllText(path));
        var pkg = new List<Tuple<string, string>>();
        foreach (var x in xml.Descendants("package"))
            pkg.Add(new Tuple<string, string>(x.Attribute("id").Value, x.Attribute("version").Value));
        return pkg;
    };    
  
    Action<List<Tuple<string, string>>> updateVsixProj = (wp) => {
        var hash = new HashSet<Tuple<string, string>>();
        foreach (var x in wp)
            hash.Add(x);
        var allPackages = new List<Tuple<string, string>>();
        allPackages.AddRange(hash);
        allPackages.Sort((x, y) => x.Item1.CompareTo(y.Item1));
    
        var xm = XElement.Parse(System.IO.File.ReadAllText(vsixManifestFile));
        var ver = allPackages.First(x => x.Item1.StartsWith("Serenity.Core")).Item2;
        var identity = xm.Descendants(((XNamespace)"http://schemas.microsoft.com/developer/vsx-schema/2011") + "Identity").First();
        var old = identity.Attribute("Version").Value;
        if (old != null && old.StartsWith(ver + ".")) 
            ver = ver + "." + (Int32.Parse(old.Substring(ver.Length + 1)) + 1);
        else
            ver = ver + ".0";
        identity.SetAttributeValue("Version", ver);
        System.IO.File.WriteAllText(vsixManifestFile, xm.ToString(SaveOptions.OmitDuplicateNamespaces));   
    };

    var utf8Bom = new System.Text.UTF8Encoding(true);

    Action<string> replaceParams = (path) => {
        var content = System.IO.File.ReadAllText(path);
        if (content.IndexOf("Serene") >= 0)
        {
            content = content.Replace(@"\Serene", @"\$ext_projectname$");
            content = content.Replace(@"Serene.Web\", @"$ext_projectname$.Web\");
            content = content.Replace(@"Serene\", @"$ext_projectname$\");
            content = content.Replace("Serene", "$ext_safeprojectname$");
            System.IO.File.WriteAllText(path, content, utf8Bom);
        }   
    };
    
    var webSkipFiles = new Dictionary<string, bool>(StringComparer.OrdinalIgnoreCase) {
        { @"packages.config", true },
        { @"wkhtmltopdf.exe", true },
        { @"..\..\packages\wkhtmltopdf-x86-win32.0.12.3.6\tools\wkhtmltopdf\wkhtmltopdf.exe", true },
        { @"Scripts\jquery-3.1.1.intellisense.js", true }
    };

    Action<string, List<Tuple<string, string>>, Dictionary<string, bool>> replaceTemplateFileList = (csproj, packages, skipFiles) => {
    
        foreach (var package in packages) {
            var contentFolder = System.IO.Path.Combine(serenePackagesFolder, 
               package.Item1 + "." + package.Item2 + @"\content");
            if (System.IO.Directory.Exists(contentFolder)) {
                foreach (var f in System.IO.Directory.GetFiles(contentFolder, 
                    "*.*", System.IO.SearchOption.AllDirectories)) {
                    skipFiles[f.Substring(contentFolder.Length + 1)] = true;
                }
            }
        }
    
        var vsTemplate = System.IO.Path.ChangeExtension(csproj, ".vstemplate");
        var csprojElement = loadCsProj(csproj);
        var itemList = getCsProjItems(csprojElement);       
        var byName = itemList.ToDictionary(itemToFile);
        var fileList = itemList.Select(itemToFile).ToList();
                       
        fileList.Sort(delegate(string x, string y) {
            var px = System.IO.Path.GetDirectoryName(x);
            var py = System.IO.Path.GetDirectoryName(y);
            if (string.Equals(px, py, StringComparison.OrdinalIgnoreCase))
            {
                if ((System.IO.Path.GetExtension(x) ?? "").ToLowerInvariant() == ".tt")
                    return -1;
                    
                if ((System.IO.Path.GetExtension(y) ?? "").ToLowerInvariant() == ".tt")
                    return 1;               
            }
            return x.CompareTo(y);
        });
        
        var xv = XElement.Parse(System.IO.File.ReadAllText(vsTemplate));
        XNamespace ns = "http://schemas.microsoft.com/developer/vstemplate/2005";
        var project = xv.Descendants(ns + "Project").First();
        project.Elements().Remove();
        Dictionary<string, XElement> byFolder = new Dictionary<string, XElement>();
        
        var copySourceRoot = System.IO.Path.GetDirectoryName(csproj);
        var copyTargetRoot = System.IO.Path.Combine(templateFolder, System.IO.Path.GetFileNameWithoutExtension(csproj));
        
        foreach (var file in fileList)
        {
            if (skipFiles.ContainsKey(file))
            {
                XElement xe;
                if (byName.TryGetValue(file, out xe))
                {
                    byName.Remove(file);
                    xe.Remove();
                }
                continue;
            }
        
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
            {
                continue;
            }
            
            var item = new XElement(ns + "ProjectItem");
            var extension = (System.IO.Path.GetExtension(file) ?? "").ToLowerInvariant();
            bool replaceParameters = extension == ".cs" ||
                extension == ".ts" ||
                extension == ".d.ts" ||
                extension == ".config" ||
                extension == ".tt" ||
                extension == ".css" ||
                extension == ".map" ||
                extension == ".less" ||
                extension == ".csproj" ||
                extension == ".sql" ||
                extension == ".ttinclude" ||
                extension == ".txt" ||
                extension == ".js" ||
                extension == ".json" ||
                extension == ".asax" ||
                extension == ".cshtml" ||
                extension == ".html";
            
            item.SetAttributeValue("ReplaceParameters", replaceParameters ? "true" : "false");
            item.SetAttributeValue("TargetFileName", parts[parts.Length - 1].Replace("Serene", "$ext_projectname$"));
            if (file == "Welcome.htm")
                item.SetAttributeValue("OpenInWebBrowser", "true");
            item.SetValue(parts[parts.Length - 1]);
            folder.Add(item);
            
            var targetFile = System.IO.Path.Combine(copyTargetRoot, file);
            System.IO.Directory.CreateDirectory(System.IO.Path.GetDirectoryName(targetFile));
            System.IO.File.Copy(System.IO.Path.Combine(copySourceRoot, file), targetFile);
            
            if (replaceParameters) {
                replaceParams(targetFile);
            }
        }
        
        var pkg = xv.Descendants(ns + "packagesToInstall").Single();
        pkg.Elements().Remove();
        foreach (var p in packages)
        {
            var pk = new XElement(ns + "installPackage");
            pk.SetAttributeValue("id", p.Item1);
            pk.SetAttributeValue("version", p.Item2);
            pkg.Add(pk);
        }
        
        System.IO.File.WriteAllText(vsTemplate, xv.ToString(SaveOptions.OmitDuplicateNamespaces));
        System.IO.File.Copy(vsTemplate, System.IO.Path.Combine(copyTargetRoot, System.IO.Path.GetFileName(vsTemplate)));
        var targetProj = System.IO.Path.Combine(copyTargetRoot, System.IO.Path.GetFileName(csproj));
        System.IO.File.WriteAllText(targetProj, 
            "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n" +
            csprojElement.ToString(SaveOptions.OmitDuplicateNamespaces)
                .Replace("http://localhost:55555/", "")
                .Replace("<DevelopmentServerPort>55556</DevelopmentServerPort>", "<DevelopmentServerPort></DevelopmentServerPort>"));
        replaceParams(targetProj);
    };

    var webPackages = parsePackages(System.IO.Path.Combine(System.IO.Path.GetDirectoryName(sereneWebProj), "packages.config"));  
    updateVsixProj(webPackages);
    
    if (System.IO.Directory.Exists(templateFolder)) 
        System.IO.Directory.Delete(templateFolder, true);
        
    System.IO.Directory.CreateDirectory(templateFolder);
    System.IO.Directory.CreateDirectory(System.IO.Path.Combine(templateFolder, "Serene.Web"));
    System.IO.Directory.CreateDirectory(System.IO.Path.Combine(templateFolder, "Serene.Script"));   
    
    replaceTemplateFileList(sereneWebProj, webPackages, webSkipFiles);
    System.IO.File.Copy(r + @"Serene\SerenityLogo.ico", 
        System.IO.Path.Combine(templateFolder, "SerenityLogo.ico")); 
    System.IO.File.Copy(r + @"Serene\Serene.vstemplate", 
        System.IO.Path.Combine(templateFolder, "Serene.vstemplate")); 
        
    Zip(templateFolder, r + @"Template\ProjectTemplates\Serene.Template.zip");
});

RunTarget(target);