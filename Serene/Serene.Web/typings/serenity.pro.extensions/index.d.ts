/// <reference types="serenity.corelib" />
/// <reference types="react" />
/// <reference types="jquery" />
/// <reference types="jquery.blockui" />
/// <reference types="jquery.validation" />
/// <reference types="jqueryui" />
declare namespace Serenity {
    interface AutoColumnWidthMixinOptions {
        grid: Serenity.DataGrid<any, any>;
        /** Disable auto size on load behavior, default is false, user can stil auto size by double click */
        disabled?: boolean;
        /** True to just auto size once on load, not on every load, like after changing pages, sorting etc, default is false */
        autoSizeAllJustOnce?: boolean;
        /** Disable auto size on load behavior if user manually resizes a column, default is true */
        disableIfUserResize?: boolean;
        /** If column has an explicit width set in Form.cs, use that width on auto size,
         * doesn't effect manually triggered auto size by double click, default is false */
        useExplicitWidths?: boolean;
        /** Set to true if headers shouldn't affect auto width, default is false.
         * If passed a number, header are considered for auto width but only up to that
         * number, e.g. if you pass 200, and header width is 300, 200 will be used */
        ignoreHeaders?: boolean | number;
        /** Maximum rows to scan in data source, default is infinite */
        maxRows?: number;
        /** Maximum auto column width, default value is 400 */
        maxWidth?: number;
        /** Minimum auto column width, default value is 30 */
        minWidth?: number;
    }
    /**
     * A mixin that can be applied to a DataGrid for auto size column width functionality
     */
    class AutoColumnWidthMixin extends Serenity.Widget<AutoColumnWidthMixinOptions> {
        private slickGrid;
        private $container;
        private _disabled;
        private autoSizing;
        private markupReadyOnce;
        private oldMarkupReady;
        private oldPersistSettings;
        private oldGetCurrentSettings;
        private oldRestoreSettings;
        disabled: boolean;
        private columnResizeHandler;
        constructor(options: AutoColumnWidthMixinOptions);
        destroy(): void;
        private resizeHandleClick;
        private getAutoColumnWidth;
        private autoSizeColumn;
        private queueAutoSize;
        autoSizeAll(useExplicitWidths?: boolean): void;
        private createRow;
        private getMaxColumnWidth;
    }
}
declare namespace Serenity {
    interface CardViewItemsProps<TItem> {
        items: TItem[];
        renderItem: (item: TItem, index: number) => React.ReactNode;
        colClass: string;
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
        private cardContainer;
        constructor(options: CardViewMixinOptions<TItem>);
        switchView(viewType: CardViewType, persist?: boolean): void;
        private updateCardItems;
        private resizeCardView;
    }
    interface CardViewMixinOptions<TItem> {
        grid: Serenity.DataGrid<TItem, any>;
        renderItem: (item: TItem, index: number) => React.ReactNode;
        viewType?: CardViewType;
        cardClass?: string;
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
        private getColumns;
        destroy(): void;
        private setupColumnDropbox;
        getGroupingFor(column: Column): GroupInfo<any>;
        handleGroupByDrop(container: JQuery, columnid: string): void;
        private addColumnGroupBy;
        setDroppedGroups(idList: string[]): void;
        private removeGroupBy;
        private updateInterface;
        private updateGroupBy;
        static setupColumnReorder(grid: Slick.Grid, $headers: JQuery, setupColumnResize: () => void, trigger: (ev: any, p: any) => void): void;
    }
}
declare namespace Serenity {
    /** Auto save types */
    const enum AutoSaveOption {
        /** Never auto save */
        Never = 0,
        /** Automatically save pending changes without asking */
        Auto = 1,
        /** Ask for confirmation from user to save pending changes */
        Confirm = 2
    }
    class EntityGridDialog<TItem, TOptions> extends Serenity.EntityGrid<TItem, TOptions> {
        protected tabs: JQuery;
        protected validator: JQueryValidation.Validator;
        protected idPrefix: string;
        protected dialogPane: JQuery;
        protected entity: TItem;
        protected entityId: any;
        protected propertyGrid: PropertyGrid;
        protected isDialogOpen: boolean;
        protected saveAndCloseButton: JQuery;
        protected applyChangesButton: JQuery;
        protected deleteButton: JQuery;
        protected undeleteButton: JQuery;
        protected cloneButton: JQuery;
        protected localizationGrid: PropertyGrid;
        protected localizationButton: JQuery;
        protected localizationPendingValue: any;
        protected localizationLastValue: any;
        protected loadedState: string;
        protected triedAutoSaveForCurrentEntity: boolean;
        constructor(container: JQuery, opt?: TOptions);
        protected createSlickGrid(): Slick.Grid;
        destroy(): void;
        protected getItemCssClass(item: TItem, index: number): string;
        getSaveState(): string;
        protected hasPendingChanges(): boolean;
        protected autoSaveOnSwitch(): AutoSaveOption;
        protected autoSaveOnClose(): AutoSaveOption;
        protected checkPendingChangesOnSwitch(entityOrId: any, proceed: () => void): void;
        protected editItem(entityOrId: any): void;
        protected createEntityDialog(itemType: string, callback?: (dlg: Widget<any>) => void): Widget<any>;
        protected layout(): void;
        protected byId(id: string): JQuery;
        private getDefaultTemplateName;
        protected getTemplateName(): string;
        protected getFallbackTemplate(): string;
        protected getTemplate(): string;
        protected getValidatorOptions(): JQueryValidation.ValidationOptions;
        protected initValidator(): void;
        protected resetValidation(): void;
        protected validateForm(): boolean;
        dialogOpen(): void;
        protected getEditHash(): string;
        protected onDialogOpen(): void;
        protected arrange(): void;
        protected onDialogClose(): void;
        protected getDialogTitle(): string;
        dialogClose(): void;
        get dialogTitle(): string;
        set dialogTitle(value: string);
        protected setupDialogTitle(): void;
        protected initTabs(): void;
        protected get_entity(): TItem;
        protected set_entity(entity: any): void;
        protected get_entityId(): any;
        protected set_entityId(value: any): void;
        protected getEntityNameFieldValue(): any;
        protected getEntityTitle(): string;
        protected updateTitle(): void;
        protected isCloneMode(): boolean;
        protected isEditMode(): boolean;
        protected isDeleted(): boolean;
        protected isNew(): boolean;
        protected isNewOrDeleted(): boolean;
        protected getDeleteOptions(callback: (response: DeleteResponse) => void): ServiceOptions<DeleteResponse>;
        protected deleteHandler(options: ServiceOptions<DeleteResponse>, callback: (response: DeleteResponse) => void): void;
        protected doDelete(callback: (response: DeleteResponse) => void): void;
        protected onDeleteSuccess(response: DeleteResponse): void;
        protected attrs<TAttr>(attrType: {
            new (...args: any[]): TAttr;
        }): TAttr[];
        protected getEntityType(): string;
        private formKey;
        protected getFormKey(): string;
        private entitySingular;
        protected getEntitySingular(): string;
        private nameProperty;
        protected getNameProperty(): string;
        protected getIsDeletedProperty(): string;
        load(entityOrId: any, done: () => void, fail: (ex: any) => void): void;
        loadNewAndOpenDialog(): void;
        loadEntityAndOpenDialog(entity: TItem, asPanel?: boolean): void;
        protected loadResponse(data: any): void;
        protected loadEntity(entity: TItem): void;
        protected beforeLoadEntity(entity: TItem): void;
        protected afterLoadEntity(): void;
        loadByIdAndOpenDialog(entityId: any): void;
        protected onLoadingData(data: RetrieveResponse<TItem>): void;
        protected getLoadByIdOptions(id: any, callback: (response: RetrieveResponse<TItem>) => void): ServiceOptions<RetrieveResponse<TItem>>;
        protected getLoadByIdRequest(id: any): RetrieveRequest;
        protected reloadById(): void;
        loadById(id: any, callback?: (response: RetrieveResponse<TItem>) => void, fail?: () => void): void;
        protected loadByIdHandler(options: ServiceOptions<RetrieveResponse<TItem>>, callback: (response: RetrieveResponse<TItem>) => void, fail: () => void): void;
        protected initLocalizationGrid(): void;
        protected initLocalizationGridCommon(pgOptions: PropertyGridOptions): void;
        protected isLocalizationMode(): boolean;
        protected isLocalizationModeAndChanged(): boolean;
        protected localizationButtonClick(): void;
        protected getLanguages(): any[];
        private getLangs;
        protected loadLocalization(): void;
        protected setLocalizationGridCurrentValues(): void;
        protected getLocalizationGridValue(): any;
        protected getPendingLocalizations(): any;
        protected initPropertyGrid(): void;
        protected getFormPropertyItems(): PropertyItem[];
        protected getPropertyGridOptions(): PropertyGridOptions;
        protected validateBeforeSave(): boolean;
        protected getSaveOptions(callback: (response: SaveResponse) => void): ServiceOptions<SaveResponse>;
        protected getSaveEntity(): TItem;
        protected getSaveRequest(): SaveRequest<TItem>;
        protected onSaveSuccess(response: SaveResponse): void;
        protected save_submitHandler(callback: (response: SaveResponse) => void): void;
        protected save(callback?: (response: SaveResponse) => void): void | boolean;
        protected saveHandler(options: ServiceOptions<SaveResponse>, callback: (response: SaveResponse) => void): void;
        protected createToolbar(buttons: ToolButton[]): void;
        protected showSaveSuccessMessage(response: SaveResponse): void;
        protected getButtons(): ToolButton[];
        protected getCloningEntity(): TItem;
        protected updateInterface(): void;
        protected getUndeleteOptions(callback?: (response: UndeleteResponse) => void): ServiceOptions<UndeleteResponse>;
        protected undeleteHandler(options: ServiceOptions<UndeleteResponse>, callback: (response: UndeleteResponse) => void): void;
        protected undelete(callback?: (response: UndeleteResponse) => void): void;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected getDeletePermission(): string;
        protected hasDeletePermission(): boolean;
        protected hasInsertPermission(): boolean;
        protected hasUpdatePermission(): boolean;
        protected hasSavePermission(): boolean;
        protected editClicked: boolean;
        protected isViewMode(): boolean;
        protected useViewMode(): boolean;
    }
}
declare namespace Serenity {
    /**
     * A mixin that can be applied to a DataGrid for favorite views functionality
     */
    class FavoriteViewsMixin<TItem> {
        private options;
        private dataGrid;
        private ul;
        constructor(options: FavoriteViewsMixinOptions<TItem>);
        private populateFavorites;
        private saveFavorites;
        private getFavorites;
    }
    interface FavoriteViewsMixinOptions<TItem> {
        grid: Serenity.DataGrid<TItem, any>;
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
declare namespace Serenity {
    const enum HeaderFilterType {
        disabled = 0,
        value = 1,
        text = 2
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
        buttonClass?: string;
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
        private handleBodyMouseDown;
        private hideMenu;
        private handleHeaderCellRendered;
        private handleBeforeHeaderCellDestroy;
        private addMenuItem;
        private addSearchInput;
        private updateFilterItems;
        private getFilterText;
        private showFilter;
        private columnsResized;
        private onCheckboxClick;
        private setButtonIsFiltered;
        private handleApply;
        private containsFilter;
        getFilterValue(item: any, column: Slick.Column): any;
        private sortFilterValues;
        private updateFilterValues;
        private updateFilterValuesFromData;
        private handleMenuItemClick;
    }
}
declare namespace Serenity {
    interface IdleTimeoutOptions {
        /** which events to consider as an activity. */
        activityEvents?: string;
        /** signout user if no activity within this duration (seconds). default is 900 (15 mins). */
        activityTimeout?: number;
        /** optional callback that is called just before signing out */
        beforeSignout?: () => void;
        /** interval for checking timer, default is 5 seconds */
        checkInterval?: number;
        /** interval for calling keep alive url in seconds, default is 300 (5 mins) */
        keepAliveTimer?: number;
        /** keep alive url */
        keepAliveUrl?: string;
        /** url used to signout user */
        signoutUrl?: string;
        /** show warning for this number of seconds */
        warningDuration?: number;
    }
    class IdleTimeout {
        private options;
        private idleTimer;
        private keepAliveTimer;
        private warningTimer;
        private remainingTimer;
        constructor(options: IdleTimeoutOptions);
        protected startKeepAliveTimer(): void;
        protected isWarningActive(): boolean;
        protected startWarningTimer(): void;
        protected stopWarningTimer(): void;
        protected warningTimeout(): void;
        protected resetIdleTimer(): void;
        protected idleTimeout(): void;
        protected checkActivityTimeout(): void;
        protected signout(): void;
        protected showWarning(): void;
        protected closeWarning(): void;
        protected getRemainingSeconds(): number;
        protected countdownDisplay(): void;
        static defaults: IdleTimeoutOptions;
    }
}
declare namespace Serenity {
    function setupUIOverrides(): void;
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
        protected get maxSteps(): number;
        /**
         * moves to a step, by calling one of next, back or finish methods based on target step
         * @param toStep the target step to move to
         */
        protected moveToStep(toStep: number): void;
        private _step;
        protected get step(): number;
        protected set step(value: number);
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
        private getStepLink;
        private getStepPanel;
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
        protected get compactSteps(): boolean;
        protected set compactSteps(value: boolean);
    }
}
