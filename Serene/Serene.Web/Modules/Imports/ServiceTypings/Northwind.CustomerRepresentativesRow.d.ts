declare namespace Serene.Northwind {
    interface CustomerRepresentativesRow {
        RepresentativeId: number;
        CustomerId: number;
        EmployeeId: number;
    }
    namespace CustomerRepresentativesRow {
        const IdProperty: string;
        const LocalTextPrefix: string;
        namespace Fields {
            const RepresentativeId: "RepresentativeId";
            const CustomerId: "CustomerId";
            const EmployeeId: "EmployeeId";
        }
    }
}
