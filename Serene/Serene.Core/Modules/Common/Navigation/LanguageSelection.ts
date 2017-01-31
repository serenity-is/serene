namespace Serene.Common {
    export class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string) {
            super(select);

            currentLanguage = Q.coalesce(currentLanguage, 'en');

            this.change(e => {
                $.cookie('LanguagePreference', select.val(), {
                    path: Q.Config.applicationPath,
                    expires: 365
                });
                window.location.reload(true);
            });

            Q.getLookupAsync<Administration.LanguageRow>('Administration.Language').then(x => {
                if (!Q.any(x.items, z => z.LanguageId === currentLanguage)) {
                    var idx = currentLanguage.lastIndexOf('-');
                    if (idx >= 0) {
                        currentLanguage = currentLanguage.substr(0, idx);
                        if (!Q.any(x.items, y => y.LanguageId === currentLanguage)) {
                            currentLanguage = 'en';
                        }
                    }
                    else {
                        currentLanguage = 'en';
                    }
                }

                for (var l of x.items) {
                    Q.addOption(select, l.LanguageId, l.LanguageName);
                }

                select.val(currentLanguage);
            });
        }
    }
}