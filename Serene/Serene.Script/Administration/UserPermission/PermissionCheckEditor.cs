using jQueryApi;
using Serenity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;

namespace Serene.Administration
{
    [Editor, IdProperty("Key")]
    public class PermissionCheckEditor : DataGrid<PermissionCheckItem, PermissionCheckEditorOptions>
    {
        private string containsText;
        private ILookup<string, PermissionCheckItem> byParentKey;
        private JsDictionary<string, bool> rolePermissions;

        public PermissionCheckEditor(jQueryObject div, PermissionCheckEditorOptions opt)
            : base(div, opt)
        {
            rolePermissions = new JsDictionary<string, bool>();

            JsDictionary<string, string> titleByKey;
            var permissionKeys = GetSortedGroupAndPermissionKeys(out titleByKey);
            var items = new List<PermissionCheckItem>();
            foreach (var key in permissionKeys)
                items.Add(new PermissionCheckItem
                {
                    Key = key,
                    ParentKey = GetParentKey(key),
                    Title = titleByKey[key],
                    GrantRevoke = null,
                    IsGroup = key.EndsWith(":")
                });

            byParentKey = items.ToLookup(x => x.ParentKey);

            SetItems(items);
        }

        private string GetItemGrantRevokeClass(PermissionCheckItem item, bool grant)
        {
            if (!item.IsGroup)
                return item.GrantRevoke == grant ? " checked" : "";

            var desc = GetDescendants(item);
            var granted = desc.Where(x => x.GrantRevoke == grant);
            if (!granted.Any())
                return "";
            else if (desc.Count() == granted.Count())
                return "checked";
            else
                return "checked partial";
        }

        private string GetItemEffectiveClass(PermissionCheckItem item)
        {
            if (item.IsGroup)
            {
                var desc = GetDescendants(item);
                var grantCount = desc.Count(x => x.GrantRevoke == true ||
                    (x.GrantRevoke == null && rolePermissions[x.Key]));

                if (grantCount == desc.Count || desc.Count == 0)
                    return "allow";
                else if (grantCount == 0)
                    return "deny";
                else
                    return "partial";
            }
            else
            {
                bool granted = item.GrantRevoke == true ||
                    (item.GrantRevoke == null && rolePermissions[item.Key]);

                return granted ? " allow" : " deny";
            }
        }

        protected override List<SlickColumn> GetColumns()
        {
            var columns = new List<SlickColumn>
            {
                new SlickColumn
                {
                    Title = Q.Text("Site.UserPermissionDialog.Permission"),
                    Field = "Title",
                    Format = SlickFormatting.TreeToggle(
                        getView: () => this.View, 
                        getId: x => x.Key, 
                        formatter: ctx => {
                            var item = (PermissionCheckItem)ctx.Item;
                            var klass = GetItemEffectiveClass(item);
                            return "<span class='effective-permission " + klass + "'>" +
                                Q.HtmlEncode(ctx.Value) + "</span>";
                        }),
                    Width = 495,
                    Sortable = false
                },
                new SlickColumn
                {
                    Title = Q.Text("Site.UserPermissionDialog.Grant"),
                    Field = "Grant",
                    Format = ctx =>
                    {
                        var item = (PermissionCheckItem)ctx.Item;
                        string klass= GetItemGrantRevokeClass(item, true);
                        return "<span class='check-box grant no-float " +  klass + "'></span>";
                    },
                    Width = 65,
                    Sortable = false,
                    HeaderCssClass = "align-center",
                    CssClass = "align-center"
                }
            };

            if (options.ShowRevoke)
            {
                columns.Add(new SlickColumn
                {
                    Title = Q.Text("Site.UserPermissionDialog.Revoke"),
                    Field = "Revoke",
                    Format = ctx =>
                    {
                        var item = (PermissionCheckItem)ctx.Item;
                        string klass = GetItemGrantRevokeClass(item, false);
                        return "<span class=\"check-box revoke no-float " + klass + "\"></span>";
                    },
                    Width = 65,
                    Sortable = false,
                    HeaderCssClass = "align-center",
                    CssClass = "align-center"
                });
            }

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

            if (!string.IsNullOrEmpty(containsText))
            {
                return (MatchContains(item)) ||
                        (item.IsGroup && GetDescendants(item, false).Any(MatchContains));
            }

            return true;
        }

        private bool MatchContains(PermissionCheckItem item)
        {
            return Q.Externals.StripDiacritics(item.Title ?? "").ToLower()
                .IndexOf(containsText) >= 0;
        }

        private List<PermissionCheckItem> GetDescendants(PermissionCheckItem item, bool excludeGroups = true)
        {
            var result = new List<PermissionCheckItem>();
            var stack = new Stack<PermissionCheckItem>();

            stack.Push(item);

            while (stack.Count > 0)
            {
                var i = stack.Pop();

                foreach (var child in byParentKey[i.Key])
                {
                    if (!excludeGroups || !child.IsGroup)
                        result.Add(child);

                    stack.Push(child);
                }
            }

            return result;
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
                var item = Rows[row];
                bool checkedOrPartial = target.HasClass("checked") || target.HasClass("partial");

                if (checkedOrPartial)
                    grant = null;
                else
                    grant = grant.Value ^ checkedOrPartial;

                if (item.IsGroup)
                {
                    foreach (var d in GetDescendants(item))
                        if (d.GrantRevoke != grant)
                        {
                            d.GrantRevoke = grant;
                        }
                }
                else if (item.GrantRevoke != grant)
                {
                    item.GrantRevoke = grant;
                }

                slickGrid.Invalidate();
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
                containsText = Q.Externals.StripDiacritics(text.TrimToNull() ?? "").ToLower();
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
                            PermissionKey = item.Key,
                            Grant = item.GrantRevoke.Value
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
                            r.GrantRevoke = row.Grant ?? true;
                    }

                SetItems(Items);
            }
        }

        public List<string> RolePermissions
        {
            get { return rolePermissions.Keys.ToList(); }
            set
            {
                rolePermissions.Clear();
                if (value != null)
                    foreach (var k in value)
                        rolePermissions[k] = true;
                SetItems(this.Items);
            }
        }
    }

    [Imported, Serializable, PreserveMemberCase]
    public class PermissionCheckItem
    {
        public string ParentKey { get; set; }
        public string Key { get; set; }
        public string Title { get; set; }
        public bool IsGroup { get; set; }
        public bool? GrantRevoke { get; set; }
    }

    [Imported, Serializable]
    public class PermissionCheckEditorOptions
    {
        public bool ShowRevoke { get; set; }
    }
}