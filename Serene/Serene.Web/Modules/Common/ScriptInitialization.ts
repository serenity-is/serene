/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace Serene.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('Serene');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
    Serenity.HtmlContentEditor.CKEditorBasePath = "~/Serenity.Assets/Scripts/ckeditor/";

    if ($.fn['colorbox']) {
        $.fn['colorbox'].settings.maxWidth = "95%";
        $.fn['colorbox'].settings.maxHeight = "95%";
    }

    window.onerror = Q.ErrorHandling.runtimeErrorHandler;
}