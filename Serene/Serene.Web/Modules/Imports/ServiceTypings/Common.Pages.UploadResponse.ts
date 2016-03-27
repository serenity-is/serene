namespace Serene.Common.Pages
{
    export interface UploadResponse extends Serenity.ServiceResponse
    {
        TemporaryFile?: string
        Size?: number
        IsImage?: boolean
        Width?: number
        Height?: number
    }
}

