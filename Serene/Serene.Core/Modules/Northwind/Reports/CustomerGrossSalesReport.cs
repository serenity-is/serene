using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serene.Northwind
{
    [Report, RequiredPermission(PermissionKeys.General)]
    [Category("Northwind/Orders"), DisplayName("Customer Gross Sales")]
    public class CustomerGrossSalesReport : IReport, IDataOnlyReport
    {
        protected ISqlConnections SqlConnections { get; }
        protected ITextLocalizer Localizer { get; }
        protected IServiceProvider ServiceProvider { get; }

        public CustomerGrossSalesReport(ISqlConnections sqlConnections, 
            ITextLocalizer localizer, IServiceProvider serviceProvider)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
            Localizer = localizer ?? throw new ArgumentNullException(nameof(localizer));
            ServiceProvider = serviceProvider ?? throw new ArgumentNullException(nameof(serviceProvider));
        }

        [DisplayName("Start Date")]
        public DateTime? StartDate { get; set; }

        [DisplayName("End Date")]
        public DateTime? EndDate { get; set; }

        public object GetData()
        {
            using (var connection = SqlConnections.NewFor<Entities.SalesByCategoryRow>())
            {
                return connection.Query<Item>("CustomerGrossSales",
                    param: new
                    {
                        startDate = StartDate,
                        endDate = EndDate
                    },
                    commandType: System.Data.CommandType.StoredProcedure);
            }
        }

        public List<ReportColumn> GetColumnList()
        {
            return ReportColumnConverter.ObjectTypeToList(typeof(Item), ServiceProvider, Localizer);
        }

        [BasedOnRow(typeof(Northwind.Entities.CustomerGrossSalesRow), CheckNames = true)]
        public class Item
        {
            public string CustomerId { get; set; }
            public string ContactName { get; set; }
            public int? ProductId { get; set; }
            public string ProductName { get; set; }
            [CellDecorator(typeof(AmountDecorator))]
            public decimal GrossAmount { get; set; }
        }

        public class AmountDecorator : BaseCellDecorator
        {
            public override void Decorate()
            {
                var item = this.Item as Item;

                if (item.GrossAmount > 1000)
                    Foreground = "#ff0000";
                else if (item.GrossAmount > 500)
                    Foreground = "#ffa500";
            }
        }
    }
}