using Serene.Administration.Entities;
using Serene.Administration.Repositories;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using System;

namespace Serene.Administration
{
    public class AuthenticationService : IAuthenticationService
    {
        public bool Validate(ref string username, string password)
        {
            if (username.IsTrimmedEmpty() || string.IsNullOrEmpty(password))
                return false;

            username = username.TrimToEmpty();

            var user = Dependency.Resolve<IUserRetrieveService>().ByUsername(username) as UserDefinition;

            if (user != null)
                return ValidateExistingUser(ref username, password, user);

            return ValidateFirstTimeUser(ref username, password);
        }

        private bool ValidateExistingUser(ref string username, string password, UserDefinition user)
        {
            username = user.Username;

            if (user.IsActive != 1)
            {
                if (Log.IsInfoEnabled)
                    Log.Error(String.Format("Inactive user login attempt: {0}", username), this.GetType());

                return false;
            }

            // prevent more than 50 invalid login attempts in 30 minutes
            var throttler = new Throttler("ValidateUser:" + username.ToLowerInvariant(), TimeSpan.FromMinutes(30), 50);
            if (!throttler.Check())
                return false;

            var directoryService = Dependency.TryResolve<IDirectoryService>();

            Func<bool> validatePassword = () => UserRepository.CalculateHash(password, user.PasswordSalt)
                .Equals(user.PasswordHash, StringComparison.OrdinalIgnoreCase);

            if (user.Source == "site" || user.Source == "sign" || directoryService == null)
            {
                if (validatePassword())
                {
                    throttler.Reset();
                    return true;
                }

                return false;
            }

            if (user.Source != "ldap")
                throw new ArgumentOutOfRangeException("userSource");

            if (!string.IsNullOrEmpty(user.PasswordHash) &&
                user.LastDirectoryUpdate != null &&
                user.LastDirectoryUpdate.Value.AddHours(1) >= DateTime.Now)
            {
                if (validatePassword())
                {
                    throttler.Reset();
                    return true;
                }

                return false;
            }

            DirectoryEntry entry;
            try
            {
                entry = directoryService.Validate(username, password);
                if (entry == null)
                    return false;

                throttler.Reset();
            }
            catch (Exception ex)
            {
                Log.Error("Error on directory access", ex, this.GetType());

                // couldn't access directory. allow user to login with cached password
                if (!user.PasswordHash.IsTrimmedEmpty())
                {
                    if (validatePassword())
                    {
                        throttler.Reset();
                        return true;
                    }

                    return false;
                }

                throw;
            }

            try
            {
                string salt = user.PasswordSalt.TrimToNull();
                var hash = UserRepository.GenerateHash(password, ref salt);
                var displayName = entry.FirstName + " " + entry.LastName;
                var email = entry.Email.TrimToNull() ?? user.Email ?? (username + "@yourdefaultdomain.com");

                using (var connection = SqlConnections.NewFor<UserRow>())
                using (var uow = new UnitOfWork(connection))
                {
                    var fld = UserRow.Fields;
                    new SqlUpdate(fld.TableName)
                        .Set(fld.DisplayName, displayName)
                        .Set(fld.PasswordHash, hash)
                        .Set(fld.PasswordSalt, salt)
                        .Set(fld.Email, email)
                        .Set(fld.LastDirectoryUpdate, DateTime.Now)
                        .WhereEqual(fld.UserId, user.UserId)
                        .Execute(connection, ExpectedRows.One);

                    uow.Commit();

                    UserRetrieveService.RemoveCachedUser(user.UserId, username);
                }

                return true;
            }
            catch (Exception ex)
            {
                Log.Error("Error while updating directory user", ex, this.GetType());
                return true;
            }
        }

        private bool ValidateFirstTimeUser(ref string username, string password)
        {
            var throttler = new Throttler("ValidateUser:" + username.ToLowerInvariant(), TimeSpan.FromMinutes(30), 50);
            if (!throttler.Check())
                return false;

            var directoryService = Dependency.TryResolve<IDirectoryService>();
            if (directoryService == null)
                return false;

            DirectoryEntry entry;
            try
            {
                entry = directoryService.Validate(username, password);
                if (entry == null)
                    return false;

                throttler.Reset();
            }
            catch (Exception ex)
            {
                Log.Error("Error on directory first time authentication", ex, this.GetType());
                return false;
            }

            try
            {
                string salt = null;
                var hash = UserRepository.GenerateHash(password, ref salt);
                var displayName = entry.FirstName + " " + entry.LastName;
                var email = entry.Email.TrimToNull() ?? (username + "@yourdefaultdomain.com");
                username = entry.Username.TrimToNull() ?? username;

                using (var connection = SqlConnections.NewFor<UserRow>())
                using (var uow = new UnitOfWork(connection))
                {
                    var userId = (int)connection.InsertAndGetID(new UserRow
                    {
                        Username = username,
                        Source = "ldap", 
                        DisplayName = displayName, 
                        Email = email, 
                        PasswordHash = hash, 
                        PasswordSalt = salt, 
                        IsActive = 1, 
                        InsertDate = DateTime.Now, 
                        InsertUserId = 1, 
                        LastDirectoryUpdate = DateTime.Now
                    });

                    uow.Commit();

                    UserRetrieveService.RemoveCachedUser(userId, username);
                }

                return true;
            }
            catch (Exception ex)
            {
                Log.Error("Error while importing directory user", ex, this.GetType());
                return false;
            }
        }
    }
}