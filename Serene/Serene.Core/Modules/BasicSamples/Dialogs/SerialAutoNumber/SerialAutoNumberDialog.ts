/// <reference path="../../../Northwind/Customer/CustomerDialog.ts" />

namespace Serene.BasicSamples {

    @Serenity.Decorators.registerClass()
    export class SerialAutoNumberDialog extends Northwind.CustomerDialog {

        constructor() {
            super();

            this.form.CustomerID.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }

        private getNextNumber() {
            
            var val = Q.trimToNull(this.form.CustomerID.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'C').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                Serene.Northwind.CustomerService.GetNextNumber({
                    Prefix: prefix,
                    Length: 5 // we want service to search for and return serials of 5 in length
                }, response => {
                    this.form.CustomerID.value = response.Serial;

                    // this is to mark numerical part after prefix
                    (this.form.CustomerID.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }

    }
}