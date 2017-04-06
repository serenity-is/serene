#! /usr/bin/env node

console.log('Welcome to Serene Initializer!');
console.log('');

var fs = require('fs');
var path = require('path');
var parseXml = require('xml2js').parseString;
var util = require('util');
var readline = require('readline');
var https = require('https');
var decompress = require('decompress');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function replaceAll(s, oldValue, newValue) {
	newValue = newValue || '';
	return s.split(oldValue).join(newValue);
};

function toPath(s) {
    if (path.sep == '/')
	    return replaceAll(s, '\\', '/');

    return replaceAll(s, '/', '\\');
};

var replacements = {
};

function replaceParams(s) {
    for (var k in replacements) {
        if (replacements.hasOwnProperty(k)) {
            s = replaceAll(s, k, replacements[k]);
        }
    }
    return s;
}

function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

function downloadHttps(url, cb) {
    var data = [], dataLen = 0; 
    https.get(url, function(res) {
        res.on('data', function(chunk) {
            data.push(chunk);
            dataLen += chunk.length;
        }).on('end', function() {
            var buf = new Buffer(dataLen);
            for (var i=0, len = data.length, pos = 0; i < len; i++) { 
                data[i].copy(buf, pos); 
                pos += data[i].length; 
            }
            cb(buf);
        });
    });
}

var cacheDir = path.resolve(getUserHome(), '.serene');
var sourceFileByPath = {};

function createSolution() {
    parseXml(sourceFileByPath['SereneCore.vstemplate'].toString('utf8'), function(err, result) {
        var vst = result.VSTemplate;
        var solutionName = vst.TemplateData[0].DefaultName[0];
        
        rl.question('Enter a project name (press enter for ' + solutionName + '1)? ', (answer) => {
            solutionName = answer || (solutionName + '1');
            console.log('Creating solution ' + solutionName);
            var projectTemplateLinks = vst.TemplateContent[0].ProjectCollection[0].ProjectTemplateLink;
            
            var features = vst.WizardData[0].features[0].feature.map(x => {
                return {
                    key: x.$.key,
                    title: x.$.title,
                    dependencies: (x.dependency || []).map(y => y.$.feature)
                }
            });

            replacements["$ext_projectname$"] = solutionName;
            var safeName = solutionName.replace(/\W/g, '');
            safeName = safeName.substr(0, 1).toUpperCase() + safeName.substr(1);
            replacements["$ext_safeprojectname$"] = safeName;

            for (var i = 0; i < projectTemplateLinks.length; i++) {
                var templateLink = projectTemplateLinks[i];
                var projectName = replaceParams(templateLink.$.ProjectName.replace('$projectname$', solutionName));
                var templatePath = toPath(templateLink._.trim());
                createProject(solutionName, projectName, templatePath);
            }

            rl.close();
        });
    });  
}

function useCacheZip(cacheZip) {
    var prefix = 'projecttemplates/serenecore.template/';
    decompress(fs.readFileSync(cacheZip), null, {
    }).then(files => {
        for (var i = 0; i < files.length; i++) {
            var path = files[i].path;
            if (!path.toLowerCase().startsWith(prefix))
                continue;
            path = toPath(path.substr(prefix.length));
            sourceFileByPath[path] = files[i].data;
        }
        createSolution();
    });
}

if (fs.readdirSync('./').length) {
    console.log('Please run this application in an empty directory!');
    process.exit(1);
}

if (!fs.existsSync(cacheDir))
    fs.mkdirSync(cacheDir);

console.log('Reading latest template version from VSGallery...');

https.get({
    host: 'marketplace.visualstudio.com',
    path: '/items?itemName=VolkanCeylan.SereneSerenityApplicationTemplate',
    port: 443,
    headers: { 'user-agent': 'Mozilla/5.0' }
}, function(res) {
    if (!(res.statusCode >= 200 && res.statusCode <= 300)) {
        console.error("Couldn't read template page from VSGallery. Got status code " + res.statusCode);
        process.exit();
    }

    var str = "";
    res.on('data', function(d) { str += d; });
    res.on('end', function() {
        var idx = str.lastIndexOf('/Serene.Template.vsix"');
        if (idx <= 0) {
            console.error("Couldn't read template version from VSGallery.");
            process.exit();
        }

        var idx2 = str.lastIndexOf('/', idx - 1);
        if (idx2 <= 0 || (idx - idx2 >= 5))  {
            console.error("Couldn't read template version from VSGallery.");
            process.exit();
        }

        var dirver = parseInt(str.substr(idx2 + 1, idx - idx2 - 1));
        var cacheZip = path.resolve(cacheDir, 'Serene.Template.' + dirver + '.vsix');
        if (fs.existsSync(cacheZip)) {
            console.log('You already have a cached copy of latest version.')
            console.log('');
            useCacheZip(cacheZip);
        }
        else {
            var oldFiles = fs.readdirSync(cacheDir).filter(function(x) { 
                return x.toLowerCase().startsWith('Serene.Template.') && x.toLowerCase().endsWith('.vsix');
            });
            console.log('Downloading latest Serene template...');
            downloadHttps("https://visualstudiogallery.msdn.microsoft.com/559ec6fc-feef-4077-b6d5-5a99408a6681/file/219776/" + 
                dirver + "/Serene.Template.vsix", function(buffer) {
                    console.log('Download complete.');
                    fs.writeFileSync(cacheZip, buffer);
                    useCacheZip(cacheZip);

                    for (var i = 0; i < oldFiles.length; i++) {
                        fs.unlinkSync(path.resolve(cacheDir, oldFiles[i]));
                    }
                });
        }
    });

}).on('error', function(e) {
    console.log("Error while downloading template information: " + e.message);
});

