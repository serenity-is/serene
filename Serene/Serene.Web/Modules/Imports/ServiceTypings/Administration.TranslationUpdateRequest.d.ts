declare namespace Serene.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID: string;
        Translations: {
            [key: string]: string;
        };
    }
}
