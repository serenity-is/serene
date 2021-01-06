using System;
using Serenity;using Serenity.Data;
using Serenity.Services;
using System.Data;
using MyRow = Serene.Common.Entities.UserPreferenceRow;


namespace Serene.Common.Repositories
{
    public class UserPreferenceRepository : BaseRepository
    {
        public UserPreferenceRepository(IRequestContext context)
             : base(context)
        {
        }

        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Update(IUnitOfWork uow, UserPreferenceUpdateRequest request)
        {
            if (request is null)
                throw new ArgumentNullException("request");
            if (request.Name is null)
                throw new ArgumentNullException("name");
            if (request.PreferenceType is null)
                throw new ArgumentNullException("preferenceType");

            var userId = Convert.ToInt32(Context.User.GetIdentifier());

            var criteria = fld.UserId == userId &
                fld.PreferenceType == request.PreferenceType &
                fld.Name == request.Name;

            if (string.IsNullOrEmpty(request.Value))
            {
                new SqlDelete(fld.TableName)
                    .Where(criteria)
                    .Execute(uow.Connection, ExpectedRows.ZeroOrOne);

                return new SaveResponse();
            }

            if (new SqlUpdate(fld.TableName)
                    .Set(fld.Value, request.Value)
                    .Where(criteria)
                    .Execute(uow.Connection, ExpectedRows.ZeroOrOne) == 0)
            {
                new SqlInsert(fld.TableName)
                    .Set(fld.UserId, userId)
                    .Set(fld.PreferenceType, request.PreferenceType)
                    .Set(fld.Name, request.Name)
                    .Set(fld.Value, request.Value)
                    .Execute(uow.Connection);
            }

            return new SaveResponse();
        }

        public UserPreferenceRetrieveResponse Retrieve(IDbConnection connection, UserPreferenceRetrieveRequest request)
        {
            if (request is null)
                throw new ArgumentNullException("request");
            if (request.Name is null)
                throw new ArgumentNullException("name");
            if (request.PreferenceType is null)
                throw new ArgumentNullException("preferenceType");

            var userId = Convert.ToInt32(Context.User.GetIdentifier());
            var row = connection.TryFirst<MyRow>(
                fld.UserId == userId &
                fld.PreferenceType == request.PreferenceType &
                fld.Name == request.Name);

            if (row == null)
                return new UserPreferenceRetrieveResponse();

            return new UserPreferenceRetrieveResponse
            {
                Value = row.Value
            };
        }
    }
}