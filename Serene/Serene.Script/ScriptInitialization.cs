using Serenity;
using System.Html;

namespace Serene
{
    public static class ScriptInitialization
    {
        static ScriptInitialization()
        {
            Q.Config.RootNamespaces.Add("Serene");
        }
    }
}