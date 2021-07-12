/// <reference types="react" />
/// <reference types="serenity.corelib" />
/// <reference types="jquery.validation" />
declare namespace Q {
    function uidGenerator(): () => (() => string);
    function cssClass(...args: any[]): string;
}
declare namespace ReactDOM {
    function findDOMNode(instance: React.ReactInstance): Element;
    function unmountComponentAtNode(container: Element): boolean;
    function createPortal(children: React.ReactNode, container: Element): React.ReactPortal;
    const version: string;
    const render: Renderer;
    const hydrate: Renderer;
    function unstable_batchedUpdates<A, B>(callback: (a: A, b: B) => any, a: A, b: B): void;
    function unstable_batchedUpdates<A>(callback: (a: A) => any, a: A): void;
    function unstable_batchedUpdates(callback: () => any): void;
    function unstable_renderSubtreeIntoContainer<T extends Element>(parentComponent: React.Component<any>, element: React.DOMElement<React.DOMAttributes<T>, T>, container: Element, callback?: (element: T) => any): T;
    function unstable_renderSubtreeIntoContainer<P, T extends React.Component<P, React.ComponentState>>(parentComponent: React.Component<any>, element: React.CElement<P, T>, container: Element, callback?: (component: T) => any): T;
    function unstable_renderSubtreeIntoContainer<P>(parentComponent: React.Component<any>, element: React.ReactElement<P>, container: Element, callback?: (component?: React.Component<P, React.ComponentState> | Element) => any): React.Component<P, React.ComponentState> | Element | void;
    interface Renderer {
        <T extends Element>(element: React.DOMElement<React.DOMAttributes<T>, T>, container: Element | null, callback?: () => void): T;
        (element: Array<React.DOMElement<React.DOMAttributes<any>, any>>, container: Element | null, callback?: () => void): Element;
        (element: React.SFCElement<any> | Array<React.SFCElement<any>>, container: Element | null, callback?: () => void): void;
        <P, T extends React.Component<P, React.ComponentState>>(element: React.CElement<P, T>, container: Element | null, callback?: () => void): T;
        (element: Array<React.CElement<any, React.Component<any, React.ComponentState>>>, container: Element | null, callback?: () => void): React.Component<any, React.ComponentState>;
        <P>(element: React.ReactElement<P>, container: Element | null, callback?: () => void): React.Component<P, React.ComponentState> | Element | void;
        (element: Array<React.ReactElement<any>>, container: Element | null, callback?: () => void): React.Component<any, React.ComponentState> | Element | void;
        (parentComponent: React.Component<any> | Array<React.Component<any>>, element: React.SFCElement<any>, container: Element, callback?: () => void): void;
    }
}
declare namespace Q {
}
declare namespace Serenity.UI {
    class CategoriesProps {
        idPrefix?: string;
        items?: Serenity.PropertyItem[];
        defaultCategory?: string;
        categoryOrder?: string;
        localTextPrefix?: string;
        renderCategory?: (props: CategoryProps) => React.ReactNode;
        renderField?: (props: PropertyItem) => React.ReactNode;
        setRef?: (name: string, editor: any) => void;
    }
    class Categories extends React.Component<CategoriesProps> {
        static applyOrder(groups: Q.Groups<Serenity.PropertyItem>, categoryOrder: string): void;
        static groupByCategory(items: PropertyItem[], defaultCategory?: string, categoryOrder?: string): Q.Groups<PropertyItem>;
        renderCategory(group: Q.Group<PropertyItem>): {};
        render(): JSX.Element;
    }
}
declare namespace Serenity.UI {
    interface CategoryProps {
        categoryId?: string;
        category?: string;
        collapsed?: boolean;
        idPrefix?: string;
        localTextPrefix?: string;
        items?: PropertyItem[];
        renderField?: (props: PropertyItem) => React.ReactNode;
        setRef?: (name: string, editor: any) => void;
    }
    class Category extends React.Component<CategoryProps, Partial<CategoryProps>> {
        protected text: (text: string, key: string | ((p?: string) => string)) => string;
        constructor(props: CategoryProps, context?: any);
        componentWillReceiveProps(nextProps: CategoryProps): void;
        getClassName(): "category " | "category collapsible collapsed" | "category collapsible";
        getCategoryId(): string;
        handleTitleClick(): void;
        renderTitle(): JSX.Element;
        renderField(item: PropertyItem): {};
        renderWithBreak(item: PropertyItem): {}[];
        render(): JSX.Element;
    }
}
declare namespace Serenity.UI {
    interface CategoryLineBreakProps {
        breakClass: string;
    }
    class CategoryLineBreak extends React.Component<CategoryLineBreakProps> {
        getBreakClass(): string;
        render(): JSX.Element;
    }
}
declare namespace Serenity.UI {
    interface CategoryLinkProps {
        categoryId?: string;
        onClick?: React.EventHandler<any>;
    }
    class CategoryLink extends React.Component<CategoryLinkProps> {
        handleClick(e: React.MouseEvent<any>): void;
        getLink(): string;
        render(): JSX.Element;
    }
}
declare namespace Serenity.UI {
    interface CategoryLinksProps {
        idPrefix?: string;
        items?: Serenity.PropertyItem[];
        defaultCategory?: string;
        categoryOrder?: string;
        localTextPrefix?: string;
    }
    class CategoryLinks extends React.Component<CategoryLinksProps> {
        protected text: (text: string, key: string | ((p?: string) => string)) => string;
        renderSeparator(key: any): JSX.Element;
        render(): JSX.Element;
    }
}
declare namespace Serenity.UI {
    interface CategoryTitleProps {
        categoryId?: string;
        collapsed?: boolean;
        onClick?: React.EventHandler<any>;
    }
    class CategoryTitle extends React.Component<CategoryTitleProps> {
        static collapsedIcon: JSX.Element;
        static expandedIcon: JSX.Element;
        render(): JSX.Element;
    }
}
declare namespace Serenity.UI {
    class Dialog<TOptions = object> extends Serenity.TemplatedDialog<TOptions> {
        protected view: any;
        protected entityId: any;
        protected entity: any;
        constructor(options?: TOptions);
        loadByIdAndOpenDialog(entityId: any, asPanel?: boolean): void;
        loadEntityAndOpenDialog(entity: any, asPanel?: boolean): void;
        loadNewAndOpenDialog(asPanel?: boolean): void;
        private mountView;
        getTemplate(): string;
    }
}
declare namespace Serenity.UI {
    class EditorRefs {
        private inner?;
        private setters;
        private refs;
        constructor(inner?: (name: string, ref: any) => void);
        get(name: string): any;
        set(name: string, ref: any): void;
        setter(name: string): ((ref: any) => void);
        loadFrom(source: any, names?: string[]): void;
        saveTo(target: any, names?: string[], ignoreOneWay?: boolean): void;
    }
}
declare namespace Serenity.UI {
    type EditorRenderProps = {
        className?: string;
        name?: string;
        id?: string;
        required?: boolean;
        ref?: (editor: any) => void;
    };
    interface FieldProps {
        name?: string;
        id?: string;
        className?: string;
        caption?: string | false;
        labelWidth?: number | string;
        label?: ((p: LabelProps) => JSX.Element);
        htmlFor?: string;
        editor?: ((p: EditorRenderProps) => JSX.Element);
        setRef?: (name: string, editor: any) => void;
        hint?: string;
        required?: boolean;
        vx?: boolean;
    }
    class Field extends React.Component<FieldProps> {
        private editorRef;
        componentWillReceiveProps(nextProps: FieldProps, nextContext?: any): void;
        render(): JSX.Element;
    }
}
declare namespace Serenity.UI {
    type ValidateFormProps = {
        options?: JQueryValidation.ValidationOptions;
    } & React.HTMLAttributes<HTMLFormElement>;
    class ValidateForm extends React.Component<ValidateFormProps> {
        private validator;
        private form;
        render(): JSX.Element;
        handleSubmit(e: React.FormEvent<HTMLFormElement>): boolean;
        componentDidMount(): void;
        validateForm(): boolean;
        serialize(): any;
    }
}
declare namespace Serenity.UI {
    class Form extends ValidateForm {
        render(): JSX.Element;
    }
}
declare namespace Serenity.UI {
    interface FormDataModel<TEntity> {
        entity: TEntity;
        entityId?: any;
        formMode: FormMode;
        formTitle?: string;
        onSave?: (values: TEntity) => PromiseLike<void>;
        onDelete?: () => PromiseLike<void>;
        onUndelete?: () => PromiseLike<void>;
        onReload?: () => PromiseLike<void>;
    }
}
declare namespace Serenity.UI {
    interface FormDataSourceProps<TEntity> {
        service?: string;
        retrieveService?: string;
        createService?: string;
        updateService?: string;
        entityId?: any;
        entity?: TEntity;
        idProperty?: string;
        nameProperty?: string;
        isActiveProperty?: string;
        isDeletedProperty?: string;
        localTextPrefix?: string;
        readOnly?: boolean;
        view?: (model: FormDataModel<TEntity>) => React.ReactNode;
    }
    interface FormDataSourceState<TEntity> {
        entity: TEntity;
        formMode: FormMode;
        formTitle: string;
        localizations?: any;
    }
    class FormDataSource<TEntity> extends React.Component<FormDataSourceProps<TEntity>, FormDataSourceState<TEntity>> {
        private emptyEntity;
        private pendingEntity;
        private canSetState;
        constructor(props: FormDataSourceProps<TEntity>, context?: any);
        componentWillReceiveProps(nextProps: FormDataSourceProps<TEntity>): void;
        componentDidMount(): void;
        componentWillUnmount(): void;
        loadEntity(entity: TEntity): void;
        loadResponse(response: RetrieveResponse<TEntity>): void;
        getLoadByIdRequest(entityId: any): RetrieveRequest;
        getServiceFor(method: string): string;
        getLoadByIdOptions(entityId: any): ServiceOptions<RetrieveResponse<TEntity>>;
        loadById(entityId: any): PromiseLike<RetrieveResponse<TEntity>>;
        isDeleted(entity: TEntity): boolean;
        modeFor(entity: TEntity): FormMode;
        protected getEntityName(): string;
        protected getNameValue(entity: TEntity): any;
        titleFor(entity: TEntity, mode: FormMode): string;
        isEditMode(): boolean;
        getSaveEntity(values: TEntity): TEntity;
        getSaveOptions(values: TEntity): ServiceOptions<SaveResponse>;
        getIdProperty(): string;
        protected getLanguages(): any[];
        protected getPendingLocalizations(): any;
        getSaveRequest(values: TEntity): SaveRequest<TEntity>;
        save(values: TEntity): PromiseLike<void>;
        delete(): PromiseLike<void>;
        undelete(): PromiseLike<void>;
        getDataModel(): FormDataModel<TEntity>;
        get dataModel(): FormDataModel<TEntity>;
        get entity(): TEntity;
        render(): React.ReactNode;
    }
}
declare namespace Serenity.UI {
    enum FormMode {
        Initial = 0,
        New = 1,
        Edit = 2,
        View = 3,
        Deleted = 4
    }
}
declare namespace Serenity.UI {
    interface FormViewProps<TEntity> extends FormDataModel<TEntity> {
        onClose?: () => void;
    }
    class FormView<TEntity, TProps extends FormViewProps<TEntity> = FormViewProps<TEntity>, TState = any> extends React.Component<TProps, TState> {
        protected editors: EditorRefs;
        canSave(): boolean;
        showSave(): boolean;
        canClose(): boolean;
        showApplyChanges(): boolean;
        isUpdate(): boolean;
        canDelete(): boolean;
        showDelete(): boolean;
        canUndelete(): boolean;
        showUndelete(): boolean;
        loadEntity(entity: TEntity): void;
        componentDidMount(): void;
        componentWillReceiveProps(nextProps: TProps): void;
        renderSaveButton(): JSX.Element;
        renderApplyChangesButton(): JSX.Element;
        renderDeleteButton(): JSX.Element;
        renderToolbar(children?: React.ReactNode): JSX.Element;
        save(close?: boolean): PromiseLike<void>;
    }
}
declare namespace Serenity.UI {
    interface LabelProps {
        hint?: string;
        htmlFor?: string;
        width?: string | number;
        required?: boolean;
    }
    class Label extends React.Component<LabelProps> {
        render(): JSX.Element;
    }
}
declare namespace Serenity.UI {
    interface PropertyFieldProps extends Serenity.PropertyItem {
        idPrefix?: string;
        localTextPrefix?: string;
        setRef?: (name: string, editor: any) => void;
    }
    class PropertyField extends React.Component<PropertyFieldProps> {
        protected text: (text: string, key: string | ((p?: string) => string)) => string;
        getCaption(): string;
        getHint(): string;
        getPlaceHolder(): string;
        getClassName(): string;
        getHtmlFor(editorType: any): any;
        getEditorType(): any;
        getEditorId(): string;
        getMaxLength(): number;
        render(): JSX.Element;
    }
}
declare namespace Serenity {
    interface PropertyGridOptions {
        idPrefix?: string;
        items?: PropertyItem[];
        useCategories?: boolean;
        categoryOrder?: string;
        defaultCategory?: string;
        localTextPrefix?: string;
        mode?: PropertyGridMode;
        renderCategories?: (tab: string, props: UI.CategoriesProps) => React.ReactNode;
        renderCategory?: (props: UI.CategoryProps) => React.ReactNode;
        renderField?: (props: PropertyItem) => React.ReactNode;
        setRef?: (name: string, editor: any) => void;
    }
}
declare namespace Serenity.UI {
    class IntraPropertyGrid extends React.Component<PropertyGridOptions> {
        loadFrom(source: any, editors: EditorRefs): void;
        canModifyItem(item: PropertyItem): boolean;
        saveTo(target: any, editors: EditorRefs): void;
        getItems(): PropertyItem[];
        render(): React.ReactNode;
    }
    class PropertyGrid extends IntraPropertyGrid {
        render(): JSX.Element;
    }
}
declare namespace Serenity.UI {
    interface PropertyTabProps {
        idPrefix?: string;
        items?: Serenity.PropertyItem[];
        localTextPrefix?: string;
        categoryOrder?: string;
        defaultCategory?: string;
        renderCategories?: (tab: string, props: CategoriesProps) => React.ReactNode;
        renderCategory?: (props: CategoryProps) => React.ReactNode;
        renderField?: (props: PropertyItem) => React.ReactNode;
        setRef?: (name: string, editor: any) => void;
    }
    class PropertyTabs extends React.Component<PropertyTabProps> {
        protected text: (text: string, key: string | ((p?: string) => string)) => string;
        static groupByTab(items: PropertyItem[]): Q.Groups<PropertyItem>;
        renderTab(group: Q.Group<PropertyItem>): JSX.Element;
        renderPane(group: Q.Group<PropertyItem>): JSX.Element;
        renderCategories(group: Q.Group<PropertyItem>): {};
        render(): JSX.Element;
    }
}
declare namespace Serenity.UI {
    class ValidationMark extends React.Component {
        render(): JSX.Element;
        shouldComponentUpdate(): boolean;
    }
}
declare namespace Serenity.UI {
    class ButtonPanel extends React.Component {
        render(): JSX.Element;
    }
}
declare namespace Serenity.UI {
    interface SaveButtonProps extends ToolButtonProps {
        isUpdate?: boolean;
    }
    class SaveButton extends React.Component<SaveButtonProps> {
        render(): JSX.Element;
    }
    class ApplyChangesButton extends React.Component<ToolButtonProps> {
        render(): JSX.Element;
    }
    class DeleteButton extends React.Component<ToolButtonProps> {
        render(): JSX.Element;
    }
}
declare namespace Serenity {
    interface ToolButton {
        title?: string;
        hint?: string;
        cssClass?: string;
        icon?: string;
        onClick?: any;
        htmlEncode?: any;
        hotkey?: string;
        hotkeyAllowDefault?: boolean;
        hotkeyContext?: any;
        separator?: (false | true | 'left' | 'right' | 'both');
    }
    interface ToolbarOptions {
        buttons?: ToolButton[];
        hotkeyContext?: any;
    }
}
declare namespace Serenity.UI {
    interface ToolButtonProps extends Serenity.ToolButton {
    }
    class ToolButton extends React.Component<ToolButtonProps> {
        static buttonSelector: string;
        static adjustIconClass(icon: string): string;
        static className(btn: ToolButtonProps): string;
        handleClick(e: React.MouseEvent<any>): void;
        render(): JSX.Element;
        renderButtonText(): JSX.Element;
    }
    class IntraToolbar extends React.Component<Serenity.ToolbarOptions> {
        el: Element;
        protected mouseTrap: any;
        setupMouseTrap(): void;
        componentDidMount(): void;
        componentWillUnmount(): void;
        render(): JSX.Element;
        renderButtons(buttons: Serenity.ToolButton[]): JSX.Element;
    }
    class Toolbar extends IntraToolbar {
        render(): JSX.Element;
    }
}
