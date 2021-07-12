@echo off
ECHO *** RUNNING BUILD ***
dotnet run -p build\build-serene.csproj %*
if %ERRORLEVEL% GEQ 1 GOTO :error
SET VSINSTALLDIR=C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\IDE\
ECHO *** RESTORING PACKAGES FOR TEMPLATE PROJECT***
Serenity\build\tools\NuGet\NuGet Restore Template\Serene.Template.sln
if %ERRORLEVEL% GEQ 2 GOTO :error
ECHO *** BUILDING TEMPLATE PACKAGE ***
"C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\MSBuild\Current\Bin\MSBuild.exe" "Template\Serene.Template.sln" -verbosity:m
if %ERRORLEVEL% GEQ 1 GOTO :end
start Template\bin\Debug
start https://visualstudiogallery.msdn.microsoft.com/559ec6fc-feef-4077-b6d5-5a99408a6681/edit?newSession=True
pause
EXIT /B 0
:error
ECHO ERROR %ERRORLEVEL%
pause
EXIT /B 1