
namespace Serene.BasicSamples.Pages
{

    using Views = MVC.Views.BasicSamples.Grids;
    using Microsoft.AspNetCore.Mvc;

    public partial class BasicSamplesController : Controller
    {
        public ActionResult CancellableBulkAction()
        {
            return View(Views.CancellableBulkAction.Index);
        }

        public ActionResult ConditionalFormatting()
        {
            return View(Views.ConditionalFormatting.Index);
        }

        public ActionResult CustomLinksInGrid()
        {
            return View(Views.CustomLinksInGrid.Index);
        }

        public ActionResult DragDropInTreeGrid()
        {
            Repositories.DragDropSampleRepository.PopulateInitialItems();
            return View(Views.DragDropInTreeGrid.Index);
        }

        public ActionResult EnablingRowSelection()
        {
            return View(Views.EnablingRowSelection.Index);
        }

        public ActionResult GridFilteredByCriteria()
        {
            return View(Views.GridFilteredByCriteria.Index);
        }

        public ActionResult GroupingAndSummariesInGrid()
        {
            return View(Views.GroupingAndSummariesInGrid.Index);
        }

        public ActionResult InitialValuesForQuickFilters()
        {
            return View(Views.InitialValuesForQuickFilters.Index);
        }

        public ActionResult InlineActionButtons()
        {
            return View(Views.InlineActionButtons.Index);
        }

        public ActionResult InlineImageInGrid()
        {
            return View(Views.InlineImageInGrid.Index);
        }

        public ActionResult ProductExcelImport()
        {
            return View(Views.ProductExcelImport.Index);
        }

        public ActionResult QuickFilterCustomization()
        {
            return View(Views.QuickFilterCustomization.Index);
        }

        public ActionResult RemovingAddButton()
        {
            return View(Views.RemovingAddButton.Index);
        }

        public ActionResult StoredProcedureGrid()
        {
            return View(Views.StoredProcedureGrid.Index);
        }

        public ActionResult TreeGrid()
        {
            return View(Views.TreeGrid.Index);
        }

        public ActionResult ViewWithoutID()
        {
            return View(Views.ViewWithoutID.Index);
        }
    }
}