
namespace Serene.Northwind
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [Report, RequiredPermission(PermissionKeys.General)]
    [Category("Northwind/Orders"), DisplayName("Sales By Category")]
    public class SalesByDetailReport : IReport, IDataOnlyReport
    {
        public object GetData()
        {
            using (var connection = SqlConnections.NewFor<Entities.SalesByCategoryRow>())
            {
                var s = SalesByCategoryRow.Fields;

                return connection.List<SalesByCategoryRow>();
            }
        }

        public List<ReportColumn> GetColumnList()
        {
            return ReportColumnConverter.ObjectTypeToList(typeof(Item));
        }

        [BasedOnRow(typeof(Entities.SalesByCategoryRow))]
        public class Item
        {
            public String CategoryName { get; set; }
            public String ProductName { get; set; }
            public Decimal ProductSales { get; set; }
        }
    }
}