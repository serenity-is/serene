
namespace Serene.BasicSamples {
    
    @Serenity.Decorators.registerClass()
    export class DragDropSampleGrid extends Serenity.EntityGrid<DragDropSampleRow, any> {
        protected getColumnsKey() { return 'BasicSamples.DragDropSample'; }
        protected getDialogType() { return DragDropSampleDialog; }
        protected getIdProperty() { return DragDropSampleRow.idProperty; }
        protected getLocalTextPrefix() { return DragDropSampleRow.localTextPrefix; }
        protected getService() { return DragDropSampleService.baseUrl; }

        private dragging: HTMLElement;

        constructor(container: JQuery) {
            super(container);

            new Serenity.TreeGridMixin({
                grid: this,
                toggleField: DragDropSampleRow.Fields.Title,
                getParentId: x => x.ParentId,
                initialCollapse: () => false,
            });

            // save prior drag target to restore its color during drag
            var priorDragTarget: any;


            // prevent the grid from cancelling drag'n'drop by default
            this.slickGrid.onDragInit.subscribe((e, dd) => {
                e.stopImmediatePropagation();
            });

            // this method is called when an item is about to be dragged
            this.slickGrid.onDragStart.subscribe((e, dd) => {
                // only allow edit links to be dragged
                if (!$(e.target).hasClass('s-EditLink'))
                    return;

                // make sure there is a cell in source location
                var cell = this.slickGrid.getCellFromEvent(e);
                if (!cell) {
                    return;
                }

                // notify that we'll handle drag
                e.stopImmediatePropagation();

                // save details about dragged item
                dd.row = cell.row;
                var item = this.itemAt(cell.row);
                dd.item = item;

                // a unique name for our operation
                dd.mode = "move";

                // create an absolute position helper shown during dragging
                var helper = $("<span></span>")
                    .addClass('drag-helper')
                    .text("Moving " + item.Title)
                    .appendTo(document.body);
                dd.helper = helper;
            });

            // this method is periodically called during drag
            this.slickGrid.onDrag.subscribe((e, dd) => {
                // only handle our operation
                if (dd.mode != "move") {
                    return;
                }

                // if we changed color of some target before, reset it
                if (priorDragTarget && priorDragTarget != e.target) {
                    $(priorDragTarget).css('background-color', '');
                    priorDragTarget = null;
                }

                // find target, the source will drag into
                var cell = this.slickGrid.getCellFromEvent(e);
                var target = !cell ? null : this.itemAt(cell.row);

                // accept only edit links and valid items as drag target
                var reject = !$(e.target).hasClass('s-EditLink') || !this.canMoveUnder(dd.item, target);

                if (reject) {
                    dd.helper.text("Can't move " + dd.item.Title + " here")
                }
                else {
                    dd.helper.text("Move " + dd.item.Title + " under " + $(e.target).text());
                    // change color of current drag target
                    $(e.target).css('background-color', '#ddeeee');
                    priorDragTarget = e.target;
                }

                // toggle class of helper to show relevant accept / reject icon
                dd.helper.toggleClass('reject', reject);

                // position helper next to current mouse position
                dd.helper.css({ top: e.pageY + 5, left: e.pageX + 4 });
            });

            // this is called when drag is completed
            this.slickGrid.onDragEnd.subscribe((e, dd) => {
                if (dd.mode != "move") {
                    return;
                }

                // prevent browser from changing url
                e.preventDefault();

                // clear indicator color and drag helper
                priorDragTarget && $(priorDragTarget).css('background-color', '');
                dd.helper.remove();

                // determine target row
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = dd.item as DragDropSampleRow;
                var target = !cell ? null : this.itemAt(cell.row);

                // check again that this is valid drag target
                if ($(e.target).hasClass('s-EditLink') && this.canMoveUnder(item, target)) {

                    // this will move our primary drag source under new parent
                    var moveItem = function(onSuccess: () => void) {
                        DragDropSampleService.Update({
                            EntityId: item.Id,
                            Entity: {
                                ParentId: target.Id
                            }
                        }, onSuccess);
                    }

                    // if drag source has some children, need some confirmation
                    var children = this.getChildren(dd.item);
                    if (children.length > 0) {
                        Q.confirm('Move its children alongside the item?', () => {
                            // if responded yes, moving item under new parent should be enough
                            moveItem(() => this.refresh())
                        },
                            {
                                onNo: () => {
                                    // if responded no, children should move under old parent of item
                                    var oldParentId = item.ParentId == null ? null : item.ParentId;

                                    var moveNextChild = function (onSuccess: () => void) {
                                        if (children.length) {
                                            var x = children.shift();
                                            DragDropSampleService.Update({
                                                EntityId: x.Id,
                                                Entity: {
                                                    ParentId: oldParentId || null
                                                }
                                            }, () => moveNextChild(onSuccess), {
                                                onError: () => this.refresh()
                                            });
                                        }
                                        else
                                            onSuccess();
                                    }

                                    // first move item itself under new parent, 
                                    // then move its children under old parent one by one
                                    moveItem(() => moveNextChild(() => this.refresh()));
                                }
                            });
                    }
                    else {
                        // item has no children, just move it under new parent
                        moveItem(() => this.refresh());
                    }
                }

                return false;
            });
        }

        /**
         * This method will determine if item can be moved under a given target
         * An item can't be moved under itself, under one of its children
         */
        private canMoveUnder(item: DragDropSampleRow, target: DragDropSampleRow) {
            if (!item || !target || item.Id == target.Id || item.ParentId == target.Id)
                return false;

            if (Q.any(this.getParents(target), x => x.Id == item.Id))
                return false;

            return true;
        }

        /**
         * Gets children list of an item
         */
        private getChildren(item: DragDropSampleRow) {
            return this.getItems().filter(x => x.ParentId == item.Id);
        }

        /**
         * Gets all parents of an item
         */
        private getParents(item: DragDropSampleRow): DragDropSampleRow[] {
            // use this to prevent infinite recursion
            var visited = {};

            var result: DragDropSampleRow[] = [];

            // while item has a parent and not visited yet
            while (item.ParentId && !visited[item.ParentId]) {
                // find parent by its ID
                item = this.view.getItemById(item.ParentId);
                if (!item)
                    break;
                result.push(item);
                visited[item.Id] = true;
            }

            return result;
        }

        protected getButtons() {
            return [];
        }

        protected usePager() {
            return false;
        }
    }
}