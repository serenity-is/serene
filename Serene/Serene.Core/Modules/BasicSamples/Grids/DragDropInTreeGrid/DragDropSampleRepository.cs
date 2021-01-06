using MyRow = Serene.BasicSamples.Entities.DragDropSampleRow;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;


namespace Serene.BasicSamples.Repositories
{
    public class DragDropSampleRepository : BaseRepository
    {
        public DragDropSampleRepository(IRequestContext context)
             : base(context)
        {
        }

        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler(Context).Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler(Context).Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler(Context).Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            public MySaveHandler(IRequestContext context)
                 : base(context)
            {
            }

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

        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            public MyDeleteHandler(IRequestContext context)
                 : base(context)
            {
            }
        }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            public MyRetrieveHandler(IRequestContext context)
                 : base(context)
            {
            }
        }

        private class MyListHandler : ListRequestHandler<MyRow>
        {
            public MyListHandler(IRequestContext context)
                 : base(context)
            {
            }
        }

        public static void PopulateInitialItems(ISqlConnections sqlConnections)
        {
            if (sqlConnections is null)
            	throw new ArgumentNullException(nameof(sqlConnections));

            using (var connection = sqlConnections.NewFor<MyRow>())
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