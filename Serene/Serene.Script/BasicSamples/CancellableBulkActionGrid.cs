
namespace Serene.BasicSamples
{
    using jQueryApi;
    using Serenity;
    using System.Collections.Generic;

    public class CancellableBulkActionGrid : Northwind.OrderGrid
    {
        private GridRowSelectionMixin rowSelection;

        public CancellableBulkActionGrid(jQueryObject container)
            : base(container)
        {
        }

        protected override void CreateToolbarExtensions()
        {
            base.CreateToolbarExtensions();

            rowSelection = new GridRowSelectionMixin(this);
        }

        protected override List<ToolButton> GetButtons()
        {
            return new List<ToolButton>
            { 
                new ToolButton
                {
                    Title = "Perform Bulk Action on Selected Orders",
                    CssClass = "send-button",
                    OnClick = delegate
                    {
                        if (!this.OnViewSubmit())
                            return;

                        var action = new OrderBulkAction();
                        action.Done += rowSelection.ResetCheckedAndRefresh;
                        action.Execute(rowSelection.GetSelectedKeys());
                    }
                }
            };
        }

        protected override List<SlickColumn> GetColumns()
        {
            var columns = base.GetColumns();
            columns.Insert(0, GridRowSelectionMixin.CreateSelectColumn(() => rowSelection));
            return columns;
        }

        protected override SlickRemoteViewOptions GetViewOptions()
        {
            var opt = base.GetViewOptions();
            opt.RowsPerPage = 2500;
            return opt;
        }
    }
}