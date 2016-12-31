using Serene.Administration.Entities;
using Serene.Northwind.Entities;
using Serene.Northwind.Repositories;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Serene.Northwind
{
    public class NotesBehavior : BaseSaveDeleteBehavior, IImplicitBehavior, IRetrieveBehavior, IFieldBehavior
    {
        public Field Target { get; set; }

        public bool ActivateFor(Row row)
        {
            if (ReferenceEquals(null, Target))
                return false;

            var attr = Target.GetAttribute<NotesEditorAttribute>();
            if (attr == null)
                return false;

            if (Target.ValueType != typeof(List<NoteRow>))
            {
                throw new ArgumentException(String.Format("Field '{0}' in row type '{1}' has a NotesEditorAttribute " +
                    "but its property type is not a List<NoteRow>!",
                    Target.PropertyName ?? Target.Name, row.GetType().FullName));
            }

            return true;
        }

        public void OnAfterExecuteQuery(IRetrieveRequestHandler handler) { }
        public void OnBeforeExecuteQuery(IRetrieveRequestHandler handler) { }
        public void OnPrepareQuery(IRetrieveRequestHandler handler, SqlQuery query) { }
        public void OnValidateRequest(IRetrieveRequestHandler handler) { }

        public void OnReturn(IRetrieveRequestHandler handler)
        {
            if (ReferenceEquals(null, Target) ||
                !handler.AllowSelectField(Target) ||
                !handler.ShouldSelectField(Target))
                return;

            var idField = (handler.Row as IIdRow).IdField;
            var fld = NoteRow.Fields;

            var listRequest = new ListRequest
            {
                ColumnSelection = ColumnSelection.List,
                EqualityFilter = new Dictionary<string, object>
                {
                    { fld.EntityType.PropertyName, handler.Row.Table },
                    { fld.EntityId.PropertyName, idField[handler.Row] ?? -1 }
                }
            };

            var notes = new NoteRepository().List(handler.Connection, listRequest).Entities;

            // users might be in another database, in another db server, so we can't simply use a join here
            var userIdList = notes.Where(x => x.InsertUserId != null).Select(x => x.InsertUserId.Value).Distinct();
            if (userIdList.Any())
            {
                var u = UserRow.Fields;
                IDictionary<int, string> userDisplayNames;
                using (var connection = SqlConnections.NewFor<UserRow>())
                    userDisplayNames = connection.Query(new SqlQuery()
                            .From(u)
                            .Select(u.UserId)
                            .Select(u.DisplayName)
                            .Where(u.UserId.In(userIdList)))
                        .ToDictionary(x => (int)(x.UserId ?? x.USERID), x => (string)x.DisplayName);

                string s;
                foreach (var x in notes)
                    if (x.InsertUserId != null && userDisplayNames.TryGetValue(x.InsertUserId.Value, out s))
                        x.InsertUserDisplayName = s;
            }

            Target.AsObject(handler.Row, notes);
        }

        private void SaveNote(IUnitOfWork uow, NoteRow note, string entityType, Int64 entityId, Int64? noteId)
        {
            note = note.Clone();
            note.NoteId = noteId;
            note.EntityType = entityType;
            note.EntityId = entityId;
            note.InsertDate = null;
            note.ClearAssignment(NoteRow.Fields.InsertDate);

            var saveRequest = new SaveRequest<NoteRow> { Entity = note };

            if (noteId == null)
                new NoteRepository().Create(uow, saveRequest);
            else
                new NoteRepository().Update(uow, saveRequest);
        }

        private void DeleteNote(IUnitOfWork uow, Int64 noteId)
        {
            new NoteRepository().Delete(uow, new DeleteRequest { EntityId = noteId });
        }

        private void NoteListSave(IUnitOfWork uow, string entityType, Int64 entityId, List<NoteRow> oldList, List<NoteRow> newList)
        {
            var row = oldList.Count > 0 ? oldList[0] : 
                (newList.Count > 0) ? newList[0] : null;

            if (row == null)
                return;

            if (oldList.Count == 0)
            {
                foreach (var note in newList)
                    SaveNote(uow, note, entityType, entityId, null);

                return;
            }

            var rowIdField = (row as IIdRow).IdField;

            if (newList.Count == 0)
            {
                foreach (var note in oldList)
                    DeleteNote(uow, rowIdField[note].Value);

                return;
            }

            var oldById = new Dictionary<Int64, NoteRow>(oldList.Count);
            foreach (var item in oldList)
                oldById[rowIdField[item].Value] = item;

            var newById = new Dictionary<Int64, NoteRow>(newList.Count);
            foreach (var item in newList)
            {
                var id = rowIdField[item];
                if (id != null)
                    newById[id.Value] = item;
            }

            foreach (var item in oldList)
            {
                var id = rowIdField[item].Value;
                if (!newById.ContainsKey(id))
                    DeleteNote(uow, id);
            }

            foreach (var item in newList)
            {
                var id = rowIdField[item];

                NoteRow old;
                if (id == null || !oldById.TryGetValue(id.Value, out old))
                    continue;

                bool anyChanges = false;
                foreach (var field in item.GetFields())
                {
                    if (item.IsAssigned(field) &&
                        (field.Flags & FieldFlags.Updatable) == FieldFlags.Updatable &
                        field.IndexCompare(old, item) != 0)
                    {
                        anyChanges = true;
                        break;
                    }
                }

                if (!anyChanges)
                    continue;

                SaveNote(uow, item, entityType, entityId, id.Value);
            }

            foreach (var item in newList)
            {
                var id = rowIdField[item];
                if (id == null || !oldById.ContainsKey(id.Value))
                    SaveNote(uow, item, entityType, entityId, null);
            }
        }

        public override void OnAfterSave(ISaveRequestHandler handler)
        {
            var newList = Target.AsObject(handler.Row) as List<NoteRow>;
            if (newList == null)
                return;

            var idField = (handler.Row as IIdRow).IdField;
            var entityId = idField[handler.Row].Value;

            if (handler.IsCreate)
            {
                foreach (var note in newList)
                    SaveNote(handler.UnitOfWork, note, handler.Row.Table, entityId, null);

                return;
            }

            var fld = NoteRow.Fields;
            var listRequest = new ListRequest
            {
                ColumnSelection = ColumnSelection.List,
                EqualityFilter = new Dictionary<string, object>
                {
                    { fld.EntityType.PropertyName, handler.Row.Table },
                    { fld.EntityId.PropertyName, entityId }
                }
            };

            var oldList = new NoteRepository().List(handler.Connection, listRequest).Entities;
            NoteListSave(handler.UnitOfWork, handler.Row.Table, entityId, oldList, newList);
        }

        public override void OnBeforeDelete(IDeleteRequestHandler handler)
        {
            if (ReferenceEquals(null, Target) ||
                (Target.Flags & FieldFlags.Updatable) != FieldFlags.Updatable)
                return;

            var idField = (handler.Row as IIdRow).IdField;
            var row = new NoteRow();
            var fld = NoteRow.Fields;

            var deleteList = new List<Int64>();
            new SqlQuery()
                    .From(row)
                    .Select(fld.NoteId)
                    .Where(
                        fld.EntityType == handler.Row.Table &
                        fld.EntityId == idField[handler.Row].Value)
                    .ForEach(handler.Connection, () =>
                    {
                        deleteList.Add(row.NoteId.Value);
                    });

            foreach (var id in deleteList)
                DeleteNote(handler.UnitOfWork, id);
        }
    }
}