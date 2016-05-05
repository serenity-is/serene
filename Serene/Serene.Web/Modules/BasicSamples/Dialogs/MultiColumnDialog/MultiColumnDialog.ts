namespace Serene.BasicSamples {

    /**
     * Styling for columns is done with CSS in site.basicsamples.less file.
     * We just need to set flexify options here to determine how much editors
     * will grow or shrink when dialog is resized. If dialog wasn't resizable
     * we didn't have to do this.
     *
     * NOTE: Have a look at MultiColumnResponsiveDialog sample, it's easier
     * and more recent version. This sample is for old dialog layouts.
     */
    @Serenity.Decorators.registerClass()
    export class MultiColumnDialog extends Northwind.OrderDialog {

        constructor() {
            super();

            this.form = new Northwind.OrderForm(this.idPrefix);

            // as these editors are in a two column line, 
            // all should grow 0.5px when dialog grows 1px
            this.form.OrderDate().element.flexX(0.5);
            this.form.RequiredDate().element.flexX(0.5);
            this.form.ShipName().element.flexX(0.5);
            this.form.ShipCity().element.flexX(0.5);
            this.form.ShipPostalCode().element.flexX(0.5);
            this.form.ShipAddress().element.flexX(0.5);
            this.form.ShipRegion().element.flexX(0.5);
            this.form.ShipCountry().element.flexX(0.5);

            // as these editors are in a three column line, 
            // all should grow 0.33px when dialog grows 1px
            this.form.ShippedDate().element.flexX(0.33);
            this.form.ShipVia().element.siblings('.select2-container').flexX(0.33);
            this.form.Freight().element.flexX(0.33);

            // grid should grow in height and width when dialog grows
            this.form.DetailList().element.flexWidthHeight(1, 1);
        }
    }
}