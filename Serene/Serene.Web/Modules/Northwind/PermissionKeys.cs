
namespace Serene.Northwind
{
    /// <summary>
    /// This class contains some permission key constants solely for
    /// easy access and intellisense purposes.
    /// 
    /// Please note that you don't have to add permissions here to
    /// list them in user permissions dialog. Serenity doesn't
    /// check this class at all.
    /// 
    /// To show a new permission in user/role permission dialog, just use
    /// its string key with ReadPermission / ModifyPermission / 
    /// DeletePermission / PageAuthorize / ServiceAuthorize etc. attributes 
    /// and Serenity will auto discover them at application start.
    /// 
    /// Permission tree hierarchy in dialog is determined by colons (:)
    /// in permission keys.
    /// </summary>
    public class PermissionKeys
    {
        public class Customer
        {
            public const string Delete = "Northwind:Customer:Delete";
            public const string Modify = "Northwind:Customer:Modify";
            public const string View = "Northwind:Customer:View";
        }

        public const string General = "Northwind:General";
    }
}
