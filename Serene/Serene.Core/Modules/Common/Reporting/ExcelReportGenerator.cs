#if COREFX
using FastMember;
#endif
using OfficeOpenXml;
using OfficeOpenXml.Style;
using OfficeOpenXml.Table;
using Serenity.Data;
using Serenity.Reflection;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Runtime.InteropServices;

namespace Serenity.Reporting
{
    public static class ExcelReportGenerator
    {
        public static byte[] GeneratePackageBytes(List<ReportColumn> columns, IList rows,
            string sheetName = "Page1", string tableName = "Table1", TableStyles tableStyle = TableStyles.Medium2)
        {
            using (var package = GeneratePackage(columns, rows, sheetName, tableName, tableStyle))
                return package.GetAsByteArray();
        }

        public static ExcelPackage GeneratePackage(List<ReportColumn> columns, IList rows,
            string sheetName = "Page1", string tableName = "Table1", TableStyles tableStyle = TableStyles.Medium2)
        {
            var package = new ExcelPackage();
            var workbook = package.Workbook;
            var worksheet = package.Workbook.Worksheets.Add(sheetName);

            PopulateSheet(worksheet, columns, rows, tableName, tableStyle);

            return package;
        }

        private static Type[] DateTimeTypes = new[]
        {
            typeof(DateTime),
            typeof(DateTime?),
            typeof(TimeSpan),
            typeof(TimeSpan?)
        };

        private static string FixFormatSpecifier(string format, Type dataType)
        {
            if (string.IsNullOrEmpty(format))
                return format;

            if (format.IndexOf('f') >= 0 &&
                Array.IndexOf(DateTimeTypes, dataType) >= 0)
                return format.Replace('f', '0');

            return format;
        }

