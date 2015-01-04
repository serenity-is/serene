
namespace Serene.Common.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Files"), InstanceName("File"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class FileRow : Row, IIdRow, INameRow
    {
        [DisplayName("File Id"), Identity]
        public Int32? FileId
        {
            get { return Fields.FileId[this]; }
            set { Fields.FileId[this] = value; }
        }

        [DisplayName("Filename"), Size(100), NotNull, QuickSearch]
        public String Filename
        {
            get { return Fields.Filename[this]; }
            set { Fields.Filename[this] = value; }
        }

        [DisplayName("Original Name"), Size(100), NotNull]
        public String OriginalName
        {
            get { return Fields.OriginalName[this]; }
            set { Fields.OriginalName[this] = value; }
        }

        [DisplayName("Size"), NotNull]
        public Int32? Size
        {
            get { return Fields.Size[this]; }
            set { Fields.Size[this] = value; }
        }

        [DisplayName("Is Image"), NotNull]
        public Boolean? IsImage
        {
            get { return Fields.IsImage[this]; }
            set { Fields.IsImage[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Metadata"), Size(255)]
        public String Metadata
        {
            get { return Fields.Metadata[this]; }
            set { Fields.Metadata[this] = value; }
        }

        [DisplayName("Mime Type"), Size(50)]
        public String MimeType
        {
            get { return Fields.MimeType[this]; }
            set { Fields.MimeType[this] = value; }
        }

        [DisplayName("Owner Table"), Size(50)]
        public String OwnerTable
        {
            get { return Fields.OwnerTable[this]; }
            set { Fields.OwnerTable[this] = value; }
        }

        [DisplayName("Owner Id")]
        public Int64? OwnerId
        {
            get { return Fields.OwnerId[this]; }
            set { Fields.OwnerId[this] = value; }
        }

        [DisplayName("Title"), Size(100)]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.FileId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Filename; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FileRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field FileId;
            public readonly StringField Filename;
            public readonly StringField OriginalName;
            public readonly Int32Field Size;
            public readonly BooleanField IsImage;
            public readonly Int16Field IsActive;
            public readonly StringField Metadata;
            public readonly StringField MimeType;
            public readonly StringField OwnerTable;
            public readonly Int64Field OwnerId;
            public readonly StringField Title;

            public RowFields()
                : base("Files")
            {
                LocalTextPrefix = "Common.File";
            }
        }
    }
}