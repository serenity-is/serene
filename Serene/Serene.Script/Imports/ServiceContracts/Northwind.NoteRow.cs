
namespace Serene.Northwind
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class NoteRow
    {
        [InlineConstant] public const string IdProperty = "NoteId";
        [InlineConstant] public const string NameProperty = "EntityType";
        [InlineConstant] public const string LocalTextPrefix = "Northwind.Note";
    
        public Int64? NoteId { get; set; }
        public String EntityType { get; set; }
        public Int64? EntityId { get; set; }
        public String Text { get; set; }
        public Int32? InsertUserId { get; set; }
        public String InsertDate { get; set; }
        public String InsertUserDisplayName { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string NoteId = "NoteId";
            [InlineConstant] public const string EntityType = "EntityType";
            [InlineConstant] public const string EntityId = "EntityId";
            [InlineConstant] public const string Text = "Text";
            [InlineConstant] public const string InsertUserId = "InsertUserId";
            [InlineConstant] public const string InsertDate = "InsertDate";
            [InlineConstant] public const string InsertUserDisplayName = "InsertUserDisplayName";
        }
    }
    
}

