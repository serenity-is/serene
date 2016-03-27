declare namespace Serene.Northwind {
    interface ProductRow {
        ProductID: number;
        ProductName: string;
        ProductImage: string;
        Discontinued: boolean;
        SupplierID: number;
        CategoryID: number;
        QuantityPerUnit: string;
        UnitPrice: number;
        UnitsInStock: number;
        UnitsOnOrder: number;
        ReorderLevel: number;
        SupplierCompanyName: string;
        SupplierContactName: string;
        SupplierContactTitle: string;
        SupplierAddress: string;
        SupplierCity: string;
        SupplierRegion: string;
        SupplierPostalCode: string;
        SupplierCountry: string;
        SupplierPhone: string;
        SupplierFax: string;
        SupplierHomePage: string;
        CategoryName: string;
        CategoryDescription: string;
        CategoryPicture: number[];
    }
    namespace ProductRow {
        const IdProperty: string;
        const NameProperty: string;
        const LocalTextPrefix: string;
        const LookupKey: string;
        namespace Fields {
            const ProductID: "ProductID";
            const ProductName: "ProductName";
            const ProductImage: "ProductImage";
            const Discontinued: "Discontinued";
            const SupplierID: "SupplierID";
            const CategoryID: "CategoryID";
            const QuantityPerUnit: "QuantityPerUnit";
            const UnitPrice: "UnitPrice";
            const UnitsInStock: "UnitsInStock";
            const UnitsOnOrder: "UnitsOnOrder";
            const ReorderLevel: "ReorderLevel";
            const SupplierCompanyName: "SupplierCompanyName";
            const SupplierContactName: "SupplierContactName";
            const SupplierContactTitle: "SupplierContactTitle";
            const SupplierAddress: "SupplierAddress";
            const SupplierCity: "SupplierCity";
            const SupplierRegion: "SupplierRegion";
            const SupplierPostalCode: "SupplierPostalCode";
            const SupplierCountry: "SupplierCountry";
            const SupplierPhone: "SupplierPhone";
            const SupplierFax: "SupplierFax";
            const SupplierHomePage: "SupplierHomePage";
            const CategoryName: "CategoryName";
            const CategoryDescription: "CategoryDescription";
            const CategoryPicture: "CategoryPicture";
        }
    }
}
