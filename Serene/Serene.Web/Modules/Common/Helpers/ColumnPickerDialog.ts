Q.LT.add({
    "Controls.ColumnPickerDialog.Title": "Column Picker",
    "Controls.ColumnPickerDialog.VisibleColumns": "Visible Columns",
    "Controls.ColumnPickerDialog.HiddenColumns": "Hidden Columns",
    "Controls.ColumnPickerDialog.HideHint": "hide",
    "Controls.ColumnPickerDialog.ShowHint": "show"
}, "");

namespace Serenity {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.resizable()
    @Serenity.Decorators.responsive()
    export class ColumnPickerDialog extends Serenity.TemplatedDialog<any> {

        private ulVisible: JQuery;
        private ulHidden: JQuery;

        constructor() {
            super();

            new Serenity.QuickSearchInput(this.byId("Search"), {
                onSearch: (fld, txt, done) => {
                    txt = Q.trimToNull(txt);
                    if (txt != null)
                        txt = Select2.util.stripDiacritics(txt.toLowerCase());

                    this.element.find('li').each((x, e) => {
                        $(e).toggle(!txt || Select2.util.stripDiacritics(
                            $(e).text().toLowerCase()).indexOf(txt) >= 0);
                    });
                }
            });

            this.ulVisible = this.byId("VisibleCols");
            this.ulHidden = this.byId("HiddenCols");
        }

        public allColumns: Slick.Column[];
        public visibleColumns: Slick.Column[];
        protected hiddenColumns: Slick.Column[];

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

        getTitle(col: Slick.Column) {
            return col.name || col.toolTip || col.id;
        }

        private createLI(col: Slick.Column): JQuery {
            return $(`
<li data-key="${col.id}">
  <span class="drag-handle">☰</span>
  ${ Q.htmlEncode(this.getTitle(col)) }
  <i class="js-hide" title="${ Q.text("Controls.ColumnPickerDialog.HideHint") }">✖</i>
  <i class="js-show icon-eye" title="${ Q.text("Controls.ColumnPickerDialog.ShowHint") }"></i>
</li>`);
        }

        private updateListStates() {
            this.ulVisible.children().removeClass("bg-info").addClass("bg-success");
            this.ulHidden.children().removeClass("bg-success").addClass("bg-info");
        }

        protected setupColumns(): void {
            this.allColumns = this.allColumns || [];
            this.visibleColumns = this.visibleColumns || [];

            let visible: Q.Dictionary<boolean> = {};
            for (let c of this.visibleColumns) {
                visible[c.id] = true;
            }

            let hidden: Slick.Column[] = [];

            for (let c of this.allColumns) {
                if (!visible[c.id])
                    hidden.push(c);
            }

            this.hiddenColumns = hidden.sort((a, b) => Q.turkishLocaleCompare(this.getTitle(a), this.getTitle(b)));

            for (let c of this.visibleColumns) {
                this.createLI(c).appendTo(this.ulVisible);
            }

            for (let c of this.hiddenColumns) {
                this.createLI(c).appendTo(this.ulHidden);
            }

            this.updateListStates();

            if (typeof Sortable !== "undefined" &&
                Sortable.create) {

                Sortable.create(this.ulVisible[0], {
                    group: this.uniqueName + "_group",
                    filter: '.js-hide',
                    onFilter: evt => {
                        $(evt.item).appendTo(this.ulHidden);
                        this.updateListStates();
                    },
                    onEnd: evt => this.updateListStates()
                });

                Sortable.create(this.ulHidden[0], {
                    group: this.uniqueName + "_group",
                    sort: false,
                    filter: '.js-show',
                    onFilter: evt => {
                        $(evt.item).appendTo(this.ulVisible);
                        this.updateListStates();
                    },
                    onEnd: evt => this.updateListStates()
                });
            }
        }

        protected onDialogOpen(): void {
            super.onDialogOpen();
            this.setupColumns();
            Q.centerDialog(this.element);
        }

        protected getTemplate() {
            return `
<div class="search"><input id="~_Search" type="text" /></div>
<div class="columns-container">
<div class="column-list visible-list bg-success">
  <h5><i class="icon-eye"></i> ${ Q.text("Controls.ColumnPickerDialog.VisibleColumns") }</h5>
  <ul id="~_VisibleCols"></ul>
</div>
<div class="column-list hidden-list bg-info">
  <h5><i class="icon-list"></i> ${ Q.text("Controls.ColumnPickerDialog.HiddenColumns") }</h5>
  <ul id="~_HiddenCols"></ul>
</div>
</div>`;
        }
    }
}

$(function () {
    try {
        var gridDiv = $('<div id="Test">').appendTo(document.body).hide();
        var grid = new Serene.Northwind.OrderGrid(gridDiv);

        var picker = new Serenity.ColumnPickerDialog();
        picker.allColumns = (grid as any).allColumns;
        picker.visibleColumns = grid.slickGrid.getColumns();
        picker.dialogOpen();
    } catch (e) {
        console.log(e);
    }
});