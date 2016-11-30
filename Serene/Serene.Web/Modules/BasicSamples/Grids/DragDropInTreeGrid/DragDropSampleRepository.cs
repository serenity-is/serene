

namespace Serene.BasicSamples.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using MyRow = Entities.DragDropSampleRow;

    public class DragDropSampleRepository
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

                if (IsUpdate && Old.ParentId != Row.ParentId && Row.ParentId != null)
                {
                    if (Row.ParentId == Row.Id)
                        throw new ValidationError("Can't move an item under itself!");

                    if (GetParents(Row.ParentId.Value).Any(x => x == Row.Id.Value))
                        throw new ValidationError("Can't move an item under one of its children!");
                }
            }

            private List<int> GetParents(int id)
            {
                var parentById = Connection.List<MyRow>(q => q
                    .Select(fld.Id)
                    .Select(fld.ParentId))
                    .ToDictionary(x => x.Id, x => x.ParentId);

                var visited = new HashSet<int>();
                var result = new List<int>();
                int? parentId;
                while (parentById.TryGetValue(id, out parentId) &&
                    parentId != null &&
                    !visited.Contains(parentId.Value))
                {
                    id = parentId.Value;
                    result.Add(id);
                    visited.Add(id);
                }

                return result;
            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }

        public static void PopulateInitialItems()
        {
            using (var connection = SqlConnections.NewFor<MyRow>())
            {
                if (connection.Count<MyRow>() != 0)
                    return;

                var folder1 = (int)connection.InsertAndGetID(new MyRow { Title = "Folder 1" });
                connection.Insert(new MyRow { Title = "Item 1", ParentId = folder1 });
                var sub1 = (int)connection.InsertAndGetID(new MyRow { Title = "Sub folder 1", ParentId = folder1 });
                connection.Insert(new MyRow { Title = "Item 2", ParentId = sub1 });
                connection.Insert(new MyRow { Title = "Item 3", ParentId = sub1 });
                var sub2 = (int)connection.InsertAndGetID(new MyRow { Title = "Sub folder 2", ParentId = folder1 });
                connection.Insert(new MyRow { Title = "Item 4", ParentId = sub2 });
                connection.Insert(new MyRow { Title = "Item 5", ParentId = sub2 });

                var subsub = (int)connection.InsertAndGetID(new MyRow { Title = "Sub sub folder", ParentId = sub2 });
                connection.Insert(new MyRow { Title = "Item 6", ParentId = subsub });
                connection.Insert(new MyRow { Title = "Item 7", ParentId = subsub });

                var folder2 = (int)connection.InsertAndGetID(new MyRow { Title = "Folder 2" });
                connection.Insert(new MyRow { Title = "Item 8", ParentId = folder2 });

                connection.Insert(new MyRow { Title = "Item 9" });
                connection.Insert(new MyRow { Title = "Item 10" });
            }
        }
    }
}