/* 
This class has been ported to TypeScript. See MultiColumnDialog.ts
Code below is only a reference for those who want to use Saltaralle

using jQueryApi;
using Serene.Northwind;
using Serenity;

namespace Serene.BasicSamples
{
    /// <summary>
    /// Styling for columns is done with CSS in site.basicsamples.less file.
    /// When comparing this to MultiColumnDialog sample, you may notice that
    /// this version requires much less C# and CSS code.
    /// </summary>
    [Responsive]
    public class MultiColumnResponsiveDialog : OrderDialog
    {
        public MultiColumnResponsiveDialog()
        {
        }
    }

    [DialogType(typeof(MultiColumnResponsiveDialog))]
    public class MultiColumnResponsiveGrid : OrderGrid
    {
        public MultiColumnResponsiveGrid(jQueryObject container)
            : base(container)
        {
        }
    }
}
*/