
namespace Serene.Administration
{
    using Microsoft.Extensions.Caching.Memory;
    using Serene.Administration.Repositories;
    using Serenity.Abstractions;
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;

    [DataScript("Administration.PermissionKeys", Permission = PermissionKeys.Security)]
    public class PermissionKeysDataScript : DataScript<IEnumerable<string>>
    {
        private readonly IMemoryCache cache;
        private readonly ITypeSource typeSource;

        public PermissionKeysDataScript(IMemoryCache cache, ITypeSource typeSource)
        {
            this.cache = cache ?? throw new ArgumentNullException(nameof(cache));
            this.typeSource = typeSource ?? throw new ArgumentNullException(nameof(typeSource));
        }

        protected override IEnumerable<string> GetData()
        {
            return UserPermissionRepository.ListPermissionKeys(cache, typeSource);
        }
    }
}