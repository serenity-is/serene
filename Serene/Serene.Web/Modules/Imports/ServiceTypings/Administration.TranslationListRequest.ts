namespace Serene.Administration
{
    export interface TranslationListRequest extends Serenity.ListRequest
    {
        SourceLanguageID?: string
        TargetLanguageID?: string
    }
}

