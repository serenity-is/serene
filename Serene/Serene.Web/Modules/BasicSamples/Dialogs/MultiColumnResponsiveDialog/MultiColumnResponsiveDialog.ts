namespace Serene.BasicSamples {

    /**
     * Styling for columns is done with CSS in site.basicsamples.less file.
     * When comparing this to MultiColumnDialog sample, you may notice that
     * this version requires much less JS and CSS code.
     */
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MultiColumnResponsiveDialog extends Northwind.OrderDialog {

        constructor() {
            super();
        }
    }
}