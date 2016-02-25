namespace Serene.Common
{
    using jQueryApi;
    using Serenity;
    using System.Linq;

    public class ThemeSelection : Widget
    {
        public ThemeSelection(jQueryObject select)
            : base(select)
        {
            var self = this;

            this.Change(e =>
            {
                jQuery.Instance.cookie("ThemePreference", select.GetValue(), new {
                    path = Q.Config.ApplicationPath,
                    expires = 365
                });
                J("body").RemoveClass("skin-" + GetCurrentTheme());
                J("body").AddClass("skin-" + select.GetValue());
            });

            Q.AddOption(select, "blue", Q.Text("Site.Layout.ThemeBlue"));
            Q.AddOption(select, "blue-light", Q.Text("Site.Layout.ThemeBlueLight"));
            Q.AddOption(select, "purple", Q.Text("Site.Layout.ThemePurple"));
            Q.AddOption(select, "purple-light", Q.Text("Site.Layout.ThemePurpleLight"));
            Q.AddOption(select, "red", Q.Text("Site.Layout.ThemeRed"));
            Q.AddOption(select, "red-light", Q.Text("Site.Layout.ThemeRedLight"));
            Q.AddOption(select, "green", Q.Text("Site.Layout.ThemeGreen"));
            Q.AddOption(select, "green-light", Q.Text("Site.Layout.ThemeGreenLight"));
            Q.AddOption(select, "yellow", Q.Text("Site.Layout.ThemeYellow"));
            Q.AddOption(select, "yellow-light", Q.Text("Site.Layout.ThemeYellowLight"));
            Q.AddOption(select, "black", Q.Text("Site.Layout.ThemeBlack"));
            Q.AddOption(select, "black-light", Q.Text("Site.Layout.ThemeBlackLight"));

            select.Value(GetCurrentTheme());
        }

        private string GetCurrentTheme()
        {
            var skinClass = (J("body").GetAttribute("class") ?? "").Split(' ')
                .FirstOrDefault(x => x.StartsWith("skin-"));

            if (skinClass != null)
                return skinClass.Substr(5);

            return "blue";
        }
    }
}
