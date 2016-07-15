@echo off
"Serenity\Tools\Cake\Cake.exe" BuildTemplate.cake %*
set VSREGKEY=HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\VisualStudio\14.0
for /f "skip=2 tokens=2,*" %%A in ('reg query "%VSREGKEY%" /v InstallDir') do SET VSINSTALLDIR=%%B
Serenity\Tools\NuGet\NuGet Restore Template\Serene.Template.sln
"%VSINSTALLDIR%devenv.com" Template\Serene.Template.sln /build
start Template\bin\Debug
start https://visualstudiogallery.msdn.microsoft.com/559ec6fc-feef-4077-b6d5-5a99408a6681/edit?newSession=True
pause