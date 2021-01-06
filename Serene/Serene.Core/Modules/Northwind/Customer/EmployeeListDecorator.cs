using Serene.Northwind.Entities;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Reporting;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Serene.Northwind
{
    public class EmployeeListDecorator : BaseCellDecorator
    {
        public EmployeeListDecorator(ITwoLevelCache cache, ISqlConnections sqlConnections)
        {
        	Cache = cache ?? throw new ArgumentNullException(nameof(cache));
        	SqlConnections = sqlConnections ?? throw new ArgumentNullException(nameof(sqlConnections));
        }

        public ITwoLevelCache Cache { get; }
        public ISqlConnections SqlConnections { get; }

        public override void Decorate()
        {
            var idList = this.Value as IEnumerable<int>;
            if (idList == null || !idList.Any())
            {
                this.Value = "";
                return;
            }

            var byId = Cache.GetLocalStoreOnly("EmployeeListDecorator:EmployeeById", 
                TimeSpan.Zero, EmployeeRow.Fields.GenerationKey, () =>
                {
                    using (var connection = SqlConnections.NewFor<EmployeeRow>())
                    {
                        var fld = EmployeeRow.Fields;
                        return connection.List<EmployeeRow>(q => q
                            .Select(fld.EmployeeID)
                            .Select(fld.FullName))
                            .ToDictionary(x => x.EmployeeID.Value);
                    }
                });

            this.Value = String.Join(", ", idList.Select(x =>
            {
                EmployeeRow e;
                return byId.TryGetValue(x, out e) ? e.FullName : x.ToString();
            }));
        }
    }
}