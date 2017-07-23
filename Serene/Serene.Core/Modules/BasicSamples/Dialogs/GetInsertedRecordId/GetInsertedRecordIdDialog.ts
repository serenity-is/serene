/// <reference path="../../../Northwind/Category/CategoryDialog.ts" />

namespace Serene.BasicSamples {

    @Serenity.Decorators.registerClass()
    export class GetInsertedRecordIdDialog extends Northwind.CategoryDialog {

        /**
         * This method is called after the save request to service
         * is completed succesfully. This can be an insert or update.
         *
         * @param response Response that is returned from server
         */
        protected onSaveSuccess(response: Serenity.SaveResponse): void {

            // check that this is an insert
            if (this.isNew()) {
                Q.notifySuccess("Just inserted a category with ID: " + response.EntityId);

                // you could also open a new dialog
                // new Northwind.CategoryDialog().loadByIdAndOpenDialog(response.EntityId);

                // but let's better load inserted record using Retrieve service
                Northwind.CategoryService.Retrieve(<any>{
                    EntityId: response.EntityId
                }, resp => {
                    Q.notifyInfo("Looks like the category you added has name: " + resp.Entity.CategoryName);
                });
            }
        }
    }
}