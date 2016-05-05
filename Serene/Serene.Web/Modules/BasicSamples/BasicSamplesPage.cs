
namespace Serene.BasicSamples.Pages
{
    using System.Web.Mvc;

    [Authorize, RoutePrefix("BasicSamples"), Route("{action=index}")]
    public class BasicSamplesController : Controller
    {
        public ActionResult ChartInDialog()
        {
            return View(MVC.Views.BasicSamples.ChartInDialog);
        }

        public ActionResult CancellableBulkAction()
        {
            return View(MVC.Views.BasicSamples.Grids.CancellableBulkAction.CancellableBulkActionView);
        }

        public ActionResult CloneableEntityDialog()
        {
            return View(MVC.Views.BasicSamples.CloneableEntityDialog);
        }

        public ActionResult DefaultValuesInNewDialog()
        {
            return View(MVC.Views.BasicSamples.DefaultValuesInNewDialog);
        }

        public ActionResult FilteredLookupInDetailDialog()
        {
            return View(MVC.Views.BasicSamples.FilteredLookupInDetailDialog);
        }

        public ActionResult GridFilteredByCriteria()
        {
            return View(MVC.Views.BasicSamples.GridFilteredByCriteria);
        }

        public ActionResult GroupingAndSummariesInGrid()
        {
            return View(MVC.Views.BasicSamples.GroupingAndSummariesInGrid);
        }

        public ActionResult LookupFilterByMultipleValues()
        {
            return View(MVC.Views.BasicSamples.LookupFilterByMultipleValues);
        }

        public ActionResult MultiColumnDialog()
        {
            return View(MVC.Views.BasicSamples.MultiColumnDialog);
        }

        public ActionResult MultiColumnResponsiveDialog()
        {
            return View(MVC.Views.BasicSamples.MultiColumnResponsiveDialog);
        }

        public ActionResult ResponsiveDialog()
        {
            return View(MVC.Views.BasicSamples.ResponsiveDialog);
        }

        public ActionResult ViewWithoutID()
        {
            return View(MVC.Views.BasicSamples.ViewWithoutID);
        }
    }
}