

namespace Serene.Organization.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.BusinessUnitRow;

    public class BusinessUnitRepository
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
            protected override void ValidateRequest()
            {
                base.ValidateRequest();

                if (IsUpdate && Old.ParentUnitId != Row.ParentUnitId && Row.ParentUnitId != null)
                {
                    if (Row.ParentUnitId == Row.UnitId)
                        throw new ValidationError("Can't move an item under itself!");

                    if (GetParents(Row.ParentUnitId.Value).Any(x => x == Row.UnitId.Value))
                        throw new ValidationError("Can't move an item under one of its children!");
                }
            }

            private List<int> GetParents(int id)
            {
                var parentById = Connection.List<MyRow>(q => q
                    .Select(fld.UnitId)
                    .Select(fld.ParentUnitId))
                    .ToDictionary(x => x.UnitId, x => x.ParentUnitId);

                var visited = new HashSet<int>();
                var result = new List<int>();
                int? ParentUnitId;
                while (parentById.TryGetValue(id, out ParentUnitId) &&
                    ParentUnitId != null &&
                    !visited.Contains(ParentUnitId.Value))
                {
                    id = ParentUnitId.Value;
                    result.Add(id);
                    visited.Add(id);
                }

                return result;
            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            protected override void ExecuteDelete()
            {
                try
                {
                    base.ExecuteDelete();
                }
                catch (Exception e)
                {
                    SqlExceptionHelper.HandleDeleteForeignKeyException(e);
                    throw;
                }
            }
        }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}