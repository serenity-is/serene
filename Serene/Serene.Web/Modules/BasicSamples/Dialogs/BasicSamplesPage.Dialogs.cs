﻿
namespace Serene.BasicSamples.Pages
{
    using System.Web.Mvc;
    using Views = MVC.Views.BasicSamples.Dialogs;

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

        [Route("EntityDialogAsPanel/{orderID=null}")]
        public ActionResult EntityDialogAsPanel(int? orderID)
        {
            return View(Views.EntityDialogAsPanel.Index, orderID);
        }

        public ActionResult GetInsertedRecordId()
        {
            return View(Views.GetInsertedRecordId.Index);
        }

        public ActionResult MultiColumnResponsiveDialog()
        {
            return View(Views.MultiColumnResponsiveDialog.Index);
        }

        public ActionResult PopulateLinkedData()
        {
            return View(Views.PopulateLinkedData.Index);
        }

        public ActionResult ReadOnlyDialog()
        {
            return View(Views.ReadOnlyDialog.Index);
        }

        public ActionResult ResponsiveDialog()
        {
            return View(Views.ResponsiveDialog.Index);
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