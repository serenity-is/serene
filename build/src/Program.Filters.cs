using System.Collections.Generic;

namespace Build
{
    partial class Program
    {
        private static readonly GlobFilter ExcludeFiles = new GlobFilter(new[] {
            "App_Data/",
            "bin/",
            "obj/",
            "node_modules/",
            "packages/",
            "PublishProfiles/",
            "TestResults/",
            ".git/",
            ".vs/",
            ".vscode/",
            "*.bak",
            "*.csproj",
            "*.dg",
            "*.DotSettings*",
            "*.log",
            "*.lock.json",
            "*.orig",
            "*.mdf",
            "*.sqlite",
            "*.suo",
            "*.user",
            "*.vstemplate",
            "*.xproj",
            "*.zip",
            ".syncache.sqlite",
            "appsettings.*.machine.json",
            "appsettings.machine.json",
            "Thumbs.db",
            "ErrorLog.db",
            "StyleCop.Cache"
        });

        static readonly HashSet<string> ReplaceParamsInExtensions = new HashSet<string>()
        {
            ".cs" ,
            ".ts" ,
            ".d.ts" ,
            ".tsx" ,
            ".config" ,
            ".tt" ,
            ".css" ,
            ".map" ,
            ".less" ,
            ".csproj" ,
            ".sql" ,
            ".ttinclude" ,
            ".txt" ,
            ".js" ,
            ".json" ,
            ".asax" ,
            ".cshtml" ,
            ".html"
        };
    }
}
