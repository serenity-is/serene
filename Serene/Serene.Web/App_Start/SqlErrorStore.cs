using Serenity.Data;
using StackExchange.Exceptional;
using StackExchange.Exceptional.Extensions;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;

namespace Serene
{
    /// <summary>
    /// An <see cref="ErrorStore"/> implementation that uses an SQL database using Serenity helpers as its backing store. 
    /// </summary>
    public sealed class SqlErrorStore : ErrorStore
    {
        private readonly int displayCount = DefaultDisplayCount;
        private readonly string connectionString;
        private readonly string providerName;
        private readonly bool isSqlServer;

        /// <summary>
        /// The maximum count of errors to show.
        /// </summary>
        public const int MaximumDisplayCount = 500;

        /// <summary>
        /// The default maximum count of errors shown at once.
        /// </summary>        
        public const int DefaultDisplayCount = 200;

        /// <summary>
        /// Creates a new instance of <see cref="SqlErrorStore"/> with the given configuration.
        /// </summary>        
        public SqlErrorStore(ErrorStoreSettings settings)
            : this(settings.ConnectionString, settings.ConnectionStringName, settings.Size, settings.RollupSeconds)
        {
        }

        public SqlErrorStore(string connectionString, string connectionKey, int displayCount = DefaultDisplayCount, int rollupSeconds = DefaultRollupSeconds)
            : base(rollupSeconds)
        {
            displayCount = Math.Min(displayCount, MaximumDisplayCount);

            if (connectionString.IsNullOrEmpty())
            {
                var cs = SqlConnections.GetConnectionString(connectionKey);
                this.connectionString = cs.ConnectionString;
                this.providerName = cs.ProviderName;
                isSqlServer = cs.Dialect.GetType().Name.StartsWith("SqlServer");
            }
            else
            {
                this.connectionString = connectionString;
                this.providerName = connectionKey;
                isSqlServer = String.Compare(providerName, "System.Data.SqlClient") == 0;
            }

            // check that provider name is valid
            SqlConnections.GetFactory(this.providerName);

            if (this.connectionString.IsNullOrEmpty())
                throw new ArgumentOutOfRangeException("settings", "A connection string or connection string name must be specified when using a SQL error store");

        }

        /// <summary>
        /// Name for this error store
        /// </summary>
        public override string Name => "Serenity Sql Error Store";

        /// <summary>
        /// Protects an error from deletion, by making IsProtected = 1 in the database
        /// </summary>
        /// <param name="guid">The guid of the error to protect</param>
        /// <returns>True if the error was found and protected, false otherwise</returns>
        protected override bool ProtectError(Guid guid)
        {
            using (var c = GetConnection())
            {
                return new SqlUpdate("Exceptions")
                    .Set("IsProtected", true)
                    .SetNull("DeletionDate")
                    .Where(new Criteria("[GUID]") == guid)
                    .Execute(c, ExpectedRows.Ignore) > 0;
            }
        }

        /// <summary>
        /// Protects errors from deletion, by making IsProtected = 1 in the database
        /// </summary>
        /// <param name="guids">The guids of the error to protect</param>
        /// <returns>True if the errors were found and protected, false otherwise</returns>
        protected override bool ProtectErrors(IEnumerable<Guid> guids)
        {
            using (var c = GetConnection())
            {
                return new SqlUpdate("Exceptions")
                    .Set("IsProtected", true)
                    .SetNull("DeletionDate")
                    .Where(new Criteria("[GUID]").In(guids))
                    .Execute(c, ExpectedRows.Ignore) > 0;
            }
        }

        /// <summary>
        /// Deletes an error, by setting DeletionDate = GETUTCDATE() in SQL
        /// </summary>
        /// <param name="guid">The guid of the error to delete</param>
        /// <returns>True if the error was found and deleted, false otherwise</returns>
        protected override bool DeleteError(Guid guid)
        {
            using (var c = GetConnection())
            {
                return new SqlUpdate("Exceptions")
                    .Set("DeletionDate", DateTime.UtcNow)
                    .Where(
                        new Criteria("[GUID]") == guid &
                        new Criteria("[DeletionDate]").IsNull())
                    .Execute(c, ExpectedRows.Ignore) > 0;
            }
        }

