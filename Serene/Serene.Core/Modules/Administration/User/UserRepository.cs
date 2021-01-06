using Microsoft.AspNetCore.DataProtection;
using Microsoft.Extensions.Caching.Memory;
using MyRow = Serene.Administration.Entities.UserRow;
using Serene.Common.Entities;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Services;
using Serenity.Web.Providers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.IO;
using System.Security.Cryptography;
using System.Text;

namespace Serene.Administration.Repositories
{
    public partial class UserRepository : BaseRepository
    {
        public UserRepository(IRequestContext context)
            : base(context)
        {
        }

        private static MyRow.RowFields fld { get { return MyRow.Fields; } }
        public static bool IsPublicDemo { get; set; }

        

        public static void CheckPublicDemo(int? userID)
        {
            if (userID == 1 && IsPublicDemo)
                throw new ValidationException("Sorry, but no changes " +
                    "are allowed in public demo on ADMIN user!"); 
        }

        public static bool IsValidPhone(string number)
        {
            // please change this to a valid check for mobile phones in your country
            return !number.IsNullOrEmpty() && number.Length > 7 && long.TryParse(number, out long _);
        }

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

        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyUndeleteHandler(Context).Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler(Context).Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler(Context).Process(connection, request);
        }

        public static string ValidateDisplayName(string displayName, ITextLocalizer localizer)
        {
            displayName = displayName.TrimToNull();

            if (displayName == null)
                throw DataValidation.RequiredError(fld.DisplayName, localizer);

            return displayName;
        }

        public static string ValidatePassword(string password, ITextLocalizer localizer)
        {
            password = password.TrimToNull();

            if (password == null ||
                password.Length < 5)
                throw new ValidationError("PasswordLength", "Password",
                    string.Format(Texts.Validation.MinRequiredPasswordLength.ToString(localizer), 5));

            return password;
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            public MySaveHandler(IRequestContext context)
                 : base(context)
            {
            }

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

                if (!Permissions.HasPermission(PermissionKeys.Security))
                {
                    editable.Remove(fld.Source);
                    editable.Remove(fld.IsActive);
                }
            }

            private static bool IsInvariantLetter(char c)
            {
                return (c >= 'A' && c <= 'Z') ||
                    (c >= 'a' && c <= 'z');
            }

            private static bool IsDigit(char c)
            {
                return (c >= '0' && c <= '9');
            }

            private static bool IsValidEmailChar(char c)
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

            public static string ValidateUsername(IDbConnection connection, string username, int? existingUserId, 
                ITextLocalizer localizer)
            {
                username = username.TrimToNull();

                if (username == null)
                    throw DataValidation.RequiredError(fld.Username, localizer);

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
                        password = Row.Password = ValidatePassword(Row.Password, Localizer);

                    if (Row.Username != Old.Username)
                        Row.Username = ValidateUsername(Connection, Row.Username, Old.UserId.Value, Localizer);

                    if (Row.DisplayName != Old.DisplayName)
                        Row.DisplayName = ValidateDisplayName(Row.DisplayName, Localizer);
                }

                if (IsCreate)
                {
                    Row.Username = ValidateUsername(Connection, Row.Username, null, Localizer);
                    Row.DisplayName = ValidateDisplayName(Row.DisplayName, Localizer);
                    password = ValidatePassword(Row.Password, Localizer);
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

                Cache.InvalidateOnCommit(UnitOfWork, fld);
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
            public MyDeleteHandler(IRequestContext context)
                 : base(context)
            {
            }

            protected override void ValidateRequest()
            {
                base.ValidateRequest();

                CheckPublicDemo(Row.UserId);
            }

            protected override void OnBeforeDelete()
            {
                base.OnBeforeDelete();

                new SqlDelete(UserPreferenceRow.Fields.TableName)
                    .Where(UserPreferenceRow.Fields.UserId == Row.UserId.Value)
                    .Execute(Connection, ExpectedRows.Ignore);

                new SqlDelete(Entities.UserRoleRow.Fields.TableName)
                    .Where(Entities.UserRoleRow.Fields.UserId == Row.UserId.Value)
                    .Execute(Connection, ExpectedRows.Ignore);

                new SqlDelete(Entities.UserPermissionRow.Fields.TableName)
                    .Where(Entities.UserPermissionRow.Fields.UserId == Row.UserId.Value)
                    .Execute(Connection, ExpectedRows.Ignore);
            }
        }

        private class MyUndeleteHandler : UndeleteRequestHandler<MyRow> 
        { 
            public MyUndeleteHandler(IRequestContext context)
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
    }
}
