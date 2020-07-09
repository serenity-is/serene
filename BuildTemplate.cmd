@echo off
dotnet tool restore
dotnet dotnet-cake BuildTemplate.cake %*
SET VSINSTALLDIR=C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\IDE\
Serenity\Tools\NuGet\NuGet Restore Template\SereneMvc.Template.sln
"%VSINSTALLDIR%devenv.exe" "Template\SereneMvc.Template.sln" /build Debug /out "Template\SereneMvc.Template.log"
type Template\SereneMvc.Template.log
del Template\SereneMvc.Template.log
start Template\bin\Debug
start https://visualstudiogallery.msdn.microsoft.com/559ec6fc-feef-4077-b6d5-5a99408a6681/edit?newSession=True
pause