
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
        public int ActiveSection { get; private set; }
        public int ActiveLink { get; private set; }

        public NavigationModel()
        {
            Items = TwoLevelCache.GetLocalStoreOnly("LeftNavigationModel:NavigationItems:" + (Authorization.UserId ?? "-1"), TimeSpan.Zero,
                UserPermissionRow.Fields.GenerationKey, () => 
                    NavigationHelper.GetNavigationItems(System.Web.VirtualPathUtility.ToAbsolute));

            SetActiveSectionAndLink();
        }

        private void SetActiveSectionAndLink()
        {
            string currentUrl = "";
            if (HttpContext.Current != null)
                currentUrl = HttpContext.Current.Request.Url.ToString();

            int i = 0;
            int l;
            int activeSection = -1;
            int activeLink = -1;
            int bestMatchLength = 0;
            int bestSection = -1;
            int bestLink = -1;

            foreach (var section in Items)
            {
                l = 0;
                foreach (var link in section.Children)
                {
                    var url = link.Url;

                    if (url.StartsWith("~/", StringComparison.Ordinal))
                        url = VirtualPathUtility.ToAbsolute(url);

                    if (currentUrl.IndexOf(url, StringComparison.OrdinalIgnoreCase) >= 0 &&
                        (bestMatchLength == 0 || url.Length > bestMatchLength))
                    {
                        bestSection = i;
                        bestLink = l;
                        bestMatchLength = url.Length;
                    }

                    l++;
                }
                i++;
            }

            if ((activeLink == -1 || activeSection == -1) && bestLink != -1)
            {
                activeSection = bestSection;
                activeLink = bestLink;
            }

            if (activeSection == -1 && activeLink == -1)
            {
                activeSection = 0;
                activeLink = 0;
            }

            ActiveSection = activeSection;
            ActiveLink = activeLink;
        }
    }
}