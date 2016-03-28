namespace Serene.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.addAttribute(OrderShippingState, new Serenity.EnumKeyAttribute('Northwind.OrderShippingState'));
}

