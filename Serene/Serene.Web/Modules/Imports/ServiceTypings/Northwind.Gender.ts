namespace Serene.Northwind {
    export enum Gender {
        Male = 1,
        Female = 2
    }
    Serenity.Decorators.addAttribute(Gender, new Serenity.EnumKeyAttribute("Serene.Northwind.Entities.Gender"));
}

