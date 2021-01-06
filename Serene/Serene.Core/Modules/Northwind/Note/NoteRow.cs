using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Serene.Northwind.Entities
{
    [ConnectionKey("Northwind"), Module("Northwind"), TableName("Notes")]
    [DisplayName("Notes"), InstanceName("Note")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class NoteRow : Row<NoteRow.RowFields>, IIdRow, INameRow, IInsertLogRow
    {
        [DisplayName("Note Id"), Identity, Column("NoteID"), IdProperty]
        public Int64? NoteId
        {
            get => fields.NoteId[this];
            set => fields.NoteId[this] = value;
        }

        [DisplayName("Entity Type"), Size(100), NotNull, Updatable(false), NameProperty]
        public String EntityType
        {
            get => fields.EntityType[this];
            set => fields.EntityType[this] = value;
        }

        [DisplayName("Entity Id"), Column("EntityID"), Size(100), NotNull, Updatable(false)]
        public Int64? EntityId
        {
            get => fields.EntityId[this];
            set => fields.EntityId[this] = value;
        }

        [DisplayName("Text"), NotNull, QuickSearch]
        public String Text
        {
            get => fields.Text[this];
            set => fields.Text[this] = value;
        }

        [DisplayName("Insert User Id"), NotNull, Insertable(false), Updatable(false)]
        public Int32? InsertUserId
        {
            get => fields.InsertUserId[this];
            set => fields.InsertUserId[this] = value;
        }

        [DisplayName("Insert User"), NotMapped]
        public String InsertUserDisplayName
        {
            get => fields.InsertUserDisplayName[this];
            set => fields.InsertUserDisplayName[this] = value;
        }

        [DisplayName("Insert Date"), NotNull, Insertable(false), Updatable(false)]
        public DateTime? InsertDate
        {
            get => fields.InsertDate[this];
            set => fields.InsertDate[this] = value;
        }
        public Field InsertUserIdField
        {
            get
            {
                return Fields.InsertUserId;
            }
        }

        public DateTimeField InsertDateField
        {
            get
            {
                return Fields.InsertDate;
            }
        }

        public NoteRow()
        {
        }

        public NoteRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field NoteId;
            public StringField EntityType;
            public Int64Field EntityId;
            public StringField Text;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public StringField InsertUserDisplayName;
        }
    }
}