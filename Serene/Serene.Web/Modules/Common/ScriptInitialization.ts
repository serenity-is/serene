/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace Serene.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('Serene');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
}