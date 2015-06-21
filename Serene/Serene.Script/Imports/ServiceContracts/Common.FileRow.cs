
namespace Serene.Common
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class FileRow
    {
        [InlineConstant] public const string IdProperty = "FileId";
        [InlineConstant] public const string NameProperty = "Filename";
        [InlineConstant] public const string LocalTextPrefix = "Common.File";
    
        public Int32? FileId { get; set; }
        public String Filename { get; set; }
        public String OriginalName { get; set; }
        public Int32? Size { get; set; }
        public Boolean? IsImage { get; set; }
        public Int16? IsActive { get; set; }
        public String Metadata { get; set; }
        public String MimeType { get; set; }
        public String OwnerTable { get; set; }
        public Int64? OwnerId { get; set; }
        public String Title { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string FileId = "FileId";
            [InlineConstant] public const string Filename = "Filename";
            [InlineConstant] public const string OriginalName = "OriginalName";
            [InlineConstant] public const string Size = "Size";
            [InlineConstant] public const string IsImage = "IsImage";
            [InlineConstant] public const string IsActive = "IsActive";
            [InlineConstant] public const string Metadata = "Metadata";
            [InlineConstant] public const string MimeType = "MimeType";
            [InlineConstant] public const string OwnerTable = "OwnerTable";
            [InlineConstant] public const string OwnerId = "OwnerId";
            [InlineConstant] public const string Title = "Title";
        }
    }
    
}

