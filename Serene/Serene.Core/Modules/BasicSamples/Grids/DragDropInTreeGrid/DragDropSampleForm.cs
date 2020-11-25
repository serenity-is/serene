using Serenity.ComponentModel;
using System;

namespace Serene.BasicSamples.Forms
{
    [FormScript("BasicSamples.DragDropSample")]
    [BasedOnRow(typeof(Entities.DragDropSampleRow), CheckNames = true)]
    public class DragDropSampleForm
    {
        public String Title { get; set; }
    }
}