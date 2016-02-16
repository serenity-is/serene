

namespace Serene.Northwind.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.CategoryRow;

    public class CategoryRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveWithLocalizationRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveWithLocalizationRequest<MyRow> request)
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

        public RetrieveLocalizationResponse<MyRow> RetrieveLocalization(IDbConnection connection, RetrieveLocalizationRequest request)
        {
            return new LocalizationRowHandler<MyRow>().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow, SaveWithLocalizationRequest<MyRow>, SaveResponse>
        {
            protected override void AfterSave()
            {
                base.AfterSave();

                if (Request.Localizations != null)
                    foreach (var pair in Request.Localizations)
                    {
                        pair.Value.CategoryID = Row.CategoryID.Value;
                        new LocalizationRowHandler<MyRow>().Update<Entities.CategoryLangRow>(this.UnitOfWork, pair.Value, Convert.ToInt32(pair.Key));
                    }
            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyUndeleteHandler : UndeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}