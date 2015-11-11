
using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Serene.Administration
{
    public partial class PermissionCheckEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene.Administration.PermissionCheckEditor";
    
        public PermissionCheckEditorAttribute()
            : base(Key)
        {
        }
    
        public Boolean ShowRevoke
        {
            get { return GetOption<Boolean>("showRevoke"); }
            set { SetOption("showRevoke", value); }
        }
    }

    public partial class PermissionModuleEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene.Administration.PermissionModuleEditor";
    
        public PermissionModuleEditorAttribute()
            : base(Key)
        {
        }
    }

    public partial class RoleCheckEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene.Administration.RoleCheckEditor";
    
        public RoleCheckEditorAttribute()
            : base(Key)
        {
        }
    }
}

namespace Serene.Common
{
    public partial class LanguageSelectionAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene.Common.LanguageSelection";
    
        public LanguageSelectionAttribute()
            : base(Key)
        {
        }
    }
}

namespace Serene.Northwind
{
    public partial class CustomerCityEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene.Northwind.CustomerCityEditor";
    
        public CustomerCityEditorAttribute()
            : base(Key)
        {
        }
    
        public String Country
        {
            get { return GetOption<String>("country"); }
            set { SetOption("country", value); }
        }
    
        public String CountryEditorID
        {
            get { return GetOption<String>("countryEditorID"); }
            set { SetOption("countryEditorID", value); }
        }
    }

    public partial class CustomerEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene.Northwind.CustomerEditor";
    
        public CustomerEditorAttribute()
            : base(Key)
        {
        }
    }

    public partial class OrderDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene.Northwind.OrderDetailsEditor";
    
        public OrderDetailsEditorAttribute()
            : base(Key)
        {
        }
    }

    public partial class OrderShipCityEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene.Northwind.OrderShipCityEditor";
    
        public OrderShipCityEditorAttribute()
            : base(Key)
        {
        }
    
        public String Country
        {
            get { return GetOption<String>("country"); }
            set { SetOption("country", value); }
        }
    
        public String CountryEditorID
        {
            get { return GetOption<String>("countryEditorID"); }
            set { SetOption("countryEditorID", value); }
        }
    }

    public partial class PhoneEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serene.Northwind.PhoneEditor";
    
        public PhoneEditorAttribute()
            : base(Key)
        {
        }
    
        public Boolean Multiple
        {
            get { return GetOption<Boolean>("multiple"); }
            set { SetOption("multiple", value); }
        }
    }
}

