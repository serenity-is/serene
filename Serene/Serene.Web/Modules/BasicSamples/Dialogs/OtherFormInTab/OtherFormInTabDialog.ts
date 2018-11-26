/// <reference path="../../../Northwind/Order/OrderDialog.ts" />

namespace Serene.BasicSamples {

    /**
     * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
     */
    @Serenity.Decorators.registerClass()
    export class OtherFormInTabDialog extends Northwind.OrderDialog {

        private customerPropertyGrid: Serenity.PropertyGrid;
        private customerForm: Northwind.CustomerForm;
        private customerValidator: JQueryValidation.Validator;

        constructor() {
            super();

            // entity dialogs by default creates a property grid on element with ID "PropertyGrid".
            // here we explicitly create another, the customer property grid (vertical form) on element with ID "CustomerPropertyGrid".
            this.customerPropertyGrid = new Serenity.PropertyGrid(this.byId("CustomerPropertyGrid"), {
                idPrefix: this.idPrefix + "_Customer_",
                items: Q.getForm(Northwind.CustomerForm.formKey).filter(x => x.name != 'CustomerID'),
                useCategories: true
            });

            // this is just a helper to access editors if needed
            this.customerForm = new Northwind.CustomerForm((this.customerPropertyGrid as any).options.idPrefix);

            // initialize validator for customer form
            this.customerValidator = this.byId("CustomerForm").validate(Q.validateOptions({}));

            var selfChange = 0;

            // creating another toolbar for customer tab that will only save Customer
            new Serenity.Toolbar(this.byId("CustomerToolbar"), {
                buttons: [{
                    cssClass: "apply-changes-button",
                    title: Q.text("Controls.EntityDialog.SaveButton"),
                    onClick: () => {
                        var id = this.getCustomerID();
                        if (!id)
                            return;

                        if (!this.customerValidator.form())
                            return;

                        // prepare an empty entity to serialize customer details into
                        var c = <Northwind.CustomerRow>{};
                        this.customerPropertyGrid.save(c);

                        Northwind.CustomerService.Update({
                            EntityId: id,
                            Entity: c
                        }, response => {
                            // reload customer list just in case
                            Q.reloadLookup(Northwind.CustomerRow.lookupKey);

                            // set flag that we are triggering customer select change event
                            // otherwise active tab will change to first one
                            selfChange++;
                            try {
                                // trigger change so that customer select updates its text
                                // in case if Company Name is changed
                                this.form.CustomerID.element.change();
                            }
                            finally {
                                selfChange--;
                            }

                            Q.notifySuccess("Saved customer details");
                        });

                    }
                }]
            });

            this.form.CustomerID.change(e => {
                if (selfChange)
                    return;

                var customerID = this.getCustomerID();

                Serenity.TabsExtensions.setDisabled(this.tabs, 'Customer', !customerID);

                if (!customerID) {
                    // no customer is selected, just load an empty entity
                    this.customerPropertyGrid.load({});
                    return;
                }

                // load selected customer into customer form by calling CustomerService
                Northwind.CustomerService.Retrieve({
                    EntityId: customerID
                }, response => {
                    this.customerPropertyGrid.load(response.Entity);
                });

            });
        }

        getCustomerID() {
            var customerID = this.form.CustomerID.value;

            if (Q.isEmptyOrNull(customerID))
                return null;

            // unfortunately, CustomerID (a string) used in this form and 
            // the ID (auto increment ID) are different, so we need to 
            // find numeric ID from customer lookups. 
            // you'll probably won't need this step.
            return Q.first(Northwind.CustomerRow.getLookup().items,
                x => x.CustomerID == customerID).ID;
        }

        loadEntity(entity: Northwind.OrderRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Customer',
                !this.getCustomerID());
        }
    }
}
