﻿using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace Serene.Migrations.DefaultDB
{

    [Migration(20141103140000)]
    public class DefaultDB_20141103_140000_Initial : AutoReversingMigration
    {
        public override void Up()
        {
            Action<ICreateTableWithColumnSyntax> addUsersColumns = expr => expr
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

            addUsersColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("Users")
                .WithColumn("UserId").AsInt32().Identity().PrimaryKey().NotNullable());

            addUsersColumns(IfDatabase("Oracle")
                .Create.Table("Users")
                .WithColumn("UserId").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "Users", "UserId");

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

            Action<ICreateTableWithColumnSyntax> addLanguagesColumns = expr => expr
                .WithColumn("LanguageId").AsString(10).NotNullable()
                .WithColumn("LanguageName").AsString(50).NotNullable();

            addLanguagesColumns(IfDatabase(Utils.AllExceptOracle)
                .Create.Table("Languages")
                .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable());

            addLanguagesColumns(IfDatabase("Oracle")
                .Create.Table("Languages")
                .WithColumn("Id").AsInt32().PrimaryKey().NotNullable());

            Utils.AddOracleIdentity(this, "Languages", "Id");

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

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "de",
                LanguageName = "German"
            });

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "zh-CN",
                LanguageName = "Chinese (Simplified)"
            });

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "it",
                LanguageName = "Italian"
            });

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "pt",
                LanguageName = "Portuguese"
            });

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "pt-BR",
                LanguageName = "Portuguese (Brazil)"
            });

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "fa",
                LanguageName = "Farsi"
            });

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "vi-VN",
                LanguageName = "Vietnamese (Vietnam)"
            });
        }
    }
}