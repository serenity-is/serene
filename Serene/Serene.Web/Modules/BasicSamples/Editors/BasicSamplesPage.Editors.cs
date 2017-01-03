
namespace Serene.BasicSamples.Pages
{
    using System.Web.Mvc;
    using Views = MVC.Views.BasicSamples.Editors;

    public partial class BasicSamplesController : Controller
    {
        public ActionResult ChangingLookupText()
        {
            return View(Views.ChangingLookupText.Index);
        }

        public ActionResult FilteredLookupInDetailDialog()
        {
            return View(Views.FilteredLookupInDetailDialog.Index);
        }

        public ActionResult LookupFilterByMultipleValues()
        {
            return View(Views.LookupFilterByMultipleValues.Index);
        }

        public ActionResult SelectWithHardcodedValues()
        {
            return View(Views.SelectWithHardcodedValues.Index);
        }

        public ActionResult StaticTextBlock()
        {
            return View(Views.StaticTextBlock.Index);
        }
    }
}