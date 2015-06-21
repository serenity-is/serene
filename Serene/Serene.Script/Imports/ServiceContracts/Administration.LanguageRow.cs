
namespace Serene.Administration
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class LanguageRow
    {
        [InlineConstant] public const string IdProperty = "Id";
        [InlineConstant] public const string NameProperty = "LanguageName";
        [InlineConstant] public const string LocalTextPrefix = "Administration.Language";
        [InlineConstant] public const string LookupKey = "Administration.Language";
    
        public static Lookup<LanguageRow> Lookup { [InlineCode("Q.getLookup('Administration.Language')")] get { return null; } }
    
        public Int32? Id { get; set; }
        public String LanguageId { get; set; }
        public String LanguageName { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string Id = "Id";
            [InlineConstant] public const string LanguageId = "LanguageId";
            [InlineConstant] public const string LanguageName = "LanguageName";
        }
    }
    
}

