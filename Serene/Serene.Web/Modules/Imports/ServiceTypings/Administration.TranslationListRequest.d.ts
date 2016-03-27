declare namespace Serene.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID: string;
        TargetLanguageID: string;
    }
}
