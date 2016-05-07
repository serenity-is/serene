/* 
This sample has been ported to TypeScript. See GroupingAndSummariesInGrid.ts
Code below is only a reference for those who want to use Saltaralle

using jQueryApi;
using Serene.Northwind;
using Serenity;
using System.Collections.Generic;
using System.Linq;

namespace Serene.BasicSamples
{
    public class GroupingAndSummariesInGrid : ProductGrid
    {
        public GroupingAndSummariesInGrid(jQueryObject container)
            : base(container)
        {
        }

        /// <summary>
        /// We are setting aggregators (summaries) while creating grid.
        /// Due to a customization in Serenity, SlickGrid grouping summaries
        /// also uses these aggregators by default.
        /// </summary>
        protected override SlickGrid CreateSlickGrid()
        {
            var grid = base.CreateSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.RegisterPlugin(new SlickGroupItemMetadataProvider());

            view.SetSummaryOptions(new SlickSummaryOptions
            {
                Aggregators = new List<SlickAggregator>
                {
                    new SlickAvg(ProductRow.Fields.UnitPrice),
                    new SlickSum(ProductRow.Fields.UnitsInStock),
                    new SlickMax(ProductRow.Fields.UnitsOnOrder),
                    new SlickAvg(ProductRow.Fields.ReorderLevel)
                }
            });

            return grid;
        }

        /// <summary>
        /// It is optional to set group total formatter for columns.
        /// Serenity shows total as a number and type of total as a hint
        /// by default. Here we show Max/Avg labels for UnitsOnOrder and
        /// ReorderLevel columns
        /// </summary>
        protected override List<SlickColumn> GetColumns()
        {
            var columns = base.GetColumns();

            columns.Single(x => x.Field == ProductRow.Fields.UnitsOnOrder)
                .GroupTotalsFormatter = (totals, col) =>
                {
                    return totals.Max != null ?
                        ("max: " + (totals.Max[col.Field] ?? "")) : "";
                };

            columns.Single(x => x.Field == ProductRow.Fields.ReorderLevel)
                .GroupTotalsFormatter = (totals, col) =>
                {
                    return totals.Avg != null ? 
                        ("avg: " + (Q.FormatNumber(totals.Avg[col.Field].As<double>(), "0.") ?? "")) : "";
                };

            return columns;
        }

        /// <summary>
        /// Show bottom grand summary footer
        /// </summary>
        protected override SlickGridOptions GetSlickOptions()
        {
            var opt = base.GetSlickOptions();
            opt.ShowFooterRow = true;
            return opt;
        }

        /// <summary>
        /// Disable paging as this feature only works client side
        /// </summary>
        protected override bool UsePager()
        {
            return false;
        }

        protected override List<ToolButton> GetButtons()
        {
            return new List<ToolButton>
            {
                new ToolButton
                {
                    Title = "Group By Category",
                    CssClass = "expand-all-button",
                    OnClick = delegate
                    {
                        view.SetGrouping(new List<SlickGroupInfo<ProductRow>>
                        {
                            new SlickGroupInfo<ProductRow>
                            {
                                Getter = ProductRow.Fields.CategoryName
                            }
                        });
                    }
                },
                new ToolButton
                {
                    Title = "Group By Category and Supplier",
                    CssClass = "expand-all-button",
                    OnClick = delegate
                    {
                        view.SetGrouping(new List<SlickGroupInfo<ProductRow>>
                        {
                            new SlickGroupInfo<ProductRow>
                            {
                                Formatter = x => "Category: " + x.Value + " (" + x.Count + " items)",
                                Getter = ProductRow.Fields.CategoryName
                            },
                            new SlickGroupInfo<ProductRow>
                            {
                                Formatter = x => "Supplier: " + x.Value + " (" + x.Count + " items)",
                                Getter = ProductRow.Fields.SupplierCompanyName
                            }
                        });
                    }
                },
                new ToolButton
                {
                    Title = "No Grouping",
                    CssClass = "collapse-all-button",
                    OnClick = delegate
                    {
                        view.SetGrouping(new List<SlickGroupInfo<ProductRow>>
                        {
                        });
                    }
                }
            };
        }
    }
}
*/