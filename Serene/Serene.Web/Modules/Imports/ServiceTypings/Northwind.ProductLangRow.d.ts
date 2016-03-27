declare namespace Serene.Northwind {
    interface ProductLangRow {
        Id: number;
        ProductId: number;
        LanguageId: number;
        ProductName: string;
    }
    namespace ProductLangRow {
        const IdProperty: string;
        const NameProperty: string;
        const LocalTextPrefix: string;
        namespace Fields {
            const Id: "Id";
            const ProductId: "ProductId";
            const LanguageId: "LanguageId";
            const ProductName: "ProductName";
        }
    }
}
