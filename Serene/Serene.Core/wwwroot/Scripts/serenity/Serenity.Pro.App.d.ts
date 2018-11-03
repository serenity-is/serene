/// <reference types="jquery" />
/// <reference types="react" />
declare namespace Serenity {
    class SingleLineTextFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
        static formatValue(value: string): string;
    }
}
declare namespace Serenity {
    /**
     * A dialog/panel base class that easily generates a wizard UI from tabs in a form definition (e.g. Form.cs)
     */
    abstract class WizardDialog<TEntity, TOptions> extends Serenity.TemplatedDialog<TOptions> {
        private wizardGrid;
        /**
         * Creates a new wizard dialog
         * @param opt options, might be used by derived classes
         */
        constructor(opt?: TOptions);
        /**
         * gets property grid options
         */
        protected getPropertyGridOptions(): PropertyGridOptions;
        /**
         * gets form key to use to load property items / tabs
         */
        protected getFormKey(): string;
        /**
         * gets local text prefix for labels
         */
        protected getLocalTextPrefix(): string;
        /**
         * gets list of property items to shown on form, uses form key to load items by default
         */
        protected getPropertyItems(): Serenity.PropertyItem[];
        /**
         * gets initial entity to load onto form, override these to customize initial form values
         */
        protected getInitialEntity(): TEntity;
        protected readonly maxSteps: number;
        /**
         * moves to a step, by calling one of next, back or finish methods based on target step
         * @param toStep the target step to move to
         */
        protected moveToStep(toStep: number): void;
        private _step;
        protected step: number;
        /**
         * called to reset the form, and go back to first step
         */
        protected reset(): void;
        /**
         * is called when user clicks the Finish button (next button on last step)
         */
        protected finish(): void;
        /**
         * next method is called when user tries to go forward
         * @param toStep the step user is trying to move to, usually one step ahead
         */
        protected next(toStep: number): void;
        /**
         * back method is called when user tries to go backward
         * @param toStep the step user is trying to move to, usually one step back but can also be multiple
         */
        protected back(toStep: number): void;
        private getStepLink(step);
        private getStepPanel(step);
        /**
         * make sure derived classes use WizardDialog template,
         * if they don't define one of their own
         */
        protected getFallbackTemplate(): string;
        /**
         * gets cancel confirmation message, return null to disable confirmation
         */
        protected getCancelMessage(): string;
        /**
         * confirms when user tries to cancel or close the wizard
         * @param e
         */
        protected confirmCancel(e: JQueryEventObject): void;
        /** gets save entity from form, optionally from a limited list of steps (tabs)
         * @param steps the list of steps to read data from, pass null to get all
         */
        protected getSaveEntity(steps?: number[]): TEntity;
        protected compactSteps: boolean;
    }
}
declare namespace Serenity {
    interface CardViewItemsProps<TItem> {
        items: TItem[];
        renderItem: (item: TItem, index: number) => React.ReactNode;
    }
    class CardViewItems<TItem> extends React.Component<CardViewItemsProps<TItem>> {
        render(): React.ReactNode;
    }
}
declare namespace Serenity {
    type CardViewType = "card" | "grid";
    /**
     * A mixin that can be applied to a DataGrid for card view functionality
     */
    class CardViewMixin<TItem> {
        private options;
        private dataGrid;
        private getId;
        private cardContainer;
        constructor(options: CardViewMixinOptions<TItem>);
        private switchView(viewType);
        private updateCardItems();
        private resizeCardView();
    }
    interface CardViewMixinOptions<TItem> {
        grid: Serenity.DataGrid<TItem, any>;
        renderItem: (item: TItem, index: number) => React.ReactNode;
    }
}
declare namespace Serenity {
    /**
     * A mixin that can be applied to a DataGrid for favorite views functionality
     */
    class FavoriteViewsMixin<TItem> {
        private options;
        private dataGrid;
        private getId;
        private ul;
        constructor(options: FavoriteViewsMixinOptions<TItem>);
        private populateFavorites();
        private saveFavorites(favorites);
        private getFavorites();
    }
    interface FavoriteViewsMixinOptions<TItem> {
        grid: Serenity.DataGrid<TItem, any>;
    }
}
declare namespace Slick {
    interface Column {
        summaryType?: Serenity.SummaryType;
    }
}
declare namespace Serenity {
    interface CustomSummaryMixinOptions {
        grid: Serenity.DataGrid<any, any>;
    }
    class CustomSummaryMixin {
        constructor(options: CustomSummaryMixinOptions);
    }
}
declare namespace Slick {
    interface Column {
        grouping?: false | GroupInfo<any>;
    }
}
declare namespace Slick.Plugins {
    interface DraggableGroupingOptions {
        deleteIconCssClass?: string;
        deleteIconImage?: string;
        dropPlaceHolderText?: string;
        getGroupingFor?: (column: Column) => GroupInfo<any>;
        getAllColumns?: () => Slick.Column[];
    }
    /**
     * Based on plugin at https://github.com/muthukumarse/Slickgrid
     */
    class DraggableGrouping {
        private grid;
        private gridUid;
        private dataView;
        private dropbox;
        private dropboxPlaceholder;
        private expandAll;
        private collapseAll;
        private options;
        private columnsGroupBy;
        onGroupChanged: Event<any>;
        constructor(options?: DraggableGroupingOptions);
        init(grid: Slick.Grid): void;
        private getColumns();
        destroy(): void;
        private setupColumnDropbox();
        getGroupingFor(column: Column): GroupInfo<any>;
        handleGroupByDrop(container: JQuery, columnid: string): void;
        private addColumnGroupBy(column);
        private addGroupByRemoveClickHandler(id, container, entry);
        setDroppedGroups(idList: string[]): void;
        private removeGroupBy(id, entry);
        private updateInterface();
        private updateGroupBy();
        static setupColumnReorder(grid: Slick.Grid, $headers: JQuery, setupColumnResize: () => void, trigger: (ev: any, p: any) => void): void;
    }
}
declare namespace Serenity {
    interface GridPersistanceFlags {
        groupColumns?: boolean;
    }
    interface PersistedGridSettings {
        groupColumns?: string[];
    }
    interface DraggableGroupingMixinOptions {
        grid: Serenity.DataGrid<any, any>;
    }
    class DraggableGroupingMixin {
        readonly plugin: Slick.Plugins.DraggableGrouping;
        constructor(options: DraggableGroupingMixinOptions);
    }
}
declare namespace Serenity {
    const enum HeaderFilterType {
        disabled = 0,
        value = 1,
        text = 2,
    }
}
declare namespace Slick {
    interface Column {
        headerFilterType?: Serenity.HeaderFilterType;
        headerFilterValues?: object[];
    }
}
declare namespace Slick.Plugins {
    interface HeaderFiltersOptions {
        buttonImage?: string;
        useColumnFormatter?: boolean;
        getFilterValues?: (column: Slick.Column, callback: (values: object[], texts?: string[]) => void) => void;
        getFilterType?: (column: Slick.Column) => Serenity.HeaderFilterType;
    }
    class HeaderFilters {
        private grid;
        private menu;
        private searchInput;
        private handler;
        private options;
        private checkedValues;
        private filterValues;
        private filterTexts;
        onFilterApplied: Event<any>;
        onCommand: Event<any>;
        constructor(options: HeaderFiltersOptions);
        init(g: Slick.Grid): void;
        destroy(): void;
        getFilterType(column: Slick.Column): Serenity.HeaderFilterType;
        private handleBodyMouseDown(e);
        private hideMenu();
        private handleHeaderCellRendered(e, args);
        private handleBeforeHeaderCellDestroy(e, args);
        private addMenuItem(menu, columnDef, title, command, image);
        private addSearchInput(menu, columnDef);
        private updateFilterItems(columnDef);
        private getFilterText(item, column);
        private showFilter(e);
        private columnsResized();
        private onCheckboxClick($checkbox);
        private setButtonImage($el, filtered);
        private handleApply(e, columnDef);
        private containsFilter(filter);
        getFilterValue(item: any, column: Slick.Column): any;
        private sortFilterValues();
        private updateFilterValues(column, done);
        private updateFilterValuesFromData(column);
        private handleMenuItemClick(e);
    }
}
declare namespace Serenity {
    interface HeadersFiltersMixinOptions {
        grid: Serenity.DataGrid<any, any>;
        filterByText?: boolean;
    }
    /**
     * A mixin that can be applied to a DataGrid for column filters functionality
     */
    class HeaderFiltersMixin {
        private filterByText;
        constructor(options: HeadersFiltersMixinOptions);
    }
}
