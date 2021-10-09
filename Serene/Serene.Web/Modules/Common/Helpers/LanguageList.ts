namespace Serene.LanguageList {
    export function getValue() {
        var result: string[][] = [];
        for (var k of Administration.LanguageRow.getLookup().items) {
            if (k.LanguageId !== 'en') {
                result.push([k.Id.toString(), k.LanguageName]);
            }
        }
        return result;
    }
}
