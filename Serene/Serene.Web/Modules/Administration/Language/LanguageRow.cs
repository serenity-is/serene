using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Serene.Administration
{
    [ConnectionKey("Default"), Module("Administration"), TableName("Languages")]
    [DisplayName("Languages"), InstanceName("Language")]
    [ReadPermission(PermissionKeys.Translation)]
    [ModifyPermission(PermissionKeys.Translation)]
    [LookupScript(typeof(Lookups.LanguageLookup))]
    public sealed class LanguageRow : Row<LanguageRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Language Id"), Size(10), NotNull, QuickSearch]
        public String LanguageId
        {
            get => fields.LanguageId[this];
            set => fields.LanguageId[this] = value;
        }

        [DisplayName("Language Name"), Size(50), NotNull, QuickSearch, NameProperty]
        public String LanguageName
        {
            get => fields.LanguageName[this];
            set => fields.LanguageName[this] = value;
        }

        public LanguageRow()
        {
        }

        public LanguageRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField LanguageId;
            public StringField LanguageName;
        }
    }
}