namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System.Runtime.CompilerServices;

    [Imported]
    public class NotesEditor : TemplatedWidget
    {
        public NotesEditor(jQueryObject container)
            : base(container)
        {
        }
    }
}

/* 
This class has been ported to TypeScript. See OrderGrid.ts
Code below is only a reference for those who want to use Saltaralle

namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;

    [Editor, Element("<div/>")]
    public class NotesEditor : TemplatedWidget, IGetEditValue, ISetEditValue
    {
        public NotesEditor(jQueryObject container)
            : base(container)
        {
            new Toolbar(this.ById("Toolbar"), new ToolbarOptions
            {
                Buttons = new List<ToolButton>
                {
                    new ToolButton
                    {
                        Title = "Add Note",
                        CssClass = "add-button",
                        OnClick = e =>
                        {
                            e.PreventDefault();
                            AddClick();
                        }
                    }
                }
            });
        }

        protected override string GetTemplate()
        {
            return
                "<div>" +
                    "<div id='~_Toolbar'>" +
                    "</div>" +
                    "<ul id='~_NoteList'>" +
                    "</ul>" +
                "</div>";
        }

        private void UpdateContent()
        {
            var noteList = this.ById("NoteList");
            noteList.Children().Remove();

            if (items != null)
            {
                int index = 0;
                foreach (var item in items)
                {
                    var li = J("<li/>");

                    J("<div/>").AddClass("note-text").Html(item.Text ?? "")
                        .AppendTo(li);

                    J("<a/>").Attribute("href", "#").AddClass("note-date").Text(item.InsertUserDisplayName + " - " +
                        Q.FormatDate(Q.ParseISODateTime(item.InsertDate), "dd/MM/yyyy HH:mm"))
                            .Data("index", index)
                            .AppendTo(li)
                            .Click(EditClick);

                    J("<a/>").Attribute("href", "#").AddClass("note-delete").Attribute("title", "delete note")
                        .Data("index", index)
                        .AppendTo(li)
                        .Click(DeleteClick);

                    li.AppendTo(noteList);

                    index++;
                }
            }
        }

        private void AddClick()
        {
            var dlg = new NoteDialog();

            dlg.DialogTitle = "Add Note";
            dlg.OkClick = () =>
            {
                var text = dlg.Text.TrimToNull();
                if (text == null)
                    return;

                this.items = this.items ?? new List<NoteRow>();
                items.Insert(0, new NoteRow
                {
                    Text = text,
                    InsertUserDisplayName = Authorization.UserDefinition.DisplayName,
                    InsertDate = Q.Externals.FormatISODateTimeUTC(JsDate.Now)
                });

                UpdateContent();
                dlg.DialogClose();

                IsDirty = true;
                if (OnChange != null)
                    OnChange();
            };

            dlg.DialogOpen();
        }

        private void EditClick(jQueryEvent e)
        {
            e.PreventDefault();

            var index = J(e.Target).GetDataValue("index").As<int>();
            var old = items[index];

            var dlg = new NoteDialog();

            dlg.DialogTitle = "Edit Note";
            dlg.Text = old.Text;
            dlg.OkClick = () =>
            {
                var text = dlg.Text.TrimToNull();
                if (text == null)
                    return;

                items[index].Text = text;
                UpdateContent();
                dlg.DialogClose();
                IsDirty = true;
                if (OnChange != null)
                    OnChange();
            };

            dlg.DialogOpen();
        }

        private void DeleteClick(jQueryEvent e)
        {
            e.PreventDefault();

            var index = J(e.Target).GetDataValue("index").As<int>();

            Q.Confirm("Delete this note?", () =>
            {
                items.RemoveAt(index);
                UpdateContent();
                IsDirty = true;
                if (OnChange != null)
                    OnChange();
            });
        }

        private List<NoteRow> items;

        public List<NoteRow> Value
        {
            get { return items; }
            set
            {
                this.items = value ?? new List<NoteRow>();
                IsDirty = false;
                UpdateContent();
            }
        }

        public void GetEditValue(PropertyItem property, dynamic target)
        {
            target[property.Name] = this.Value;
        }

        public void SetEditValue(dynamic source, PropertyItem property)
        {
            Value = source[property.Name];
        }

        public bool IsDirty { get; set; }
        public Action OnChange { get; set; }
    }
}
*/