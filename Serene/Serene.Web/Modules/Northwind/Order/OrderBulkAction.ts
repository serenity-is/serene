namespace Serene.BasicSamples {

    export class OrderBulkAction extends Common.BulkServiceAction {

        /**
         * This controls how many service requests will be used in parallel.
         * Determine this number based on how many requests your server
         * might be able to handle, and amount of wait on external resources.
         */
        protected getParallelRequests() {
            return 10;
        }

        /**
         * These number of records IDs will be sent to your service in one
         * service call. If your service is designed to handle one record only,
         * set it to 1. But note that, if you have 5000 records, this will
         * result in 5000 service calls / requests.
         */
        protected getBatchSize() {
            return 5;
        }

        /**
         * This is where you should call your service.
         * Batch parameter contains the selected order IDs 
         * that should be processed in this service call.
         */
        protected executeForBatch(batch) {
            BasicSamplesService.OrderBulkAction(
                {
                    OrderIDs: batch.map(x => Q.parseInteger(x))
                },
                response => this.set_successCount(this.get_successCount() + batch.length),
                {
                    blockUI: false,
                    onError: response => this.set_errorCount(this.get_errorCount() + batch.length),
                    onCleanup: () => this.serviceCallCleanup()
                });
        }
    }
}