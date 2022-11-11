
namespace Serene.Administration
{
    using Serenity.Abstractions;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using Serene.Administration.Repositories;
    using System;
    using System.Collections.Generic;

    [DataScript("Administration.PermissionKeys", Permission = PermissionKeys.Security)]
    public class PermissionKeysDataScript : DataScript<IEnumerable<string>>
    {
        private readonly ITwoLevelCache cache;
        private readonly ISqlConnections connections;
        private readonly ITypeSource typeSource;

        public PermissionKeysDataScript(ITwoLevelCache cache, ISqlConnections connections, ITypeSource typeSource)
        {
            GroupKey = RoleRow.Fields.GenerationKey;
            this.cache = cache ?? throw new ArgumentNullException(nameof(cache));
            this.connections = connections ?? throw new ArgumentNullException(nameof(connections));
            this.typeSource = typeSource ?? throw new ArgumentNullException(nameof(typeSource));
        }

        protected override IEnumerable<string> GetData()
        {
            return UserPermissionRepository.ListPermissionKeys(cache, connections, typeSource, includeRoles: false);
        }
    }
}