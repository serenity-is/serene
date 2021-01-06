namespace Serene.Common {
    export class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery) {
            super(select);

            this.change(e => {
                var path = Q.Config.applicationPath;
                if (path && path != '/' && Q.endsWith(path, '/'))
                    path = path.substr(0, path.length - 1);

                $.cookie('ThemePreference', select.val(), {
                    path: path,
                    expires: 365
                });

                var theme = select.val() || '';
                var darkSidebar = theme.indexOf('light') < 0;
                $('body').removeClass('skin-' + this.getCurrentTheme());
                $('body').addClass('skin-' + theme)
                    .toggleClass('dark-sidebar', darkSidebar)
                    .toggleClass('light-sidebar', !darkSidebar);
            });

            Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
            Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
            Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
            Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
            Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
            Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
            Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
            Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
            Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
            Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
            Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
            Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));

            select.val(this.getCurrentTheme());
        }

        protected getCurrentTheme() {
            var skinClass = Q.first(($('body').attr('class') || '').split(' '), x => Q.startsWith(x, 'skin-'));
            if (skinClass) {
                return skinClass.substr(5);
            }

            return 'blue';
        }
    }
}