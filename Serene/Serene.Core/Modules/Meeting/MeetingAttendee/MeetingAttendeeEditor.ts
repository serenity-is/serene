/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Serene.Meeting {
    
    @Serenity.Decorators.registerClass()
    export class MeetingAttendeeEditor extends Common.GridEditorBase<MeetingAttendeeRow> {
        protected getColumnsKey() { return 'Meeting.MeetingAttendee'; }
        protected getDialogType() { return MeetingAttendeeDialog; }
        protected getLocalTextPrefix() { return MeetingAttendeeRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);

            this.slickContainer.on('change', 'select', e => {
                var cell = this.slickGrid.getCellFromEvent(e);
                if (!cell)
                    return;

                var item = this.itemAt(cell.row);
                var field = this.slickGrid.getColumns()[cell.cell].field;
                item[field] = Q.toId($(e.target).val());
                this.view.updateItem(this.id(item), item);
            });
        }

        protected getButtons() {
            return [];
        }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();

            Serenity.Widget.create({
                type: Serenity.LookupEditor,
                options: {
                    lookupKey: Organization.ContactRow.lookupKey
                },
                element: e => e.attr('placeholder', '--select contact to add--').appendTo(this.toolbar.element),
                init: w => w.changeSelect2(x => {
                    if (Q.isEmptyOrNull(w.value))
                        return;

                    var contact = Organization.ContactRow.getLookup().itemById[Q.toId(w.value)];
                    w.value = null;
                    if (!contact)
                        return;

                    if (Q.any(this.getItems(), i => i.ContactId == contact.ContactId)) {
                        Q.notifyWarning("Contact is already in attendee list!");
                        return;
                    }

                    var item: MeetingAttendeeRow = {
                        ContactId: contact.ContactId,
                        ContactFullName: contact.FullName,
                        AttendeeType: MeetingAttendeeType.Attendee,
                        AttendanceStatus: MeetingAttendanceStatus.NotSet
                    };

                    this.setNewId(item);

                    var items = this.getItems().slice();
                    items.push(item);
                    items.sort((a, b) => Q.turkishLocaleCompare(a.ContactFullName, b.ContactFullName));
                    this.setItems(items);                   
                })
            });
        }

        protected getColumns() {
            var columns = super.getColumns();

            columns.unshift({
                field: 'Remove Attendee',
                name: '',
                format: ctx => '<a class="inline-action delete-row" title="delete">' +
                    '<i class="fa fa-times text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            return columns;
        }

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('delete-row')) {
                    var items = this.getItems();
                    items.splice(row, 1);
                    this.setItems(items);
                }
            }
        }
    }
}