        /// <summary>
        /// Deletes errors, by setting DeletionDate = GETUTCDATE() in SQL
        /// </summary>
        /// <param name="guids">The guids of the error to delete</param>
        /// <returns>True if the errors were found and deleted, false otherwise</returns>
        protected override bool DeleteErrors(IEnumerable<Guid> guids)
        {
            using (var c = GetConnection())
            {
                return new SqlUpdate("Exceptions")
                    .Set("DeletionDate", DateTime.UtcNow)
                    .Where(
                        new Criteria("[GUID]").In(guids) &
                        new Criteria("[DeletionDate]").IsNull())
                    .Execute(c, ExpectedRows.Ignore) > 0;
            }
        }

        /// <summary>
        /// Hard deletes an error, actually deletes the row from SQL rather than setting DeletionDate
        /// This is used to cleanup when testing the error store when attempting to come out of retry/failover mode after losing connection to SQL
        /// </summary>
        /// <param name="guid">The guid of the error to hard delete</param>
        /// <returns>True if the error was found and deleted, false otherwise</returns>
        protected override bool HardDeleteError(Guid guid)
        {
            using (var c = GetConnection())
            {
                return new SqlDelete("Exceptions")
                    .Where(
                        new Criteria("[GUID]") == guid &
                        new Criteria("[ApplicationName]") == ApplicationName)
                    .Execute(c, ExpectedRows.Ignore) > 0;
            }
        }

        /// <summary>
        /// Deleted all errors in the log, by setting DeletionDate = GETUTCDATE() in SQL
        /// </summary>
        /// <returns>True if any errors were deleted, false otherwise</returns>
        protected override bool DeleteAllErrors(string applicationName = null)
        {
            using (var c = GetConnection())
            {
                return new SqlUpdate("Exceptions")
                    .Set("DeletionDate", DateTime.UtcNow)
                    .Where(
                        new Criteria("[DeletionDate]").IsNull() &
                        new Criteria("[IsProtected]") == 0 &
                        new Criteria("[ApplicationName]") == applicationName.IsNullOrEmptyReturn(ApplicationName))
                    .Execute(c, ExpectedRows.Ignore) > 0;
            }
        }

        private static readonly BaseCriteria hashMatch =
            new Criteria("[ErrorHash]") == new ParamCriteria("@ErrorHash") &
            new Criteria("[ApplicationName]") == new ParamCriteria("@ApplicationName") &
            new Criteria("[DeletionDate]").IsNull() &
            new Criteria("[CreationDate]") >= new ParamCriteria("@minDate");

