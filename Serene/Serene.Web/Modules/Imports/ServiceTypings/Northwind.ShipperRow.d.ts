declare namespace Serene.Northwind {
    interface ShipperRow {
        ShipperID: number;
        CompanyName: string;
        Phone: string;
    }
    namespace ShipperRow {
        const IdProperty: string;
        const NameProperty: string;
        const LocalTextPrefix: string;
        const LookupKey: string;
        namespace Fields {
            const ShipperID: "ShipperID";
            const CompanyName: "CompanyName";
            const Phone: "Phone";
        }
    }
}
