declare namespace Serene.Northwind {
    interface CustomerCustomerDemoRow {
        ID: number;
        CustomerID: string;
        CustomerTypeID: string;
        CustomerCompanyName: string;
        CustomerContactName: string;
        CustomerContactTitle: string;
        CustomerAddress: string;
        CustomerCity: string;
        CustomerRegion: string;
        CustomerPostalCode: string;
        CustomerCountry: string;
        CustomerPhone: string;
        CustomerFax: string;
        CustomerTypeCustomerDesc: string;
    }
    namespace CustomerCustomerDemoRow {
        const IdProperty: string;
        const NameProperty: string;
        const LocalTextPrefix: string;
        namespace Fields {
            const ID: "ID";
            const CustomerID: "CustomerID";
            const CustomerTypeID: "CustomerTypeID";
            const CustomerCompanyName: "CustomerCompanyName";
            const CustomerContactName: "CustomerContactName";
            const CustomerContactTitle: "CustomerContactTitle";
            const CustomerAddress: "CustomerAddress";
            const CustomerCity: "CustomerCity";
            const CustomerRegion: "CustomerRegion";
            const CustomerPostalCode: "CustomerPostalCode";
            const CustomerCountry: "CustomerCountry";
            const CustomerPhone: "CustomerPhone";
            const CustomerFax: "CustomerFax";
            const CustomerTypeCustomerDesc: "CustomerTypeCustomerDesc";
        }
    }
}
