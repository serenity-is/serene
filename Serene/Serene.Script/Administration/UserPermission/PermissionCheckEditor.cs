using jQueryApi;
using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace Serene.Administration
{
    [Editor]
    public class PermissionCheckEditor : CheckTreeEditor<object>
    {
        private string containsText;

        public PermissionCheckEditor(jQueryObject div)
            : base(div, null)
        {
        }

        protected override List<ToolButton> GetButtons()
        {
            return new List<ToolButton>();
        }

        protected override void CreateToolbarExtensions()
        {
            base.CreateToolbarExtensions();

            GridUtils.AddQuickSearchInputCustom(toolbar.Element, (field, text) =>
            {
                containsText = text.TrimToNull();
                view.SetItems(view.GetItems(), true);
            });
        }

        protected override bool OnViewFilter(CheckTreeItem item)
        {
            if (!base.OnViewFilter(item))
                return false;

            var contains = Q.Externals.StripDiacritics(containsText ?? "").ToUpperCase();

            if (contains.IsEmptyOrNull())
                return true;

            if (Q.Externals.StripDiacritics(item.Text ?? "").ToUpperCase().Contains(contains))
                return true;

            return false;
        }

        protected override List<CheckTreeItem> GetItems()
        {
            var list = new List<CheckTreeItem>();

            var permissions = Q.GetRemoteData<ListResponse<string>>("Administration.PermissionKeys").Entities;
            var permissionTitles = new JsDictionary<string, string>();
            for (var i = 0; i < permissions.Count; i++)
            {
                string p = permissions[i];
                permissionTitles[p] = Q.TryGetText("Permission." + p) ?? p;
            }

            permissions.Sort((x, y) => Q.Externals.TurkishLocaleCompare(
                permissionTitles[x], permissionTitles[y]));

            foreach (var permission in permissions)
            {
                list.Add(new CheckTreeItem
                {
                    Id = permission,
                    Text = permissionTitles[permission],
                });
            }

            return list;
        }
    }
}