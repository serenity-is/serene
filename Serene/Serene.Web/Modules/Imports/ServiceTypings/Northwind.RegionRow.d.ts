declare namespace Serene.Northwind {
    interface RegionRow {
        RegionID: number;
        RegionDescription: string;
    }
    namespace RegionRow {
        const IdProperty: string;
        const NameProperty: string;
        const LocalTextPrefix: string;
        const LookupKey: string;
        namespace Fields {
            const RegionID: "RegionID";
            const RegionDescription: "RegionDescription";
        }
    }
}
