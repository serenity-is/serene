using jQueryApi;
using Serenity;
using System.Collections.Generic;

namespace Serene.Administration
{
    [Editor]
    public class RoleCheckEditor : CheckTreeEditor<object>
    {
        private string containsText;

        public RoleCheckEditor(jQueryObject div)
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

            var roles = Q.GetLookup<RoleRow>("Administration.Role").Items;

            foreach (var role in roles)
            {
                list.Add(new CheckTreeItem
                {
                    Id = role.RoleId.ToString(),
                    Text = role.RoleName,
                });
            }

            return list;
        }
    }
}