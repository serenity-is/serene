declare interface jsPDF {
    autoTableEndPosY?: number;
    autoTableHtmlToJson(table: HTMLElement);
    autoTable(columns: jsPDF.AutoTableColumn[], rows: any[], options: jsPDF.AutoTableOptions);
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
        beforePageContent: (data: any[]) => void;
        afterPageContent?: (data: any[]) => void;
    }

    interface AutoTableMargin {
        horizontal?: number;
        top?: number;
    }

    interface AutoTableStyles {
        cellPadding?: number;
        fontSize?: number;
        font?: string;
        lineColor?: number | number[];
        lineWidth?: number;
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