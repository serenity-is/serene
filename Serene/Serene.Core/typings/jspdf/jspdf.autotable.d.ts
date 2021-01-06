interface jsPDF {
    autoTableEndPosY?: number;
    autoTableHtmlToJson(table: HTMLElement);
    autoTable(columns: string[] | jsPDF.AutoTableColumn[], data: any[], options: jsPDF.AutoTableOptions);
    autoTableText(text: string, x: number, y: number, styles: jsPDF.AutoTableStyles);
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
        beforePageContent?: (data: any[]) => void;
        afterPageContent?: (data: any[]) => void;
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