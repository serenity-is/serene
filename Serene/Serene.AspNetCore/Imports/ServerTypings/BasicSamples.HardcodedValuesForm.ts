namespace Serene.BasicSamples {
    export class HardcodedValuesForm extends Serenity.PrefixedContext {
        static formKey = 'BasicSamples.HarcodedValues';

    }

    export interface HardcodedValuesForm {
        SomeValue: HardcodedValuesEditor;
    }

    [['SomeValue', () => HardcodedValuesEditor]].forEach(x => Object.defineProperty(HardcodedValuesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

