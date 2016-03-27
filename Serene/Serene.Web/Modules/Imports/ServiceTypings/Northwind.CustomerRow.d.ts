declare namespace Serene.Northwind {
    interface CustomerRow {
        ID: number;
        CustomerID: string;
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
        NoteList: NoteRow[];
        Representatives: number[];
    }
    namespace CustomerRow {
        const IdProperty: string;
        const NameProperty: string;
        const LocalTextPrefix: string;
        const LookupKey: string;
        namespace Fields {
            const ID: "ID";
            const CustomerID: "CustomerID";
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
            const NoteList: "NoteList";
            const Representatives: "Representatives";
        }
    }
}
