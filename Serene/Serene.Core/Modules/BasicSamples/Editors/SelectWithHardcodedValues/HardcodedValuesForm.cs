
namespace Serene.BasicSamples.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("BasicSamples.HarcodedValues")]
    public class HardcodedValuesForm
    {
        [DisplayName("Some Value")]
        [HardcodedValuesEditor]
        public String SomeValue { get; set; }
    }
}