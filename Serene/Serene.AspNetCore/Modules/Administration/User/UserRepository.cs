
namespace Serene.Administration.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web.Providers;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Configuration;
    using System.Data;
    using MyRow = Entities.UserRow;

    public partial class UserRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }
        private static bool isPublicDemo;

        static UserRepository()
        {
            isPublicDemo = ConfigurationManager.AppSettings["IsPublicDemo"] == "1";
        }

        public static void CheckPublicDemo(int? userID)
        {
            if (userID == 1 && isPublicDemo)
                throw new ValidationException("Sorry, but no changes are allowed in public demo on ADMIN user!");
        }

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

        public static string ValidateDisplayName(IDbConnection connection, string displayName, Int32? existingUserId)
        {
            displayName = displayName.TrimToNull();

            if (displayName == null)
                throw DataValidation.RequiredError(fld.DisplayName.Name, fld.DisplayName.Title);

            return displayName;
        }

        public static string ValidatePassword(string username, string password, bool isNewUser)
        {
            password = password.TrimToNull();

            if (password == null ||
                password.Length < 5)
                throw new ValidationError("PasswordLength", "Password",
                    String.Format(Texts.Validation.MinRequiredPasswordLength, 5));

            return password;
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            private string password;

            public static MyRow GetUser(IDbConnection connection, BaseCriteria filter)
            {
                var row = new MyRow();
                if (new SqlQuery().From(row)
                    .Select(
                        fld.UserId,
                        fld.Username,
                        fld.DisplayName,
                        fld.PasswordHash,
                        fld.PasswordSalt,
                        fld.IsActive)
                    .Where(filter)
                    .GetFirst(connection))
                {
                    return row;
                }

                return null;
            }

            protected override void GetEditableFields(HashSet<Field> editable)
            {
                base.GetEditableFields(editable);

                if (!Authorization.HasPermission(Administration.PermissionKeys.Security))
                {
                    editable.Remove(fld.Source);
                    editable.Remove(fld.IsActive);
                }
            }

            private static bool IsInvariantLetter(Char c)
            {
                return (c >= 'A' && c <= 'Z') ||
                    (c >= 'a' && c <= 'z');
            }

            private static bool IsDigit(Char c)
            {
                return (c >= '0' && c <= '9');
            }

            private static bool IsValidEmailChar(Char c)
            {
                return IsInvariantLetter(c) ||
                    IsDigit(c) ||
                    c == '.' ||
                    c == '_' ||
                    c == '@';
            }

            public static bool IsValidUsername(string name)
            {
                if (name == null ||
                    name.Length < 0)
                    return false;

                var c = name[0];
                if (!IsInvariantLetter(c))
                    return false;

                for (var i = 1; i < name.Length - 1; i++)
                {
                    c = name[i];
                    if (!IsValidEmailChar(c))
                        return false;
                }

                return true;
            }

            public static string ValidateUsername(IDbConnection connection, string username, Int32? existingUserId)
            {
                username = username.TrimToNull();

                if (username == null)
                    throw DataValidation.RequiredError(fld.Username.Name, fld.Username.Title);

                if (!IsValidUsername(username))
                    throw new ValidationError("InvalidUsername", "Username",
                        "Usernames should start with letters, only contain letters and numbers!");

                var existing = GetUser(connection,
                    new Criteria(fld.Username) == username |
                    new Criteria(fld.Username) == username.Replace('I', 'İ'));

                if (existing != null && existingUserId != existing.UserId)
                    throw new ValidationError("UniqueViolation", "Username",
                        "A user with same name exists. Please choose another!");

                return username;
            }

            protected override void ValidateRequest()
            {
                base.ValidateRequest();

                if (IsUpdate)
                {
                    CheckPublicDemo(Row.UserId);

                    if (Row.IsAssigned(fld.Password) && !Row.Password.IsEmptyOrNull())
                        password = Row.Password = ValidatePassword(Old.Username, Row.Password, false);

                    if (Row.Username != Old.Username)
                        Row.Username = MySaveHandler.ValidateUsername(this.Connection, Row.Username, Old.UserId.Value);

                    if (Row.DisplayName != Old.DisplayName)
                        Row.DisplayName = ValidateDisplayName(this.Connection, Row.DisplayName, Old.UserId.Value);
                }

                if (IsCreate)
                {
                    this.Row.Username = ValidateUsername(this.Connection, this.Row.Username, null);
                    this.Row.DisplayName = ValidateDisplayName(this.Connection, this.Row.DisplayName, null);
                    password = ValidatePassword(Row.Username, Row.Password, true);
                }
            }

            protected override void SetInternalFields()
            {
                base.SetInternalFields();

                if (IsCreate)
                {
                    Row.Source = "site";
                    Row.IsActive = Row.IsActive ?? 1;
                }

                if (IsCreate || !Row.Password.IsEmptyOrNull())
                {
                    string salt = null;
                    Row.PasswordHash = GenerateHash(password, ref salt);
                    Row.PasswordSalt = salt;
                }
            }

            protected override void AfterSave()
            {
                base.AfterSave();

                BatchGenerationUpdater.OnCommit(this.UnitOfWork, fld.GenerationKey);
            }
        }

        public static string CalculateHash(string password, string salt)
        {
            return SiteMembershipProvider.ComputeSHA512(password + salt);
        }

        public static string GenerateHash(string password, ref string salt)
        {
            salt = salt ?? Serenity.IO.TemporaryFileHelper.RandomFileCode().Substring(0, 5);
            return CalculateHash(password, salt);
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            protected override void ValidateRequest()
            {
                base.ValidateRequest();

                CheckPublicDemo(Row.UserId);
            }
        }

        private class MyUndeleteHandler : UndeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}
