
namespace Serene.Common
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Common.File"), IdProperty("FileId"), NameProperty("Filename"), IsActiveProperty("IsActive")]
    [DialogType(typeof(FileDialog)), LocalTextPrefix("Common.File"), Service("Common/File")]
    public class FileGrid : EntityGrid<FileRow>
    {
        public FileGrid(jQueryObject container)
            : base(container)
        {
        }
    }

    // Please remove this partial class or the first line below, after you run ScriptContexts.tt
    [Imported, Serializable, PreserveMemberCase] 
    public partial class FileRow
    {
    }
}