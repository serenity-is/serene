declare namespace Serene.Northwind {
    interface OrderRow {
        OrderID: number;
        CustomerID: string;
        EmployeeID: number;
        OrderDate: string;
        RequiredDate: string;
        ShippedDate: string;
        ShipVia: number;
        Freight: number;
        ShipName: string;
        ShipAddress: string;
        ShipCity: string;
        ShipRegion: string;
        ShipPostalCode: string;
        ShipCountry: string;
        CustomerCompanyName: string;
        CustomerContactName: string;
        CustomerContactTitle: string;
        CustomerCity: string;
        CustomerRegion: string;
        CustomerCountry: string;
        CustomerPhone: string;
        CustomerFax: string;
        EmployeeFullName: string;
        EmployeeGender: Gender;
        ShipViaCompanyName: string;
        ShipViaPhone: string;
        ShippingState: OrderShippingState;
        DetailList: OrderDetailRow[];
    }
    namespace OrderRow {
        const IdProperty: string;
        const NameProperty: string;
        const LocalTextPrefix: string;
        const LookupKey: string;
        namespace Fields {
            const OrderID: "OrderID";
            const CustomerID: "CustomerID";
            const EmployeeID: "EmployeeID";
            const OrderDate: "OrderDate";
            const RequiredDate: "RequiredDate";
            const ShippedDate: "ShippedDate";
            const ShipVia: "ShipVia";
            const Freight: "Freight";
            const ShipName: "ShipName";
            const ShipAddress: "ShipAddress";
            const ShipCity: "ShipCity";
            const ShipRegion: "ShipRegion";
            const ShipPostalCode: "ShipPostalCode";
            const ShipCountry: "ShipCountry";
            const CustomerCompanyName: "CustomerCompanyName";
            const CustomerContactName: "CustomerContactName";
            const CustomerContactTitle: "CustomerContactTitle";
            const CustomerCity: "CustomerCity";
            const CustomerRegion: "CustomerRegion";
            const CustomerCountry: "CustomerCountry";
            const CustomerPhone: "CustomerPhone";
            const CustomerFax: "CustomerFax";
            const EmployeeFullName: "EmployeeFullName";
            const EmployeeGender: "EmployeeGender";
            const ShipViaCompanyName: "ShipViaCompanyName";
            const ShipViaPhone: "ShipViaPhone";
            const ShippingState: "ShippingState";
            const DetailList: "DetailList";
        }
    }
}
