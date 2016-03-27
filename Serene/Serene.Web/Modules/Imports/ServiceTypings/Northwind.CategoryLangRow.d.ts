declare namespace Serene.Northwind {
    interface CategoryLangRow {
        Id: number;
        CategoryId: number;
        LanguageId: number;
        CategoryName: string;
        Description: string;
    }
    namespace CategoryLangRow {
        const IdProperty: string;
        const NameProperty: string;
        const LocalTextPrefix: string;
        namespace Fields {
            const Id: "Id";
            const CategoryId: "CategoryId";
            const LanguageId: "LanguageId";
            const CategoryName: "CategoryName";
            const Description: "Description";
        }
    }
}
