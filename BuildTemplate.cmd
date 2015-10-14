@echo off
"Serenity\Tools\Cake\Cake.exe" BuildTemplate.cake %*
"c:\Program Files (x86)\Microsoft Visual Studio 14.0\Common7\ide\devenv.exe" Template\Serene.Template.csproj /build
"c:\Program Files (x86)\Microsoft Visual Studio 12.0\Common7\ide\devenv.exe" Template\Serene.Template.csproj /build
start Template\bin\Debug
pause