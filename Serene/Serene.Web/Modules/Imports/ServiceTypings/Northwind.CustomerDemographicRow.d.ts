declare namespace Serene.Northwind {
    interface CustomerDemographicRow {
        ID: number;
        CustomerTypeID: string;
        CustomerDesc: string;
    }
    namespace CustomerDemographicRow {
        const IdProperty: string;
        const NameProperty: string;
        const LocalTextPrefix: string;
        namespace Fields {
            const ID: "ID";
            const CustomerTypeID: "CustomerTypeID";
            const CustomerDesc: "CustomerDesc";
        }
    }
}
