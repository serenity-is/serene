@echo off
del Template\Serene.Template.log >nul 2>&1
ECHO *** RUNNING BUILD ***
dotnet run -p build\build.csproj %*
if %ERRORLEVEL% GEQ 1 GOTO :error
SET VSINSTALLDIR=C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\IDE\
ECHO *** RESTORING PACKAGES FOR TEMPLATE PROJECT***
Serenity\Tools\NuGet\NuGet Restore Template\Serene.Template.sln
if %ERRORLEVEL% GEQ 2 GOTO :error
ECHO *** BUILDING TEMPLATE WITH VISUAL STUDIO ***
"%VSINSTALLDIR%devenv.exe" "Template\Serene.Template.sln" /build Debug /out "Template\Serene.Template.log"
if %ERRORLEVEL% GEQ 1 GOTO :error
type Template\Serene.Template.log
del Template\Serene.Template.log
start Template\bin\Debug
start https://visualstudiogallery.msdn.microsoft.com/559ec6fc-feef-4077-b6d5-5a99408a6681/edit?newSession=True
pause
EXIT /B 0
:error
ECHO ERROR %ERRORLEVEL%
type Template\Serene.Template.log
pause
EXIT /B 1