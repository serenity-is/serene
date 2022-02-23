/// <reference types="serenity.corelib" />
/// <reference types="jquery" />
/// <reference types="jqueryui" />
/// <reference types="jquery.blockui" />
/// <reference types="jquery.validation" />
declare namespace Serenity.Extensions {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace Serenity.Extensions {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace Serenity.Extensions {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace Serenity.Extensions {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace Serenity.Extensions {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace Serenity.Extensions {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace Serenity.Extensions {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace Serenity.Extensions {
    namespace UserPreferenceService {
        const baseUrl = "Extensions/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Extensions/UserPreference/Update",
            Retrieve = "Extensions/UserPreference/Retrieve"
        }
    }
}
declare namespace Serenity.Extensions {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace Serenity.Reporting {
    interface ReportRetrieveResult extends Serenity.ServiceResponse {
        IsExternalReport?: boolean;
        ReportKey?: string;
        Title?: string;
        Properties?: Serenity.PropertyItem[];
        InitialSettings?: any;
        IsDataOnlyReport?: boolean;
    }
}
declare namespace Serenity.Extensions {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        get title(): string;
        set title(value: string);
        cancelTitle: string;
        getDialogButtons(): {
            text: string;
            click: () => void;
        }[];
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace Serenity.Extensions {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace Serenity.Extensions {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        editRequest?: (request: Serenity.ListRequest) => Serenity.ListRequest;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare interface jsPDF {
    autoTableEndPosY?: number;
    autoTableHtmlToJson(table: HTMLElement): any;
    autoTable(columns: string[] | jsPDF.AutoTableColumn[], data: any[], options: jsPDF.AutoTableOptions): any;
    autoTableText(text: string, x: number, y: number, styles: jsPDF.AutoTableStyles): any;
}
declare namespace jsPDF {
    interface AutoTableColumn {
        title?: string;
        dataKey?: string;
    }
    interface AutoTableOptions {
        tableWidth?: 'wrap';
        theme?: 'striped' | 'grid' | 'plain';
        startY?: number;
        styles?: AutoTableStyles;
        headerStyles?: AutoTableStyles;
        bodyStyles?: AutoTableStyles;
        columnStyles?: {
            [dataKey: string]: AutoTableStyles;
        };
        margin?: AutoTableMargin;
        didDrawCell?: (data: CellHookData) => void;
        didDrawPage?: (data: HookData) => void;
        head?: [AutoTableColumn[]];
        body?: {}[];
    }
    interface HookData {
        table?: any;
        pageNumber?: number;
        pageCount?: number;
        settings?: {};
        doc?: any;
        cursor?: {
            x?: number;
            y?: number;
        };
    }
    interface CellHookData extends HookData {
        cell?: {
            x?: number;
            y?: number;
        };
        row?: any;
        column?: AutoTableColumn;
        section?: 'head' | 'body' | 'foot';
    }
    interface AutoTableMargin {
        horizontal?: number;
        top?: number;
        left?: number;
        right?: number;
        bottom?: number;
    }
    interface AutoTableStyles {
        cellPadding?: number;
        fontSize?: number;
        font?: string;
        lineColor?: number | number[];
        lineWidth?: number;
        lineHeight?: number;
        fontStyle?: string;
        fillColor?: number | number[];
        textColor?: number | number[];
        halign?: 'left' | 'center' | 'right';
        valign?: 'top' | 'middle' | 'bottom';
        fillStyle?: 'S' | 'F' | 'DF';
        rowHeight?: number;
        columnWidth?: 'auto' | 'wrap' | number;
        overflow?: 'linebreak';
    }
}
declare var jspdf: any;
declare namespace Serenity.Extensions {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): ToolButton;
    }
}
declare namespace Serenity.Extensions {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace Serenity.Extensions {
    class SingleLineTextFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
        static formatValue(value: string): string;
    }
}
declare namespace Serenity.Extensions {
    class GridEditorBase<TEntity, TOptions = any> extends Serenity.EntityGrid<TEntity, TOptions> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery, opt?: TOptions);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace Serenity.Extensions {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace Serenity.Extensions {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): ({
            title: string;
            cssClass: string;
            onClick: () => void;
            icon?: undefined;
        } | {
            title: string;
            cssClass: string;
            icon: string;
            onClick: () => void;
        })[];
        getTemplate(): string;
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace Serenity.Extensions {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare namespace Serenity.Extensions {
    class ReportPage extends Serenity.Widget<any> {
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace Serenity.Extensions {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace Serenity.Extensions.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace Serenity.Extensions {
    interface PromptDialogOptions {
        cssClass?: string;
        editorType?: string;
        editorOptions?: any;
        title?: string;
        message?: string;
        isHtml?: boolean;
        value?: any;
        required?: boolean;
        validateValue: (v: any) => boolean;
    }
    class PromptDialog extends Serenity.PropertyDialog<any, PromptDialogOptions> {
        constructor(opt: PromptDialogOptions);
        protected getDialogButtons(): {
            text: string;
            click: () => void;
        }[];
        protected loadInitialEntity(): void;
        protected getPropertyItems(): {
            name: string;
            editorType: string;
            required: any;
            editorParams: any;
        }[];
        get value(): any;
        set value(v: any);
        static prompt(title: string, message: string, value: string, validateValue: (string: any) => boolean): void;
    }
}
declare namespace Serenity.Extensions {
    class SelectableEntityGrid<TItem, TOptions> extends Serenity.EntityGrid<TItem, TOptions> {
        protected getSlickOptions(): Slick.GridOptions;
        protected createSlickGrid(): Slick.Grid;
    }
}
declare namespace Serenity.Extensions {
    interface ServiceEditorOptions {
        cascadeFrom?: string;
        cascadeField?: string;
        cascadeValue?: any;
    }
    class ServiceEditorBase<TOptions extends ServiceEditorOptions, TRow> extends Serenity.Select2AjaxEditor<TOptions, TRow> {
        private cascadeLink;
        constructor(hidden: JQuery, options: TOptions);
        private setCascadeFrom;
        get cascadeValue(): any;
        set cascadeValue(value: any);
        get cascadeField(): any;
        set cascadeField(value: any);
        get cascadeFrom(): any;
        set cascadeFrom(value: any);
        private getCascadeFromValue;
        protected getIncludeColumns(): string[];
        protected getSort(): string[];
        getTypeDelay(): number;
        private lastRequest;
        executeQueryByKey(options: Serenity.ServiceOptions<Serenity.RetrieveResponse<TRow>>): void;
        executeQuery(options: Serenity.ServiceOptions<Serenity.ListResponse<TRow>>): void;
    }
}
declare namespace Serenity.Extensions {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
