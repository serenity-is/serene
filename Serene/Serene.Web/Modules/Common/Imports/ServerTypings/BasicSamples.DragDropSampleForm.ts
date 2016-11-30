namespace Serene.BasicSamples {
    export class DragDropSampleForm extends Serenity.PrefixedContext {
        static formKey = 'BasicSamples.DragDropSample';

    }

    export interface DragDropSampleForm {
        Title: Serenity.StringEditor;
    }

    [['Title', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(DragDropSampleForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

