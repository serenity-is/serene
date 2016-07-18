
namespace Serene.BasicSamples.Pages
{
    using System.Web.Mvc;
    using MyViews = MVC.Views.BasicSamples;

    [Authorize, RoutePrefix("BasicSamples"), Route("{action=index}")]
    public class BasicSamplesController : Controller
    {
        public ActionResult ChartInDialog()
        {
            return View(MyViews.Dialogs.ChartInDialog.Index);
        }

        public ActionResult CancellableBulkAction()
        {
            return View(MyViews.Grids.CancellableBulkAction.Index);
        }

        public ActionResult CloneableEntityDialog()
        {
            return View(MyViews.Dialogs.CloneableEntityDialog.Index);
        }

        public ActionResult ConditionalFormatting()
        {
            return View(MyViews.Grids.ConditionalFormatting.Index);
        }

        public ActionResult CustomLinksInGrid()
        {
            return View(MyViews.Grids.CustomLinksInGrid.Index);
        }

        public ActionResult DefaultValuesInNewDialog()
        {
            return View(MyViews.Dialogs.DefaultValuesInNewDialog.Index);
        }

        public ActionResult DialogBoxes()
        {
            return View(MyViews.Dialogs.DialogBoxes.Index);
        }

        public ActionResult FilteredLookupInDetailDialog()
        {
            return View(MyViews.Editors.FilteredLookupInDetailDialog.Index);
        }

        public ActionResult GetInsertedRecordId()
        {
            return View(MyViews.Dialogs.GetInsertedRecordId.Index);
        }

        public ActionResult GridFilteredByCriteria()
        {
            return View(MyViews.Grids.GridFilteredByCriteria.Index);
        }

        public ActionResult GroupingAndSummariesInGrid()
        {
            return View(MyViews.Grids.GroupingAndSummariesInGrid.Index);
        }

        public ActionResult InitialValuesForQuickFilters()
        {
            return View(MyViews.Grids.InitialValuesForQuickFilters.Index);
        }

        public ActionResult InlineImageInGrid()
        {
            return View(MyViews.Grids.InlineImageInGrid.Index);
        }

        public ActionResult LookupFilterByMultipleValues()
        {
            return View(MyViews.Editors.LookupFilterByMultipleValues.Index);
        }

        public ActionResult MultiColumnResponsiveDialog()
        {
            return View(MyViews.Dialogs.MultiColumnResponsiveDialog.Index);
        }

        public ActionResult ReadOnlyDialog()
        {
            return View(MyViews.Dialogs.ReadOnlyDialog.Index);
        }

        public ActionResult RemovingAddButton()
        {
            return View(MyViews.Grids.RemovingAddButton.Index);
        }

        public ActionResult ResponsiveDialog()
        {
            return View(MyViews.Dialogs.ResponsiveDialog.Index);
        }

        public ActionResult ViewWithoutID()
        {
            return View(MyViews.Grids.ViewWithoutID.Index);
        }
    }
}