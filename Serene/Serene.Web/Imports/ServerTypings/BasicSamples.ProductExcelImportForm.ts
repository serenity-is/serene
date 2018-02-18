namespace Serene.BasicSamples {
    export interface ProductExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class ProductExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'BasicSamples.ProductExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductExcelImportForm.init)  {
                ProductExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(ProductExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

