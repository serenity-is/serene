using Serenity;
using System.Html;
using System.Runtime.CompilerServices;

namespace Serene
{
    [Imported]
    public static class ScriptInitialization
    {
        static ScriptInitialization()
        {
            Q.Config.RootNamespaces.Add("Serene");
        }
    }
}