function PathMatcher(includesStr, excludesStr) {

    function wildcardToRegex(wildcard) {
        var pattern = wildcard.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        if (path.sep == '/') {
            // regex wildcard adjustments for *nix-style file systems
            pattern = replaceAll(pattern, "\\.\\*\\*", "\\.[^/.]*");
            pattern = replaceAll(pattern, "\\*\\*/", "(.+/)*");
            pattern = replaceAll(pattern, "\\*\\*", ".*");
            pattern = replaceAll(pattern, "\\*", "[^/]*(/)?");
            pattern = replaceAll("\\?", ".");
        } else {
            // regex wildcard adjustments for Windows-style file systems
            pattern = replaceAll(pattern, "/", "\\\\");
            pattern = replaceAll(pattern, "\\.\\*\\*", "\\.[^\\\\.]*")
            pattern = replaceAll(pattern, "\\*\\*\\\\", "(.+\\\\)*")
            pattern = replaceAll(pattern, "\\*\\*", ".*")
            pattern = replaceAll(pattern, "\\*", "[^\\\\]*(\\\\)?");
            pattern = replaceAll("\\?", ".");
        }

        return new RegExp('^' + pattern + '$', /ig/);
    }

    includes = includesStr.map(wildcardToRegex);
    excludes = excludesStr.map(wildcardToRegex);   

    this.isMatch = function(p) {
        for (var i = 0; i < excludes.length; i++)
            if (p.match(excludes[i]))
                return false;

        for (var i = 0; i < includes.length; i++)
            if (p.match(includes[i]))
                return true;

        return false;
    }
}

function createProject(solutionName, projectName, vsTemplatePath) {
    
    console.log('Creating project ' + projectName + ' (using ' + vsTemplatePath + ')');

    replacements["$projectname$"] = projectName;
    replacements["$safeprojectname$"] = projectName.replace(/\W/g, '');

    function copyFile(source, target, replace) {

        var targetFolder = path.dirname(target);
        if (!fs.existsSync(targetFolder))
            fs.mkdirSync(targetFolder);

        if (replace) {
            var content = sourceFileByPath[source].toString("utf8");
            content = replaceParams(content);       

            fs.writeFileSync(target, content, {
                encoding: "utf8"
            });
        }
        else {
            fs.writeFileSync(target, sourceFileByPath[source]);
        }
    }

    function traverse(container, sourceRoot, targetRoot) {
        if (container.Folder) {
            for (var f = 0; f < container.Folder.length; f++) {
                var folder = container.Folder[f];
                var targetFolderName = replaceParams(folder.$.TargetFolderName);
                var sourceFolderName = folder.$.Name;
                var targetPath = path.resolve(targetRoot, targetFolderName);
                if (!fs.existsSync(targetPath))
                    fs.mkdirSync(targetPath);
                traverse(folder, sourceRoot + path.sep + sourceFolderName, targetPath);
            }
        }

        if (container.ProjectItem) {
            for (var i = 0; i < container.ProjectItem.length; i++) {
                var item = container.ProjectItem[i];
                var sourceFile = sourceRoot + path.sep + item._.trim();
                var targetFile = path.resolve(targetRoot, replaceParams(item.$.TargetFileName));
                copyFile(sourceFile, targetFile, item.$.ReplaceParameters == 'true' || item.$.ReplaceParameters == 'True');
            }
        }
    }

    parseXml(sourceFileByPath[vsTemplatePath].toString("utf8"), function(err, result) {
        var vst = result.VSTemplate;
        var prj = vst.TemplateContent[0].Project[0];
        
        var sourceRoot = path.dirname(vsTemplatePath);
        var targetRoot = path.resolve('./', projectName);
        var xprojSource = sourceRoot + path.sep + prj.$.File;
        var xprojTarget = path.resolve(targetRoot, replaceParams(prj.$.TargetFileName));
        copyFile(xprojSource, xprojTarget, true);
        traverse(prj, sourceRoot, targetRoot);

        if (path.sep == '/') {
            var appSettingsPath = path.resolve(targetRoot, 'appsettings.json');
            var appSettings = JSON.parse(fs.readFileSync(appSettingsPath, 'utf8').replace(/^\uFEFF/, ''));
            if (appSettings.Data) {
                var keys = Object.keys(appSettings.Data);
                for (var i = 0; i < keys.length; i++) {
                    var k = keys[i];
                    if (appSettings.Data.hasOwnProperty(k)) {
                        var d = appSettings.Data[k];
                        d.ConnectionString = "Filename=../../../App_Data/" + solutionName + "_" + k + "_v1.sqlite";
                        d.ProviderName = "Microsoft.Data.Sqlite";
                    }
                }
                fs.writeFileSync(appSettingsPath, JSON.stringify(appSettings, null, '  '), 'utf8');
            }
        }

        var exec = require('child_process').exec;
        console.log("Restoring packages for " + projectName);
        var child1 = exec('dotnet restore', {
            cwd: targetRoot
        });
        child1.stdout.pipe(process.stdout);
        child1.stderr.pipe(process.stdin);
        child1.on('close', function() {
            console.log("Running Sergen to restore content for " + projectName);
            var child2 = exec('dotnet sergen restore', {
                cwd: targetRoot
            });
            child2.stdout.pipe(process.stdout);
            child2.stderr.pipe(process.stderr);
            child2.on('close', function() {
                console.log("Installing node modules for " + projectName);
                var child3 = exec('npm install', {
                    cwd: targetRoot
                });

                child3.stdout.pipe(process.stdout);
                child3.stderr.pipe(process.stderr);
                child3.on('close', function() {
                    console.log('Your project is generated.');
                    process.exit(0);
                });
            });
        });
    });
}