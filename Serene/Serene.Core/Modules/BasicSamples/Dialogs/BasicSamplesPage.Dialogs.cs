using Microsoft.AspNetCore.Mvc;
using Views = MVC.Views.BasicSamples.Dialogs;

namespace Serene.BasicSamples.Pages
{
    public partial class BasicSamplesController : Controller
    {
        public ActionResult ChartInDialog()
        {
            return View(Views.ChartInDialog.Index);
        }

        public ActionResult CloneableEntityDialog()
        {
            return View(Views.CloneableEntityDialog.Index);
        }

        public ActionResult DefaultValuesInNewDialog()
        {
            return View(Views.DefaultValuesInNewDialog.Index);
        }

        public ActionResult DialogBoxes()
        {
            return View(Views.DialogBoxes.Index);
        }

        [Route("{orderID?}")]
        public ActionResult EntityDialogAsPanel(int? orderID)
        {
            return View(Views.EntityDialogAsPanel.Index, orderID);
        }

        public ActionResult GetInsertedRecordId()
        {
            return View(Views.GetInsertedRecordId.Index);
        }

        public ActionResult PopulateLinkedData()
        {
            return View(Views.PopulateLinkedData.Index);
        }

        public ActionResult ReadOnlyDialog()
        {
            return View(Views.ReadOnlyDialog.Index);
        }

        public ActionResult OtherFormInTab()
        {
            return View(Views.OtherFormInTab.Index);
        }

        public ActionResult OtherFormInTabOneBar()
        {
            return View(Views.OtherFormInTabOneBar.Index);
        }

        public ActionResult SerialAutoNumber()
        {
            return View(Views.SerialAutoNumber.Index);
        }
    }
}