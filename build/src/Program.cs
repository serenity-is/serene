using System;

namespace Build
{
    partial class Program
    {
        static void Main(string[] args)
        {
            var target = args != null && args.Length > 1 ? args[1] : "vsix";

            Shared.DetermineRoot();

            switch (target) 
            {
                case "vsix":
                    Shared.Targets.PrepareVSIX();
                    break;

                case "patchpackagejson":
                    Shared.Targets.PatchPackageJsonCopy();
                    break;

                default:
                    Console.Error.WriteLine("Unknown target!");
                    break;
            }
        }
    }
}