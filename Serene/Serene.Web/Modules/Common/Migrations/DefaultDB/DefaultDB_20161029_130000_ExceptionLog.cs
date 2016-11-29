﻿using FluentMigrator;
using FluentMigrator.Builders.Create.Table;
using System;

namespace Serene.Migrations.DefaultDB
{
    [Migration(20161029130000)]
    public class DefaultDB_20161029_130000_ExceptionLog : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId64("Exceptions", "Id", s => s
                .WithColumn("GUID").AsGuid().NotNullable()
                .WithColumn("ApplicationName").AsString(50).NotNullable()
                .WithColumn("MachineName").AsString(50).NotNullable()
                .WithColumn("CreationDate").AsDateTime().NotNullable()
                .WithColumn("Type").AsString(100).NotNullable()
                .WithColumn("IsProtected").AsBoolean().NotNullable().WithDefaultValue(true)
                .WithColumn("Host").AsString(100).Nullable()
                .WithColumn("Url").AsString(500).Nullable()
                .WithColumn("HTTPMethod").AsString(10).Nullable()
                .WithColumn("IPAddress").AsString(40).Nullable()
                .WithColumn("Source").AsString(100).Nullable()
                .WithColumn("Message").AsString(1000).Nullable()
                .WithColumn("Detail").AsString(int.MaxValue).Nullable()
                .WithColumn("StatusCode").AsInt32().Nullable()
                .WithColumn("SQL").AsString(int.MaxValue).Nullable()
                .WithColumn("DeletionDate").AsDateTime().Nullable()
                .WithColumn("FullJson").AsString(int.MaxValue).Nullable()
                .WithColumn("ErrorHash").AsInt32().Nullable()
                .WithColumn("DuplicateCount").AsInt32().NotNullable().WithDefaultValue(1));

            Create.Index("IX_Exceptions_GUID_App_Del_Cre")
                .OnTable("Exceptions")
                .OnColumn("GUID").Ascending()
                .OnColumn("ApplicationName").Ascending()
                .OnColumn("DeletionDate").Ascending()
                .OnColumn("CreationDate").Descending();

            Create.Index("IX_Exceptions_Hash_App_Cre_Del")
                .OnTable("Exceptions")
                .OnColumn("ErrorHash").Ascending()
                .OnColumn("ApplicationName").Ascending()
                .OnColumn("CreationDate").Descending()
                .OnColumn("DeletionDate").Ascending();

            Create.Index("IX_Exceptions_App_Del_Cre")
                .OnTable("Exceptions")
                .OnColumn("ApplicationName").Ascending()
                .OnColumn("DeletionDate").Ascending()
                .OnColumn("CreationDate").Descending();
        }
    }
}