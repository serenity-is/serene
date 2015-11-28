namespace Serene
{
    using Serenity.ComponentModel;
    using System;
    using System.Collections.Generic;

    /// <summary>
    /// This data will be available from script code using a dynamic script.
    /// Add properties you need from script code and set them in UserEndpoint.GetUserData.
    /// </summary>
    [ScriptInclude]
    public class ScriptUserDefinition
    {
        public String Username { get; set; }
        public Dictionary<string, bool> Permissions { get; set; }
    }
}