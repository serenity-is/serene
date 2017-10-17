/// <reference path="../../../Northwind/Order/OrderDialog.ts" />

namespace Serene.BasicSamples {

    /**
     * Our custom order dialog subclass that will have a tab to display and edit selected customer details.
     * With single toolbar for all forms
     */
    @Serenity.Decorators.registerClass()
    export class OtherFormOneBarDialog extends Northwind.OrderDialog {

        private customerPropertyGrid: Serenity.PropertyGrid;
        private customerForm: Northwind.CustomerForm;
        private customerValidator: JQueryValidation.Validator;
        private selfChange = 0;

        constructor() {
            super();

            // entity dialogs by default creates a property grid on element with ID "PropertyGrid".
            // here we explicitly create another, the customer property grid (vertical form) on element with ID "CustomerPropertyGrid".
            this.customerPropertyGrid = new Serenity.PropertyGrid(this.byId("CustomerPropertyGrid"), {
                items: Q.getForm(Northwind.CustomerForm.formKey).filter(x => x.name != 'CustomerID'),
                idPrefix: this.idPrefix + "_Customer_",
                useCategories: true
            });

            // this is just a helper to access editors if needed
            this.customerForm = new Northwind.CustomerForm((this.customerPropertyGrid as any).idPrefix);

            // initialize validator for customer form
            this.customerValidator = this.byId("CustomerForm").validate(Q.validateOptions({}));

            this.form.CustomerID.change(e => {
                if (this.selfChange)
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

        // Save the customer and the order 
        protected saveCustomer(callback: (response: Serenity.SaveResponse) => void, onSuccess?: (response: Serenity.SaveResponse) => void): boolean {
            var id = this.getCustomerID();
            if (!id) {
                // If id of Customer isn't present, we save only Order entity
                onSuccess(null);
            }
            else {
                // Get current tab
                var currTab = Serenity.TabsExtensions.activeTabKey(this.tabs);

                // Select the correct tab and validate to see the error message in tab
                Serenity.TabsExtensions.selectTab(this.tabs, "Customer")
                if (!this.customerValidator.form()) {
                    return false;
                }

                // Re-select initial tab
                Serenity.TabsExtensions.selectTab(this.tabs, currTab)

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
                    this.selfChange++;
                    try {
                        // trigger change so that customer select updates its text
                        // in case if Company Name is changed
                        this.form.CustomerID.element.change();
                    }
                    finally {
                        this.selfChange--;
                    }

                    onSuccess(response);
                });
            }

            return true;
        }

        // Call super.save to save Order entity
        protected saveOrder(callback: (response: Serenity.SaveResponse) => void) {
            super.save(callback);
        }

        protected saveAll(callback: (response: Serenity.SaveResponse) => void) {
            this.saveCustomer(callback,
                // If customer successa, save Order entity
                resp => this.saveOrder(callback)
            );
        }

        // This is called when save/update button is pressed
        protected save(callback: (response: Serenity.SaveResponse) => void) {
            this.saveAll(callback);
        }
    }
}