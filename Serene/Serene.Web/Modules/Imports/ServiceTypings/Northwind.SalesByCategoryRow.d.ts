declare namespace Serene.Northwind {
    interface SalesByCategoryRow {
        CategoryId: number;
        CategoryName: string;
        ProductName: string;
        ProductSales: number;
    }
    namespace SalesByCategoryRow {
        const NameProperty: string;
        const LocalTextPrefix: string;
        namespace Fields {
            const CategoryId: "CategoryId";
            const CategoryName: "CategoryName";
            const ProductName: "ProductName";
            const ProductSales: "ProductSales";
        }
    }
}
