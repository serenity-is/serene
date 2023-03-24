import { ListRequest } from "@serenity-is/corelib/q";

export interface TranslationListRequest extends ListRequest {
    SourceLanguageID?: string;
    TargetLanguageID?: string;
}