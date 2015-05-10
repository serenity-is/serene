
using Serenity;
using System;
using System.Html;
using System.Runtime.CompilerServices;
namespace Serene.Northwind
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    [ColumnsKey("Northwind.Product"), Filterable, IdProperty("ProductID"), NameProperty("ProductName")]
    [DialogType(typeof(ProductDialog)), LocalTextPrefix("Northwind.Product"), Service("Northwind/Product")]
    public class ProductGrid : EntityGrid<ProductRow>
    {
        private LookupEditor supplier;
        private LookupEditor category;

        public ProductGrid(jQueryObject container)
            : base(container)
        {
        }

        protected override SlickGridOptions GetSlickOptions()
        {
            var opt = base.GetSlickOptions();
            opt.AutoEdit = true;
            opt.Editable = true;
            opt.EnableCellNavigation = true;
            opt.EnableAddRow = true;
            return opt;
        }

        protected override List<SlickColumn> GetColumns()
        {
            var columns = base.GetColumns();
            columns[1].Editor = typeof(SlickEditors.Text);
            columns[3].Editor = typeof(SlickEditors.Text);
            columns[4].Editor = typeof(SlickWidgetEditor);
            columns[4].EditorType = "Lookup";
            columns[4].EditorOptions = new LookupEditorOptions
            {
                LookupKey = "Northwind.Category"
            };
            return columns;
        }

        protected override SlickGrid CreateSlickGrid()
        {
            var grid = base.CreateSlickGrid();
            var self = this;
            grid.OnAddNewRow.Subscribe((e, args) =>
            {
                args.item.id = 100;
                self.view.AddItem(args.item);
            });
            return grid;
        }

        protected override void CreateToolbarExtensions()
        {
            base.CreateToolbarExtensions();

            supplier = Widget.Create<LookupEditor>(
                    element: e => e.AppendTo(toolbar.Element)
                        .Attribute("placeholder", "--- " + Q.Text("Db.Northwind.Product.SupplierCompanyName") + " ---"),
                    options: new LookupEditorOptions { LookupKey = "Northwind.Supplier" });

            supplier.Change(e => Refresh());

            category = Widget.Create<LookupEditor>(
                    element: e => e.AppendTo(toolbar.Element)
                        .Attribute("placeholder", "--- " + Q.Text("Db.Northwind.Product.CategoryName") + " ---"),
                    options: new LookupEditorOptions { LookupKey = "Northwind.Category" });

            category.Change(e => Refresh());
        }

        protected override bool OnViewSubmit()
        {
            if (!base.OnViewSubmit())
                return false;

            var req = (ListRequest)view.Params;
            req.EqualityFilter = req.EqualityFilter ?? new JsDictionary<string, object>();
            req.EqualityFilter["SupplierID"] = supplier.Value.ConvertToId();
            req.EqualityFilter["CategoryID"] = category.Value.ConvertToId();
            return true;
        }
    }
}

namespace Serenity
{
    using jQueryApi;
    using SlickEditors;

    public class SlickWidgetEditor : ISlickEditor
    {
        private SlickEditorOptions args;
        private Widget editor;

        public SlickWidgetEditor(SlickEditorOptions args)
        {
            this.args = args;

            if (args.Column.EditorType.IsEmptyOrNull())
                throw new InvalidOperationException(String.Format("Column {0} doesn't have editor type specified!", args.Column.EditorType));

            var editorType = EditorTypeRegistry.Get(args.Column.EditorType);
            editor = Widget.CreateOfType(editorType, element: e => e.AppendTo(args.Container), options: args.Column.EditorOptions);
            editor.Element.Focus().Select();
        }

        public void Destroy()
        {
            args = null;
            if (editor != null && editor.Element != null)
                editor.Element.Remove();
            editor = null;
        }

        public void Focus()
        {
            editor.Element.Focus();
        }

        public void LoadValue(dynamic item)
        {
            var field = args.Column.SourceItem != null ? args.Column.SourceItem.FilteringIdField ?? args.Column.Field : args.Column.Field;
            PropertyGrid.LoadEditorValue(editor, new PropertyItem { Name = field }, item);
        }

        public dynamic SerializeValue()
        {
            return null;
        }

        public bool IsValueChanged()
        {
            return false;
        }

        public void ApplyValue(dynamic item, object state)
        {
        }

        public SlickValidationResult Validate()
        {
            return new SlickValidationResult();
        }
    }
}

namespace SlickEditors
{
    [Imported]
    public interface ISlickEditor
    {
        void Destroy();
        void Focus();
        void LoadValue(dynamic value);
        dynamic SerializeValue();
        bool IsValueChanged();
        void ApplyValue(dynamic item, object state);
        SlickValidationResult Validate();
    }

    [Imported]
    public interface ISlickEditorPosition
    {
        void Position(SlickEditorPosition position);
    }

