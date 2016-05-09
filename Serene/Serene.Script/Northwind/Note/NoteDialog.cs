
namespace Serene.Northwind
{
    using System.Collections.Generic;
    using Serenity;
    using System;
    using jQueryApi.UI.Widgets;
    using System.Runtime.CompilerServices;

    [Imported]
    public class NoteDialog : TemplatedDialog
    {
        public NoteDialog()
        {
            new HtmlNoteContentEditor(this.ById("Text"), new HtmlContentEditorOptions { Rows = 12 });
        }

        protected override string GetTemplate()
        {
            return 
                "<form id='~_Form' class='s-Form'>" + 
                    "<textarea id='~_Text' class='required'></textarea>" + 
                "</form>";
        }

        protected override DialogOptions GetDialogOptions()
        {
            var opt = base.GetDialogOptions();
            opt.Buttons = new List<DialogButton>
            {
                new DialogButton {
                    Text = Q.Text("Dialogs.OkButton"),
                    Click = () => {
                        if (!ValidateForm())
                            return;

                        if (OkClick != null)
                            OkClick();
                    },
                },
                new DialogButton {
                    Text = Q.Text("Dialogs.CancelButton"),
                    Click = this.DialogClose
                }
            };
            return opt;
        }

        public string Text
        {
            get { return this.ById("Text").GetValue(); }
            set { this.ById("Text").Value(value); }
        }

        public Action OkClick;
    }
}