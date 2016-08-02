namespace Serene.BasicSamples {
    @Serenity.Decorators.registerClass()
    export class VSGalleryQAGrid extends Serenity.EntityGrid<BasicSamples.VSGalleryQAThread, any> {
        protected getColumnsKey() { return "BasicSamples.VSGalleryQA"; }
        protected getIdProperty() { return "ThreadId"; }
        protected getService() { return VSGalleryQAService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            return [];
        }

        protected getSlickOptions(): Slick.GridOptions {
            var opt = super.getSlickOptions();
            opt.rowHeight = 250;
            return opt;
        }

        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();

            Q.first(columns, x => x.field == 'Posts').format = ctx => {
                var posts = ctx.value as VSGalleryQAPost[];
                if (!posts || !posts.length)
                    return "";

                var i = 0;
                var text = "<ul class='posts'>";
                for (var post of posts) {
                    text += "<li class='" + (i++ % 2 == 0 ? 'even': 'odd') + "'><h4>";
                    text += post.PostedByName + " - ";
                    text += Q.formatDate(Q.parseISODateTime(post.PostedOn), 'dd/MM/yyyy HH:mm');
                    text += "</h4><pre>";
                    text += Q.htmlEncode(post.Message);
                    text += "</pre></li>";
                }
                text += "</ul>";

                return text;
            };

            return columns;
        }

        protected getInitialTitle() {
            return null;
        }
    }
}