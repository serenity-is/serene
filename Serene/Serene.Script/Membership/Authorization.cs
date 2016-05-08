
namespace Serene
{
    using Serenity;
    using System.Runtime.CompilerServices;

    [Imported]
    public static class Authorization
    {
        [IntrinsicProperty]
        public static ScriptUserDefinition UserDefinition { get; private set; }

        public static bool HasPermission(string permissionKey)
        {
            return false;
        }
    }
}