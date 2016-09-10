using Serenity;
using Serenity.ComponentModel;
using System;
using System.DirectoryServices.AccountManagement;
using System.Web;
using System.Security.Principal;

namespace Serene.Administration
{
    public class ActiveDirectoryService : IDirectoryService
    {
        public DirectoryEntry Validate(string username, string password)
        {
            var config = Config.Get<Settings>();            
            
            // For freelancer like me: Allow to work with windows authentication
            // even if your machine isn't part of a domain or active directory
            // (ActiveDirectory appSetting in web.config must be set to name of machine)
            using (var context = (config.Domain == Environment.MachineName
                ? new PrincipalContext(ContextType.Machine, config.Domain)
                : new PrincipalContext(ContextType.Domain, config.Domain)))
            {
                // If windows authentication is used, HttpContext.Current.User will be
                // of type WindowsPrincipal
                HttpContext httpContext = HttpContext.Current;
                WindowsPrincipal windowsUser = httpContext.User as WindowsPrincipal;
                
                // With windows authentication enabled, we can assume that the user is already 
                // authenticated and we don't have to check this again here
                // (Won't work anyway, as pw is a dummy pw)
                if (windowsUser == null 
                    || windowsUser.Identity == null 
                    || windowsUser.Identity.Name != username 
                    || !windowsUser.Identity.IsAuthenticated)
                {
                    bool isValid;
                    try
                    {
                        // If you get a 'File not found' Exception here, check this:
                        // https://connect.microsoft.com/IE/feedback/details/1904887/windows-10-insider-preview-build-10565                    
                        isValid = context.ValidateCredentials(username, password, ContextOptions.Negotiate);
                    }
                    catch (Exception ex)
                    {
                        Log.Error("Error authenticating user", ex, this.GetType());
                        return null;
                    }

                    if (!isValid)
                        return null;
                }

                var identity = UserPrincipal.FindByIdentity(context, IdentityType.SamAccountName, username);
                return new DirectoryEntry
                {
                    Username = identity.SamAccountName,
                    Email = identity.EmailAddress.TrimToNull(),
                    FirstName = identity.GivenName,
                    LastName = identity.Surname
                };
            }
        }

        [Hidden, SettingScope("Application"), SettingKey("ActiveDirectory")]
        private class Settings
        {
            public string Domain { get; set; }
        }
    }
}
