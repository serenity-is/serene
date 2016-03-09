using jQueryApi;
using Serene.Northwind;
using Serenity;
using System;
using System.Linq;
using System.Collections.Generic;

namespace Serene.BasicSamples
{
    public class DefaultValuesInNewGrid : OrderGrid
    {
        public DefaultValuesInNewGrid(jQueryObject container)
            : base(container)
        {
        }

        /// <summary>
        /// This method is called when New Item button is clicked.
        /// By default, it calls EditItem with an empty entity.
        /// This is a good place to fill in default values for New Item button.
        /// </summary>
        protected override void AddButtonClick()
        {
            EditItem(new OrderRow
            {
                CustomerID = "ANTON",
                RequiredDate = Q.FormatDate(JsDate.Now, "yyyy-MM-dd"),
                EmployeeID = EmployeeRow.Lookup.Items.First(x => 
                    x.FullName == "Robert King").EmployeeID,
                ShipVia = ShipperRow.Lookup.Items.First(x => 
                    x.CompanyName == "Speedy Express").ShipperID
            });
        }

        protected override List<ToolButton> GetButtons()
        {
            // preserving default New Item button
            var buttons = base.GetButtons();

            buttons.Add(new ToolButton
            {
                Title = "Add Order from the Queen",
                CssClass = "add-button",
                OnClick = delegate
                {
                    // using EditItem method as a shortcut to create a new Order dialog,
                    // bind to its events, load our order row, and open dialog
                    EditItem(new OrderRow
                    {
                        CustomerID = "QUEEN",
                        EmployeeID = EmployeeRow.Lookup.Items.First(x =>
                            x.FullName == "Nancy Davolio").EmployeeID,
                        ShipVia = ShipperRow.Lookup.Items.First(x =>
                            x.CompanyName == "United Package").ShipperID
                    });
                }
            });

            buttons.Add(new ToolButton
            {
                Title = "Add Order with 5 Chai by Laura",
                CssClass = "add-note-button",
                OnClick = delegate
                {
                    // we could use EditItem here too, but for demonstration
                    // purposes we are manually creating dialog this time
                    var dlg = new OrderDialog();

                    // let grid watch for changes to manually created dialog, 
                    // so when a new item is saved, grid can refresh itself
                    InitEntityDialog(dlg);

                    // get a reference to product Chai
                    var chai = ProductRow.Lookup.Items.First(x =>
                        x.ProductName == "Chai");

                    // LoadEntityAndOpenDialog, loads an OrderRow 
                    // to dialog and opens it
                    dlg.LoadEntityAndOpenDialog(new OrderRow
                    {
                        CustomerID = "GOURL",
                        EmployeeID = EmployeeRow.Lookup.Items.First(x => 
                            x.FullName == "Laura Callahan").EmployeeID,
                        DetailList = new List<OrderDetailRow>
                        {
                            new OrderDetailRow
                            {
                                ProductID = chai.ProductID,
                                ProductName = chai.ProductName,
                                UnitPrice = chai.UnitPrice,
                                Quantity = 5,
                                LineTotal = chai.UnitPrice * 5
                            }
                        }
                    });
                }
            });

            return buttons;
        }
    }
}