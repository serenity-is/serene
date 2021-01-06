namespace Serene.Northwind {
    declare namespace PermissionKeys {
        export const General = "Northwind:General";

        namespace Customer {
            export const Delete = "Northwind:Customer:Delete";
            export const Modify = "Northwind:Customer:Modify";
            export const View = "Northwind:Customer:View";
        }
    }
}
