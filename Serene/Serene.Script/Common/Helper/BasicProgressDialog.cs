/* 
This class has been ported to TypeScript. See BasicProgressDialog.ts
Code below is only a reference for those who want to use Saltaralle

namespace Serene
{
    using jQueryApi.UI.Widgets;
    using Serenity;
    using System.Collections.Generic;

    public class BasicProgressDialog : TemplatedDialog<object>
    {
        public BasicProgressDialog()
        {
            var self = this;
            this.ById("ProgressBar").ProgressBar(new ProgressBarOptions
            {
                Max = 100,
                Value = 0,
                OnChange = (e, v) =>
                {
                    self.ById("ProgressLabel").Text(self.Value + " / " + self.Max);
                }
            });
        }

        public bool Cancelled { get; set; }

        public int Max
        {
            get { return this.ById("ProgressBar").ProgressBar().Max; }
            set { this.ById("ProgressBar").ProgressBar().Max = value; }
        }

        public int Value
        {
            get { return (int)this.ById("ProgressBar").As<dynamic>().progressbar("value"); }
            set { this.ById("ProgressBar").ProgressBar().Value(value); }
        }

        public string Title
        {
            get { return this.Element.Dialog().Title; }
            set { this.Element.Dialog().Title = value; }
        }

        public string CancelTitle { get; set; }

        protected override DialogOptions GetDialogOptions()
        {
            var self = this;
            var opt = base.GetDialogOptions();
            opt.Title = Q.Text("Site.BasicProgressDialog.PleaseWait");
            opt.Width = 600;
            opt.Buttons = new List<DialogButton>
            {
                new DialogButton {
                    Text = Q.Text("Dialogs.CancelButton"),
                    Click = delegate {
                        self.Cancelled = true;

                        self.Element.Closest(".ui-dialog")
                            .Find(".ui-dialog-buttonpane .ui-button")
                            .Attribute("disabled", "disabled")
                            .CSS("opacity", "0.5");

                        self.Element.Dialog().Title = CancelTitle.TrimToNull() ?? 
                            Q.Text("Site.BasicProgressDialog.CancelTitle");
                    }
                }
            };

            return opt;
        }

        protected override void InitDialog()
        {
            base.InitDialog();

            this.element.Closest(".ui-dialog").Find(".ui-dialog-titlebar-close").Hide();
        }

        protected override string GetTemplate()
        {
            return
                "<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                    "<div id='~_StatusText' class='status-text'></div>" +
                    "<div id='~_ProgressBar' class='progress-bar'>" +
                        "<div id='~_ProgressLabel' class='progress-label'></div>" +
                    "</div>" +
                "</div>";
        }
    }
}
*/