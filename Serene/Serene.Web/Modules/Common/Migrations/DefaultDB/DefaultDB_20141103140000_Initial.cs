using FluentMigrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Serene.Migrations.DefaultDB
{
    [Migration(20141103140000)]
    public class DefaultDB_20141103140000_Initial : Migration
    {
        public override void Up()
        {
            Execute.EmbeddedScript("Serene.Modules.Common.Migrations.DefaultDB.NorthwindDBScript.sql");

            Create.Table("Users")
                .WithColumn("UserId").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Username").AsString(100).NotNullable()
                .WithColumn("DisplayName").AsString(100).NotNullable()
                .WithColumn("Email").AsString(100).Nullable()
                .WithColumn("Source").AsString(4).NotNullable()
                .WithColumn("PasswordHash").AsString(86).NotNullable()
                .WithColumn("PasswordSalt").AsString(10).NotNullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1);

            Insert.IntoTable("Users").Row(new {
                Username = "admin",
                DisplayName = "admin",
                Email = "admin@dummy.com",
                Source = "site",
                PasswordHash = "rfqpSPYs0ekFlPyvIRTXsdhE/qrTHFF+kKsAUla7pFkXL4BgLGlTe89GDX5DBysenMDj8AqbIZPybqvusyCjwQ",
                PasswordSalt = "hJf_F",
                InsertDate = new DateTime(2014, 1, 1),
                InsertUserId = 1,
                IsActive = 1
            });

            Create.Table("Languages")
                .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("LanguageId").AsString(10).NotNullable()
                .WithColumn("LanguageName").AsString(50).NotNullable();

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "en",
                LanguageName = "English"
            });

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "ru",
                LanguageName = "Russian"
            });

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "es",
                LanguageName = "Spanish"
            });

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "tr",
                LanguageName = "Turkish"
            });
        }

        public override void Down()
        {
            Delete.Table("Users");
            Delete.Table("Languages");
        }
    }
}