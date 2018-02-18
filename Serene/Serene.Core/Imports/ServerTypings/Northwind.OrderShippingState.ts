namespace Serene.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'Serene.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}
