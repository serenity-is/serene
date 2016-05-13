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
                $(`<li class="bg-success"><span class="drag-handle">☰</span>${Q.htmlEncode(this.getTitle(c))}<i class="js-remove">✖</i></li>`)
                    .appendTo(visibleUL);
            }

            let availableUL = this.byId("AvailableColumns").children("ul");
            for (let c of this.availableColumns) {
                $('<li/>').text(this.getTitle(c)).appendTo(availableUL);
            }
            var self = this;
            var visibleSortable = Sortable.create(visibleUL[0], {
                group: { name: 'x' },
                filter: '.js-remove',
                onFilter: function (evt) {
                    //var el = visibleSortable.closest(evt.item); 
                    //el && el.parentNode.removeChild(el);
                },
                onAdd: function (evt) { console.log('onAdd.foo:', [evt.to, evt.from, evt.item, evt.clone]); },
                onUpdate: function (evt) { console.log('onUpdate.foo:', [evt.to, evt.from, evt.item, evt.clone]); },
                onRemove: function (evt) { console.log('onRemove.foo:', [evt.to, evt.from, evt.item, evt.clone]); },
                onStart: function (evt) { console.log('onStart.foo:', [evt.to, evt.from, evt.item, evt.clone]); },
                onSort: function (evt) { console.log('onStart.foo:', [evt.to, evt.from, evt.item, evt.clone]); },
                onEnd: function (evt) { console.log('onEnd.foo:', [evt.to, evt.from, evt.item, evt.clone]); }
            });

            var availableSortable = Sortable.create(availableUL[0], {
                group: { name: 'x' },
                sort: false,
                onAdd: function (evt) { console.log('onAdd.xoo:', [evt.to, evt.from, evt.item, evt.clone]); },
                onUpdate: function (evt) { console.log('onUpdate.xoo:', [evt.to, evt.from, evt.item, evt.clone]); },
                onRemove: function (evt) { console.log('onRemove.xoo:', [evt.to, evt.from, evt.item, evt.clone]); },
                onStart: function (evt) { console.log('onStart.xoo:', [evt.to, evt.from, evt.item, evt.clone]); },
                onSort: function (evt) { console.log('onStart.xoo:', [evt.to, evt.from, evt.item, evt.clone]); },
                onEnd: function (evt) { console.log('onEnd.xoo:', [evt.to, evt.from, evt.item, evt.clone]); }

            });
        }

        protected onDialogOpen(): void {
            super.onDialogOpen();
            this.setupColumns();
        }

        protected getTemplate() {
            return `
<div id="~_VisibleColumns" class="column-list bg-success">
  <h5><i class="icon-eye"></i> ${ Q.text("Controls.ColumnPickerDialog.VisibleColumns") }</h5>
  <ul></ul>
</div>
<div id="~_AvailableColumns" class="column-list bg-info">
  <h5><i class="icon-list"></i> ${ Q.text("Controls.ColumnPickerDialog.AvailableColumns") }</h5>
  <ul></ul>
</div>`;
        }

        getTitle(col: Slick.Column) {
            return col.name || col.toolTip || col.id;
        }
    }
}

$(function () {
    var gridDiv = $('<div id="Test">').appendTo(document.body);
    var grid = new Serene.Northwind.OrderGrid(gridDiv);

    var picker = new Serenity.ColumnPickerDialog();
    picker.allColumns = (grid as any).allColumns;
    picker.visibleColumns = grid.slickGrid.getColumns();
    picker.dialogOpen();
});
