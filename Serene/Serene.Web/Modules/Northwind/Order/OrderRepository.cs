

namespace Serene.Northwind.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.OrderRow;

    public class OrderRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyUndeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void AfterSave()
            {
                base.AfterSave();

                if (Row.DetailList != null)
                {
                    var fdd = Entities.OrderDetailRow.Fields;
                    var oldList = IsCreate ? new List<Entities.OrderDetailRow>() :
                        Connection.List<Entities.OrderDetailRow>(fdd.OrderID == this.Row.OrderID.Value);

                    new Common.DetailListSaveHandler<Entities.OrderDetailRow>(oldList, Row.DetailList,
                        x => x.OrderID = Row.OrderID.Value).Process(this.UnitOfWork);
                }
            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyUndeleteHandler : UndeleteRequestHandler<MyRow> { }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            protected override void OnReturn()
            {
                var od = Entities.OrderDetailRow.Fields;
                Row.DetailList = Connection.List<Entities.OrderDetailRow>(q => q
                    .SelectTableFields()
                    .Select(od.ProductName)
                    .Select(od.LineTotal)
                    .Where(od.OrderID == Row.OrderID.Value));

                base.OnReturn();
            }
        }

        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}