        /// <summary>
        /// Logs the error to SQL
        /// If the rollup conditions are met, then the matching error will have a DuplicateCount += @DuplicateCount (usually 1, unless in retry) rather than a distinct new row for the error
        /// </summary>
        /// <param name="error">The error to log</param>
        protected override void LogError(Error error)
        {
            using (var c = GetConnection())
            {
                if (RollupThreshold.HasValue && error.ErrorHash.HasValue)
                {
                    var queryParams = new Serenity.Data.DynamicParameters(new
                    {
                        error.DuplicateCount,
                        error.ErrorHash,
                        ApplicationName = error.ApplicationName.Truncate(50),
                        minDate = DateTime.UtcNow.Add(RollupThreshold.Value.Negate())
                    });

                    if (isSqlServer)
                    {
                        queryParams.Add("@newGUID", dbType: DbType.Guid, direction: ParameterDirection.Output);
                        var count = c.Execute(@"
Update Exceptions 
    Set DuplicateCount = DuplicateCount + @DuplicateCount,
        @newGUID = GUID
    Where Id In (Select Top 1 Id
                From Exceptions 
                Where ErrorHash = @ErrorHash
                    And ApplicationName = @ApplicationName
                    And DeletionDate Is Null
                    And CreationDate >= @minDate)", queryParams);
                        // if we found an error that's a duplicate, jump out
                        if (count > 0)
                        {
                            error.GUID = queryParams.Get<Guid>("@newGUID");
                            return;
                        }
                    }
                    else
                    {
                        var count = new SqlUpdate("Exceptions")
                            .Set("DuplicateCount", "DuplicateCount + @DuplicateCount")
                            .Where(new Criteria("[Id]").In(
                                new SqlQuery()
                                    .From("Exceptions")
                                    .Take(1)
                                    .Where(hashMatch)))
                                .Execute(c, ExpectedRows.Ignore);

                        // if we found an exception that's a duplicate, jump out
                        if (count > 0)
                        {
                            error.GUID = c.Query<Guid>(new SqlQuery()
                                .From("Exceptions")
                                .Select("GUID")
                                .Take(1)
                                .Where(hashMatch)).First();

                            return;
                        }
                    }

                    error.FullJson = error.ToJson();

                    c.Execute(@"
Insert Into Exceptions ([GUID], [ApplicationName], [MachineName], [CreationDate], [Type], [IsProtected], [Host], [Url], [HTTPMethod], [IPAddress], [Source], [Message], [Detail], [StatusCode], [SQL], [FullJson], [ErrorHash], [DuplicateCount])
Values (@GUID, @ApplicationName, @MachineName, @CreationDate, @Type, @IsProtected, @Host, @Url, @HTTPMethod, @IPAddress, @Source, @Message, @Detail, @StatusCode, @SQL, @FullJson, @ErrorHash, @DuplicateCount)",
                        new
                        {
                            error.GUID,
                            ApplicationName = error.ApplicationName.Truncate(50),
                            MachineName = error.MachineName.Truncate(50),
                            error.CreationDate,
                            Type = error.Type.Truncate(100),
                            error.IsProtected,
                            Host = error.Host.Truncate(100),
                            Url = error.Url.Truncate(500),
                            HTTPMethod = error.HTTPMethod.Truncate(10), // this feels silly, but you never know when someone will up and go crazy with HTTP 1.2!
                            error.IPAddress,
                            Source = error.Source.Truncate(100),
                            Message = error.Message.Truncate(1000),
                            error.Detail,
                            error.StatusCode,
                            error.SQL,
                            error.FullJson,
                            error.ErrorHash,
                            error.DuplicateCount
                        });
                }
            }
        }

        /// <summary>
        /// Gets the error with the specified guid from SQL
        /// This can return a deleted error as well, there's no filter based on DeletionDate
        /// </summary>
        /// <param name="guid">The guid of the error to retrieve</param>
        /// <returns>The error object if found, null otherwise</returns>
        protected override Error GetError(Guid guid)
        {
            Error sqlError;
            using (var c = GetConnection())
            {
                sqlError = c.Query<Error>(@"
Select * 
  From [Exceptions] 
 Where [GUID] = @guid", new { guid }).FirstOrDefault(); // a guid won't collide, but the AppName is for security
            }
            if (sqlError == null) return null;

            // everything is in the JSON, but not the columns and we have to deserialize for collections anyway
            // so use that deserialized version and just get the properties that might change on the SQL side and apply them
            var result = Error.FromJson(sqlError.FullJson);
            result.DuplicateCount = sqlError.DuplicateCount;
            result.DeletionDate = sqlError.DeletionDate;
            return result;
        }

        /// <summary>
        /// Retrieves all non-deleted application errors in the database
        /// </summary>
        protected override int GetAllErrors(List<Error> errors, string applicationName = null)
        {
            using (var c = GetConnection())
            {
                errors.AddRange(c.Query<Error>(
                    new SqlQuery()
                        .From("Exceptions")
                        .Take(displayCount)
                        .Select("*")
                        .Where(
                            new Criteria("[ApplicationName]") == applicationName.IsNullOrEmptyReturn(ApplicationName) &
                            new Criteria("[DeletionDate]").IsNull())
                        .OrderBy("CreationDate", desc: true)));
            }

            return errors.Count;
        }

        /// <summary>
        /// Retrieves a count of application errors since the specified date, or all time if null
        /// </summary>
        protected override int GetErrorCount(DateTime? since = null, string applicationName = null)
        {
            using (var c = GetConnection())
            {
                return c.Query<int>(
                    new SqlQuery()
                        .From("Exceptions")
                        .Select("Count(*)")
                        .Where(
                            new Criteria("[ApplicationName]") == applicationName.IsNullOrEmptyReturn(ApplicationName) &
                            new Criteria("[DeletionDate]").IsNull() &
                            (since.HasValue ? new Criteria("[CreationDate]") > since.Value : Criteria.Empty))
                        .OrderBy("CreationDate", desc: true))
                        .FirstOrDefault();
            }
        }

        private IDbConnection GetConnection()
        {
            return SqlConnections.New(connectionString, providerName);
        }
    }
}