

namespace Serene.Organization.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Contacts"), InstanceName("Contact"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("Organization.Contact", Permission = "*")]
    public sealed class ContactRow : Row, IIdRow, INameRow
    {
        [DisplayName("Contact Id"), Identity]
        public Int32? ContactId
        {
            get { return Fields.ContactId[this]; }
            set { Fields.ContactId[this] = value; }
        }

        [DisplayName("Title"), Size(30), QuickSearch]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("First Name"), Size(50), NotNull]
        public String FirstName
        {
            get { return Fields.FirstName[this]; }
            set { Fields.FirstName[this] = value; }
        }

        [DisplayName("Last Name"), Size(50), NotNull]
        public String LastName
        {
            get { return Fields.LastName[this]; }
            set { Fields.LastName[this] = value; }
        }

        [Expression("CONCAT(CONCAT(t0.FirstName, ' '), t0.LastName)")]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
        }

        [DisplayName("Email"), Size(100), NotNull, EmailEditor]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Identity No"), Size(20)]
        public String IdentityNo
        {
            get { return Fields.IdentityNo[this]; }
            set { Fields.IdentityNo[this] = value; }
        }

        [DisplayName("User"), ForeignKey("Users", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
        [LookupEditor(typeof(Administration.Entities.UserRow))]
        [ModifyPermission(Administration.PermissionKeys.Security)]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("User Username"), Expression("jUser.[Username]")]
        public String UserUsername
        {
            get { return Fields.UserUsername[this]; }
            set { Fields.UserUsername[this] = value; }
        }

        [DisplayName("User Display Name"), Expression("jUser.[DisplayName]")]
        public String UserDisplayName
        {
            get { return Fields.UserDisplayName[this]; }
            set { Fields.UserDisplayName[this] = value; }
        }

        [DisplayName("User Email"), Expression("jUser.[Email]")]
        public String UserEmail
        {
            get { return Fields.UserEmail[this]; }
            set { Fields.UserEmail[this] = value; }
        }

        [DisplayName("User Source"), Expression("jUser.[Source]")]
        public String UserSource
        {
            get { return Fields.UserSource[this]; }
            set { Fields.UserSource[this] = value; }
        }

        [DisplayName("User Password Hash"), Expression("jUser.[PasswordHash]")]
        public String UserPasswordHash
        {
            get { return Fields.UserPasswordHash[this]; }
            set { Fields.UserPasswordHash[this] = value; }
        }

        [DisplayName("User Password Salt"), Expression("jUser.[PasswordSalt]")]
        public String UserPasswordSalt
        {
            get { return Fields.UserPasswordSalt[this]; }
            set { Fields.UserPasswordSalt[this] = value; }
        }

        [DisplayName("User Last Directory Update"), Expression("jUser.[LastDirectoryUpdate]")]
        public DateTime? UserLastDirectoryUpdate
        {
            get { return Fields.UserLastDirectoryUpdate[this]; }
            set { Fields.UserLastDirectoryUpdate[this] = value; }
        }

        [DisplayName("User User Image"), Expression("jUser.[UserImage]")]
        public String UserUserImage
        {
            get { return Fields.UserUserImage[this]; }
            set { Fields.UserUserImage[this] = value; }
        }

        [DisplayName("User Insert Date"), Expression("jUser.[InsertDate]")]
        public DateTime? UserInsertDate
        {
            get { return Fields.UserInsertDate[this]; }
            set { Fields.UserInsertDate[this] = value; }
        }

        [DisplayName("User Insert User Id"), Expression("jUser.[InsertUserId]")]
        public Int32? UserInsertUserId
        {
            get { return Fields.UserInsertUserId[this]; }
            set { Fields.UserInsertUserId[this] = value; }
        }

        [DisplayName("User Update Date"), Expression("jUser.[UpdateDate]")]
        public DateTime? UserUpdateDate
        {
            get { return Fields.UserUpdateDate[this]; }
            set { Fields.UserUpdateDate[this] = value; }
        }

        [DisplayName("User Update User Id"), Expression("jUser.[UpdateUserId]")]
        public Int32? UserUpdateUserId
        {
            get { return Fields.UserUpdateUserId[this]; }
            set { Fields.UserUpdateUserId[this] = value; }
        }

        [DisplayName("User Is Active"), Expression("jUser.[IsActive]")]
        public Int16? UserIsActive
        {
            get { return Fields.UserIsActive[this]; }
            set { Fields.UserIsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ContactId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FullName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ContactRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ContactId;
            public StringField Title;
            public StringField FirstName;
            public StringField LastName;
            public StringField FullName;
            public StringField Email;
            public StringField IdentityNo;
            public Int32Field UserId;

            public StringField UserUsername;
            public StringField UserDisplayName;
            public StringField UserEmail;
            public StringField UserSource;
            public StringField UserPasswordHash;
            public StringField UserPasswordSalt;
            public DateTimeField UserLastDirectoryUpdate;
            public StringField UserUserImage;
            public DateTimeField UserInsertDate;
            public Int32Field UserInsertUserId;
            public DateTimeField UserUpdateDate;
            public Int32Field UserUpdateUserId;
            public Int16Field UserIsActive;

            public RowFields()
                : base("Contacts")
            {
                LocalTextPrefix = "Organization.Contact";
            }
        }
    }
}