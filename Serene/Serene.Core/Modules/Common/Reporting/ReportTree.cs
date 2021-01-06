using Serenity;
using Serenity.Reporting;
using System;
using System.Collections.Generic;

namespace Serene
{
    public class ReportTree
    {
        public Category Root { get; set; }

        public ReportTree()
        {
            Root = new Category();
        }

        public class Category
        {
            public string Key { get; set; }
            public string Title { get; set; }
            public List<Category> SubCategories { get; private set; }
            public List<ReportRegistry.Report> Reports { get; private set; }

            public Category()
            {
                SubCategories = new List<Category>();
                Reports = new List<ReportRegistry.Report>();
            }
        }

        public static ReportTree FromList(IEnumerable<ReportRegistry.Report> reports, ITextLocalizer localizer,
            string rootPath = null, string categoryOrder = null)
        {
            if (reports == null)
                throw new ArgumentNullException("reports");

            rootPath = rootPath ?? "";
            categoryOrder = categoryOrder ?? "";

            var tree = new ReportTree();

            var categoryByKey = new Dictionary<string, ReportTree.Category>(StringComparer.CurrentCultureIgnoreCase);

            foreach (var report in reports)
            {
                ReportTree.Category category;
                if (categoryByKey.TryGetValue(report.Category.Key ?? "", out category))
                {
                    category.Reports.Add(report);
                    continue;
                }

                var parts = (report.Category.Key ?? "Other")
                    .Split(new char[] { '/' }, StringSplitOptions.RemoveEmptyEntries);

                string current = "";
                category = null;
                foreach (var part in parts)
                {
                    string prior = current;

                    if (current.Length > 0)
                        current += "/";

                    current += part;

                    if (current.Length <= rootPath.Length)
                        continue;

                    if (!categoryByKey.TryGetValue(current ?? "", out category))
                    {
                        category = new ReportTree.Category();
                        category.Key = current;
                        category.Title = ReportRegistry.GetReportCategoryTitle(current, localizer);
                        categoryByKey[current] = category;

                        if (!categoryByKey.ContainsKey(prior))
                            tree.Root.SubCategories.Add(category);
                        else
                        {
                            var x = categoryByKey[prior];
                            x.SubCategories.Add(category);
                        }
                    }
                }

                if (category == null)
                    tree.Root.Reports.Add(report);
                else
                    category.Reports.Add(report);
            }

            var order = new Dictionary<string, int>(StringComparer.OrdinalIgnoreCase);
            var i = 0;
            foreach (var x in categoryOrder.Split(new char[] { ';' }))
            {
                var xt = x.TrimToNull();
                if (xt != null)
                    order[xt] = i++;
            }

            Comparison<ReportTree.Category> sort = (x, y) =>
            {
                var c = 0;

                if (x.Key != y.Key)
                {
                    var c1 = order.ContainsKey(x.Key) ? (Int32?)order[x.Key] : null;
                    var c2 = order.ContainsKey(y.Key) ? (Int32?)order[y.Key] : null;
                    if (c1 != null && c2 != null)
                        c = c1.Value - c2.Value;
                    else if (c1 != null)
                        c = -1;
                    else if (c2 != null)
                        c = 1;
                }

                if (c == 0)
                    c = String.Compare(x.Title, y.Title, StringComparison.CurrentCultureIgnoreCase);

                return c;
            };

            foreach (var category in categoryByKey.Values)
                if (category.SubCategories != null)
                    category.SubCategories.Sort(sort);

            tree.Root.SubCategories.Sort(sort);

            return tree;
        }
    }
}