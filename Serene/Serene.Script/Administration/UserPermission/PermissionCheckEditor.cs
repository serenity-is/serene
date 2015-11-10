using jQueryApi;
using Serenity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;

namespace Serene.Administration
{
    [Editor, IdProperty("Key")]
    public class PermissionCheckEditor : DataGrid<PermissionCheckItem>
    {
        private string containsText;
        private ILookup<string, PermissionCheckItem> byParentKey;

        public PermissionCheckEditor(jQueryObject div)
            : base(div)
        {
            JsDictionary<string, string> titleByKey;
            var permissionKeys = GetSortedGroupAndPermissionKeys(out titleByKey);
            var items = new List<PermissionCheckItem>();
            foreach (var key in permissionKeys)
                items.Add(new PermissionCheckItem
                {
                    Key = key,
                    ParentKey = GetParentKey(key),
                    Title = titleByKey[key],
                    GrantRevoke = null
                });

            byParentKey = items.ToLookup(x => x.ParentKey);

            this.View.SetItems(items, true);
        }

        protected override List<SlickColumn> GetColumns()
        {
            var columns = new List<SlickColumn>
            {
                new SlickColumn
                {
                    Title = "Permission",
                    Field = "Title",
                    Format = SlickFormatting.TreeToggle(() => this.View, 
                        getId: x => x.Key, formatter: ctx => Q.HtmlEncode(ctx.Value)),
                    Width = 435,
                    Sortable = false
                },
                new SlickColumn
                {
                    Title = "Grant",
                    Field = "Grant",
                    Format = ctx =>
                    {
                        var item = (PermissionCheckItem)ctx.Item;
                        return "<span class=\"check-box grant no-float " + (item.GrantRevoke == true ? " checked" : "") + "\"></span>";
                    },
                    Width = 65,
                    Sortable = false,
                    HeaderCssClass = "align-center",
                    CssClass = "align-center"
                }
            };

            columns.Add(new SlickColumn
            {
                Title = "Revoke",
                Field = "Revoke",
                Format = ctx =>
                {
                    var item = (PermissionCheckItem)ctx.Item;
                    return "<span class=\"check-box revoke no-float " + (item.GrantRevoke == false ? " checked" : "") + "\"></span>";
                },
                Width = 65,
                Sortable = false,
                HeaderCssClass = "align-center",
                CssClass = "align-center"
            });

            columns.Add(new SlickColumn
            {
                Title = "Effective",
                Field = "Effective",
                Format = ctx =>
                {
                    var item = (PermissionCheckItem)ctx.Item;
                    return "<span class=\"check-box no-float " + (item.GrantRevoke == false ? " checked" : "") + "\"></span>";
                },
                Width = 65,
                Sortable = false,
                HeaderCssClass = "align-center",
                CssClass = "align-center"
            });


            return columns;
        }

        private void SetItems(List<PermissionCheckItem> items)
        {
            SlickTreeHelper.SetIndents(items,
                getId: x => x.Key,
                getParentId: x => x.ParentKey,
                setCollapsed: false);

            this.View.SetItems(items, true);
        }

        protected override bool OnViewSubmit()
        {
            return false;
        }

        protected override bool OnViewFilter(PermissionCheckItem item)
        {
            if (!base.OnViewFilter(item))
                return false;

            if (!SlickTreeHelper.FilterById(item, view, getParentId: x => x.ParentKey))
                return false;

            return true;
        }

        private IEnumerable<PermissionCheckItem> EnumerateDescendants(PermissionCheckItem item)
        {
            foreach (var child in byParentKey[item.Key])
            {
                yield return child;
                foreach (var x in EnumerateDescendants(child))
                    yield return x;
            }
        }

        protected override void OnClick(jQueryEvent e, int row, int cell)
        {
            base.OnClick(e, row, cell);

            if (!e.IsDefaultPrevented())
                SlickTreeHelper.ToggleClick(e, row, cell, view, getId: x => x.Key);

            if (e.IsDefaultPrevented())
                return;

            var target = J(e.Target);

            bool? grant = target.HasClass("grant");

            if (grant.Value || target.HasClass("revoke"))
            {
                e.PreventDefault();
                var item = this.view.Rows[row];
                bool checkedOrPartial = target.HasClass("checked") || target.HasClass("partial");

                if (checkedOrPartial)
                    grant = null;
                else
                    grant = grant.Value ^ checkedOrPartial;

                view.BeginUpdate();
                try
                {
                    if (item.Key.EndsWith(":"))
                    {
                        foreach (var d in EnumerateDescendants(item).Where(x => !x.Key.EndsWith(":")))
                            if (d.GrantRevoke != grant)
                            {
                                d.GrantRevoke = grant;
                                view.UpdateItem(d.Key, d);
                            }
                    }
                    else if (item.GrantRevoke != grant)
                    {
                        item.GrantRevoke = grant;
                        view.UpdateItem(item.Key, item);
                    }
                }
                finally
                {
                    view.EndUpdate();
                }
            }
        }

        private string GetParentKey(string key)
        {
            if (key.EndsWith(":"))
                key = key.Substr(0, key.Length - 1);

            var idx = key.LastIndexOf(':');
            if (idx >= 0)
                return key.Substr(0, idx + 1);

            return null;
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

        private List<string> GetSortedGroupAndPermissionKeys(out JsDictionary<string, string> titleByKey)
        {
            var keys = Q.GetRemoteData<ListResponse<string>>("Administration.PermissionKeys").Entities;

            titleByKey = new JsDictionary<string, string>();
            var titleWithGroup = new JsDictionary<string, string>();

            foreach (var k in keys)
            {
                var s = k;
                if (string.IsNullOrEmpty(s))
                    continue;

                if (s.EndsWith(":")) // permission keys can't end with ':'
                {
                    s = s.Substr(0, s.Length - 1);
                    if (s.Length == 0)
                        continue;
                }

                if (titleByKey.ContainsKey(s))
                    continue;

                titleByKey[s] = Q.TryGetText("Permission." + s) ?? s;

                var parts = s.Split(':');
                var group = "";
                var groupTitle = "";
                for (var i = 0; i < parts.Length - 1; i++)
                {
                    group = group + parts[i] + ":";
                    titleByKey[group] = Q.TryGetText("Permission." + group) ?? parts[i];
                    groupTitle = groupTitle + titleByKey[group] + ":";
                    titleWithGroup[group] = groupTitle;
                }

                titleWithGroup[s] = groupTitle + titleByKey[s];
            }

            keys = titleByKey.Keys.ToList();
            keys.Sort((x, y) => Q.Externals.TurkishLocaleCompare(
                titleWithGroup[x], titleWithGroup[y]));

            return keys;
        }

        public List<UserPermissionRow> Value
        {
            get
            {
                var result = new List<UserPermissionRow>();

                foreach (var item in this.view.GetItems())
                    if (item.GrantRevoke != null && !item.Key.EndsWith(":"))
                        result.Add(new UserPermissionRow
                        {
                            PermissionKey = item.Key
                            // GrantRevoke = 1:0

                        });

                return result;
            }
            set
            {
                foreach (var item in this.view.GetItems())
                    item.GrantRevoke = null;

                if (value != null)
                    foreach (var row in value)
                    {
                        var r = view.GetItemById(row.PermissionKey);
                        if (r != null)
                            r.GrantRevoke = true;
                    }

                SetItems(Items);
            }
        }
    }

    [Imported, Serializable, PreserveMemberCase]
    public class PermissionCheckItem
    {
        public string ParentKey { get; set; }
        public string Key { get; set; }
        public string Title { get; set; }
        public bool? GrantRevoke { get; set; }
    }
}