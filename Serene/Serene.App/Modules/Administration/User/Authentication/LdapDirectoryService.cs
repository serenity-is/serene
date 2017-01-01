#if !COREFX
using Serenity;
using Serenity.ComponentModel;
using System;
using System.DirectoryServices.Protocols;
using System.Net;

namespace Serene.Administration
{
    public class LdapDirectoryService : IDirectoryService
    {
        public DirectoryEntry Validate(string username, string password)
        {
            var config = Config.Get<Settings>();
            var directory = new LdapDirectoryIdentifier(
                config.Host,
                config.Port,
                fullyQualifiedDnsHostName: true,
                connectionless: false);

            var credential = new NetworkCredential(
                config.Username,
                config.Password);

            var ldapConnection = new LdapConnection(directory, credential)
            {
                AuthType = AuthType.Basic
            };
            try
            {
                ldapConnection.SessionOptions.ProtocolVersion = 3;

                var request = new SearchRequest(
                        config.DistinguishedName,
                        "(&(objectClass=*)(uid=" + username + "))",
                        SearchScope.Subtree,
                        new string[] { "uid", "givenName", "sn", "mail" });

                var result = (SearchResponse)ldapConnection.SendRequest(request);

                if (result.Entries.Count == 0)
                    return null;

                var item = result.Entries[0];
                try
                {
                    ldapConnection.Bind(new NetworkCredential(item.DistinguishedName, password));
                }
                catch (Exception ex)
                {
                    Log.Error("Error authenticating user", ex, this.GetType());
                    return null;
                }

                // make sure to check these attribute names match with your LDAP attributes
                var uid = item.Attributes["uid"];
                var firstName = item.Attributes["givenName"];
                var lastName = item.Attributes["sn"];
                var email = item.Attributes["mail"];

                var entry = new DirectoryEntry
                {
                    Username = uid[0] as string,
                    FirstName = uid.Count > 0 ? firstName[0] as string : null,
                    LastName = lastName.Count > 0 ? lastName[0] as string : null,
                    Email = email.Count > 0 ? email[0] as string : null
                };

                return entry;
            }
            finally
            {
                try
                {
                    ldapConnection.Dispose();
                }
                catch
                {
                }
            }
        }

        [Hidden, SettingScope("Application"), SettingKey("LDAP")]
        private class Settings
        {
            public string Host { get; set; }
            public int Port { get; set; }
            public string DistinguishedName { get; set; }
            public string Username { get; set; }
            public string Password { get; set; }
        }
    }
}
#endif