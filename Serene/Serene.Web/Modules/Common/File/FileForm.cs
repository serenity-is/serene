
namespace Serene.Common.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Common.File")]
    [BasedOnRow(typeof(Entities.FileRow))]
    public class FileForm
    {
        public String Filename { get; set; }
        public String OriginalName { get; set; }
        public Int32 Size { get; set; }
        public Boolean IsImage { get; set; }
        public Int16 IsActive { get; set; }
        public String Metadata { get; set; }
        public String MimeType { get; set; }
        public String OwnerTable { get; set; }
        public Int64 OwnerId { get; set; }
        public String Title { get; set; }
    }
}