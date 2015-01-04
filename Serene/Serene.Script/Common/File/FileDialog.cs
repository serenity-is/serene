
namespace Serene.Common
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("FileId"), NameProperty("Filename"), IsActiveProperty("IsActive")]
    [FormKey("Common.File"), LocalTextPrefix("Common.File"), Service("Common/File")]
    public class FileDialog : EntityDialog<FileRow>
    {
    }
}