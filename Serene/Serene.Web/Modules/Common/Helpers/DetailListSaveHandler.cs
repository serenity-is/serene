using Serenity.Data;
using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Serene.Common
{
    public class DetailListSaveHandler<TRow>
        where TRow: Row, IIdRow, new()
    {
        private IEnumerable<TRow> oldList;
        private IDictionary<Int64, TRow> oldById;
        private IEnumerable<TRow> newList;
        private ILookup<Int64?, TRow> newById;
        private Action<IUnitOfWork, DeleteRequest> delete;
        private Action<IUnitOfWork, SaveRequest<TRow>> save;
        private Action<TRow> setOwnerID;

        public DetailListSaveHandler(IEnumerable<TRow> oldList, IEnumerable<TRow> newList, Action<TRow> setOwnerID, 
            Action<IUnitOfWork, SaveRequest<TRow>> save = null, Action<IUnitOfWork, DeleteRequest> delete = null)
        {
            this.oldList = oldList ?? new List<TRow>();
            this.oldById = oldList.ToDictionary(x => GetID(x).Value);

            this.newList = newList ?? new List<TRow>();
            this.newById = newList.ToLookup(x => GetID(x));

            this.setOwnerID = setOwnerID;

            this.delete = delete ?? Delete;
            this.save = save ?? Save;
        }

        protected virtual void Delete(IUnitOfWork uow, DeleteRequest request)
        {
            new DeleteRequestHandler<TRow>().Process(uow, request);
        }

        protected virtual void Save(IUnitOfWork uow, SaveRequest<TRow> request)
        {
            new SaveRequestHandler<TRow>().Process(uow, request);
        }

        private Int64? GetID(TRow row)
        {
            return row.IdField[row];
        }

        public virtual void Process(IUnitOfWork uow)
        {
            foreach (var row in oldList.Where(x => !newById.Contains(GetID(x))))
            {
                var request = new DeleteRequest
                {
                    EntityId = GetID(row)
                };

                Delete(uow, request);
            }

            foreach (var row in newList.Where(x => 
            {
                var id = GetID(x);
                return id == null || !oldById.ContainsKey(id.Value);
            }))
            {
                var insert = row.Clone();
                insert.IdField[insert] = null;
                setOwnerID(insert);
                var request = new SaveRequest<TRow>
                {
                    Entity = insert
                };

                Save(uow, request);
            }

            foreach (var row in newList)
            {
                var id = GetID(row);
                if (id == null)
                    continue;

                TRow old;
                if (!oldById.TryGetValue(id.Value, out old))
                    continue;

                var update = row.Clone();
                setOwnerID(update);

                var request = new SaveRequest<TRow>
                {
                    Entity = update
                };

                Save(uow, request);
            }
        }
    }
}