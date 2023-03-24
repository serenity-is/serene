import { ServiceRequest } from "@serenity-is/corelib/q";

export interface TranslationUpdateRequest extends ServiceRequest {
    TargetLanguageID?: string;
    Translations?: { [key: string]: string };
}