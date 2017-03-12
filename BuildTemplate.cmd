@echo off
#"Serenity\Tools\Cake\Cake.exe" BuildTemplate.cake %*
SET VSINSTALLDIR=C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\Common7\IDE\
Serenity\Tools\NuGet\NuGet Restore Template\Serene.Template.sln
"%VSINSTALLDIR%devenv.exe" "Template\Serene.Template.sln" /build Debug /out "Template\Serene.Template.log"
type Template\Serene.Template.log
del Template\Serene.Template.log
start Template\bin\Debug
start https://visualstudiogallery.msdn.microsoft.com/559ec6fc-feef-4077-b6d5-5a99408a6681/edit?newSession=True
pause