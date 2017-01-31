namespace Serene.BasicSamples {
    export class StaticTextBlockForm extends Serenity.PrefixedContext {
        static formKey = 'BasicSamples.StaticTextBlock';

    }

    export interface StaticTextBlockForm {
        StaticText: StaticTextBlock;
        SomeInput: Serenity.StringEditor;
        HtmlList: StaticTextBlock;
        FromLocalText: StaticTextBlock;
        DisplayFieldValue: StaticTextBlock;
    }

    [['StaticText', () => StaticTextBlock], ['SomeInput', () => Serenity.StringEditor], ['HtmlList', () => StaticTextBlock], ['FromLocalText', () => StaticTextBlock], ['DisplayFieldValue', () => StaticTextBlock]].forEach(x => Object.defineProperty(StaticTextBlockForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

