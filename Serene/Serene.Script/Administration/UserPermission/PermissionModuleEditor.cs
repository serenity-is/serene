
namespace Serene.Administration
{
    using jQueryApi;
    using Serenity;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Linq;

    [Editor]
    public class PermissionModuleEditor : Select2Editor<object, string>
    {
        public PermissionModuleEditor(jQueryObject hidden)
            : base(hidden, null)
        {
            var modules = new JsDictionary<string,bool>();
            var permissions = Q.GetRemoteData<ListResponse<string>>("Administration.PermissionKeys").Entities;
            for (var i = 0; i < permissions.Count; i++)
            {
                var k = permissions[i];

                var idx1 = k.IndexOf(':');
                if (idx1 <= 0)
                    continue;

                var idx2 = k.IndexOf(':', idx1 + 1);
                if (idx2 <= 0)
                    continue;

                var module = k.Substr(0, idx1);
                modules[module] = true;
            }

            bool othersModule = false;
            foreach (var k in permissions)
            {
                var idx1 = k.IndexOf(':');
                if (idx1 < 0 && !Script.IsValue(modules[k]))
                {
                    othersModule = true;
                    break;
                }
            }

            var moduleList = new List<string>();
            moduleList.AddRange(modules.Keys);

            if (othersModule)
                moduleList.Add("Common");

            foreach (var k in moduleList)
                AddItem(k, k, k);
        }
    }
}