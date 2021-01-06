namespace Serene.Common {
    export class SidebarSearch extends Serenity.Widget<any> {
        private menuUL: JQuery;

        constructor(input: JQuery, menuUL: JQuery) {
            super(input);

            new Serenity.QuickSearchInput(input, {
                onSearch: (field, text, success) => {
                    this.updateMatchFlags(text);
                    success(true);
                }
            });

            this.menuUL = menuUL;
        }

        protected updateMatchFlags(text: string) {
            var liList = this.menuUL.find('li').removeClass('non-match');

            text = Q.trimToNull(text);

            if (text == null) {
                liList.show();
                liList.removeClass('expanded');
                return;
            }

            var parts = text.replace(',', ' ').split(' ').filter(x => !Q.isTrimmedEmpty(x));

            for (var i = 0; i < parts.length; i++) {
                parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
            }

            var items = liList;
            items.each(function (idx, e) {
                var x = $(e);
                var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                for (var p of parts) {
                    if (p != null && !(title.indexOf(p) !== -1)) {
                        x.addClass('non-match');
                        break;
                    }
                }
            });

            var matchingItems = items.not('.non-match');

            var visibles = matchingItems.parents('li').add(matchingItems);

            var nonVisibles = liList.not(visibles);
            nonVisibles.hide().addClass('non-match');

            visibles.show();
            liList.addClass('expanded');
        }
    }
}