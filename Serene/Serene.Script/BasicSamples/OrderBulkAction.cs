
namespace Serene.BasicSamples
{
    using Serenity;
    using System.Collections.Generic;
    using System.Linq;

    /// <summary>
    /// This is our sample bulk action that operates on orders.
    /// We use BulkServiceAction base class as it handles many
    /// common details for us, like splitting and parallel requests.
    /// </summary>
    public class OrderBulkAction : BulkServiceAction
    {
        /// <summary>
        /// This controls how many service requests will be used in parallel.
        /// Determine this number based on how many requests your server
        /// might be able to handle, and amount of wait on external resources.
        /// </summary>
        protected override int GetParallelRequests()
        {
            return 10;
        }

        /// <summary>
        /// These number of records IDs will be sent to your service in one
        /// service call. If your service is designed to handle one record only,
        /// set it to 1. But note that, if you have 5000 records, this will
        /// result in 5000 service calls / requests.
        /// </summary>
        protected override int GetBatchSize()
        {
            return 5;
        }

        /// <summary>
        /// This is where you should call your service.
        /// Batch parameter contains the selected order IDs 
        /// that should be processed in this service call.
        /// </summary>
        protected override void ExecuteForBatch(List<string> batch)
        {
            BasicSamplesService.OrderBulkAction(new OrderBulkActionRequest
            {
                OrderIDs = batch.Select(x => int.Parse(x, 10)).ToList()
            },
            response =>
            {
                SuccessCount = SuccessCount + batch.Count;
            },
            options: new ServiceCallOptions
            {
                BlockUI = false,
                OnError = response =>
                {
                    ErrorCount = ErrorCount + batch.Count;
                },
                OnCleanup = ServiceCallCleanup
            });
        }
    }
}