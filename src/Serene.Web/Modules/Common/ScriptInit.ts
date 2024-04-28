import { EntityDialog, HtmlContentEditor, getjQuery } from "@serenity-is/corelib";
import { Authorization, Config, ErrorHandling } from "@serenity-is/corelib";
import { siteLanguageList } from "./Helpers/LanguageList";
import { Grid, gridDefaults } from "@serenity-is/sleekgrid";

Config.rootNamespaces.push('Serene');
EntityDialog.defaultLanguageList = siteLanguageList;
HtmlContentEditor.CKEditorBasePath = "~/Serenity.Assets/Scripts/ckeditor/";
gridDefaults.useCssVars = false;

let $ = getjQuery();
if ($?.fn?.['colorbox']) {
    $.fn['colorbox'].settings.maxWidth = "95%";
    $.fn['colorbox'].settings.maxHeight = "95%";
}

window.onerror = ErrorHandling.runtimeErrorHandler;