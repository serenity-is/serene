declare namespace Serene.Northwind {
    interface ProductLogRow {
        ProductLogID: number;
        OperationType: Serenity.CaptureOperationType;
        ChangingUserId: number;
        ValidFrom: string;
        ValidUntil: string;
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
    }
    namespace ProductLogRow {
        const IdProperty: string;
        const LocalTextPrefix: string;
        namespace Fields {
            const ProductLogID: "ProductLogID";
            const OperationType: "OperationType";
            const ChangingUserId: "ChangingUserId";
            const ValidFrom: "ValidFrom";
            const ValidUntil: "ValidUntil";
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
        }
    }
}
