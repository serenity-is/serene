using Serene.Northwind.Entities;
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
    [Category("Northwind/Orders"), DisplayName("Sales By Category")]
    public class SalesByDetailReport : IReport, IDataOnlyReport
    {
        protected ISqlConnections SqlConnections { get; }
        protected ITextLocalizer Localizer { get; }
        protected IServiceProvider ServiceProvider { get; }

        public SalesByDetailReport(ISqlConnections sqlConnections, ITextLocalizer localizer, IServiceProvider serviceProvider)
        {
            SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
            Localizer = localizer ?? throw new ArgumentNullException(nameof(localizer));
            ServiceProvider = serviceProvider ?? throw new ArgumentNullException(nameof(serviceProvider));
        }

        public object GetData()
        {
            using var connection = SqlConnections.NewFor<Entities.SalesByCategoryRow>();
            var s = SalesByCategoryRow.Fields;
            return connection.List<SalesByCategoryRow>();
        }

        public List<ReportColumn> GetColumnList()
        {
            return ReportColumnConverter.ObjectTypeToList(typeof(Item), ServiceProvider, Localizer);
        }

        [BasedOnRow(typeof(Entities.SalesByCategoryRow), CheckNames = true)]
        public class Item
        {
            public String CategoryName { get; set; }
            public String ProductName { get; set; }
            public Decimal ProductSales { get; set; }
        }
    }
}