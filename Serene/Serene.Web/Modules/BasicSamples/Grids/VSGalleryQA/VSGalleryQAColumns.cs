
namespace Serene.BasicSamples.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("BasicSamples.VSGalleryQA")]
    public class VSGalleryQAColumns
    {
        [DisplayName("Thread ID"), AlignRight, Width(70), Sortable(false)]
        public int ThreadId { get; set; }
        [CssClass("wrap-text"), Width(200), Sortable(false)]
        public string Title { get; set; }
        [Sortable(false), Width(800)]
        public string Posts { get; set; }
        [DisplayName("Started By"), Width(150), Sortable(false)]
        public DateTime StartedByName { get; set; }
        [DisplayName("Started On"), Width(120), Sortable(false), DisplayFormat("dd/MM/yyyy HH:mm")]
        public DateTime StartedOn { get; set; }
        [DisplayName("Last Post On"), Width(120), Sortable(false), DisplayFormat("dd/MM/yyyy HH:mm")]
        public DateTime LastPostOn { get; set; }
    }
}