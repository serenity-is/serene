declare namespace Serene.Northwind {
    interface CategoryRow {
        CategoryID: number;
        CategoryName: string;
        Description: string;
        Picture: number[];
    }
    namespace CategoryRow {
        const IdProperty: string;
        const NameProperty: string;
        const LocalTextPrefix: string;
        const LookupKey: string;
        namespace Fields {
            const CategoryID: "CategoryID";
            const CategoryName: "CategoryName";
            const Description: "Description";
            const Picture: "Picture";
        }
    }
}
