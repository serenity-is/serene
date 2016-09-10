namespace Serene.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('Serene');
}

namespace Select2.util {
    export function stripDiacritics(text: string) {
        return Q.stripDiacritics(text);
    }
}