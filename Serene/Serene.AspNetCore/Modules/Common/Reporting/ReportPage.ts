namespace Serene.Common {
    export class ReportPage extends Serenity.Widget<any> {

        private reportKey: string;
        private propertyItems: Serenity.PropertyItem[];
        private propertyGrid: Serenity.PropertyGrid;

        constructor(element: JQuery) {
            super(element);

            $('.report-link', element).click(e => this.reportLinkClick(e));
            $('div.line', element).click(e => this.categoryClick(e));
            new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                onSearch: (field, text, done) => {
                    this.updateMatchFlags(text);
                    done(true);
                }
            });
        }

        protected updateMatchFlags(text: string) {
            var liList = $('.report-list', this.element).find('li').removeClass('non-match');
            text = Q.trimToNull(text);
            if (!text) {
                liList.children('ul').hide();
                liList.show().removeClass('expanded');
                return;
            }

            text = Select2.util.stripDiacritics(text).toUpperCase();

            var reportItems = liList.filter('.report-item');
            reportItems.each(function (ix, e) {
                var x = $(e);
                var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                if (title.indexOf(text) < 0) {
                    x.addClass('non-match');
                }
            });

            var matchingItems = reportItems.not('.non-match');
            var visibles = matchingItems.parents('li').add(matchingItems);
            var nonVisibles = liList.not(visibles);
            nonVisibles.hide().addClass('non-match');
            visibles.show();
            if (visibles.length <= 100) {
                liList.children('ul').show();
                liList.addClass('expanded');
            }
        }

        protected categoryClick(e) {
            var li = $(e.target).closest('li');
            if (li.hasClass('expanded')) {
                li.find('ul').hide('fast');
                li.removeClass('expanded');
                li.find('li').removeClass('expanded');
            }
            else {
                li.addClass('expanded');
                li.children('ul').show('fast');
                if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                    li.children('ul').children('li').children('.line').click();
                }
            }
        }

        protected reportLinkClick(e) {
            e.preventDefault();
            new ReportDialog({
                reportKey: $(e.target).data('key')
            }).dialogOpen();
        }
    }
}
