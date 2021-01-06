using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Serene.Administration.Entities;
using Serenity;
using Serenity.Abstractions;
using Serenity.Navigation;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Security.Claims;

namespace Serene.Navigation
{
    public class NavigationModel
    {
        public IPermissionService Permissions { get; }
        public HttpContext HttpContext { get; }
        public string RequestUrl { get; }
        public PathString PathBase { get; }
        public List<NavigationItem> Items { get; private set; }
        public int[] ActivePath { get; set; }

        public NavigationModel(HttpContext httpContext)
          : this(
              httpContext?.RequestServices?.GetRequiredService<ITwoLevelCache>(),
              httpContext?.RequestServices?.GetRequiredService<IPermissionService>(),
              httpContext?.RequestServices?.GetRequiredService<ITypeSource>(),
              httpContext?.RequestServices,
              httpContext?.User,
              httpContext?.Request?.Path + httpContext?.Request?.QueryString,
              httpContext?.Request?.PathBase ?? "")
        {
        }

        public NavigationModel(ITwoLevelCache cache, IPermissionService permissions,
            ITypeSource typeSource, IServiceProvider services, ClaimsPrincipal user,
            string requestUrl, PathString pathBase)
        {
            if (cache is null)
            	throw new ArgumentNullException(nameof(cache));
            
            Items = cache.GetLocalStoreOnly("LeftNavigationModel:NavigationItems:" + 
              (user?.GetIdentifier() ?? "-1"), TimeSpan.Zero,
                UserPermissionRow.Fields.GenerationKey, () =>
                    NavigationHelper.GetNavigationItems(permissions, typeSource,
                    	services, x => x != null && x.StartsWith("~/") ?
                    		VirtualPathUtility.ToAbsolute(PathBase, x) : x));

            RequestUrl = requestUrl;
            PathBase = pathBase;
            SetActivePath();
        }

        private void SetActivePath()
        {
            string currentUrl = "";
            if (RequestUrl != null)
            {
                
                currentUrl = RequestUrl;
                if (!currentUrl.EndsWith("/") &&
                    string.Compare(currentUrl.Split('?')[0], PathBase, StringComparison.OrdinalIgnoreCase) == 0)
                    currentUrl += "/";
            }

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
                url = VirtualPathUtility.ToAbsolute(PathBase, url);

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