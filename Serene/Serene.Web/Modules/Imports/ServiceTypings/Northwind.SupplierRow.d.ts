declare namespace Serene.Northwind {
    interface SupplierRow {
        SupplierID: number;
        CompanyName: string;
        ContactName: string;
        ContactTitle: string;
        Address: string;
        City: string;
        Region: string;
        PostalCode: string;
        Country: string;
        Phone: string;
        Fax: string;
        HomePage: string;
    }
    namespace SupplierRow {
        const IdProperty: string;
        const NameProperty: string;
        const LocalTextPrefix: string;
        const LookupKey: string;
        namespace Fields {
            const SupplierID: "SupplierID";
            const CompanyName: "CompanyName";
            const ContactName: "ContactName";
            const ContactTitle: "ContactTitle";
            const Address: "Address";
            const City: "City";
            const Region: "Region";
            const PostalCode: "PostalCode";
            const Country: "Country";
            const Phone: "Phone";
            const Fax: "Fax";
            const HomePage: "HomePage";
        }
    }
}
