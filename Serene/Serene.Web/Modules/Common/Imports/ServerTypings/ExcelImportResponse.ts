namespace Serene {
    export interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number
        Updated?: number
        ErrorList?: string[]
    }
}

