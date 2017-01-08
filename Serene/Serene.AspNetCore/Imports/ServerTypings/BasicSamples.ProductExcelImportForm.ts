namespace Serene.BasicSamples {
    export class ProductExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'BasicSamples.ProductExcelImport';

    }

    export interface ProductExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    [['FileName', () => Serenity.ImageUploadEditor]].forEach(x => Object.defineProperty(ProductExcelImportForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

