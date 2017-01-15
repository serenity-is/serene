#! /usr/bin/env node

console.log('Welcome to Serene Initializer!');
console.log('');

var fs = require('fs');
var path = require('path');
var parseXml = require('xml2js').parseString;
var util = require('util');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var templateDir = path.resolve(__dirname, 'template/');
var vsTemplatePath = path.resolve(templateDir, 'SereneCore.vstemplate');

if (fs.readdirSync('./').length) {
    console.log('Please run this application in an empty directory!');
    process.exit(1);
}

var replacements = {
};

function replaceAll(s, oldValue, newValue) {
	newValue = newValue || '';
	return s.split(oldValue).join(newValue);
};

function replaceParams(s) {
    for (var k in replacements) {
        if (replacements.hasOwnProperty(k)) {
            s = replaceAll(s, k, replacements[k]);
        }
    }
    return s;
}

parseXml(fs.readFileSync(vsTemplatePath, "utf8"), function(err, result) {
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
            var templatePath = templateLink._.trim();
            createProject(solutionName, projectName, templatePath);
        }

        rl.close();
    });
});



function createProject(solutionName, projectName, vsTemplatePath) {
    
    console.log('Creating project ' + projectName + ' (using ' + vsTemplatePath + ')');

    replacements["$projectname$"] = projectName;
    replacements["$safeprojectname$"] = projectName.replace(/\W/g, '');

    function copyFile(source, target, replace) {
        var content = fs.readFileSync(source, "utf8");
        if (replace)
            content = replaceParams(content);
        
        var targetFolder = path.dirname(target);
        if (!fs.existsSync(targetFolder))
            fs.mkdirSync(targetFolder);
        fs.writeFileSync(target, "\ufeff" + content, {
            encoding: "utf8"
        });
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
                traverse(folder, path.resolve(sourceRoot, sourceFolderName), targetPath);
            }
        }

        if (container.ProjectItem) {
            for (var i = 0; i < container.ProjectItem.length; i++) {
                var item = container.ProjectItem[i];
                var sourceFile = path.resolve(sourceRoot, item._.trim());
                var targetFile = path.resolve(targetRoot, replaceParams(item.$.TargetFileName));
                copyFile(sourceFile, targetFile, item.$.ReplaceParameters == 'true' || item.$.ReplaceParameters == 'True');
            }
        }
    }

    parseXml(fs.readFileSync(path.resolve(templateDir, vsTemplatePath), "utf8"), function(err, result) {
        var vst = result.VSTemplate;
        var prj = vst.TemplateContent[0].Project[0];
        
        var sourceRoot = path.resolve(templateDir, path.dirname(vsTemplatePath));
        var targetRoot = path.resolve('./', projectName);      
        var xprojSource = path.resolve(sourceRoot, prj.$.File);
        var xprojTarget = path.resolve(targetRoot, replaceParams(prj.$.TargetFileName));
        copyFile(xprojSource, xprojTarget, true);
        traverse(prj, sourceRoot, targetRoot);
    });
}