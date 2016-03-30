namespace Serene.Northwind {
    export class EmployeeForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Employee';

    }

    export interface EmployeeForm extends Serenity.PrefixedContext {
        LastName();
        FirstName();
        Title();
        TitleOfCourtesy();
        BirthDate();
        HireDate();
        Address();
        City();
        Region();
        PostalCode();
        Country();
        HomePhone();
        Extension();
        Photo();
        Notes();
        ReportsTo();
        PhotoPath();
    }

    [['LastName', Serenity.StringEditor], ['FirstName', Serenity.StringEditor], ['Title', Serenity.StringEditor], ['TitleOfCourtesy', Serenity.StringEditor], ['BirthDate', Serenity.DateEditor], ['HireDate', Serenity.DateEditor], ['Address', Serenity.StringEditor], ['City', Serenity.StringEditor], ['Region', Serenity.StringEditor], ['PostalCode', Serenity.StringEditor], ['Country', Serenity.StringEditor], ['HomePhone', Serenity.StringEditor], ['Extension', Serenity.StringEditor], ['Photo', Serenity.StringEditor], ['Notes', Serenity.StringEditor], ['ReportsTo', Serenity.IntegerEditor], ['PhotoPath', Serenity.StringEditor]].forEach(x => EmployeeForm.prototype[<string>x[0]] = function() { return this.w(x[0], x[1]); });
}

