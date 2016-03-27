declare namespace Serene.Northwind {
    interface TerritoryRow {
        ID: number;
        TerritoryID: string;
        TerritoryDescription: string;
        RegionID: number;
        RegionDescription: string;
    }
    namespace TerritoryRow {
        const IdProperty: string;
        const NameProperty: string;
        const LocalTextPrefix: string;
        const LookupKey: string;
        namespace Fields {
            const ID: "ID";
            const TerritoryID: "TerritoryID";
            const TerritoryDescription: "TerritoryDescription";
            const RegionID: "RegionID";
            const RegionDescription: "RegionDescription";
        }
    }
}