    [Imported]
    public interface ISlickEditorHideShow
    {
        void Hide();
        void Show();
    }

    [Imported, Serializable]
    public class SlickEditorOptions
    {
        public HtmlElement Container { get; set; }
        public SlickColumn Column { get; set; }
        public SlickEditorPosition Position { get; set; }
        public SlickGrid Grid { get; set; }
        SlickPositionInfo GridPosition { get; set; }
        dynamic Item { get; set; }
        Action CommitChanges { get; set; }
        Action CancelChanges { get; set; }
    }

    [Imported, Serializable]
    public class SlickValidationResult
    {
        public bool Valid { get; set; }
        [ScriptName("msg")]
        public bool Message { get; set; }
    }

    [Imported, Serializable]
    public class SlickEditorPosition
    {
        public int Left { get; set; }
        public int Top { get; set; }
    }

    [Imported, ScriptNamespace("Slick.Editors")]
    public class Integer : ISlickEditor
    {
        public Integer(SlickEditorOptions args)
        {
        }

        public void Destroy()
        {
        }

        public void Focus()
        {
        }

        public void LoadValue(dynamic value)
        {
        }

        public dynamic SerializeValue()
        {
            return null;
        }

        public bool IsValueChanged()
        {
            return false;
        }

        public void ApplyValue(dynamic item, object state)
        {
        }

        public SlickValidationResult Validate()
        {
            return null;
        }
    }

    [Imported, ScriptNamespace("Slick.Editors")]
    public class Text : ISlickEditor
    {
        public Text(SlickEditorOptions args)
        {
        }

        public void Destroy()
        {
        }

        public void Focus()
        {
        }

        public void LoadValue(dynamic value)
        {
        }

        public dynamic SerializeValue()
        {
            return null;
        }

        public bool IsValueChanged()
        {
            return false;
        }

        public void ApplyValue(dynamic item, object state)
        {
        }

        public SlickValidationResult Validate()
        {
            return null;
        }
    }

    [Imported, ScriptNamespace("Slick.Editors")]
    public class Date : ISlickEditor
    {
        public Date(SlickEditorOptions args)
        {
        }

        public void Destroy()
        {
        }

        public void Focus()
        {
        }

        public void LoadValue(dynamic value)
        {
        }

        public dynamic SerializeValue()
        {
            return null;
        }

        public bool IsValueChanged()
        {
            return false;
        }

        public void ApplyValue(dynamic item, object state)
        {
        }

        public SlickValidationResult Validate()
        {
            return null;
        }
    }

    [Imported, ScriptNamespace("Slick.Editors")]
    public class YesNoSelect : ISlickEditor
    {
        public YesNoSelect(SlickEditorOptions args)
        {
        }

        public void Destroy()
        {
        }

        public void Focus()
        {
        }

        public void LoadValue(dynamic value)
        {
        }

        public dynamic SerializeValue()
        {
            return null;
        }

        public bool IsValueChanged()
        {
            return false;
        }

        public void ApplyValue(dynamic item, object state)
        {
        }

        public SlickValidationResult Validate()
        {
            return null;
        }
    }

    [Imported, ScriptNamespace("Slick.Editors")]
    public class Checkbox : ISlickEditor
    {
        public Checkbox(SlickEditorOptions args)
        {
        }

        public void Destroy()
        {
        }

        public void Focus()
        {
        }

        public void LoadValue(dynamic value)
        {
        }

        public dynamic SerializeValue()
        {
            return null;
        }

        public bool IsValueChanged()
        {
            return false;
        }

        public void ApplyValue(dynamic item, object state)
        {
        }

        public SlickValidationResult Validate()
        {
            return null;
        }
    }

    [Imported, ScriptNamespace("Slick.Editors")]
    public class PercentComplete : ISlickEditor
    {
        public PercentComplete(SlickEditorOptions args)
        {
        }

        public void Init()
        {
        }

        public void Destroy()
        {
        }

        public void Focus()
        {
        }

        public void LoadValue(dynamic value)
        {
        }

        public dynamic SerializeValue()
        {
            return null;
        }

        public bool IsValueChanged()
        {
            return false;
        }

        public void ApplyValue(dynamic item, object state)
        {
        }

        public SlickValidationResult Validate()
        {
            return null;
        }
    }

    [Imported, ScriptNamespace("Slick.Editors")]
    public class LongText : ISlickEditor
    {
        public LongText(SlickEditorOptions args)
        {
        }

        public void Init()
        {
        }

        public void Destroy()
        {
        }

        public void Focus()
        {
        }

        public void LoadValue(dynamic value)
        {
        }

        public dynamic SerializeValue()
        {
            return null;
        }

        public bool IsValueChanged()
        {
            return false;
        }

        public void ApplyValue(dynamic item, object state)
        {
        }

        public SlickValidationResult Validate()
        {
            return null;
        }
    }
}