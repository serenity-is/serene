using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.PropertyGrid;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Serenity.Reporting
{
    public class DynamicDataReport : IDataOnlyReport
    {
        public IEnumerable Data { get; private set; }
        public IEnumerable<string> ColumnList { get; set; }
        public Type ColumnsType { get; private set; }

        public DynamicDataReport(IEnumerable data, IEnumerable<string> columnList, Type columnsType)
        {
            if (data == null)
                throw new ArgumentNullException("data");

            this.Data = data;
            this.ColumnList = columnList ?? new List<string>();
            this.ColumnsType = columnsType;
        }

        public IEnumerable GetData()
        {
            return Data;
        }

        public List<ReportColumn> GetColumnList()
        {
            var list = new List<ReportColumn>();

            if (!ColumnList.Any())
                return list;

            IDictionary<string, PropertyItem> propertyItems = null;
            Row basedOnRow = null;

            if (ColumnsType != null)
            {
                propertyItems = LocalCache.Get("DynamicDataReport:Columns:" + ColumnsType.FullName, TimeSpan.Zero,
                    () => PropertyItemHelper.GetPropertyItemsFor(ColumnsType).ToDictionary(x => x.Name));

                var basedOnAttr = ColumnsType.GetCustomAttribute<BasedOnRowAttribute>();
                if (basedOnAttr != null && 
                    basedOnAttr.RowType != null && 
                    typeof(Row).IsAssignableFrom(basedOnAttr.RowType))
                {
                    basedOnRow = (Row)Activator.CreateInstance(basedOnAttr.RowType);
                }
            }

            foreach (var columnName in ColumnList)
            {
                PropertyItem item;
                if (!propertyItems.TryGetValue(columnName, out item))
                    continue;

                var basedOnField = basedOnRow == null ? (Field)null :
                    (basedOnRow.FindField(columnName) ?? basedOnRow.FindFieldByPropertyName(columnName));

                list.Add(FromPropertyItem(item, basedOnField));
            }

            return list;
        }

        private ReportColumn FromPropertyItem(PropertyItem item, Field field)
        {
            var result = new ReportColumn();
            result.Name = item.Name;
            result.Title = item.Title ?? item.Name;
            if (result.Title != null)
                result.Title = LocalText.TryGet(result.Title) ?? result.Title;

            if (item.Width != null)
                result.Width = item.Width;

            if (!string.IsNullOrWhiteSpace(item.DisplayFormat))
                result.Format = item.DisplayFormat;
            else
            {
                var dtf = field as DateTimeField;
                if (!ReferenceEquals(null, dtf) &&
                    dtf.DateTimeKind != DateTimeKind.Unspecified)
                {
                    result.Format = "dd/MM/yyyy HH:mm";
                }
                else if (!ReferenceEquals(null, dtf))
                {
                    result.Format = "dd/MM/yyyy";
                }
            }

            var enumField = field as IEnumTypeField;
            if (enumField != null && enumField.EnumType != null)
            {
                result.Decorator = new EnumDecorator(enumField.EnumType);
            }

            if (!ReferenceEquals(null, field))
            {
                if (result.Title == null)
                    result.Title = field.Title;

                if (result.Width == null && field is StringField && field.Size != 0)
                    result.Width = field.Size;
            }

            result.DataType = !ReferenceEquals(null, field) ? field.ValueType : null;

            return result;
        }
    }
}