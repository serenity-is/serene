
namespace Serene.BasicSamples.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("BasicSamples.DragDropSample")]
    [BasedOnRow(typeof(Entities.DragDropSampleRow), CheckNames = true)]
    public class DragDropSampleForm
    {
        public String Title { get; set; }
    }
}