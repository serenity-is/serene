Q.LT.add({
    "Controls.ColumnPickerDialog.Title": "Column Picker",
    "Controls.ColumnPickerDialog.VisibleColumns": "Visible Columns",
    "Controls.ColumnPickerDialog.AvailableColumns": "Available Columns",
    "Controls.ColumnPickerDialog.HideHint": "hide",
    "Controls.ColumnPickerDialog.ShowHint": "show"
}, "");

namespace Serenity {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.resizable()
    @Serenity.Decorators.responsive()
    export class ColumnPickerDialog extends Serenity.TemplatedDialog<any> {

        constructor() {
            super();

            new Serenity.QuickSearchInput(this.byId("Search").children(), {
                onSearch: (fld, txt, done) => {
                    txt = Q.trimToNull(txt);
                    if (txt != null)
                        txt = Select2.util.stripDiacritics(txt.toLowerCase());

                    this.element.find('li').each((x, e) => {
                        $(e).toggle(!txt || Select2.util.stripDiacritics($(e).text().toLowerCase()).indexOf(txt) >= 0);
                    });
                }
            });
        }

        public allColumns: Slick.Column[];
        public visibleColumns: Slick.Column[];
        protected availableColumns: Slick.Column[];

        getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.title = Q.text("Controls.ColumnPickerDialog.Title");
            opt.width = 600;
            opt.buttons = [
                {
                    text: Q.text("Dialogs.OkButton"),
                    click: () => {
                        this.dialogClose()
                    }
                },
                {
                    text: Q.text("Dialogs.CancelButton"),
                    click: () => {
                        this.dialogClose()
                    }
                }
            ];

            return opt;
        }

        private createLI(col: Slick.Column): JQuery {
            return $(`<li data-key="${ col.id }"><span class="drag-handle">☰</span>${
                Q.htmlEncode(this.getTitle(col))
                }<i class="js-hide">✖</i><i class="js-show icon-eye"></i></li>`);
        }

        private updateListStates() {
            this.byId("VisibleColumns").find("li").removeClass("bg-info").addClass("bg-success");
            this.byId("AvailableColumns").find("li").removeClass("bg-success").addClass("bg-info");
        }

        protected setupColumns(): void {
            this.allColumns = this.allColumns || [];
            this.visibleColumns = this.visibleColumns || [];

            let visible: Q.Dictionary<boolean> = {};
            for (let c of this.visibleColumns) {
                visible[c.id] = true;
            }

            let available: Slick.Column[] = [];

            for (let c of this.allColumns) {
                if (!visible[c.id])
                    available.push(c);
            }

            this.availableColumns = available.sort((a, b) => Q.turkishLocaleCompare(this.getTitle(a), this.getTitle(b)));

            let visibleUL = this.byId("VisibleColumns").children("ul");

            for (let c of this.visibleColumns) {
                this.createLI(c).addClass("bg-success").appendTo(visibleUL);
            }

            let availableUL = this.byId("AvailableColumns").children("ul");
            for (let c of this.availableColumns) {
                this.createLI(c).addClass("bg-info").appendTo(availableUL);
            }
            var self = this;
            var visibleSortable = Sortable.create(visibleUL[0], {
                group: this.uniqueName + "_group",
                filter: '.js-hide',
                onFilter: evt => {
                    $(evt.item).appendTo(availableUL);
                    this.updateListStates();
                },
                onEnd: evt => this.updateListStates()
            });

            var availableSortable = Sortable.create(availableUL[0], {
                group: this.uniqueName + "_group",
                sort: false,
                filter: '.js-show',
                onFilter: evt => {
                    $(evt.item).appendTo(visibleUL);
                    this.updateListStates();
                },
                onEnd: evt => this.updateListStates()
            });
        }

        protected onDialogOpen(): void {
            super.onDialogOpen();
            this.setupColumns();
        }

        protected getTemplate() {
            return `
<div id="~_Search" class="search"><input type="text" /></div>
<div class="columns-container">
<div id="~_VisibleColumns" class="column-list visible-list bg-success">
  <h5><i class="icon-eye"></i> ${ Q.text("Controls.ColumnPickerDialog.VisibleColumns") }</h5>
  <ul></ul>
</div>
<div id="~_AvailableColumns" class="column-list available-list bg-info">
  <h5><i class="icon-list"></i> ${ Q.text("Controls.ColumnPickerDialog.AvailableColumns") }</h5>
  <ul></ul>
</div>
</div>`;
        }

        getTitle(col: Slick.Column) {
            return col.name || col.toolTip || col.id;
        }
    }
}

$(function () {
    var gridDiv = $('<div id="Test">').appendTo(document.body).hide();
    var grid = new Serene.Northwind.OrderGrid(gridDiv);

    var picker = new Serenity.ColumnPickerDialog();
    picker.allColumns = (grid as any).allColumns;
    picker.visibleColumns = grid.slickGrid.getColumns();
    picker.dialogOpen();
});