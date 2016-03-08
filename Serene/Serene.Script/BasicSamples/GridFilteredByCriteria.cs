using jQueryApi;
using Serene.Northwind;
using Serenity;
using Serenity.Data;

namespace Serene.BasicSamples
{
    public class GridFilteredByCriteria : ProductGrid
    {
        public GridFilteredByCriteria(jQueryObject container)
            : base(container)
        {
        }

        /// <summary>
        /// OnViewSubmit is a method that is called just before 
        /// a List service call is submitted to server side by grid
        /// data source (view).
        /// 
        /// Service call might be cancelled by returning false.
        /// 
        /// Here we use this method to intercept service call
        /// and add a criteria to list request.
        /// </summary>
        protected override bool OnViewSubmit()
        {
            // only continue if base class returns true (didn't cancel request)
            if (!base.OnViewSubmit())
                return false;

            // view object is the data source for grid (SlickRemoteView)
            // this is an EntityGrid so its Params object is a ListRequest
            var request = (ListRequest)view.Params;

            // list request has a Criteria parameter
            // we use " &= " here because otherwise we might clear 
            // filter set by an edit filter dialog if any.

            request.Criteria &=
                new Criteria(ProductRow.Fields.UnitsInStock) > 10 &
                new Criteria(ProductRow.Fields.CategoryName) != "Condiments" &
                new Criteria(ProductRow.Fields.Discontinued) == 0;

            return true;
        }
    }
}