        public static void PopulateSheet(ExcelWorksheet worksheet, List<ReportColumn> columns, IList rows,
            string tableName = "Table1", TableStyles tableStyle = TableStyles.Medium2)
        {
            if (columns == null)
                throw new ArgumentNullException("columns");

            if (rows == null)
                throw new ArgumentNullException("rows");

            Field[] fields = null;
            TypeAccessor accessor = null;
            bool[] invalidProperty = null;

            var colCount = columns.Count;

            int endCol = colCount;
            int endRow = rows.Count + 1;

            var header = worksheet.Cells[1, 1, 1, columns.Count];
            header.LoadFromArrays(new List<object[]>
            {
                columns.Select(x => (x.Title ?? x.Name)).ToArray()
            });

            var dataList = new List<object[]>();
            foreach (var obj in rows)
            {
                var data = new object[colCount];
                var row = obj as Row;
                if (row != null)
                {
                    if (fields == null)
                    {
                        fields = new Field[colCount];
                        for (var i = 0; i < columns.Count; i++)
                        {
                            var n = columns[i].Name;
                            fields[i] = row.FindFieldByPropertyName(n) ?? row.FindField(n);
                        }
                    }
                }
                else if (obj != null)
                {
                    if (obj is IDictionary || obj is IDictionary<string, object>)
                    {
                    }
                    else if (accessor == null)
                    {
                        accessor = TypeAccessor.Create(obj.GetType());
                        invalidProperty = new bool[colCount];
                        for (var c = 0; c < colCount; c++)
                            try
                            {
                                if (accessor[obj, columns[c].Name] != null)
                                {
                                }
                            }
                            catch
                            {
                                invalidProperty[c] = true;
                            }
                    }
                }

                for (var c = 0; c < colCount; c++)
                {
                    if (row != null)
                    {
                        var field = fields[c];
                        if (!ReferenceEquals(null, field))
                            data[c] = field.AsObject(row);
                    }
                    else if (obj is IDictionary<string, object>)
                    {
                        var n = columns[c].Name;
                        var dict = obj as IDictionary<string, object>;
                        object v;
                        if (dict.TryGetValue(n, out v))
                            data[c] = v;
                    }
                    else if (obj is IDictionary)
                    {
                        var n = columns[c].Name;
                        var dict = obj as IDictionary;
                        if (dict.Contains(n))
                            data[c] = dict[n];
                    }
                    else if (obj != null)
                    {
                        if (!invalidProperty[c])
                            data[c] = accessor[obj, columns[c].Name];
                    }
                }

                dataList.Add(data);
            }

            if (rows.Count > 0)
            {
                var dataRange = worksheet.Cells[2, 1, endRow, endCol];
                dataRange.LoadFromArrays(dataList);
            }

            var tableRange = worksheet.Cells[1, 1, endRow, endCol];
            var table = worksheet.Tables.Add(tableRange, tableName);
            table.TableStyle = tableStyle;

            for (var i = 1; i <= endCol; i++)
            {
                var column = columns[i - 1];
                if (!column.Format.IsEmptyOrNull())
                    worksheet.Column(i).Style.Numberformat.Format = FixFormatSpecifier(column.Format, column.DataType);
            }

            bool gdiErrors = false;

            try
            {
                worksheet.Cells[1, 1, Math.Min(endRow, 250), endCol].AutoFitColumns(1, 100);
            }
            catch (TypeInitializationException)
            {
                gdiErrors = true;
            }

            for (var colNum = 1; colNum <= endCol; colNum++)
            {
                var col = columns[colNum - 1];
                var decorator = col.Decorator;
                if (decorator != null)
                {
                    for (var rowNum = 2; rowNum <= endRow; rowNum++)
                    {
                        var obj = rows[rowNum - 2];
                        var row = obj as Row;

                        decorator.Item = obj;
                        decorator.Name = col.Name;
                        decorator.Format = null;
#if COREFX
                        decorator.Background = null;
                        decorator.Foreground = null;
#else
                        decorator.Background = Color.Empty;
                        decorator.Foreground = Color.Empty;
#endif

                        object value = null;
                        if (row != null)
                        {
                            var field = fields[colNum - 1];
                            if (!ReferenceEquals(null, field))
                                value = field.AsObject(row);
                        }
                        else if (obj is IDictionary<string, object>)
                        {
                            var n = col.Name;
                            var dict = obj as IDictionary<string, object>;
                            if (!dict.TryGetValue(n, out value))
                                value = null;
                        }
                        else if (obj is IDictionary)
                        {
                            var n = col.Name;
                            var dict = obj as IDictionary;
                            if (dict.Contains(n))
                                value = dict[n];
                        }
                        else if (obj != null)
                        {
                            if (!invalidProperty[colNum - 1])
                                value = accessor[obj, col.Name];
                        }
                        else
                            continue;

                        decorator.Value = value;
                        decorator.Decorate();

#if COREFX
                        if (!string.IsNullOrEmpty(decorator.Background) ||
                            !string.IsNullOrEmpty(decorator.Foreground) ||
                            !Object.Equals(decorator.Value, value) ||
                            decorator.Format != null)
                        {
                            var cell = worksheet.Cells[rowNum, colNum];

                            if (!gdiErrors)
                            {
                                if (!string.IsNullOrEmpty(decorator.Background))
                                {
                                    cell.Style.Fill.PatternType = ExcelFillStyle.Solid;
                                    cell.Style.Fill.BackgroundColor.SetColor(
                                        ColorTranslator.FromHtml(decorator.Background));
                                }

                                if (!string.IsNullOrEmpty(decorator.Foreground))
                                    cell.Style.Font.Color.SetColor(
                                        ColorTranslator.FromHtml(decorator.Foreground));
                            }

                            if (decorator.Format != null)
                                cell.Style.Numberformat.Format = FixFormatSpecifier(decorator.Format, col.DataType);

                            if (!Object.Equals(decorator.Value, value))
                                cell.Value = decorator.Value;
                        }

#else
                        if (decorator.Background != Color.Empty ||
                            decorator.Foreground != Color.Empty ||
                            !Object.Equals(decorator.Value, value) ||
                            decorator.Format != null)
                        {
                            var cell = worksheet.Cells[rowNum, colNum];

                            if (!gdiErrors)
                            {
                                if (decorator.Background != Color.Empty)
                                {
                                        cell.Style.Fill.PatternType = ExcelFillStyle.Solid;
                                    cell.Style.Fill.BackgroundColor.SetColor(decorator.Background);
                                }

                                if (decorator.Foreground != Color.Empty)
                                    cell.Style.Font.Color.SetColor(decorator.Foreground);
                            }

                            if (decorator.Format != null)
                                cell.Style.Numberformat.Format = FixFormatSpecifier(decorator.Format, col.DataType);

                            if (!Object.Equals(decorator.Value, value))
                                cell.Value = decorator.Value;
                        }
#endif
                    }
                }
            }
        }
    }
}