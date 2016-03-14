
namespace Serene.Navigation
{
    using Serene.Administration.Entities;
    using Serenity;
    using Serenity.Navigation;
    using System;
    using System.Collections.Generic;
    using System.Web;

    public partial class NavigationModel
    {
        public List<NavigationItem> Items { get; private set; }
        public int[] ActivePath { get; set; }

        public NavigationModel()
        {
            Items = TwoLevelCache.GetLocalStoreOnly("LeftNavigationModel:NavigationItems:" + (Authorization.UserId ?? "-1"), TimeSpan.Zero,
                UserPermissionRow.Fields.GenerationKey, () =>
                    NavigationHelper.GetNavigationItems(x => 
                        x != null && x.StartsWith("~/") ? VirtualPathUtility.ToAbsolute(x) : x));

            SetActivePath();
        }

        private void SetActivePath()
        {
            string currentUrl = "";
            if (HttpContext.Current != null)
                currentUrl = HttpContext.Current.Request.Url.ToString();

            int[] currentPath = new int[10];
            int[] bestMatch = null;
            int bestMatchLength = 0;

            foreach (var item in Items)
                SearchActivePath(item, currentUrl, currentPath, 0, ref bestMatch, ref bestMatchLength);

            ActivePath = bestMatch == null ? new int[10] { -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 } : bestMatch;
        }

        private void SearchActivePath(NavigationItem link, string currentUrl, int[] currentPath, int depth,
            ref int[] bestMatch, ref int bestMatchLength)
        {
            currentPath[depth + 1] = 0;
            var url = link.Url ?? "";

            if (url != null && url.StartsWith("~/", StringComparison.Ordinal))
                url = VirtualPathUtility.ToAbsolute(url);

            if (currentUrl.IndexOf(url, StringComparison.OrdinalIgnoreCase) >= 0 &&
                (bestMatchLength == 0 || url.Length > bestMatchLength))
            {
                bestMatch = (int[])currentPath.Clone();
                bestMatchLength = url.Length;
            }

            if (depth <= 9)
            {
                foreach (var child in link.Children)
                    SearchActivePath(child, currentUrl, currentPath, depth + 1, ref bestMatch, ref bestMatchLength);
            }

            currentPath[depth]++;
        }
    }
}